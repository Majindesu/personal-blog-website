import { NextResponse } from "next/server";
import { hash } from 'bcrypt';
import { db } from '@/lib/db'
import * as z from 'zod';

//Input Validation Schema

const userSchema = z
  .object({
    username: z.string().min(1, 'Username is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have than 8 characters'),
  });

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, username, password } = userSchema.parse(body);

        const checkExistingUserEmail = await db.user.findUnique({
            where: {email: email}
        });
        if(checkExistingUserEmail) {
            return NextResponse.json({ user: null, message: "This E-mail had already been used to create an account."}, 
            {status:409} )
        }
        const checkExistingUsername = await db.user.findUnique({
            where: {username: username}
        });
        if(checkExistingUsername) {
            return NextResponse.json({ user: null, message: "This username already exists."}, 
            {status:409} )
        }
        
        const hashedPassword = await hash(password, 10);
        const newUser = await db.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
            }
        })
        const { password: newUserPassword, ...rest } = newUser;

        return NextResponse.json({user: rest, message: "User creation success!"}, {status: 201});
    } catch (error) {
        return NextResponse.json({ message: "an Error Occured." }, {status: 500})
    }
}