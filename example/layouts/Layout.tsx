import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import MainNav from '../components/MainNav';
import HeaderComponent from '../components/Header';
import { SideNavbar, Footer, Layout } from "@the-curve-consulting/texmo-react-components";

const LayoutComponent = () => {
  return (
    <Layout>
      <Layout.Brand src='../src/the-curve.png'/>

      <Layout.Main>
        <SideNavbar>
          <MainNav />
        </SideNavbar>

        <Layout.Container>
          <HeaderComponent />
          
          <main className="d-flex flex-grow-1">
            <Container fluid className="px-md-5">
              <Outlet />
            </Container>
          </main>

          <Footer organisation='Test' />
        </Layout.Container>
      </Layout.Main>
    </Layout>
  );
}

export default LayoutComponent;