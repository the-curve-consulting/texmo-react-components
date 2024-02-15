import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import MainNav from '../components/MainNav';
import HeaderComponent from '../components/Header';
import { SideNavbar, Footer } from "@the-curve-consulting/texmo-react-components";

const Layout = () => {
  return (
    <div className="d-flex">
      <SideNavbar>
        <MainNav />
      </SideNavbar>
      <Container fluid className="d-flex flex-column" style={{minHeight: '100vh'}}>
        <HeaderComponent />
        <main className="d-flex flex-grow-1">
          <Container fluid className="px-md-5">
            <Outlet />
          </Container>
        </main>
        <Footer organisation='Test' />
      </Container>
    </div>
  );
}

export default Layout;