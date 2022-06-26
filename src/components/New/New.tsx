import React, {useState} from "react";
import NewCard from "../NewCard/NewCard";
import SelectLove from "../UI/Select/SelectLove";
import "./New.scss";

const data = {
  id: 1,
  title: 'Дизайн Любимовки-2021',
  subtitle: 'Присылайте ваши варианты текстовых описаний.',
  date: '05 октября 2020',
  content: ''
}

const cardList = [
  {
    id: 1,
    title: 'Дизайн Любимовки-2021',
    subtitle: 'Присылайте ваши варианты текстовых описаний.',
    date: '05 октября 2020',
    content: ''
  },
  {
    id: 2,
    title: 'Mosbrew Brewhouse сделал свой выбор',
    subtitle: 'Грант на постановку получит пьеса «Утечка» Юлии Савиковской.',
    date: '05 октября 2020',
    content: ''
  },
  {
    id: 3,
    title: '«Я всегда пишу про странных женщин»',
    subtitle: 'Интервью с драматургом Мартой Райцес.',
    date: '05 октября 2020',
    content: ''
  },
  {
    id: 4,
    title: 'Дизайн Любимовки-2021',
    subtitle: 'Присылайте ваши варианты текстовых описаний.',
    date: '05 октября 2020',
    content: ''
  },
  {
    id: 5,
    title: 'Mosbrew Brewhouse сделал свой выбор',
    subtitle: 'Грант на постановку получит пьеса «Утечка» Юлии Савиковской.',
    date: '05 октября 2020',
    content: ''
  },
  {
    id: 6,
    title: '«Я всегда пишу про странных женщин»',
    subtitle: 'Интервью с драматургом Мартой Райцес.',
    date: '05 октября 2020',
    content: ''
  },
  {
    id: 7,
    title: 'Дизайн Любимовки-2021',
    subtitle: 'Присылайте ваши варианты текстовых описаний.',
    date: '05 октября 2020',
    content: ''
  },
  {
    id: 8,
    title: 'Mosbrew Brewhouse сделал свой выбор',
    subtitle: 'Грант на постановку получит пьеса «Утечка» Юлии Савиковской.',
    date: '05 октября 2020',
    content: ''
  },
  {
    id: 9,
    title: '«Я всегда пишу про странных женщин»',
    subtitle: 'Интервью с драматургом Мартой Райцес.',
    date: '05 октября 2020',
    content: []
  }
]

function New() {
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

  return (
   
    <div className="new">
      <div className="new__header-container">
        <h1 className="new__title">Новости</h1>
        <div className="new__date-select">
          <SelectLove
            options={selectMonth}
            defaultValue={selectMonth[5]}
            placeholder="Месяц"
            // onChange={setSelectedDateHandler}
          />
          <SelectLove
            options={selectYear}
            defaultValue={selectYear[0]}
            placeholder="Год"
            // onChange={setSelectedDateHandler}
          />
        </div>
      </div>
     <div className="new__card-container">
          {cardList.map((card) => (
            <NewCard card={card} key={card.id} />
          ))}
     </div>
    </div>
    
  )
}

export default New;