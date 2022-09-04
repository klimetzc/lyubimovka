import React, { useEffect } from "react";

const Page500 = () => {
  useEffect(() => {
    document.title = "500 | Любимовка";
  }, []);
  return <div>Page</div>;
};

export default Page500;
