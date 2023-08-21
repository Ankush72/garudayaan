import React from "react";

const BlogCard = ({items}) => {
  return (
    <div className="w-[300px] h-[300px] overflow-hidden shadow-xl rounded">
      <div className="bg-gray p-2">
            <h1 className="font-semibold text-lg">{items.title}</h1>
            <p className="font-normal text-sm">{items.description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
