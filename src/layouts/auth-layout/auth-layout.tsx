import { UserProvider } from '@/contexts/user-context'
import { useAuth } from '@/hooks/use-auth'
import { Navigate, Outlet } from 'react-router-dom'

export const AuthLayout = () => {
  const { isLoading, data } = useAuth()

  if (isLoading || !data) {
    return null
  }

  if (!isLoading && !data) {
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
