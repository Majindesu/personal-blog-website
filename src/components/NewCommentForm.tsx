'use client'
import React, { ChangeEvent, useState } from "react";

const NewCommentForm = () => {
    const [newComment, setNewComment] = useState<string>('')
    const handleCommentChange = (e:ChangeEvent<HTMLInputElement>) => {
        setNewComment(e.target.value);
    };
    const handleSubmitComment = () => {
        console.log(newComment)
    }
    return (
    <div className="mt-4">
      <label
        htmlFor="comment"
        className="block text-gray-200 text-sm font-bold mb-2"
      >
        Add Comment
      </label>
        <input
        value={newComment}
        onChange={handleCommentChange}
        type='text'
        className="w-full py-2 px-3 border bg-gray-900 border-gray-300 rounded-md focus:ring focus:border-blue-300"
        name='comment'/>
        <button
        onClick={handleSubmitComment}>Submit Comment</button>
    </div>
  );
};

export default NewCommentForm;
