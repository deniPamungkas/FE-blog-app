import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { DetailPost } from '../../Components/Components'
import './Detail.scss'

const Detail = () => {
  const [detail, setDetail] = useState({})
  const location = useLocation();
  const postId = location.pathname.split('/')[2];
  useEffect(()=>{
    const fetchPostDetail=async()=>{
      const data = await axios.get(`/post/${postId}`)
      const result = data.data
      setDetail(result)
    }
    fetchPostDetail()
  },[postId])
  return (
    <main className='detail'>
        <DetailPost detail = {detail}/>
    </main>
  )
}

export default Detail