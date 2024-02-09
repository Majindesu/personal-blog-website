import React from 'react'

const Comments = () => {
  return (
    <div className='mt-8'>
      <h2 className='text-2xl font-bold'>Comments</h2>
        <ul>
            <li className="mb-4 bg-gray-900 p-2">
                <div className="flex items-center mb-2">
                    <div className='font-bold mr-2'>John Doe</div>
                    <div className='text-gray-100'>09-02-2001</div>
                </div>
                <p>Nice!</p>
            </li>
        </ul>
    </div>
  )
}

export default Comments