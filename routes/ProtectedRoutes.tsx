import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../context/FirebaseAuthContext'


const ProtectedRoutes = ({ children }: { children: React.ReactNode }) => {

  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {

    if (!user) {
      router.push('/login/Login')
    }
  }, [router, user])


  return (
    <>
      {user ? children : null}
    </>
  )
}

export default ProtectedRoutes