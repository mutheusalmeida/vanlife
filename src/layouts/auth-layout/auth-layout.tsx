import { Navigate, Outlet } from 'react-router-dom'

export const AuthLayout = () => {
  const authenticated = false

  if (!authenticated) {
    return <Navigate to="/login" state={{ message: 'You must login first' }} />
  }

  return (
    <>
      <Outlet />
    </>
  )
}
