import { Container } from 'react-bootstrap'

import { AppRouter } from './pages/AppRouter'
import { NavMenu } from './components/NavMenu'

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
