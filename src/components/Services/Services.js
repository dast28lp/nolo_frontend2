import React, { useEffect, useState } from "react";
import Row from "../Row/Row";


export default function Services() {
  const [serviceList, setServiceList] = useState([]);

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
    <div id="about" className="about">
    <div className="container">
       <div className="row">
          <div className="col-md-12">
             <div className="titlepage">
                <h2>Servicios</h2>
                <p>Conoce nuestros principales servicios diseñados y pensados para nuestros clientes </p>
             </div>
          </div>
       </div>
        <Row data={serviceList}/>
    </div>
 </div>
  );
}
