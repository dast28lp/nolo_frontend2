import React from "react";
import "./Card.css";

export default function Card({ data }) {
  return (
    <div>
      <div className="about-box">
        <figure>
          <img src={data.image} alt={data.name} />
        </figure>
        <h3>{data.name}</h3>
        <p>{data.description}</p>
      </div>
      <a className="read_more" href="www.google.com">
        Conoce Más
      </a>
    </div>
  );
}
