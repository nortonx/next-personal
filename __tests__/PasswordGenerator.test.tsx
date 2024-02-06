import { render, screen, fireEvent } from '@testing-library/react'
import PasswordGeneratorPage from '@/app/password-generator/page'

describe("Password Generator Page", () => {
  it("Should render page and match snapshot", async () => {
    render(<PasswordGeneratorPage/>)
    const page = await screen.findByTestId('password-generator')
    expect(page).toBeInTheDocument()
    expect(page).toMatchSnapshot()
  })

  it("Should generate password on button click", async () => {
    render(<PasswordGeneratorPage/>)
    const button = await screen.findByTestId("generate-password-btn");
    const passwordField = await screen.findByTestId("input-generated-password");
    expect(passwordField.nodeValue).toBeFalsy()
    fireEvent.click(button)
    expect(passwordField.nodeValue).toBeDefined()
  })
})