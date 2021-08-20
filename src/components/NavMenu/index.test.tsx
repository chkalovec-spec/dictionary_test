import { render} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import { NavMenu } from '.'

const renderNavMenuWithRouter = () => {
  return render(
    <BrowserRouter>
      <NavMenu />
    </BrowserRouter>
  )
}

describe('Navbar component', () => {
  
  it('Navbar snapshot', () => {
    expect(renderNavMenuWithRouter()).toMatchSnapshot()
  })
  
})