import { render, screen } from '@testing-library/react'
import AboutPage from '@/app/about/page'

describe("About Page", () => {
  it("Should render About Page and match snapshot", async () => {
    render(<AboutPage/>)
    const element = await screen.getByTestId('about')
    expect(element).toBeInTheDocument()
    expect(element).toMatchSnapshot()
  })
})