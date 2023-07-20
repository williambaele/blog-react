import React from "react";

const ArticleCard = ({ article }) => {
  return (
    <div className="grid w-full">
      <div className="relative w-full">
        <img
          src="https://ncmaz-nextjs.vercel.app/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F2662116%2Fpexels-photo-2662116.jpeg&w=2048&q=75"
          alt="hero"
          className="rounded-t-2xl h-48 bg-cover w-full"
        />
        <p className="absolute top-4 left-4 bg-purple-200 text-purple-500 px-2 text-md rounded-lg">
          Travel
        </p>
      </div>
      <div className="rounded-b-2xl bg-white p-4 grid">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <img
              src="https://ncmaz-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.054bee42.jpg&w=256&q=75"
              alt=""
              className="rounded-full h-8"
            />
            <p className="text-gray-900 text-md font-bold">John Doe</p>
          </div>
          <p className="text-gray-300 text-sm">09/03/2023</p>
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, qui?
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;
