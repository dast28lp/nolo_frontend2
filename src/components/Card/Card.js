import React from "react";
import "./Card.css";

export default function Card({ image, title, description }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
