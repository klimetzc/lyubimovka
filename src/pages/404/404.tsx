import React, { useEffect } from "react";
import SmallButton from "../../components/UI/SmallButton/SmallButton";
import BigButton from "../../components/UI/BigButton/BigButton";
import SliderArr from "../../components/UI/SliderControls/SliderArr";
import SliderPoint from "../../components/UI/SliderControls/SliderPoint";
import Loader from "../../components/UI/Loader/Loader";
import SelectLove from "../../components/UI/Select/SelectLove";
import InputLove from "../../components/UI/Input/InputLove";
import "./404.scss";

const selectOptions = [
  { value: "0", label: "Январь" },
  { value: "1", label: "Февраль" },
  { value: "2", label: "Март" },
  { value: "3", label: "Апрель" },
  { value: "4", label: "Май" },
  { value: "5", label: "Июнь" },
  { value: "6", label: "Июль" },
  { value: "7", label: "Август" },
  { value: "8", label: "Сентябрь" },
  { value: "9", label: "Октябрь" },
  { value: "10", label: "Ноябрь" },
  { value: "11", label: "Декабрь" },
];

const multichoice = [
  { value: "1", label: "Виктор" },
  { value: "2", label: "Мария" },
  { value: "3", label: "Дмитрий" },
  { value: "4", label: "Влада" },
  { value: "5", label: "Олег" },
  { value: "6", label: "Дарья" },
];

const Page404 = () => {
  useEffect(() => {
    document.title = "404 | Любимовка";
  }, []);

  return (
    <div className="page404">
      <span style={{ color: "red", fontWeight: "bold" }}>--LOADER--</span>
      <Loader size={50} />
      <span style={{ color: "red", fontWeight: "bold" }}>--SMALL BUTTONS--</span>
      <a href="https://google.com" target={"_blank"} rel="noreferrer">
        <SmallButton borders="left bottom" arrPos="Pleft" type="button">
          Link to Google
        </SmallButton>
      </a>
      <SmallButton
        borders="top right"
        arrDirection="Dleft"
        arrPos="Pright"
        backImage="backPlus"
        type="button"
        onClick={() => {
          console.log("hello");
        }}
      >
        Загрузить картинку
      </SmallButton>
      <SmallButton borders="bottom left" arrDirection="Dbottom" arrPos="Pright" type="button">
        Показать ещё
      </SmallButton>
      <SmallButton borders="top right" arrDirection="Dleft" arrPos="Pleft" type="button">
        Все фестивали
      </SmallButton>
      <SmallButton
        borders="top bottom"
        arrPos="Pright"
        arrDirection="Dright"
        type="button"
        fullWidth
      >
        Кнопка во всю ширину
      </SmallButton>
      <span style={{ color: "red", fontWeight: "bold" }}>--BIG BUTTONS--</span>
      <BigButton borders="bottom left right" color="greenBack" arrDir="DtopLeft">
        БОЛЬШАЯ КНОПКА такая длинная что больше минимальной ширины
      </BigButton>
      <BigButton borders="bottom left right top" color="whiteBack" arrDir="DtopLeft" fullWidth>
        full width
      </BigButton>
      <BigButton borders="top right" color="whiteBack" arrDir="DtopRight">
        Купить
      </BigButton>
      <BigButton borders="top bottom right left" color="whiteBack" backImage="backOk">
        Отправлено
      </BigButton>
      <span style={{ color: "red", fontWeight: "bold" }}>--FOR SLIDER--</span>
      <SliderArr direction="prev" />
      <SliderArr direction="next" />
      <SliderPoint className="SliderPoint swiper-pagination-bullet" />
      <SliderPoint className="SliderPoint swiper-pagination-bullet swiper-pagination-bullet-active" />

      <form
        action=""
        style={{
          width: "400px",
          border: "1px solid black",
          borderRadius: "5px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <span style={{ color: "red", fontWeight: "bold" }}>--SELECT & MULTISELECT--</span>
        Одиочный выбор:
        <SelectLove options={selectOptions} placeholder="Месяц" />
        Множественный выбор:
        <SelectLove options={multichoice} placeholder="Выберите актёров" isMulti />
        <span style={{ color: "red", fontWeight: "bold" }}>--TEXT INPUTS--</span>
        <InputLove type="url" placeholder="Введите url" />
        <InputLove type="email" placeholder="Введите e-mail" required />
        <InputLove type="phone" placeholder="Введите телефон" />
        <InputLove type="text" placeholder="Введите сообщение" textarea />
        {/* <button type="submit">post</button> */}
        <SmallButton borders="left right bottom" arrPos="Pright" type="submit">
          Отправить
        </SmallButton>
      </form>
      <div className="rotated-wrapper">
        <div className="wrapper-spinner">
          <div className="wrapper-spinner__image"></div>
          <div className="wrapper-spinner__image"></div>
          <div className="wrapper-spinner__image"></div>
          <div className="wrapper-spinner__image"></div>
          <div className="wrapper-spinner__image"></div>
          <div className="wrapper-spinner__image"></div>
          <div className="wrapper-spinner__image"></div>
          <div className="wrapper-spinner__image"></div>
          <div className="wrapper-spinner__image"></div>
          <div className="wrapper-spinner__image"></div>
          <div className="wrapper-spinner__image"></div>
          <div className="wrapper-spinner__image"></div>
          <div className="wrapper-spinner__image"></div>
          <div className="wrapper-spinner__image"></div>
          <div className="wrapper-spinner__image"></div>
          <div className="wrapper-spinner__image"></div>
          <div className="wrapper-spinner__image"></div>
          <div className="wrapper-spinner__image"></div>
          <div className="wrapper-spinner__image"></div>
          <div className="wrapper-spinner__image"></div>
        </div>
      </div>
      <div className="rotated-wrapper deg10">
        <div className="wrapper-spinner">
          <div className="wrapper-spinner__image"></div>
          <div className="wrapper-spinner__image"></div>
          <div className="wrapper-spinner__image"></div>
          <div className="wrapper-spinner__image"></div>
          <div className="wrapper-spinner__image"></div>
          <div className="wrapper-spinner__image"></div>
          <div className="wrapper-spinner__image"></div>
          <div className="wrapper-spinner__image"></div>
          <div className="wrapper-spinner__image"></div>
          <div className="wrapper-spinner__image"></div>
          <div className="wrapper-spinner__image"></div>
          <div className="wrapper-spinner__image"></div>
          <div className="wrapper-spinner__image"></div>
          <div className="wrapper-spinner__image"></div>
          <div className="wrapper-spinner__image"></div>
          <div className="wrapper-spinner__image"></div>
          <div className="wrapper-spinner__image"></div>
          <div className="wrapper-spinner__image"></div>
          <div className="wrapper-spinner__image"></div>
          <div className="wrapper-spinner__image"></div>
        </div>
      </div>
    </div>
  );
};

export default Page404;
