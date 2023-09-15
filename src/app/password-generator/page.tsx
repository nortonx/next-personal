"use client"

import { Input } from '@/components/Input'
import { InputRange } from '@/components/InputRange'
import { useState } from 'react'
import { Container, Row, Col, Form, Button, Toast } from 'react-bootstrap'

const PasswordGeneratorPage = () => {
  const [rangeInputValue, setRangeInputValue] = useState(8)
  const [password, setPassword] = useState("")

  // checkboxes
  const [enableNumbers, setEnableNumbers] = useState(false)
  const [enableUppercaseLetters, setEnableUppercaseLetters] = useState(false)
  const [enableSpecialCharacters, setEnableSpecialCharacters] = useState(false)
  
  // validation
  const [validPassword, setValidPassword] = useState(false)

  // Toast confirmation
  const [showToast, setShowToast] = useState(false)

  const checkNumbers = (password: string) => {
    return Boolean(password.match(/[0-9]/))
  }

  const checkUppercase = (password: string) => {
    return Boolean(password.match(/[A-Z]/));
  }

  const checkSpecialCharacters = (password: string) => {
    return Boolean(password.match(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/))
  }

  const generatePassword = () => {
    const allowedNumbers = "0123456789";
    const allowedLetters = "abcdefghijklmnopqrstuvwxyz";
    const allowedUppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const allowedSpecialCharacters = "!@#$%^&*()";
    let allowedCharacters = allowedLetters;

    if (enableNumbers) {
      allowedCharacters += allowedNumbers
    }

    if (enableUppercaseLetters) {
      allowedCharacters += allowedUppercaseLetters
    }

    if (enableSpecialCharacters) {
      allowedCharacters += allowedSpecialCharacters;
    }

    setPassword("")

    let generatedPassword = "";

    for (let i = 0; i < rangeInputValue; i++) {
      let randomNumber = Math.floor(Math.random() * allowedCharacters.length)
      generatedPassword += allowedCharacters.substring(randomNumber, randomNumber + 1)
    }
    setPassword(generatedPassword)
    validatePassword(password)
  }

  const validatePassword = (password: string) => {
    if (checkNumbers(password)
        || checkUppercase(password)
        || checkSpecialCharacters(password)) {
          setValidPassword(!validPassword)
        }
  }

  const handleRangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRangeInputValue(parseInt(event.target.value))
  }

  const copyText = () => {
    if (password) {
      navigator.clipboard.writeText(password)
      setShowToast(true)
    }
  }

  return(
    <main data-testid="password-generator">
      <Container fluid>
        <Row className="justify-content-md-center mb-4">
          <Col md="auto">
            <p className="fs-2">Password Generator</p>
            <Input
              label="Generated password"
              type="text"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              data-testid="input-generated-password"
              disabled={true}
            />
            <div className="d-flex justify-content-around">
              <Button variant="warning" onClick={() => setPassword("")} data-testid="reset-password">Reset</Button>
              <Button variant="secondary" onClick={copyText} data-testid="copy-password">Copy value</Button>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-md-center mb-4">
          <Col md="auto">
            <Form.Check
              type="switch"
              label="Enable numbers"
              checked={enableNumbers}
              onChange={() => setEnableNumbers(!enableNumbers)}
              className="my-2"
            />
            <Form.Check
              type="switch"
              label="Enable Uppercase Letters"
              checked={enableUppercaseLetters}
              onChange={() => setEnableUppercaseLetters(!enableUppercaseLetters)}
              className="my-2"
            />
            <Form.Check
              type="switch"
              label="Enable Special Characters"
              checked={enableSpecialCharacters}
              onChange={() => setEnableSpecialCharacters(!enableSpecialCharacters)}
              className="my-2"
            />
          </Col>
        </Row>
        <Row className="justify-content-md-center mb-4">
          <Col md="auto">
            <InputRange
              label="Password length"
              step={1}
              min={1}
              max={18}
              value={rangeInputValue}
              onChange={handleRangeValue}
            />
          </Col>
        </Row>
        <Row className="justify-content-md-center mb-4" >
          <Col md="auto" className="d-flex justify-content-between">
            <Button 
              variant="outline-primary" 
              onClick={generatePassword}
            >
              Generate Password
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
              <Toast.Header>Copy Password</Toast.Header>
              <Toast.Body>Password was copied to clipboard.</Toast.Body>
            </Toast>
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default PasswordGeneratorPage