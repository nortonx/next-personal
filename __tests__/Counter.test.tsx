import { render, screen } from '@testing-library/react'
import { Counter } from '@/app/text-analyzer/Counter'

describe("Counter component", () => {
  it("Should render component and match snapshot", async () => {
    render(<Counter label="Words" counter={0}/>)
    const element = await screen.getByTestId('counter');
    expect(element).toBeInTheDocument()
    expect(element).toMatchSnapshot();
  })
})