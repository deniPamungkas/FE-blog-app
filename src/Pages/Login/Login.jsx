import React, { useContext, useRef } from "react";
import sb from "../../Assets/images/bc-login.jpg";
import { Context } from "../../Context/Context";
import axios from "axios";
import "./Login.scss";
import { useNavigate } from "react-router";

const Login = () => {
  const {user, dispatch, isFetching } = useContext(Context);
  const userRef = useRef();
  const passRef = useRef();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type:"LOGIN_START"})
    try {
      const res = await axios.post('/login', {
        username: userRef.current.value,
        password: passRef.current.value,
      });
      dispatch({type:"LOGIN_SUCCESS",payload:res.data})
      navigate('/')
    } catch (error) {
      dispatch({type:"LOGIN_FAIL"})
    }
  };

  return (
    <main className="login">
      <img src={sb} alt="background" />
      <div className="wrap-login">
        <h1>Login</h1>
        <form className="form-login" onSubmit={handleSubmit}>
          <div className="form">
            <label htmlFor="username">Username</label>
            <input
              className="input-form"
              type="username"
              placeholder="Username"
              id="username"
              ref={userRef}
            />
          </div>
          <div className="form">
            <label htmlFor="password">Password</label>
            <input
              className="input-form"
              type="password"
              id="password"
              placeholder="Password"
              ref={passRef}
            />
          </div>
          <input className="btn" type="submit" value="Login" disabled={isFetching}/>
          <input className="btn-reg" type="button" value="Register" onClick={()=>{navigate('/register')}}/>
        </form>
      </div>
    </main>
  );
};

export default Login;
