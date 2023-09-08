import { render, screen } from '@testing-library/react'
import Home from '@/app/page';

describe('Home', () => {
  it('Should render <main> element', async () => {
    render(<Home />)
    const myElement = await screen.findByTestId('main')
    expect(myElement).toBeInTheDocument()
  })
})