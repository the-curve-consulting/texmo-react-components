import { Header, UserProfile } from '@the-curve-consulting/texmo-react-components';
import MainNav from '../components/MainNav';

const HeaderComponent = () => {
  return (
    <Header>
      <Header.Brand>
        <h1 className='logo'>Example</h1>
      </Header.Brand>

      <Header.Navbar>
        <MainNav />
      </Header.Navbar>

      <Header.Dropdown>
        <Header.Dropdown.Toggle>
          <UserProfile email='example@.com' />
        </Header.Dropdown.Toggle>


        <Header.Dropdown.Menu>
          <Header.Dropdown.Item>Test</Header.Dropdown.Item>
        </Header.Dropdown.Menu>
      </Header.Dropdown>
    </Header>
  )
}

export default HeaderComponent;