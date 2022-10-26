import React from 'react';
import Header from '../Header/Header';
import './Login.css'
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <Header></Header>
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Log In</h3>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                name='email'
                                className="form-control mt-1"
                                placeholder="Enter email"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                type="password"
                                name='password'
                                className="form-control mt-1"
                                placeholder="Enter password"
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                        <p className="forgot-password text-right mt-2">
                            <Link to="#">Forgot password?</Link>
                        </p>
                    </div>
                    <div className='text-center'>
                        <MDBBtn className='mx-1 h3' style={{ backgroundColor: '#dd4b39' }} href='#'>
                            <MDBIcon fab icon='google' />
                        </MDBBtn>

                        <MDBBtn className='mx-1 h3' style={{ backgroundColor: '#333333' }} href='#'>
                            <MDBIcon fab icon='github' />
                        </MDBBtn>
                        
                        
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;