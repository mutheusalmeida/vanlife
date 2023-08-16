import { auth } from '@/resources/api'
import { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

export const AuthLayout = () => {
  const [user, loading] = useAuthState(auth)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (!loading && !user) {
      navigate('/sign-in', {
        replace: true,
        state: { message: 'You must login first', from: location.pathname },
      })
    }
  }, [loading, location.pathname, navigate, user])

  return (
    <>
      <Outlet />
    </>
  )
}
