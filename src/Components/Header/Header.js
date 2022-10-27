import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'
import { FaToggleOn, FaUserAlt } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa";
import { MDBSwitch } from 'mdb-react-ui-kit';
import { useState } from 'react';
import { MDBIcon } from 'mdb-react-ui-kit';

import { MDBBtn } from 'mdb-react-ui-kit';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

const Header = () => {
    const { user, userlogOut } = useContext(AuthContext);

    const [dark, setDark] = useState(false)

    // const handleToggle = () => {
    //     setDark(!dark);
    // }
    

    // const {user} = useContext(AuthContext);
    // console.log(user);


    const navigate = useNavigate();

    const handleLogOut = () => {
        userlogOut()
            .then(() => {
                toast.error('User logged out');
                navigate('/login')
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handletoogle=(event)=>{
        console.log(event.target.checked);
        setDark(event.target.checked);
    }

    return (
        <Navbar sticky='top' collapseOnSelect expand="lg" bg="white" variant="white" className='shadow p-3 '>
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
                        <>
                            {
                                user?.uid ?
                                    <Link to='/profile' className='d-flex'>
                                        <span className='me-2 mt-2'>
                                            <strong>{user?.displayName}</strong>{' '}


                                            {
                                                user?.photoURL ?
                                                    <Tippy content={user?.displayName}>
                                                        <Image
                                                            roundedCircle
                                                            style={{ height: '40px' }}
                                                            src={user?.photoURL}>
                                                        </Image>
                                                    </Tippy>

                                                    :
                                                    <Tippy content={user?.displayName}>
                                                        <FaUserAlt></FaUserAlt>
                                                    </Tippy>
                                            }

                                        </span>

                                        <Nav.Link eventKey={2} >

                                            <MDBBtn onClick={handleLogOut}>Logout</MDBBtn>

                                        </Nav.Link>

                                    </Link>
                        :
                        <>
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
                        </>
                            }
                    </>










                    {/* <Button variant="link" onClick={handleToggle}>
                            {
                                dark ? <FaToggleOff className='h2 ' style={{ color: 'black' }}></FaToggleOff> : <FaToggleOn className='h2' style={{ color: 'black' }}></FaToggleOn>
                            }
                        </Button> */}

                    <MDBSwitch className='m-3 ' defaultChecked id='flexSwitchCheckChecked' onClick={handletoogle}/>

                    { dark? <strong className='m-2'>Dark</strong> : <strong className='m-2'>Light</strong>}



                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar >
    );
};

export default Header;