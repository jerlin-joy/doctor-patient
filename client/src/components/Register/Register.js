import React, { useState } from 'react';
import '../../util/shared/sharedStyle/style.css';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerDispatch } from '../../features';
import { ToastContainer, toast } from 'react-toastify';
import { toastOptions } from '../../util/shared/sharedUtils';

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const registerStore = useSelector((state) => state?.user?.users);

    const [register, setRegister] = useState({
        userName: '',
        userPassword: '',
        userEmail: ''
    });
    const handleValidation = () => {
        const { userEmail, userPassword, userName } = register;
        if (userEmail === '' && userPassword === '' && userName === '') {
            toast.error('Fields is required.', toastOptions);
            return false;
        } else if (userEmail === '') {
            toast.error('Email is required.', toastOptions);
            return false;
        } else if (userPassword === '') {
            toast.error('Password is required.', toastOptions);
            return false;
        } else if (userName === '') {
            toast.error('Username is required.', toastOptions);
            return false;
        } else {
            return true;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
        if (handleValidation()) {
            dispatch(registerDispatch(register));
            if (registerStore.success === true) {
                navigate('/register');
                toast.success('Register success.', toastOptions);
            } else {
                toast.error(registerStore.message, toastOptions);
            }
        }
    };
    return (
        <div className='main'>
            <div className='outer'>
                <div className='inner'>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <h3>Register</h3>
                        <div className='form-group'>
                            <label>Email</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter email'
                                onChange={(e) =>
                                    setRegister({
                                        ...register,
                                        userEmail: e.target.value
                                    })
                                }
                            />
                        </div>
                        <div className='form-group'>
                            <label>Username</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter username'
                                onChange={(e) =>
                                    setRegister({
                                        ...register,
                                        userName: e.target.value
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
                                    setRegister({
                                        ...register,
                                        userPassword: e.target.value
                                    })
                                }
                            />
                        </div>
                        <br />
                        <button
                            type='submit'
                            className='btn btn-dark btn-lg btn-block'>
                            Register
                        </button>
                        <br /> <br />
                        <p className='forgot-password text-right'>
                            Already registered<span> </span>
                            <Link to='/'>Login ?</Link>
                        </p>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Register;
