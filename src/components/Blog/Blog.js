import React from 'react';
import blog from './blog.json'
import './Blog.scss'

const Blog = () => {

  return (
    <section className="Blog text-light">
      <div className='bg-purple bg-opacity-10 border-opacity-25 border border-3 border-purple mx-3 mt-3'>
        <h1 className='ms-3 mt-2'>Blog - Work in Progress</h1>
        <p className='fs-5 text-light text-opacity-75 ms-3 mt-2 mb-2'>Here's a sample blog</p>
      </div>
      <ul>
        {blog.map((post, index) => (
        <li key={index} className='border border-3 ps-4 pe-3 pt-3 mx-3 my-3 border-purple bg-purple bg-opacity-10 border-opacity-25'>
          <h3>{post.title}</h3>
          <h6 className='text-light text-opacity-50'>{post.date}</h6>
          <p className='fs-5 text-light text-opacity-75'>{post.post}</p>
        </li>
      ))}
    </ul>
    </section>
  );
};

export default Blog;
