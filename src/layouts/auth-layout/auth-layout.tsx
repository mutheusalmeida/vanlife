import { auth } from '@/resources/api'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

export const AuthLayout = () => {
  const [user] = useAuthState(auth)
  const location = useLocation()

  if (!user) {
    return (
      <Navigate
        to="/sign-in"
        replace
        state={{ message: 'You must login first', from: location.pathname }}
      />
    )
  }

  return (
    <>
      <Outlet />
    </>
  )
}
