"use client";
import React, { ChangeEvent, FormEvent } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";
import {postData} from "@/types/post";
import {useState} from "react";

const NewPostForm = () => {
    const [newPost, setNewPost] = useState<postData>({
        title: '',
        content: '',
    })

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => {
            e.preventDefault();
            const { name, value } = e.target;
            setNewPost({
                ...newPost,
                [name]: value,
            })
        };


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(newPost);
    };

  return (
    <form className="max-w-4xl mx-auto p-4" onSubmit={handleSubmit}>
      <div className="mb-4">
        <input
          type="text"
          className="w-full py-2 px-3 border border-gray-300 bg-gray-900 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Enter the title"
          name="title"
          value={newPost.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <ReactTextareaAutosize
          minRows={5}
          name="content"
          className="w-full py-2 px-3 border border-gray-300 bg-gray-900 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          placeholder="What's on your mind?"
          value={newPost.content}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewPostForm;
