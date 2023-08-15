import { Navigate, Outlet, useLocation } from 'react-router-dom'

export const AuthLayout = () => {
  const authenticated = false
  const location = useLocation()

  if (!authenticated) {
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
