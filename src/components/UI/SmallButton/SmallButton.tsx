import React from "react";
import "./SmallButton.scss";
type arrowDirection =
  | "Dtop"
  | "Dright"
  | "Dbottom"
  | "Dleft"
  | "DtopLeft"
  | "DtopRight"
  | "DbottomLeft"
  | "DbottomRight";
type arrowPosition = "Pleft" | "Pright";

interface ISmallButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  borders?: string; // перечисление бордеров в строке такого типа : "top bottom left right" Каждое вхождение опционально
  fullWidth?: boolean; // Во всю ширину?
  arrPos: arrowPosition; // С какой стороны фон
  arrDirection?: arrowDirection; // Поворот фонового изображения
  backImage?: "backPlus" | "backArrow" | "backPlus"; // Фоновое изображение
  classCSS?: string;
}

const SmallButton: React.FC<ISmallButton> = ({
  fullWidth,
  arrDirection,
  borders,
  arrPos,
  backImage,
  classCSS,
  ...props
}) => {
  return (
    <button
      className={`SmallButton ${classCSS || ""} ${borders || ""} ${arrDirection || ""} ${
        arrPos || ""
      } ${backImage || ""} ${fullWidth ? "SmallButton__fullWidth" : ""}`}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default SmallButton;
