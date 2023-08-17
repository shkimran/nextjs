import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <>
    <h1>Login</h1>
    <input type='text' placeholder='Uname'/> <br/> <br/>
    <input type='text' placeholder='password'/>
    <Link href="/">Login</Link>
    </>
  )
}

export default Login