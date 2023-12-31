import React, { useState } from "react";
import FiltersLatestArticles from "./FiltersLatestArticles";
import LatestArticlesCard from "./LatestArticlesCard";

const LatestArticles = ({ articles }) => {
  const [activeFilter, setActiveFilter] = useState("Sport");

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const filteredArticles = articles.filter((article) => {
    const lowerCaseActiveFilter = activeFilter.toLowerCase();
    const lowerCaseArticleTopic = article.topic.toLowerCase();

    switch (lowerCaseActiveFilter) {
      case "sport":
        return lowerCaseArticleTopic === "sport";
      case "fashion":
        return lowerCaseArticleTopic === "fashion";
      case "garden":
        return lowerCaseArticleTopic === "garden";
      case "food":
        return lowerCaseArticleTopic === "food";
      default:
        // For other filters, show articles that include the activeFilter in their topic
        return lowerCaseArticleTopic.includes(lowerCaseActiveFilter);
    }
  });
  return (
    <div className="mx-auto container px-4 md:px-0 py-10 space-y-6 flex flex-col">
      <div className="flex flex-col space-y-4">
        <h2 className="text-4xl font-bold">Latest Articles 🎈</h2>
        <p className="text-gray-500 text-xl font-large">
          Discover the most outstanding articles in all topics of life.
        </p>
        <FiltersLatestArticles
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {filteredArticles.slice(0, 10).map((article, index) => (
          <LatestArticlesCard article={article} key={index} />
        ))}
      </div>
    </div>
  );
};

export default LatestArticles;
