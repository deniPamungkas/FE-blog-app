import React, { useContext, useState } from "react";
import axios from "axios";
import { RiAccountCircleLine } from "react-icons/ri";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { Context } from "../../Context/Context";
import "./Setting.scss";

const Setting = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [file, setFile] = useState(null);
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/Images/";

  const updateFunc = (e, b) => {
    if (e === "") {
      return b;
    } else {
      return e;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      id: user._id,
      username: updateFunc(username, user.username),
      email: updateFunc(email, user.email),
      password,
      status: updateFunc(status, user.status),
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      updatedUser.profilePic = fileName;
      try {
        await axios.post("/upload", data);
      } catch (error) {}
    }
    try {
      let res = await axios.put("user/updateUser/" + user._id, updatedUser);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (error) {
      dispatch({ type: "UPDATE_FAIL" });
    }
  };
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await axios.delete("user/deleteUser/" + user.id);
      window.location.replace("/login");
      dispatch({ type: "LOGOUT" });
    } catch (error) {
      console.log(error);
    }
  };
  return user ? (
    <main className="setting">
      <div className="wrap-setting">
        <div className="top">
          <h1>Update Your Account</h1>
          <button onClick={handleDelete}>
            <h5>Delete Account</h5>
          </button>
        </div>
        <div className="center">
          <div className="profile-pic">
            <h3>Profile Picture</h3>
            <div className="wrap-img">
              {user ? (
                file ? (
                  <img src={URL.createObjectURL(file)} alt="profile" />
                ) : user.profilePic ? (
                  <img src={PF + user.profilePic} alt="profile" />
                ) : (
                  <RiAccountCircleLine style={{ fontSize: "70px" }} />
                )
              ) : (
                <RiAccountCircleLine style={{ fontSize: "70px" }} />
              )}
            </div>
          </div> 
          <form className="profile-data" onSubmit={handleSubmit}>
            <label htmlFor="profil">
              <MdOutlineAddCircleOutline />
            </label>
            <input
              type="file"
              id="profil"
              style={{ display: "none" }}
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
            />
            <div className="data">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                placeholder={user.username}
                id="username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div className="data">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                placeholder={user.email}
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="data">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="data">
              <label htmlFor="status">Status</label>
              <input
                type="text"
                placeholder={user.status}
                id="status"
                value={status}
                onChange={(e) => {
                  setStatus(e.target.value);
                }}
              />
            </div>
            <input id="btn" type="submit" value="Update" />
          </form>
        </div>
      </div>
    </main>
  ) : (
    window.location.replace("/login")
  );
};

export default Setting;
