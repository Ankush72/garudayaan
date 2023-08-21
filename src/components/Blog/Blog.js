import React from 'react'
import BlogCard from './Blog/BlogCard'
import blogData from "./BlogData"


const Blog = () => {
  return (
    <div className='pt-[100px] pl-10 pr-10 pb-10 flex items-center justify-center space-x-3'>
        {
            blogData.map((item)=>{
                return <BlogCard items = {item} />
            })
        }
    </div>
  )
}

export default Blog