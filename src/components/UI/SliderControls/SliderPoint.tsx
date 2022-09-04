import React, { HTMLProps } from "react";
import "./SliderPoint.scss";

const SliderPoint: React.FC<HTMLProps<HTMLDivElement>> = (props) => {
  return <div className={`${props.className}`}></div>;
};

export default SliderPoint;
