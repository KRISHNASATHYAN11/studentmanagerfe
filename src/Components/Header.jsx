import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <div className='container-fluid'>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">STUDENT MANAGEMENT</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#features">Instructors</Nav.Link>
            <Nav.Link href="/students">Student Details</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header