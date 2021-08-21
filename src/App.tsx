import { Container } from 'react-bootstrap'

import { AppRouter } from './pages/AppRouter'
import { NavMenu } from './components/NavMenu'

function App() {
  return (
    <>
      <NavMenu />
      <Container fluid='lg'>
        <main className='py-4'>
          <AppRouter />
        </main>
      </Container>
    </>
  )
}

export default App
