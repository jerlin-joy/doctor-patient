import React, { useEffect, useState } from 'react';
import '../../util/shared/sharedStyle/style.css';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginDispatch } from '../../features';
import { ToastContainer, toast } from 'react-toastify';
import { toastOptions } from '../../util/shared/sharedUtils';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userStore = useSelector((state) => state?.user);
    const loggedUser = localStorage.getItem('user');
    const [user, setUser] = useState({
        userPassword: '',
        userEmail: ''
    });

    const handleValidation = () => {
        const { userEmail, userPassword } = user;
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

    useEffect(() => {
        if (loggedUser) {
            navigate('/chat');
        } else {
            navigate('/');
        }
    }, [loggedUser, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (handleValidation()) {
            dispatch(loginDispatch(user));
            if (userStore.success === true) {
                e.target.reset();
                toast.success('Login success.', toastOptions);
                console.log(userStore);
                localStorage.setItem('user', JSON.stringify(userStore.users));
                navigate('/chat', { replace: true });
            }
            if (userStore.success === false) {
                toast.error(
                    userStore.message || 'Something went wrong',
                    toastOptions
                );
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
