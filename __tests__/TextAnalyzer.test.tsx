import { render, screen, fireEvent } from '@testing-library/react'
import TextAnalyzer from '@/app/text-analyzer/page'

describe('TextAnalyzer', () => {
  it("Should render on screen", async () => {
    render(<TextAnalyzer />)
    const element = await screen.findByTestId('text-analyzer')
    expect(element).toBeInTheDocument()
    expect(element).toMatchSnapshot()
  })
})