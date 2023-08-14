import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
    <Link href={'/about'}>About main</Link>
    <h1 style={{color:'red'}}>about college</h1>
    </>
  )
}

export default page