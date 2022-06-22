import React, { useEffect, useState } from "react";
import SmallButton from "../../components/UI/SmallButton/SmallButton";
import "./History.scss";

const History = () => {
  const [data, setData] = useState({
    totalPlays: 756,
    playsConfirmed: 145,
    playsReviewers: 145,
    playsVoluunteers: 135,
    playsActions: 7,
    playsCities: 15,
  });

  useEffect(() => {
    document.title = "История | Любимовка";
  }, []);
  return (
    <div className="History">
      <div className="History__dragSelect">
        <div className="History__dragSelect-year">2022</div>
        <div className="History__dragSelect-year">2021</div>
        <div className="History__dragSelect-year">2020</div>
        <div className="History__dragSelect-year">2019</div>
        <div className="History__dragSelect-year">2018</div>
        <div className="History__dragSelect-year">2017</div>
        <div className="History__dragSelect-year">2016</div>
        <div className="History__dragSelect-year">2015</div>
        <div className="History__dragSelect-year">2014</div>
      </div>
      <div className="History__info">
        <div className="History__info-photo"></div>
        <div className="History__info-data">
          <div className="History__info-data_date">
            <p className="History__info-data_date-title">5-12 сентября</p>
            <p className="History__info-data_date-paragraph">
              В Москве на площадке «8/3». Читки fringe-программы фестиваля впервые прошли в Центре
              Вознесенского.
            </p>
          </div>
          <div className="History__info-data_facts">
            <div className="History__info-data_fact">
              <p className="History__info-data_fact-title">{data.totalPlays}</p>
              <p className="History__info-data_fact-text">пьес прслали на конкурс</p>
            </div>
            <div className="History__info-data_fact">
              <p className="History__info-data_fact-title">{data.playsConfirmed}</p>
              <p className="History__info-data_fact-text">пьсе прошли отбор</p>
            </div>
            <div className="History__info-data_fact">
              <p className="History__info-data_fact-title">{data.playsReviewers}</p>
              <p className="History__info-data_fact-text">отборщиков читали пьесы</p>
            </div>
            <div className="History__info-data_fact">
              <p className="History__info-data_fact-title">{data.playsVoluunteers}</p>
              <p className="History__info-data_fact-text">волонтёров работали на фестивале</p>
            </div>
            <div className="History__info-data_fact">
              <p className="History__info-data_fact-title">{data.playsActions}</p>
              <p className="History__info-data_fact-text">
                событий прошло в образовательной программе
              </p>
            </div>
            <div className="History__info-data_fact">
              <p className="History__info-data_fact-title">{data.playsCities}</p>
              <p className="History__info-data_fact-text">число городов, отгуда приехали авторы</p>
            </div>
          </div>
          <div className="History__info-links">
            <div className="History__info-links-column">
              <p className="History__info-link-title">Пьесы</p>
              <SmallButton arrPos="Pright">Шорт-лист</SmallButton>
              <SmallButton arrPos="Pright">Fringe-программа</SmallButton>
              <SmallButton arrPos="Pright">Особо отмеченные</SmallButton>
              <SmallButton arrPos="Pright">Внеконкрусная программа</SmallButton>
            </div>
            <div className="History__info-links-column">
              <p className="History__info-link-title">Дополнительно</p>
              <SmallButton arrPos="Pright">Записи в блоге</SmallButton>
              <SmallButton arrPos="Pright">Видео с фестиваля</SmallButton>
            </div>
          </div>
        </div>
      </div>
      <div className="History__main">
        <div className="History__main-cover">
          <div className="History__main-cover-image"></div>
          <div className="History__main-cover-text">
            <p className="History__main-cover-text_title">История фестиваля</p>
            <p className="History__main-cover-text_paragraph">
              Фестиваль молодой драматургии «Любимовка» был основан в 1990 году известными
              российскими драматургами и критиками - Михаилом Рощиным, Алексеем Казанцевым, Виктором
              Славкиным, Владимиром Гуркиным, Юрием Рыбаковым, Инной Громовой, Маргаритой
              Светлаковой, Марией Медведевой, и другими. Фестиваль был задуман как некоммерческий,
              независимый проект, созданный для знакомства всех заинтересованных с новыми пьесами.
            </p>
          </div>
          <div className="History__main-cover-blockquote">
            «Любимовка» родилась как лаборатория, позволявшая дебютанту не только публично показать
            свой текст, но и услышать мнения и советы профессионалов – на фестивале встречаются и
            обмениваются опытом авторы разных поколений и статусов.
          </div>
        </div>
        <div className="History__main-paragraph">
          Изначально фестиваль проводился в исторической усадьбе Станиславского «Любимовка». В 1995
          - 2000 годах в оргкомитет вошли драматурги Елена Гремина, Ольга Михайлова, Михаил Угаров,
          Елена Исаева, Ксения Драгунская, Максим Курочкин. В 2000 году директором фестиваля стал
          Александр Родионов. С 2001 года фестиваль проходит в Москве. С самого своего возникновения
          фестиваль тесно сотрудничал с журналом "Драматург", Центром Драматургии и Режиссуры под
          руководством А. Казанцева и М. Рощина, с проектом "Новая драма" и журналом «Современная
          драматургия».
        </div>
        <div className="History__main-photo-grid">
          <div className="History__main-photo-grid_photo_1"></div>
          <div className="History__main-photo-grid_photo_2"></div>
        </div>
        <div className="History__main-paragraph">
          С 2007 года «Любимовка» на постоянной основе «прописалась» в Театре.DOC. Арт-директором и
          мотором фестиваля стала Елена Ковальская, театральный критик и редактор раздела «Театр»
          журнала «Афиша», а ныне – арт-директор Театрального Центра им. Вс. Мейерхольда. Под её
          руководством и при поддержке драматурга и сценариста Александра Родионова, театрального
          критика Кристины Матвиенко, драматурга и режиссёра Михаила Угарова фестиваль обрёл новое
          дыхание и форму, которую старается поддерживать и развивать новая команда, взявшая на себя
          организацию «Любимовки» в 2013 году.
        </div>
      </div>
    </div>
  );
};

export default History;
