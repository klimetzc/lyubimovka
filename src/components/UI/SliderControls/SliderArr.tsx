import React from "react";
import "./SliderArr.scss";

interface ISliderArr extends React.HTMLProps<HTMLDivElement> {
  direction: "prev" | "next";
}

const SliderArr: React.FC<ISliderArr> = (props) => {
  return (
    <div className={`SliderArr ${props.className || ""} swiper-button-${props.direction}`}></div>
  );
};

export default SliderArr;
