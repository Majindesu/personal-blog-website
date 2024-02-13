import React from 'react'
import { posts } from '../data/post'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

const BlogPosts = async () => {
  const session = await getServerSession(authOptions);

  if (session?.user) {
  return (
    <div className='max-w-4xl mx-auto py-8'>
        <h1 className='text-3xl font-bold mb-4'>Welcome, {session?.user.username}</h1>
        <div className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {posts.map((post) => (
                <Link key={post.id} href={`/posts/${post.id}`} className='bg-gray-800 p-4 rounded-md shadow-md shadow-white'>
                    <h2 className='text-xl font-bold'>{post.title}</h2>
                    <p>Written by: {post.user_id}</p>
                </Link>
            ))}
        </div>
    </div>
  )
} else {
  return (
    <h1> Login to see your posts!</h1>
  )
}
}

export default BlogPosts
