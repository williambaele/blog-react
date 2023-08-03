import React, { useEffect, useState } from "react";

const UserPosts = (user, articles) => {
  const [userArticles, setUserArticles] = useState(null);

  //RETRIEVE USER'S ARTCILES ONLY
  useEffect(() => {
    // RETRIEVE USER'S ARTICLES ONLY
    const filteredArticles = articles.filter(
      (article) => article.user === user._id
    );
    setUserArticles(filteredArticles);
  }, [user, articles]);
  return <div></div>;
};

export default UserPosts;
