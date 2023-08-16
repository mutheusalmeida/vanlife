import { UserProvider } from '@/contexts/user-context'
import { auth, getUser } from '@/resources/api'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { UserType } from 'vanlife'

export const AuthLayout = () => {
  const [user, loading] = useAuthState(auth)
  const location = useLocation()
  const navigate = useNavigate()
  const [data, setData] = useState<UserType | null>(null)

  useEffect(() => {
    if (!loading && !user) {
      navigate('/sign-in', {
        replace: true,
        state: { message: 'You must login first', from: location.pathname },
      })
    }

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
  }, [loading, location.pathname, navigate, user])

  return (
    <UserProvider value={{ user: data }}>
      <Outlet />
    </UserProvider>
  )
}
