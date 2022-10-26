import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css'
import { FaToggleOn } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa";
import { MDBSwitch } from 'mdb-react-ui-kit';
import { useState } from 'react';
import { MDBIcon } from 'mdb-react-ui-kit';

import { MDBBtn } from 'mdb-react-ui-kit';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Header = () => {
    // const [dark, setDark] = useState(false)

    // const handleToggle = () => {
    //     setDark(!dark);
    // }

    // const {user} = useContext(AuthContext);
    // console.log(user);

    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="white" className='shadow p-3'>
            <Container>
                <Link className='nav-item d-flex mt-1' to='/'>
                    <MDBIcon fas icon="laptop-code" size='2x' className='mx-2' />
                    <Navbar.Brand className='h2'>eDemy</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto nav-items">
                        <Nav.Link><Link className='nav-item' to='/courses'>Courses</Link></Nav.Link>
                        <Nav.Link ><Link className='nav-item' to='/blogs'>Blogs</Link></Nav.Link>
                        <Nav.Link ><Link className='nav-item' to='/faq'>FAQ</Link></Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link>
                            <Link to='/register'>
                                <MDBBtn className='text-dark' color='light'>
                                    Sign Up
                                </MDBBtn>
                            </Link>
                        </Nav.Link>



                        <Nav.Link eventKey={2} >
                            <Link to='/login'>
                                <MDBBtn>Login</MDBBtn>
                            </Link>
                        </Nav.Link>

                        {/* <Button variant="link" onClick={handleToggle}>
                            {
                                dark ? <FaToggleOff className='h2 ' style={{ color: 'black' }}></FaToggleOff> : <FaToggleOn className='h2' style={{ color: 'black' }}></FaToggleOn>
                            }
                        </Button> */}

                        <MDBSwitch className='m-3 ' defaultChecked id='flexSwitchCheckChecked' />



                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;