import React from "react";

const ArticleBody = ({ article, userArticle }) => {
  return (
    <div className="grid gap-4 w-1/2 mx-auto">
      <p className="w-fit top-4 left-4 bg-purple-200 text-purple-500 px-2 text-xl rounded-lg">
        Travel
      </p>
      <h1 className="text-gray-900 font-bold text-4xl border-b border-gray-300 pb-4">
        Trending web & landing page designs in 2023
      </h1>
      <div className="grid-cols-2 grid">
        <div className="flex items-center gap-4">
          <img
            src="https://ncmaz-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.054bee42.jpg&w=256&q=75"
            alt=""
            className="rounded-full h-8"
          />
          <p className="text-gray-900 text-lg font-bold">John Doe</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleBody;
