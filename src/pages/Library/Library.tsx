import React, { useEffect } from "react";

const Library = () => {
  useEffect(() => {
    document.title = "Библиотека | Любимовка";
  }, []);
  return <div>Library</div>;
};

export default Library;
