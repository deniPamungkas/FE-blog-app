import axios from "axios";
import React, { useContext } from "react";
import { useNavigate } from "react-router";
import sb from "../../../Assets/images/card-blog.jpg";
import sbp from "../../../Assets/images/sidebar.jpg";
import { Context } from "../../../Context/Context";
import "./DetailPost.scss";

const DetailPost = ({detail}) => {
  const PF = 'http://localhost:5000/Images/'
  const navigate = useNavigate()
  const {user} = useContext(Context);
  const tanggal = (tang)=>{
    const date = new Date(tang).toDateString()
    return (
      date
    )
  }
  const hapus = async(e)=>{
    e.preventDefault()
    try {
      await axios.delete(`/post/deletePost/${detail._id}`,{data:{username:user.username}});
      navigate('/')
    } catch (error) {
      console.log('bukan post mu')
    }
    
  }
  return (
    <div className="detail-post">
      <div className="header-det">
        <div className="left-det">
          <div className="meta-det">
            <h5>Travel</h5>
            <p>{tanggal(detail.createdAt)}</p>
          </div>
          <div className="title-det">
            <h1>
              {detail.title}
            </h1>
          </div>
          <div className="profile-det">
            <div className="profile-photo">
              <img src={sbp} alt="thumb-profile" />
            </div>
            <div className="profile-meta">
              <div>
                <h5>{detail.username}</h5>
                <p>Founder and CEO, Financial Health Networks</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right-det">
          <div className="wrap-img">
            <div className="img"></div>
            <img src={detail.pic? PF+detail.pic : sb} alt="thumb" />
          </div>
        </div>
      </div>
      <br /><br />
      <div className="content">
        <p className="cont">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eos culpa placeat quae, voluptate corrupti aliquam, dolorem natus distinctio vitae debitis eligendi? Adipisci eveniet modi, repudiandae necessitatibus quos suscipit aspernatur.
          Veritatis eum, quibusdam corporis explicabo mollitia molestias dicta asperiores aut inventore fugit dolorem modi deleniti eaque harum officia nemo perspiciatis? Provident nam ea vero asperiores, nostrum animi ut nesciunt amet!
          Porro molestias reprehenderit sed velit voluptates quisquam molestiae, deserunt deleniti, non minus amet, laborum illum odio perferendis inventore nobis illo accusantium modi minima reiciendis? At, corrupti culpa? Dolore, tempore unde!
          Autem, molestias! Sit debitis porro accusantium voluptates, libero ullam repellat temporibus rerum, minima aliquam illum aperiam amet, eum modi ratione. Reprehenderit tenetur consequuntur voluptate perspiciatis, eius officiis optio facere culpa!
          Odio ipsum, aperiam magni repellat amet quis voluptatem dolorem praesentium quasi modi non quod voluptatibus possimus laborum natus, facere minus totam repellendus quam. Perferendis doloribus, hic impedit dignissimos dolores laboriosam!
          Aperiam facere blanditiis reprehenderit saepe rerum repudiandae dicta ad quibusdam! Ex, nisi quaerat laborum, ratione non, pariatur incidunt iusto fugiat eum aspernatur maxime consectetur illum consequatur possimus assumenda hic quas!
          In quisquam enim eveniet pariatur repudiandae, molestias eum nam nisi velit numquam illo tempora harum eius sed dolor ut culpa, atque officia aperiam. Omnis aliquid, tempore odit quisquam debitis perspiciatis!
          Non nulla magnam enim unde quidem quas? Veniam velit excepturi modi ratione corrupti! Architecto, alias quas velit reprehenderit necessitatibus vel, cum omnis quae quasi maiores assumenda quisquam magnam! Ullam, distinctio!
          Distinctio dolore ducimus voluptate explicabo illum nam doloribus ullam est ipsum. Illum, quos ea maxime totam adipisci excepturi veniam, quaerat voluptatibus magnam fugit itaque? Doloribus tempora ab ad iure nostrum!
          Illo aspernatur commodi nobis quisquam recusandae error repellat adipisci maiores voluptatibus, sit non deserunt eum earum neque hic laudantium ipsam nostrum magni, qui placeat quae. Natus molestiae sed nesciunt nostrum!
        </p>
      </div>
      <div className="edit">
        <button>edit</button>
        <button onClick={hapus}>hapus</button>
      </div>
    </div>
  );
};

export default DetailPost;
