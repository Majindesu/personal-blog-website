import Link from 'next/link'
import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import UserSignOut from './ui/UserSignOut'

const Header = async () => {
  const session = await getServerSession(authOptions);
  
  return (
    <header className='bg-gradient-to-br from-gray-800 to-gray-900 p-4'>
        <nav className='flex justify-between items-center max-w-4xl mx-auto'>
            <Link href='/' className='text-white text-2xl font-bold'>
                Blogtogether
            </Link>
            {session?.user ? (
            <ul className='flex space-x-4'>
            <li>
                <Link
                  href='/posts'
                  className='text-white hover:underline'
                >
                  My Posts
                </Link>
              </li>
              <li>
                <UserSignOut/>
              </li>
            </ul>
            ) : (
              <Link
              href='/login'
              className='text-white hover:underline'
            >
              Login
            </Link>
            )}

        </nav>
    </header>
  )
}

export default Header
