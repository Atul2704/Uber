import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function CaptainLogin() {
  const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [captainData, setcaptainData] = useState({})
  
    const submitHandler = (e) => {
      e.preventDefault()
      setcaptainData({ 
        email: email,
        password: password
      })
      console.log(captainData);
      setEmail('')
      setPassword('')
    }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-3' src="https://pngimg.com/d/uber_PNG24.png" alt="" />
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

          <p className='text-sm text-center'>Join a fleet? <Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link></p>
        </form>
      </div>
      <div>
        <Link to='/login' className='bg-[#d5622d] flex items-center justify-center rounded px-4 py-2 w-full text-white text-lg font-semibold mb-5 placeholder:text-base'>Sign in as User</Link>
      </div>
    </div>
  )
}

export default CaptainLogin
