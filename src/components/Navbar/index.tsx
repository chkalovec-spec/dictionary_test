import { Link } from 'react-router-dom'

import { Container, Nav, Navbar } from 'react-bootstrap'
import { BookHalf } from 'react-bootstrap-icons'

import { AllRoutes } from '../../constants/router'

export const NavMenu = () => {
  return (
    <>
      <Navbar bg='primary' variant='dark'>
        <Container>
          <Navbar.Brand>
            <BookHalf size={30} />
          </Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to={AllRoutes.INDEX}>
              На главную
            </Nav.Link>
            <Nav.Link as={Link} to={AllRoutes.DICTIONARY}>
              Справочники
            </Nav.Link>
            <Nav.Link as={Link} to={AllRoutes.ABOUT}>
              О приложении
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
