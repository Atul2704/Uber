import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Userlogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setuserData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()
    setuserData({ 
      email: email,
      password: password
    })
    console.log(userData);
    setEmail('')
    setPassword('')
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <form onSubmit={(e) => submitHandler(e)}>
        <h3 className='text-lg font-medium mb-2'>What's your email</h3>
        <input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-sm mb-4 placeholder:text-base'
          type="email"
          placeholder='email@example.com'
        />
        <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
        <input
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-sm mb-4 placeholder:text-base'
          type="password"
          placeholder='password'
        />
        <button className='bg-[#111] rounded px-4 py-2 w-full text-white text-lg font-semibold mb-4 placeholder:text-base'>Login</button>

        <p className='text-sm text-center'>Don't have an account? <Link to='/signup' className='text-blue-600'>Sign up</Link></p>
      </form>
      </div>
      <div>
        <Link to='/captain-login' className='bg-[#10b461] flex items-center justify-center rounded px-4 py-2 w-full text-white text-lg font-semibold mb-5 placeholder:text-base'>Sign in as Captain</Link>
      </div>
    </div>
  )
}

export default Userlogin
