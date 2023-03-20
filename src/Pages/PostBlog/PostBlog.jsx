import axios from "axios";
import React, { useContext, useState } from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { useNavigate } from "react-router";
import { Context } from "../../Context/Context";
import "./PostBlog.scss";

const PostBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);
  const userLoc = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userLoc === null) {
      navigate('/login')
      
    }else{
      const newPost = {
        username: user.username,
        title,
        description,
      };
      if (file) {
        const data = new FormData();
        const fileName = Date.now() + file.name;
        data.append("name", fileName);
        data.append("file", file);
        newPost.pic = fileName;
        try {
          await axios.post("/upload", data);
        } catch (error) {}
      }
      try {
        const res = await axios.post("/post", newPost);
        window.location.replace("/detail/" + res.data._id);
      } catch (error) {
        console.log(newPost)
      }
    }
  };
  return (
    <div className="post-blog">
      <br />
      <div className="wrap-post-blog">
        {file && (
          <div className="wrap-img">
            <img src={URL.createObjectURL(file)} alt="postImage" />
          </div>
        )}
        <form className="form-post" onSubmit={handleSubmit}>
          <div className="wrap-title">
            <label htmlFor="addFile" className="add-file">
              <MdOutlineAddCircleOutline />
            </label>
            <input
              type="text"
              placeholder="Title"
              className="input-title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <input
            style={{ display: "none" }}
            type="file"
            id="addFile"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
          <textarea
            className="input-content"
            placeholder="Write here..."
            id=""
            cols="30"
            rows="1"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
          <input type="submit" value="Publish" className="input-btn" />
        </form>
      </div>
    </div>
  );
};

export default PostBlog;
