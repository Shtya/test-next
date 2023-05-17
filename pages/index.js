import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>



      </div>
      <ul>
        <li ><Link className='badge btn-danger btn text-dark' href="/about">about</Link></li>
        <li ><Link className='badge btn-danger btn text-dark' href="/post">post</Link></li>
        <li ><Link className='badge btn-danger btn text-dark' href="/post/66">post/id</Link></li>
      </ul>
    </>
  )
}