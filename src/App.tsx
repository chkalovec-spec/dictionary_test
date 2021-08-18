import { Container } from 'react-bootstrap'

import { AppRouter } from './pages/AppRouter'
import { NavMenu } from './components/Navbar'

function App() {
  return (
    <>
      <NavMenu />
      <Container fluid='lg'>
        <AppRouter />
      </Container>
    </>
  )
}

export default App
