# Руководство по разработке и коммуникации проекта "Любимовка"

## Стек, на котором будем разрабатывать:

Основа: _`React, TypeScript, Redux(Redux Toolkit), (styled-components либо же Sass(Scss))`_ Если исполбзуете Sass, берем переменные стилей из файла `variables.scc`
Плюс, возможно, более мелкие библиотеки вроде _`React Transiton Group`_ для анимаций, _`React Router`_ для роутинга между страницами и т.д.
Если доживем до бекенда, то _`express` или `Nest`_, а пока можно юзать JSON Placeholder.

Почему именно такой стек?
Во-первых, это удобно)
Во-вторых, в рамках нашей учебной программые некоторые из этих технологий не изучаются,
но они очень часто встречаются в вакансиях.

## Формат работы и средства связи

Для дефолтного общения используем нашу группу в [телеграме](https://t.me/klimetzc).

Планировать задачи будем в этом воркспейсе [Trello](https://trello.com/invite/lyubimovka41/e51e86f5b98f9e117d3da1f57462770f)

[Макет проекта в Figma](https://www.figma.com/file/zpyHTGb3aKiAbpJJoIVqQ2/lubimovka?node-id=422%3A4070)

> Так же предлагаю раз в неделю рассказывать о проделанной работе(например, в воскресенье). Даже если по проекту не было ничего не реализовано, расскажите что смотрели/читали по технологиям. Как показала практика прошлого проектного месяца многие ничего не делали. Например, у нас, 4 человека из 6 взяли на себя работу и больше ничего о них не было слышно)

## Файловая структура проекта:

- <img src="./src/assets/icons/folder.svg" alt="drawing" width="12"/> **components** -
  : Базовая папка с компонентами

- <img src="./src/assets/icons/folder.svg" alt="drawing" width="12"/> componets/UI
  : компоненты без уникальной логики, которые повторяются на нескольких страницах,напримпер кнопки [Вот эти кнопки надо сюда](https://www.figma.com/proto/zpyHTGb3aKiAbpJJoIVqQ2/lubimovka?page-id=822%3A11417&node-id=828%3A12265&viewport=11728%2C2764%2C1.1076146364212036&scaling=min-zoom&starting-point-node-id=859%3A13873&hide-ui=1)

- <img src="./src/assets/icons/folder.svg" alt="drawing" width="12"/> **hooks**
  : кастомные хуки

- <img src="./src/assets/icons/folder.svg" alt="drawing" width="12"/> **models**
  : здесь описаны типы([интерфейсы](https://metanit.com/web/typescript/3.3.php)) сущностей, с которыми будем работать(например, пропсы)

- <img src="./src/assets/icons/folder.svg" alt="drawing" width="12"/> **pages** - собранные из других компонентов страницы, которые используются в роутинге

- <img src="./src/assets/icons/folder.svg" alt="drawing" width="12"/> **store**
  : _оснонвная папка для Redux_
  : <img src="./src/assets/icons/folder.svg" alt="drawing" width="12"/> **store/reducers** - тут будут [слайсы](https://redux-toolkit.js.org/api/createslice/)

  : <img src="./src/assets/icons/folder.svg" alt="drawing" width="12"/> **store/types** - типы для редюсеров

  : **store.ts** - корневой файл `Redux`

- <img src="./src/assets/icons/folder.svg" alt="drawing" width="12"/> **utils**
  : папака с утилитами

- <img src="./src/assets/icons/folder.svg" alt="drawing" width="12"/> **assets**
  : папка для медиа, использующихся в разработке

<img src="./src/assets/icons/folder.svg" alt="drawing" width="12"/> Folder
: Folder definition term resp
: definition sequences
