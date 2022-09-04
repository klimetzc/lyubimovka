import React, { useEffect } from "react";

const News = () => {
  useEffect(() => {
    document.title = "Новости | Любимовка";
  }, []);
  return <div>News</div>;
};

export default News;
