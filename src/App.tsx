import { Route, Routes, useLocation } from "react-router";
import "./App.scss";
import NavBar from "./components/Navbar/NavBar";
import Page404 from "./pages/404/404";
import Page500 from "./pages/500/500";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import History from "./pages/History/History";
import Library from "./pages/Library/Library";
import Main from "./pages/Main/Main";
import News from "./pages/News/News";
import Playbill from "./pages/Playbill/Playbill";
import Projects from "./pages/Projects/Projects";
import Support from "./pages/Support/Support";
// import { CSSTransition } from "react-transition-group";
import "./assets/fonts/fonts.css";
import Footer from "./components/Footer/Footer";
interface IRoute {
  path: string;
  name?: string;
  Component: React.ComponentType;
}
const routes: IRoute[] = [
  { path: "/", name: "Любимовка", Component: Main },
  { path: "/playbill", name: "Афиша", Component: Playbill },
  { path: "/library", name: "Библиотека", Component: Library },
  { path: "/projects", name: "Проекты", Component: Projects },
  { path: "/history", name: "История", Component: History },
  { path: "/blog", name: "Блог", Component: Blog },
  { path: "/news", name: "Новости", Component: News },
  { path: "/about", name: "О фестивале", Component: About },
  { path: "/contact", name: "Контакты", Component: Contact },
  { path: "/support", name: "Поддержка", Component: Support },
  { path: "*", Component: Page404 },
  { path: "/500", Component: Page500 },
];

function App() {
  const location = useLocation();
  console.log("LOCATION", location);
  return (
    <div className="App">
      {location.pathname !== "/*" ? <NavBar /> : ""}
      <Routes>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
      {location.pathname !== "/*" ? <Footer /> : ""}
    </div>
  );
}

export default App;
