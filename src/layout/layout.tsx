import { Outlet } from 'react-router-dom'

import * as S from './styles'

export const Layout = () => {
  return (
    <S.LayoutWrapper>
      <h1 className="font-bold text-1xl">layout</h1>

      <Outlet />
    </S.LayoutWrapper>
  )
}
