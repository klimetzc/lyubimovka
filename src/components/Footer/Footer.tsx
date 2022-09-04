import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import "./FooterWide.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content">
        <Link to="/" className="footer__logo"></Link>
        <div className="footer__address">
          <p className="footer__address-place">Площадка «8/3»</p>
          <p className="footer__address-addr">Москва, ул. Казакова, 8, стр. 3 Метро «Курская»</p>
        </div>
        <div className="footer__links">
          <Link className="footer__link" to="/">
            Любимовка
          </Link>
          <Link className="footer__link" to="/playbill">
            Афиша
          </Link>
          <Link className="footer__link" to="/library">
            Библиотека
          </Link>
          <Link className="footer__link" to="/blog">
            Блог
          </Link>
          <Link className="footer__link" to="/news">
            Новости
          </Link>
          <Link className="footer__link" to="/about">
            О фестивале
          </Link>
          <Link className="footer__link" to="*">
            Организаторы
          </Link>
          <Link className="footer__link" to="/history">
            История
          </Link>
          <Link className="footer__link" to="/contact">
            Контакты
          </Link>
          <Link className="footer__link" to="*">
            Для прессы
          </Link>
        </div>

        <div className="footer__additional-links">
          <Link className="footer__link" to="/projects">
            Все проекты
          </Link>
          <Link className="footer__link" to="*">
            Любимовка.Ещё
          </Link>
          <Link className="footer__link" to="*">
            Спектакли
          </Link>
          <Link className="footer__link" to="*">
            Сборник Любимовка.Пьесы
          </Link>
          <Link className="footer__link" to="*">
            Lark+Любимовка
          </Link>
          <Link className="footer__link" to="*">
            Практика постдраматурга
          </Link>
          <Link className="footer__link" to="*">
            Эхо Любимовки
          </Link>
        </div>

        <div className="footer__sponsors">
          <p className="footer__sponsors-title">Генеральные спонсоры</p>
          <div className="footer__sponsors-figures">
            <figure>
              <img src={require("../../assets/footer/prohorov2.png")} alt=""></img>
              <figcaption>Генеральный партнёр</figcaption>
            </figure>
            <figure>
              <img src={require("../../assets/footer/mosbrew2.png")} alt=""></img>
              <figcaption></figcaption>
            </figure>
            <figure>
              <img src={require("../../assets/footer/sbtg.png")} alt=""></img>
              <figcaption>Онлайн-трансляции</figcaption>
            </figure>
            <figure>
              <img src={require("../../assets/footer/apogovorit2.png")} alt=""></img>
              <figcaption></figcaption>
            </figure>
          </div>
        </div>
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
    </footer>
  );
};

export default Footer;
