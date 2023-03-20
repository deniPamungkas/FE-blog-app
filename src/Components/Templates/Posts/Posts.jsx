import React from "react";
import { CardPost } from "../../Components";
import "./Posts.scss";

const Posts = ({posts}) => {
  return (
    <div className="posts">
      {
      posts.data?.map(result => {
        return (
        <CardPost key={result._id} post = {result}/>
        );
      })
      }
    </div>
  );
};

export default Posts;
