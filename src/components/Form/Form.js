import React, { useState } from "react";
import "./Form.css";

export default function From() {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);

  const sendNewsletter = async () => {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("name", name);
    console.log("email", email);
    const URL = "http://localhost:5000/newsletter";
    const data = {
      name,
      email,
    };
    const config = {
      body: JSON.stringify(data),
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
    };
    const sendData = await fetch(URL, config);

    if (!sendData.ok) {
        console.log("Verifique que los datos sean corectos");
    }else {
        const responseData = await sendData.json();
        console.log("responseData", responseData);
    }
    

    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="container">
        <h2>Subscribe to our Newsletter</h2>
        <p>
          Lorem ipsum text about why you should subscribe to our newsletter
          blabla. Lorem ipsum text about why you should subscribe to our
          newsletter blabla.
        </p>
      </div>

      <div class="container">
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          name="name"
          required
        />
        <input
          type="text"
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
          name="mail"
          required
        />
        <label></label>
      </div>

      <div class="container">
        <input type="submit" value="Subscribe" />
      </div>
    </form>
  );
}
