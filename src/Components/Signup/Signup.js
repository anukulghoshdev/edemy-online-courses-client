import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const Signup = () => {
    const { signupWtihEmailPassword, updateUserProfile, verifyEmail, signInGoogle, signInGitHub } = useContext(AuthContext)

    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;

        console.log(name, email, photoURL, password);


        signupWtihEmailPassword(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                handleUpdateProfile(name, photoURL);
                verifyEamil();
                navigate('/');
                toast.success('Registration successful');
            })
            .catch(error => {
                toast.error(error.message);
                setError(error.message);
            })
    }


    // update profile
    const handleUpdateProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { toast.success('profile updated'); })
            .catch(error => console.error(error));
    }


    // verify email
    const verifyEamil = () => {
        verifyEmail()
            .then(() => {
                toast.success('Check your email for verification!')
            })
            .catch((error) => {
                toast.error(error.message);
            })
    }



    // login with google
    const handleGoogleSignIn = () => {
        signInGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                navigate('/');
                toast.success('Login with google successfully');
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
                
            })
    }


    // login with github
    const handleGithubSignIn = () => {
        signInGitHub(githubProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setError('');
                navigate('/');
                // setUser(user);
                console.log(user);
            })
            .catch((error) => {
                // setUser({})
                console.error(error);
                setError(error.message);
            })
    }



    return (
        <div>
            <Header></Header>
            <div className="Auth-form-container">
                <form className="Auth-form" onSubmit={handleSubmit}>
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign Up</h3>
                        <div className="text-center">
                            Already registered?{" "}
                            <span className="link-primary" >
                                <Link to='/login'>Login</Link>
                            </span>
                        </div>
                        <div className="form-group mt-3">
                            <label>Full Name</label>
                            <input
                                type="text"
                                name='name'
                                className="form-control mt-1"
                                placeholder="e.g Jane Doe"
                                required
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                name='email'
                                className="form-control mt-1"
                                placeholder="Email Address"
                                required
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Photo URL</label>
                            <input
                                type="text"
                                name='photoURL'
                                className="form-control mt-1"
                                placeholder="Photo URL"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                type="password"
                                name='password'
                                className="form-control mt-1"
                                placeholder="Password"
                                required
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                                Sign Up
                            </button>
                        </div>
                    </div>
                    <br />
                    <div className='text-center'>
                        <MDBBtn onClick={handleGoogleSignIn} className='mx-1 h3' style={{ backgroundColor: '#dd4b39' }} href='#'>
                            <MDBIcon fab icon='google' />
                        </MDBBtn>

                        <MDBBtn onClick={handleGithubSignIn} className='mx-1 h3' style={{ backgroundColor: '#333333' }} href='#'>
                            <MDBIcon fab icon='github' />
                        </MDBBtn>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;