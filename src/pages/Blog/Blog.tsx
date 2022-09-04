import React, { useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard/BlogCard";
import "./Blog.scss";
import cardData from "../../components/BlogCard/cardData.js";
import SelectLove from "../../components/UI/Select/SelectLove";
const asteriskPath = require("../../assets/icons/asterisk.svg").default;

const Blog = () => {
  // Переменная состояния селектора даты
  const [selectedDate, setSelectedDate] = useState({
    month: "5",
    year: "2022",
  });
  // Опции выбора даты
  const selectMonth = [
    { month: "0", label: "Январь" },
    { month: "1", label: "Февраль" },
    { month: "2", label: "Март" },
    { month: "3", label: "Апрель" },
    { month: "4", label: "Май" },
    { month: "5", label: "Июнь" },
    { month: "6", label: "Июль" },
    { month: "7", label: "Август" },
    { month: "8", label: "Сентябрь" },
    { month: "9", label: "Октябрь" },
    { month: "10", label: "Ноябрь" },
    { month: "11", label: "Декабрь" },
  ];

  const selectYear = [{ year: "2022", label: "2022" }];
  // Обработчик выбора даты
  function setSelectedDateHandler(evt: any) {
    setSelectedDate({ ...selectedDate, ...evt });
  }
  // Обновление заголовка при загрузке страницы
  useEffect(() => {
    document.title = "Блог | Любимовка";
  }, []);
  // Фильтрация массива карточек по дате
  const filteredCardList = cardData.filter(
    (cardData) =>
      cardData.creationDate.month === selectedDate.month &&
      cardData.creationDate.year === selectedDate.year
  );

  return (
    <div className="blog">
      <div className="blog__header-container">
        <div className="notice">
          <p className="notice__text">
            Журналисты, театроведы, критики, искусствоведы и студенты профильных вузов ведут журнал
            фестиваля Любимовка под руководством Натальи Дубашинской и Полины Пхор.
          </p>
          <img className="notice__asterisk" src={asteriskPath} alt="Примечание" />
          <p className="notice__contact">
            Если вы хотите стать автором, пишите на{" "}
            <a className="notice__link" href="mailto:critics@lubimovka.ru">
              critics@lubimovka.ru
            </a>
          </p>
        </div>
        <h1 className="blog__title">Блог Любимовки</h1>
        <div className="blog__date-select">
          <SelectLove
            options={selectMonth}
            defaultValue={selectMonth[5]}
            placeholder="Месяц"
            onChange={setSelectedDateHandler}
          />
          <SelectLove
            options={selectYear}
            defaultValue={selectYear[0]}
            placeholder="Год"
            onChange={setSelectedDateHandler}
          />
        </div>
      </div>
      {filteredCardList.length === 0 ? (
        <p className="notice__text">Нет статей на выбранную дату</p>
      ) : (
        <div className="blog__card-container">
          {filteredCardList.map((cardData) => (
            <BlogCard {...cardData} key={cardData.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
