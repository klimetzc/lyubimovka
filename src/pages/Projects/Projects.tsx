import React, { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    document.title = "Проекты | Любимовка";
  }, []);
  return <div>Projects</div>;
};

export default Projects;
