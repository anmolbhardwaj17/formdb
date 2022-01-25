import React, { useState } from 'react';

function Contact() {
  const [user, setUser] = useState({
      name:"",
      email:"",
      password:"",
  })  

  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({   ...user, [name]: value});
  }

  const postData = async (e) => {
    e.preventDefault();

    const {name, email, password} = user;
    if(name && email && password){
        const res = await fetch("https://bigthing-91227-default-rtdb.asia-southeast1.firebasedatabase.app/contactform.json", {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            name:name,
            email:email,
            password:password,
        })
    })
    if(res){
        setUser({
            name:"",
            email:"",
            password:"",
        })  
        alert("Data stored successfully")
    }
    }else{
        alert("Fill the values")
    }

    
  }

  return <div>
      <h1>This is a form</h1>
      <form method="POST">
      <div className="space">
          <label for="name">Name: </label>
          <input 
              name="name"
              type="text"
              placeholder="name"
              value={user.name}
              onChange={getUserData}
          />
      </div>
      <div className="space">
          <label for="name">Email: </label>
          <input 
              name="email"
              type="email"
              placeholder="name"
              value={user.email}
              onChange={getUserData}
          />
      </div>
      <div className="space">
          <label for="name">Password: </label>
          <input 
              name="password"
              type="password"
              placeholder="name"
              value={user.password}
              onChange={getUserData}
          />
      </div>
      <button onClick={postData}>Submit</button>
      </form>
      
  </div>;
}

export default Contact;
