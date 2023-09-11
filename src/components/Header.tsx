'use client';

import Link from 'next/link';
import {
  Container,
  Nav,
  Navbar
} from 'react-bootstrap';
const Header = () => {
 return(
  <header className="bg-light" data-testid="header">
    <Container fluid>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id="header-navbar">
          <Nav className="d-flex justify-content-end">
            <Link href="/text-analyzer" className="nav-link">Text Analyzer</Link>
            <Link href="/about" className="nav-link">About</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </header>
 )
}

export default Header;

