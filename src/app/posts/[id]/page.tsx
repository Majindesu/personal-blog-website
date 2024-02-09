import Comments from '@/components/Comments'
import NewCommentForm from '@/components/NewCommentForm'
import React from 'react'

const BlogPostDetails = () => {
  return (
    <div className='max-w-4xl mx-auto py-8'>
      <h1 className='text-3xl font-bold'>post 1</h1>
      <p>Written by: John Doe</p>
      <div className='mt-4'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptatibus earum ab dolores? Quidem, voluptate reiciendis! Ducimus, neque. Repudiandae vitae dolor eius id similique maxime eaque, labore nobis aut inventore.
      </div>
      <Comments/>
      <NewCommentForm/>
    </div>
  )
}

export default BlogPostDetails
