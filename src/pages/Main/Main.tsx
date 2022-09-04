import React, { useEffect } from "react";

const Main = () => {
  useEffect(() => {
    document.title = "Любимовка";
  }, []);
  return <div>Main</div>;
};

export default Main;
