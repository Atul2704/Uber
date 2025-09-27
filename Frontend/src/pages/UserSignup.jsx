import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function UserSignup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [userData, setuserData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()
    setuserData({
      username:{
        firstName:firstName,
        lastName:lastName
      },
      email: email,
      password: password,
    })

    console.log(userData)
    setEmail('')
    setPassword('')
    setfirstName('')
    setlastName('')
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <form onSubmit={(e) => submitHandler(e)}>

        <h3 className='text-lg font-medium mb-2'>What's your name</h3>
        <div className='flex gap-4 mb-4'>
          <input
          required
          className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-sm'
          type="text"
          placeholder='First name'
          value={firstName}
          onChange={(e) => setfirstName(e.target.value)}
        />
        <input
          required
          className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-sm'
          type="text"
          placeholder='Last name'
          value={lastName}
          onChange={(e) => setlastName(e.target.value)}
        />
        </div>

        <h3 className='text-lg font-medium mb-2'>What's your email</h3>
        <input
          required
          className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg mb-4 placeholder:text-sm'
          type="email"
          placeholder='email@example.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
        <input
          required
          className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg mb-4 placeholder:text-sm'
          type="password"
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='bg-[#111] rounded px-4 py-2 w-full text-white text-base font-semibold mb-4 placeholder:text-sm'>Get Started</button>

        <p className='text-sm text-center'>Already had an account? <Link to='/login' className='text-blue-600'>Login here</Link></p>
      </form>
      </div>
      <div>
        <p className='text-[10px] leading-tight'>This site is protected by reCaptcha and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply.</span></p>
      </div>
    </div>
  )
}

export default UserSignup
