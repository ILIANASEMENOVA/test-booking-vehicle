import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { GlobalStyle } from "../../styles/GlobalStyle";
import { Container, Main } from "./Layout.styled";

export const Layout = () => {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
};
