import "./NavBar.scss";
import { NavLink } from "react-router-dom";
import { ILink } from "./NavBar";
import NavSocials from "./NavSocials";

interface INavBarDesktop {
  links: ILink[];
}

const NavBarDesktop: React.FC<INavBarDesktop> = ({ links }) => {
  return (
    <nav className="NavBar">
      {links.map((item) => {
        return (
          <NavLink key={item.id} to={item.link} className={`NavBar__link ${item.className}`}>
            <div className="border borderLeft"></div>
            {item.title}
            <div className="border borderRight"></div>
          </NavLink>
        );
      })}
      <NavSocials />
      <NavLink to={"support"} className={`NavBar__link`}>
        <div className="border borderLeft"></div>
        +Поддержать
        <div className="border borderRight"></div>
      </NavLink>
    </nav>
  );
};

export default NavBarDesktop;
