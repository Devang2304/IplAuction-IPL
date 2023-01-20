import React from "react";
import "../styles/Login.css";
import Typewriter from "typewriter-effect";

const submit = () =>{
  window.location.href = "/"
}

export default function Login() {
  return (
    <div className="LandingPage">
      <div className="image-container">
        <img className='image'src={require("../media/logo.png")} alt="" />
      </div>
      <div>
        <span className="Name">
          {" "}
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("IPL AUCTION 2023").pauseFor(1000).deleteAll().typeString("WELCOMES YOU").start().pauseFor(500).deleteAll();
            }} options={{loop:true}}
          />
        </span>
      </div>
      <div className="LoginContainer">
      
        <input className="input" placeholder="Enter your Token Number" />
          <button onClick={submit}>Submit</button>
        
      </div>
    </div>
  );
}
