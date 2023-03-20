import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { RiAccountCircleLine } from "react-icons/ri";
import {
  MdArrowDropDown,
  MdMenu,
  MdLogout,
  MdLogin,
  MdHome,
  MdMenuBook,
  MdSettings,
  MdPermContactCalendar,
} from "react-icons/md";
import { BsArrowRightCircle } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import "./Navbar.scss";
import { Context } from "../../../Context/Context";

const PF = "http://localhost:5000/Images/";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { user, dispatch } = useContext(Context);
  const onShow = (e) => {
    e.preventDefault();
    setShow((cur) => !cur);
  };
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };
  const navigate = useNavigate();
  return (
    <section className="navbar">
      <div className="left">
        <h1 style={{ fontWeight: "bold" }}>DENI.</h1>
        <form className="search" action="submit">
          <input type="text" placeholder="Search" />
          <BiSearchAlt />
        </form>
      </div>
      <div className="center">
        <li className="navlink">
          {" "}
          <Link to={"/"}>HOME</Link>
        </li>
        <li className="navlink">
          <Link to={"/setting"}>SETTING</Link>
        </li>
        <li className="navlink">
          <a href="#contact">CONTACT</a>
        </li>
        <li className="navlink">
          <Link to={"/write"}>WRITE</Link>
        </li>
        {user && (
          <li className={`navlink`}>
            <Link to={"/register"} onClick={handleLogout}>
              LOGOUT
            </Link>
          </li>
        )}
      </div>
      <div className="right">
        <div
          className="reg"
          style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
        >
          {user ? (
            user.profilePic ? (
              <span className="profilDef">
                <img src={PF + user.profilePic} alt="" />
              </span>
            ) : (
              <RiAccountCircleLine
                style={{ fontSize: "35px", marginRight: "-3px" }}
              />
            )
          ) : (
            <RiAccountCircleLine
              style={{ fontSize: "35px", marginRight: "-3px" }}
            />
          )}
          <MdArrowDropDown />
        </div>
        <span className="ham">
          <button
            style={{
              backgroundColor: "white",
              border: "none",
              outline: "none",
            }}
            onClick={onShow}
          >
            <MdMenu style={{ fontSize: "25px" }} />
          </button>
        </span>
        <div className={`sideMenu ${show ? "show" : "hide"}`}>
          <div className="top">
            <button
              style={{
                backgroundColor: "darkslategrey",
                border: "none",
                outline: "none",
              }}
              onClick={onShow}
            >
              <BsArrowRightCircle
                style={{ fontSize: "35px", color: "white" }}
              />
            </button>
          </div>
          <div className="middle">
            <div className="wrap-profile">
              <div className="profile">
                <div className="pic">
                  {user ? (
                    user.profilePic ? (
                      <span className="profilDef mob">
                        <img src={PF + user.profilePic} alt="" />
                      </span>
                    ) : (
                      <RiAccountCircleLine
                        style={{ fontSize: "35px", marginRight: "-3px" }}
                      />
                    )
                  ) : (
                    <RiAccountCircleLine
                      style={{ fontSize: "35px", marginRight: "-3px" }}
                    />
                  )}
                </div>
                <div className="meta">
                  <div className="wrap-meta">
                    <div className="name">
                      <h2>{user ? user.username : "Your Account"}</h2>
                    </div>
                    <div className="desc">
                      <h4>{user ? user.status : "Description"}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrap-navlink">
              <div className="navlink">
                <ul>
                  <li
                    onClick={() => {
                      navigate("");
                      setShow((cur) => !cur);
                    }}
                  >
                    <MdHome style={{ fontSize: "25px" }} />
                    <span>Home</span>
                  </li>
                  <li
                    onClick={() => {
                      navigate("setting");
                      setShow((cur) => !cur);
                    }}
                  >
                    <MdSettings style={{ fontSize: "25px" }} />
                    <span>Setting</span>
                  </li>
                  <li
                    onClick={() => {
                      navigate("write");
                      setShow((cur) => !cur);
                    }}
                  >
                    <MdMenuBook style={{ fontSize: "25px" }} />
                    <span>Write</span>
                  </li>
                  <li
                    onClick={() => {
                      navigate("contact");
                      setShow((cur) => !cur);
                    }}
                  >
                    <MdPermContactCalendar style={{ fontSize: "25px" }} />
                    <span>Contact</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="navlink">
              <ul>
                {user && (
                  <li
                    onClick={() => {
                      setShow((cur) => !cur);
                      dispatch({ type: "LOGOUT" });
                      navigate("/login");
                    }}
                  >
                    <MdLogout style={{ fontSize: "25px" }} />
                    <span>Logout</span>
                  </li>
                )}
                {user == null && (
                  <div>
                    <li
                      onClick={() => {
                        navigate("login");
                        setShow((cur) => !cur);
                      }}
                    >
                      <MdLogin style={{ fontSize: "25px" }} />
                      <span>Login</span>
                    </li>

                    <li
                      onClick={() => {
                        navigate("register");
                        setShow((cur) => !cur);
                      }}
                    >
                      <BiUserCircle style={{ fontSize: "25px" }} />
                      <span>Register</span>
                    </li>
                  </div>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
