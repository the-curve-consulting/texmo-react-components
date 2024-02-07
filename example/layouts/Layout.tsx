import { Outlet } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Navbar from '../components/Navbar'

const Layout = () => {
  return (
    <div className="d-flex">
      <Navbar />
      <Container fluid className="d-flex flex-column" style={{minHeight: '100vh'}}>
        {/* <Header /> */}
        <main className="d-flex flex-grow-1">
          <Container fluid className="px-md-5">
            <Outlet />
          </Container>
        </main>
        {/* <Footer /> */}
      </Container>
    </div>
  );
}

export default Layout;