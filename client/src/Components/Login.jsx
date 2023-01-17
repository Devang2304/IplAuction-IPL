import React,{useState} from "react";
import "../styles/Login.css";
import Typewriter from "typewriter-effect";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Login({setLoginUser}) {
  // const [loginID, setloginID] = useState()
  // const [password, setPassword] = useState()
  
  const [user,setUser] = useState({
    name:"",
    password: ""
  })

  const handleChange=(e)=>{
    const {name,value}=e.target
    setUser({
      ...user,
      [name]:value
    })
  }
  const navigate =useNavigate();
  const login =()=>{
    axios.post("http://localhost:9000/login",user)
    .then(res=>{alert(res.data.message)
      setLoginUser(res.data.user);
        navigate("/dashboard",{replace:true});
    });
  }
  // const submit = () =>{
  //   window.location.href = "/dashboard"
  // }
  return (
    <div className="LandingPage">
      <div className="image-container">
        <img className='image' src="../media/logo.png" alt="" />
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
      
      <input className="input" type="text" name="name" value={user.name} onChange={handleChange} placeholder="Enter Username" required/>
      <input className="password" type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter Password" required/>
      <button onClick={login}>Submit</button>
        
      </div>
    </div>
  );
}
