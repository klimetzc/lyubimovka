import React, { useEffect, useState } from "react";
import "./NavBar.scss";
import NavBarDesktop from "./NavBarDesktop";
import NavBarMobile from "./NavBarMobile";

// import logoSrc from "../../assets/love.svg";
export interface ILink {
  link: string;
  className: string;
  title: string;
  id: number;
}

const links: ILink[] = [
  { link: "/", className: "logoLink", title: "", id: 0 },
  { link: "playbill", className: "", title: "Афиша", id: 1 },
  { link: "library", className: "", title: "Библиотека", id: 2 },
  { link: "projects", className: "", title: "Проекты", id: 3 },
  { link: "history", className: "", title: "История", id: 4 },
  { link: "blog", className: "", title: "Блог", id: 5 },
  { link: "about", className: "", title: "О фестивале", id: 6 },
  { link: "contact", className: "", title: "Контакты", id: 7 },
  // { link: "support", className: "", title: "+Поддержать", id: 8 },
];

const NavBar: React.FC = () => {
  const [matchScreen, setMatchScreen] = useState(window.matchMedia("(min-width: 700px)").matches);
  const resizeHandler = (e: any): void => {
    setMatchScreen(e.matches);
  };
  useEffect(() => {
    window.matchMedia("(min-width: 700px)").addEventListener("change", resizeHandler);
  }, [matchScreen]);
  return matchScreen ? <NavBarDesktop links={links} /> : <NavBarMobile links={links} />;
};

export default NavBar;
