import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css'
import { FaToggleOn } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa";
import { useState } from 'react';

const Header = () => {
    const [dark, setDark] = useState(false)

    const handleToggle = () => {
        setDark(!dark);
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="white" className='shadow p-3'>
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
                            <Button>Login</Button>
                        </Nav.Link>

                        <Button variant="link" onClick={handleToggle}>
                            {
                                dark?<FaToggleOff className='h2 ' style={{color: 'black'}}></FaToggleOff>:<FaToggleOn className='h2' style={{color: 'black'}}></FaToggleOn>
                            }
                            
                            
                        </Button>

                        

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;