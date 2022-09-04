import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "О фестивале | Любимовка";
  }, []);
  return <div>About</div>;
};

export default About;
