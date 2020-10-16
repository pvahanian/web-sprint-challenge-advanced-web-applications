import React, {useState} from "react";
import axios from 'axios';
import {useHistory} from "react-router-dom"
const initialLoginCreds = {
  username:"",
  password:""
}

const Login = () => {
  // when you have handled the token, navigate to the BubblePage route
const [loginInfoHolder,setloginInfoHolder] = useState(initialLoginCreds);
const history = useHistory();

const onSubmit =(e)=> {
  e.preventDefault()
  axios.post("http://localhost:5000/api/login",loginInfoHolder)
  .then((res) => {window.localStorage.setItem("token",res.data.payload)
  history.push("/protected")
  })
};

const handleChange = (e)=>
{
  setloginInfoHolder({
          ...loginInfoHolder,
          [e.target.name]: e.target.value
    });
}

  
  return (
    <>
  <form onSubmit={onSubmit}>
  <input 
       type="text"
       name="username"
       value={loginInfoHolder.username}
       onChange={handleChange}
      />
  <input
     type="password"
     name="password"
     value={loginInfoHolder.password}
     onChange={handleChange}
  />
  <button>Log In</button>
  
  </form>
    </>
  );
};

export default Login;
