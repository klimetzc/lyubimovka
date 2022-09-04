import React, { useEffect } from "react";

const Playbill = () => {
  useEffect(() => {
    document.title = "Афиша | Любимовка";
  }, []);
  return <div>Playbill</div>;
};

export default Playbill;
