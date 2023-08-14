import { Navigate, Outlet, useLocation } from 'react-router-dom'

export const AuthLayout = () => {
  const authenticated = true
  const location = useLocation()

  if (!authenticated) {
    return (
      <Navigate
        to="/login"
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
