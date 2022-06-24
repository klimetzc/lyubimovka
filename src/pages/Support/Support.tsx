import React, { useEffect } from "react";
import "./Support.scss";

const Support = () => {
  useEffect(() => {
    document.title = "Поддержать | Любимовка";
  }, []);
  return (
    <main className="content-donation">

      <section className="transfer-donation" aria-label="Пожертвовать">
        <div className="transfer-donation__text-wrapper">
          <h1 className="transfer-donation__title">Любимовка существует благодаря энтузиазму</h1>
          <p className="transfer-donation__paragraph">А также поддержке фондов, партнёров и пожертвований, которые
            покрывают неизбежные затраты.</p>
          <p className="transfer-donation__paragraph">Вход на все мероприятия фестиваля всегда был и будет
            бесплатным.</p>
          <p className="transfer-donation__note">Если вы выберете ежемесячное пожертвование, его можно отменить в любом
            момент</p>
        </div>
        <form className="transfer-donation__form"></form>
      </section>

      <section className="about-donations">
        <div className="about-donations__title-wrapper about-donations__title-wrapper_in-reverse">
          <img src={require("../../assets/support/support-reading.png")}
               alt="Актеры на читке"
               className="about-donations__picture about-donations__picture_position_right"
          />
          <h2 className="about-donations__title about-donations__title_position_left">На что пойдут ваши
            пожертвования</h2>
        </div>
        <ul className="about-donations__card-wrapper">
          <li className="about-donations__card">Проезд в Москву драматургов и отборщиков из других городов</li>
          <li className="about-donations__card">Проживание в Москве драматургов и отборщиков из других городов и стран
            во время фестиваля
          </li>
          <li className="about-donations__card">Зарплата администраторов и технического персонала</li>
          <li className="about-donations__card">Полиграфия (дизайн и печать постеров и открыток)</li>
          <li className="about-donations__card">Кофе, чай и печенье для участников фестиваля</li>
          <li className="about-donations__card">Фестивальный on-line блог. Фото- и видеоотчёты</li>
          <li className="about-donations__card">Канцелярские принадлежности, картриджи для принтеров, бумага для
            распечатки пьес
          </li>
          <li className="about-donations__card">Создание, поддержка и развитие сайта</li>
          <li className="about-donations__card">Открывающая и закрывающая вечеринки. Сувениры для участников и
            зрителей
          </li>
          <li className="about-donations__card">Аренда театральных площадок</li>
        </ul>
      </section>

      <section className="about-donations">
        <div className="about-donations__title-wrapper">
          <img src={require("../../assets/support/support-people-on-stage.png")}
               alt="Люди на сцене"
               className="about-donations__picture about-donations__picture_position_left"
          />
          <h2 className="about-donations__title about-donations__title_position_right">Что мы можем делать, если
            соберем достаточно средств</h2>
        </div>
        <ul className="about-donations__card-wrapper">
          <li className="about-donations__card">Система индивидуальных грантов, которые чтобы драматурги творили, не
            отвлекаясь на поиски источников дохода
          </li>
          <li className="about-donations__card">Фестивальная газета</li>
          <li className="about-donations__card">On-line база данных авторов, пьес и архив фестиваля</li>
          <li className="about-donations__card">Продвижение драматургов в международные проекты</li>
          <li className="about-donations__card">Привоз драматургов из других городов на лаборатории и показы в течение
            года
          </li>
        </ul>
      </section>

      <section className="accounting">
        <h2 className="accounting__title">
          Вся отчётность о расходовании народных денег будет всегда доступна любому интересующемуся в самом подробном виде.
            Пишите на <a className="accounting__mail-link" href="mailto:charity@lubimovka.ru">charity@lubimovka.ru</a>
        </h2>
      </section>

    </main>
  );
};

export default Support;
