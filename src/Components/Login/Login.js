import React, { useContext, useState } from 'react';
import Header from '../Header/Header';
import './Login.css'
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
    const { logIn } = useContext(AuthContext);

    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const [error, setError] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);


        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true })
                setError('');
                toast.success('Login Successful');

                // setError('');

                // if(user.emailVerified){
                //     // navigate(from, {replace:true});
                //     toast.success('Login Successful')
                // }

                // else{
                //     toast.error('your email in not verified! please verify your email');
                // }

            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
                // toast.error(error.message);
                // setError(error.message);
            })
        // .finally(()=>{
        //     setLoading(false);
        // })
    }
    return (
        <div>
            <Header></Header>
            <div className="Auth-form-container">
                <form className="Auth-form" onSubmit={handleSubmit}>
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Log In</h3>
                        <div className="text-center">
                            Don't have an account?{" "}
                            <span className="link-primary" >
                                <Link to='/register'>Sign Up</Link>
                            </span>
                        </div>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                name='email'
                                className="form-control mt-1"
                                placeholder="Enter email"
                                required
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                type="password"
                                name='password'
                                className="form-control mt-1"
                                placeholder="Enter password"
                                required
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                                Login
                            </button>
                        </div>

                        {
                            error? <p className='text-danger'>{error}</p> : ''
                        }

                        

                        <p className="forgot-password text-right mt-2">
                            <Link to="#">Forgot password?</Link>
                        </p>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Login;