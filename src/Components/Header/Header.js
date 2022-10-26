import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="white" className='shadow p-4'>
            <Container>
                <Navbar.Brand className='h5 '><Link className='nav-item' to='/'>eDemy</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto nav-items">
                        <Nav.Link><Link className='nav-item' to='/courses'>Courses</Link></Nav.Link>
                        <Nav.Link ><Link className='nav-item' to='/blogs'>Blogs</Link></Nav.Link>
                        <Nav.Link ><Link className='nav-item' to='/faq'>FAQ</Link></Nav.Link>  
                    </Nav>
                    <Nav>
                        <Nav.Link>Sign Up</Nav.Link>
                        <Nav.Link eventKey={2} >
                            Login
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;