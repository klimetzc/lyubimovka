import React, { useEffect } from "react";

const Support = () => {
  useEffect(() => {
    document.title = "Поддержать | Любимовка";
  }, []);
  return <div> Support </div>;
};

export default Support;
