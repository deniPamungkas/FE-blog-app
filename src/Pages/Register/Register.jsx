import React, { useContext, useState } from "react";
import axios from 'axios'
import {useNavigate } from "react-router-dom";
import sb from '../../Assets/images/bc-reg.jpg'
import './Register.scss'
import { Context } from "../../Context/Context";

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const {user} = useContext(Context)

  const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
      await axios.post('/register', {username,email,password})
      setUsername('')
      setEmail('')
      setPassword('')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main className="register">
        <img src={sb} alt="background" />
      <div className="wrap-register">
        <h1>Register</h1>
        <form className="form-register" onSubmit={handleSubmit}>
        <div className="form">
            <label htmlFor="username">Username</label>
            <input
              className="input-form"
              type="text"
              placeholder="Username"
              id="username"
              value={username}
              onChange={(e)=>{setUsername(e.target.value)}}
            />
          </div>
          <div className="form">
            <label htmlFor="email">Email</label>
            <input
              className="input-form"
              type="email"
              placeholder="Email"
              id="email"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
            />
          </div>
          <div className="form">
            <label htmlFor="password">Password</label>
            <input
              className="input-form"
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
            />
          </div>
          <input className="btn-reg" type="submit" value="Register" />
          <input className="btn" type="button" value="Login" onClick={()=>{navigate('/login')}}/>
        </form>
      </div>
    </main>
  );
};

export default Register;
