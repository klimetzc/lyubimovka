import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import BigButton from "../UI/BigButton/BigButton";
import { ILink } from "./NavBar";
import "./NavBarMobile.scss";

interface INavBarMobile {
  links: ILink[];
}

const NavBarMobile: React.FC<INavBarMobile> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };
  const closeMenu = (): void => {
    setIsOpen(false);
  };
  return (
    <>
      <button
        className={`NavBarMobile__button ${isOpen ? "NavBarMobile__button-opened" : ""}`}
        onClick={toggleMenu}
      ></button>
      <div className={`NavBarMobile ${isOpen ? "NavBarMobile-opened" : ""}`}>
        {links.map((linkData) => (
          <NavLink
            key={linkData.id}
            to={linkData.link}
            className={`NavBar__link NavBarMobile__link ${
              linkData.className ? `${linkData.className} ${linkData.className}-mobile` : ""
            }`}
            onClick={closeMenu}
          >
            <div className="border borderLeft"></div>
            {linkData.title}
            <div className="border borderRight"></div>
          </NavLink>
        ))}
        <div className="NavBarMobile__buttonLinks">
          <BigButton
            color="whiteBack"
            borders="top left bottom right"
            fullWidth
            onClick={closeMenu}
          >
            Подать пьессу
          </BigButton>

          <Link to="/support" className="NavBarMobile__inherit-link">
            <BigButton color="whiteBack" borders="left bottom right" fullWidth onClick={closeMenu}>
              Поддержать
            </BigButton>
          </Link>
        </div>

        <div className="NavBarMobile__links-grid">
          <a
            href="https://youtube.com"
            target={"_blank"}
            rel="noreferrer"
            className="NavBarMobile__external-link"
          >
            <BigButton color="whiteBack" borders="top" fullWidth>
              ytube
            </BigButton>
          </a>
          <a
            href="https://facebook.com"
            target={"_blank"}
            rel="noreferrer"
            className="NavBarMobile__external-link"
          >
            <BigButton color="whiteBack" borders="top right" fullWidth>
              fb
            </BigButton>
          </a>
          <a
            href="https://instagram.com"
            target={"_blank"}
            rel="noreferrer"
            className="NavBarMobile__external-link"
          >
            <BigButton color="whiteBack" borders="top" fullWidth>
              inst
            </BigButton>
          </a>
          <a
            href="https://vk.com"
            target={"_blank"}
            rel="noreferrer"
            className="NavBarMobile__external-link"
          >
            <BigButton color="whiteBack" borders="top bottom right" fullWidth>
              vk
            </BigButton>
          </a>
          <a
            href="https://telegram.com"
            target={"_blank"}
            rel="noreferrer"
            className="NavBarMobile__external-link"
          >
            <BigButton color="whiteBack" borders="top bottom" fullWidth>
              tlgrm
            </BigButton>
          </a>
        </div>
        <div className="footer__pb">
          <div className="footer__pb-copyright">&copy; Любимовка {new Date().getFullYear()}</div>
          <a
            href="https://google.com"
            target={"_blank"}
            className="footer__pb-privacy"
            rel="noreferrer"
          >
            Политика конфиденциальности
          </a>
          <p className="footer__pb-designers">
            дизайн сайта -{" "}
            <a href="https://google.com" className="footer__link-underscored">
              shishki.collective
            </a>
          </p>
          <p className="footer__pb-developers">
            вёрстка и разработка - студенты{" "}
            <a href="https://practicum.yandex.ru/" className="footer__link-underscored">
              Яндекс.Практикума
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default NavBarMobile;
