import React, { Component } from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import logo from './logo192.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Links from '../Pages/Links';
import Blog from '../Pages/Blog';

export default class Header extends Component {
  render() {
    return (
      <Router>
        <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img
                src={logo}
                height="30"
                width="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />{' '}
              React sex
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/links">Links</Nav.Link>
                <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
              </Nav>
              <Form className="d-flex ms-auto">
                <FormControl type="text" placeholder="Search" className="me-2" />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container style={{ marginTop: '80px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/links" element={<Links />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </Container>
      </Router>
    );
  }
}
