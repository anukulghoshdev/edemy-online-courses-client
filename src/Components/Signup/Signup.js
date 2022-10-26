import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Signup = () => {
    const { signupWtihEmailPassword, updateUserProfile } = useContext(AuthContext)

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
                handleUpdateProfile(name, photoURL)
                toast.success('Registration successful');
            })
            .catch(error => {
                toast.error(error.message);
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
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                name='email'
                                className="form-control mt-1"
                                placeholder="Email Address"
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
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                                Sign Up
                            </button>
                        </div>
                        <p className="text-center mt-2">
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

export default Signup;