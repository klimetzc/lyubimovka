import React, { ButtonHTMLAttributes } from "react";
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

interface IBigButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  arrDir?: arrowDirection; // Поворот фонового изображения
  borders?: string; // перечисление бордеров в строке такого типа : "top bottom left right" Каждое вхождение опционально
  fullWidth?: boolean; // Во всю ширину?
  color: "whiteBack" | "greenBack"; // цвет фона
  backImage?: "backPlus" | "backArrow" | "backOk"; // Фоновое изображение
}

const BigButton: React.FC<IBigButton> = ({
  arrDir,
  borders,
  fullWidth,
  color,
  backImage,
  ...props
}) => {
  return (
    <button
      className={`BigButton ${props.className || ""} ${borders || ""} ${arrDir || ""} ${color} ${
        backImage || ""
      } ${fullWidth ? "BigButton__fullWidth" : ""}`}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default BigButton;
