import React from "react";
import Card from "../Card/Card";

export default function Column({ data }) {
  return (
    
    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
       {data.map((item, key) => (
          <Card data={item}/>
        ))}

    </div>
  );
}
