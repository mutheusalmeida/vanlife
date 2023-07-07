import { Outlet } from "react-router-dom";

import * as S from "./styles";

export const Layout = () => {
  return (
    <S.LayoutWrapper className="text-1xl container">
      <h1 className="font-bold underline">layout</h1>
      <Outlet />
    </S.LayoutWrapper>
  );
};
