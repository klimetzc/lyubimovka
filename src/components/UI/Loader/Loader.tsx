import React from "react";
import styled from "styled-components";
import "./Loader.scss";

interface ILoader extends React.HTMLProps<HTMLDivElement> {
  size: number; // Лоадер - квадратный. Это размер стороны в пикселях
}

const Loader: React.FC<ILoader> = (props) => {
  return <LoaderWrapper className="Loader" size={props.size}></LoaderWrapper>;
};

export default Loader;

const LoaderWrapper = styled.div<ILoader>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
`;
