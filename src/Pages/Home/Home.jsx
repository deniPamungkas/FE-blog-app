import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Header, Posts, Sidebar } from '../../Components/Components'

const Home = () => {
  const [post, setPost] = useState({})
  useEffect(() => {
    const fetchPost = async()=>{
      const res = await axios.get('/post/all/posts');
      setPost(res);
    }
    fetchPost()
  }, [])
  return (
    <div>
        <Header/>
        <Posts posts = {post}/>
        <Sidebar/>
    </div>
  )
}

export default Home