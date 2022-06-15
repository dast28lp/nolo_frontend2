import React from 'react'

export default function Form(){
    const [name, setName] = useState([]);
    const [email, setEmail] = useState([]);


    const sendNewsLetter = async () => {
        
      };


      const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log('name', name);
        console.log('email', email);
        const URL = "http://localhost:5000/service/newsletter";
        const data={
            name,email
        }
        const config={
            body:JSON.stringify(data),
            method: 'POST'
            //headers:{
               // "Content-Type":"aplication/json"
           // }
        }
        const sendData = await fetch(URL, config);
        const responseData= await sendData.json()
        console.log('responseData', responseData);
        


      }



    return(
        <Form onSubmit={handleSubmit}>

            <div class="titlepage">
                <h2>Casino <br></br> <strong class="white "> Nolo</strong></h2>
            </div>

             <div class="row">
             <div class="col-sm-12">
                <input class="contactus" placeholder="Nombre" onChange={(e)=>setName(e.target.value)} type="text" name="Name"/>
            </div>
            <div class="col-sm-12">
                <input class="contactus" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} type="text" name="mail"/>
            </div>

            <div class="col-sm-12">
                <button class="send">Enviar</button>
            </div>

            </div>

        </Form>
    )
}