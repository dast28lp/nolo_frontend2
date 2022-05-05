import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

export default function Services() {
  const [serviceList, setServiceList] = useState([]);

  const services = ["tarjeta de crédito", "CDT"];

  useEffect(() => {
    console.log(`pintando componente servicios`);
    getServices();
  }, []);

  const getServices = async () => {
    const URL = "http://localhost:5000/service";
    const services = await fetch(URL);
    const servicesList_ = await services.json();
    setServiceList(servicesList_);
  };

  return (
    <div>
      <h2>Mis servicios</h2>
      <ul>
        {serviceList.map((item, perro) => (
          <li key={perro}>
            <Card image={item.image} title={item.name} description={item.description} />
          </li>
        ))}
      </ul>
    </div>
  );
}
