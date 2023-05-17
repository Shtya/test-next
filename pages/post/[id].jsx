import React, { useEffect } from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'

import axios from 'axios'

const GetIndex = () => {
  const router = useRouter()
    const [data ,setdata] = useState([])
      
    useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/comments/${router.query.id}`).then(res => setdata(res.data))
    }, [])
    



  return (
    <div>
    {
      <>
        <h1 >{data.id}</h1>
        <h2 >{data.name}</h2>
        <h3 >{data.email}</h3>
     </>
    }
    </div>
  )
}

export default GetIndex