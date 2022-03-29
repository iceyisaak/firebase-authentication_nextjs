import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { AuthContextProvider } from '../context/FirebaseAuthContext'
import { useRouter } from 'next/router'
import ProtectedRoutes from '../routes/ProtectedRoutes'

const publicPages = ['/', '/login/Login', '/signup/SignUp']

function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter()

  return (
    <AuthContextProvider>
      {publicPages.includes(router.pathname) ?

        <Component {...pageProps} /> :

        <ProtectedRoutes>
          <Component {...pageProps} />
        </ProtectedRoutes>
      }
    </AuthContextProvider>
  )
}

export default MyApp
