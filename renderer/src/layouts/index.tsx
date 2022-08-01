import { ReactNode } from "react";
// layouts
import Header from "./components/header";
import Navbar from "./components/navbar";
import MenuButton from "./components/menuButton";
// styles
import { LayoutContainer, MainContainer } from "./styles";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <LayoutContainer>
      <MenuButton />
      <Header />
      <Navbar />
      <MainContainer as="main">{children}</MainContainer>
    </LayoutContainer>
  );
}

export default Layout;
