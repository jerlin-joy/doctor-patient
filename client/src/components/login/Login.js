import React, { useState } from 'react';
import '../../util/shared/sharedStyle/style.css';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginDispatch } from '../../features';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userStore = useSelector((state) => state?.user?.users);

    const [user, setUser] = useState({
        userPassword: '',
        userEmail: ''
    });

    const toastOptions = {
        position: 'bottom-right',
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark'
    };

    const handleValidation = () => {
        const { userEmail, userPassword } = user;
        console.log(user);
        if (userEmail === '' && userPassword === '') {
            toast.error('Fields is required.', toastOptions);
            return false;
        } else if (userEmail === '') {
            toast.error('Email is required.', toastOptions);
            return false;
        } else if (userPassword === '') {
            toast.error('Password is required.', toastOptions);
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (handleValidation()) {
            dispatch(loginDispatch(user));
            if (userStore.success) {
                navigate('/register');
            }
        }
    };

    return (
        <div className='main'>
            <div className='outer'>
                <div className='inner'>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <h3>Log in</h3>
                        <div className='form-group'>
                            <label>Email</label>
                            <input
                                type='email'
                                className='form-control'
                                placeholder='Enter email'
                                onChange={(e) =>
                                    setUser({
                                        ...user,
                                        userEmail: e.target.value
                                    })
                                }
                            />
                        </div>
                        <div className='form-group'>
                            <label>Password</label>
                            <input
                                type='password'
                                className='form-control'
                                placeholder='Enter password'
                                onChange={(e) =>
                                    setUser({
                                        ...user,
                                        userPassword: e.target.value
                                    })
                                }
                            />
                        </div>
                        <br />
                        <button
                            type='submit'
                            className='btn btn-dark btn-lg btn-block'>
                            Sign in
                        </button>
                        <br /> <br />
                        <p className='forgot-password text-right'>
                            Not yet registered <span> </span>
                            <Link to='/register'>Register ?</Link>
                        </p>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Login;
