import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.title = "Контакты | Любимовка";
  }, []);
  return <div>Contact</div>;
};

export default Contact;
