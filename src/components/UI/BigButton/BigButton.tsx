import "./BigButton.scss";

type arrowDirection =
  | "Dtop"
  | "Dright"
  | "Dbottom"
  | "Dleft"
  | "DtopLeft"
  | "DtopRight"
  | "DbottomLeft"
  | "DbottomRight";

interface IBigButton {
  className?: string; // родительские класснейм
  children: React.ReactNode; // Имя кнопки
  // arrPos?: arrowPosition;
  arrDir?: arrowDirection; // Поворот фонового изображения
  borders?: string; // перечисление бордеров в строке такого типа : "top bottom left right" Каждое вхождение опционально
  fullWidth?: boolean; // Во всю ширину?
  color: "whiteBack" | "greenBack"; // цвет фона
  backImage?: "backPlus" | "backArrow" | "backOk"; // Фоновое изображение
}

const BigButton = (props: IBigButton) => {
  return (
    <button
      className={`BigButton ${props.className || ""} ${props.borders || ""} ${props.arrDir || ""} ${
        props.color
      } ${props.backImage || ""} ${props.fullWidth ? "BigButton__fullWidth" : ""}`}
    >
      {props.children}
    </button>
  );
};

export default BigButton;
