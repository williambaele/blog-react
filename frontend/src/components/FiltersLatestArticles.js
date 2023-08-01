import React, { useState } from "react";

const FiltersLatestArticles = () => {
  const topics = [
    {
      name: "Sport",
    },
    {
      name: "Food",
    },
    {
      name: "Travel",
    },
    {
      name: "Fashion",
    },
  ];

  const [activeFilter, setActiveFilter] = useState("Sport");

  const handleFilterClick = (key) => {
    setActiveFilter(key);
  };
  return (
    <div className="flex justify-between">
      <div className="flex gap-4">
        {topics.map((topic) => (
          <p
            key={topic.name}
            className={`px-6 py-1 rounded-2xl text-lg cursor-pointer text-gray-500 hover:text-gray-600 hover:bg-gray-300 ${
              activeFilter === topic.name ? "bg-gray-900 text-white" : ""
            }`}
            onClick={() => handleFilterClick(topic.name)}
          >
            {topic.name}
          </p>
        ))}
      </div>
      <div className="px-6 py-1 text-lg cursor-pointer flex justify-center items-center gap-2 bg-white rounded-2xl">
        <p className="text-lg">View all</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrow-right"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
          />
        </svg>
      </div>
    </div>
  );
};

export default FiltersLatestArticles;
