import React from "react";
import Column from "../Column/Column";

export default function Row({ data }) {

  let mitad = data.length / 2;

  let mitad1 = data.slice(0, mitad);
  let mitad2 = data.slice(mitad);

  return (  


    <div className="row card-fix">
          <Column data={mitad1}/>
          <Column data={mitad2}/>
       </div>

    
    // <div classNameName="row">
    //   <Column data={mitad1} />
    //   <Column data={mitad2} />
      
    // </div>
  );
}