import { Header } from '@the-curve-consulting/texmo-react-components';
import MainNav from '../components/MainNav';

const HeaderComponent = () => {
  return (
    <Header>
      <Header.Dropdown>
        <Header.Dropdown.Toggle />

        <Header.Dropdown.Menu>
          <Header.Dropdown.Item>Test</Header.Dropdown.Item>
        </Header.Dropdown.Menu>
      </Header.Dropdown>

      <Header.Navbar>
        <MainNav />
      </Header.Navbar>
    </Header>
  )
}

export default HeaderComponent;