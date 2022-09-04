import React from "react";
import "./BlogCard.scss";

interface ICardData {
  id: number;
  isWide: boolean;
  size?: string;
  imgPath: string;
  author: string;
  title: string;
  description: string;
  creationDate: object,
}

const BlogCard = ({
  isWide,
  size,
  imgPath,
  author,
  title,
  description,
}: ICardData) => {
  return (
    <div
      className={`card ${
        !isWide ? `card-narrow card-narrow-${size}` : "card-wide"
      }`}
    >
      <div className={`card-${!isWide ? "narrow" : "wide"}__img-comtainer`}>
        <img
          className={`card-${!isWide ? "narrow" : "wide"}__img`}
          src={imgPath}
          alt={`Фотография ${description}`}
        />
      </div>
      <p className={`card-${!isWide ? "narrow" : "wide"}__author`}>{author}</p>
      <h2 className={`card-${!isWide ? "narrow" : "wide"}__title`}>{title}</h2>
      <p className={`card-${!isWide ? "narrow" : "wide"}__description`}>
        {description}
      </p>
    </div>
  );
};

export default BlogCard;
