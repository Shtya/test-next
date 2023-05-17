import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'

export default function index ({posts}){

const [data, setdata] = useState([])
useEffect(_=> {
    const get = async()=> {
        axios.get("https://jsonplaceholder.typicode.com/comments").then(res => setdata(res.data))
    }
    get()
},[])        

    console.log(data);
  return (
    <div>
        {
           data.map((e,index)=><div> <Link href={`/post/${e.id}`} key={index}>{e.email}</Link></div>)
        }
    </div>
  )
}

