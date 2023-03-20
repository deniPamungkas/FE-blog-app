import React from "react";
import sb from '../../../Assets/images/sidebar.jpg'
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <span className="title">
        <h3>About Me</h3>
      </span>
      <br/>
      <img src={sb} alt="sidebar-profile" />
      <span className="desc">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla beatae
          itaque ducimus repellat vero, eos officiis dolorum. Esse, deleniti
          perferendis in enim laboriosam voluptate, soluta doloremque facere
          assumenda ipsam id?
        </p>
      </span>
      <br />
      <div className="categories"><h4>Categories</h4></div>
      <div className="cat-items">
        <li className="cat">Tech</li>
        <li className="cat">Cinema</li>
        <li className="cat">Travel</li>
        <li className="cat">Food</li>
        <li className="cat">Life</li>
        <li className="cat">Sport</li>
      </div>
      <br />
      <div className="follow"><h4>Follow Me</h4></div>
    </section>
  );
};

export default Sidebar;
