import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import SignInWithSocialMedia from '../signinwithsocialmedia/SignInWithSocialMedia'
import { useAuth } from '../../context/FirebaseAuthContext'

const Login = () => {

  const { user, login } = useAuth()
  const router = useRouter()

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })

  const handleLogin = async (e: any) => {
    e.preventDefault()
    console.log(user)
    try {
      await login(loginData.email, loginData.password)
      router.push('/dashboard/Dashboard')
    } catch (err) {
      console.log(err);
    }
    console.log(loginData)
  }


  return (
    <div>

      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <label htmlFor="email">Email</label>
        <input type="text" name='email' placeholder='your@email.com' value={loginData.email} onChange={(e: any) => setLoginData({ ...loginData, email: e.target.value })} />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" name='password' placeholder='password' value={loginData.password} onChange={(e: any) => setLoginData({ ...loginData, password: e.target.value })} />
        <br />
        <button>
          Login
        </button>
      </form>
      <h6>Don't have an account?</h6>
      <Link href='/signup/SignUp'>Sign Up</Link>
      <h6>or</h6>
      <SignInWithSocialMedia />
    </div>
  )
}

export default Login