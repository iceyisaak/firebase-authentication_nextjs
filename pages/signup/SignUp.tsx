import React, { useState } from 'react'
import Link from 'next/link'
import { useAuth } from '../../context/FirebaseAuthContext'
import SignInWithSocialMedia from '../signinwithsocialmedia/SignInWithSocialMedia'

const SignUp = () => {

  const { user, signUp } = useAuth()
  console.log(user)
  const [signUpData, setSignUpData] = useState({
    email: '',
    password: ''
  })

  const handleSignUp = async (e: any) => {
    e.preventDefault()
    try {
      await signUp(signUpData.email, signUpData.password)
    } catch (err) {
      console.log(err);
    }
    console.log(signUpData)
  }

  return (
    <div>
      <form onSubmit={handleSignUp}>
        <h1>Sign Up</h1>
        <label htmlFor="email">Email</label>
        <input type="email" name='email' placeholder='your@email.com' value={signUpData.email} onChange={(e: any) => setSignUpData({ ...signUpData, email: e.target.value })} />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" name='password' placeholder='password' value={signUpData.password} onChange={(e: any) => setSignUpData({ ...signUpData, password: e.target.value })} />
        <br />
        <button>
          Sign Up
        </button>
      </form>
      <h6>Already have an account?</h6>
      <Link href='/login/Login'>Login</Link>
      <h6>or</h6>
      <SignInWithSocialMedia />
    </div>
  )
}

export default SignUp