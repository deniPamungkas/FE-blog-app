import React from "react";
import cb from '../../../Assets/images/card-blog.jpg'
import { Link } from "react-router-dom";
import "./CardPost.scss";

const CardPost = ({post}) => {
  const PF = 'http://localhost:5000/Images/'
  return (
    <div id={post._id} className="card-post">
      <div className="left">
        <img src={post.pic? PF+post.pic : cb} alt="cardBlog" />
      </div>
      <div className="right">
        <div className="wrap-right">
        <h6>
          TRAVEL
        </h6>
        <br />
        <Link to={`/detail/${post._id}`} style={{textDecoration:"none"}}>
          <h3 style={{fontFamily: 'lora',color:"black"}}>{post.title}</h3>
        </Link>
        <span>______</span>
        <br /><br />
        <p className="desc">{post.description}
        </p>
        <span>^</span>
        </div>
      </div>
    </div>
  );
};

export default CardPost;
