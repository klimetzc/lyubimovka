import React, { useEffect } from "react";
import New from "../../components/New/New";

const News = () => {
  useEffect(() => {
    document.title = "Новости | Любимовка";
  }, []);
  return (
    <div>
      <New />
    </div>);
};

export default News;
