import React from "react";
import "./NewCard.scss";



function NewCard(props) {
  console.log(props.card)
  return (
    <div className="card-artikle">  
      <div className="card-artikle__container-title">
        <h2 className="card-artikle__title">{props.card.title}</h2>
        <p className="card-artikle__date">{props.card.date}</p>
      </div>
      <p className="card-artikle__subtitle">{props.card.subtitle}</p>
    </div>
  )
}

export default NewCard;