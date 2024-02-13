'use client';

import { signOut } from "next-auth/react";
import Link from "next/link";

const UserSignOut = () => {
  return (
    <Link
    onClick={() => signOut({
        redirect: true,
        callbackUrl: `${window.location.origin}/login`
    })}
    href='/'
    className='text-white hover:underline'
  >
    Logout
  </Link>
  )
}

export default UserSignOut
