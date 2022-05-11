import "styles/layout/layout.css";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import Nav from "components/nav/Nav";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
