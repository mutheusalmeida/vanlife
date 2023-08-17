import { UserProvider } from '@/contexts/user-context'
import { auth, getUser } from '@/resources/api'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { UserType } from 'vanlife'

export const AuthLayout = () => {
  const [user, loading] = useAuthState(auth)
  const location = useLocation()
  const [data, setData] = useState<UserType | null>(null)

  useEffect(() => {
    if (user) {
      const getUserData = async () => {
        try {
          const data = await getUser<UserType>(user.uid)
          setData(data)
        } catch (err) {
          console.error(err)
        }
      }

      getUserData()
    }
  }, [loading, location.pathname, user])

  if (loading) {
    return null
  }

  if (!loading && !user) {
    return (
      <Navigate
        to="/sign-in"
        replace
        state={{ message: 'You must login first', from: location.pathname }}
      />
    )
  }

  return (
    <UserProvider value={{ user: data }}>
      <Outlet />
    </UserProvider>
  )
}
