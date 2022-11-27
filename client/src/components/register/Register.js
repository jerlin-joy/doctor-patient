import React from 'react';
import '../../util/shared/sharedStyle/style.css';

const Register = () => {
    return (
        <div className='main'>
            <div className='outer'>
                <div className='inner'>
                    <form>
                        <h3>Register</h3>
                        <div className='form-group'>
                            <label>First name</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='First name'
                            />
                        </div>
                        <div className='form-group'>
                            <label>Last name</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Last name'
                            />
                        </div>
                        <div className='form-group'>
                            <label>Email</label>
                            <input
                                type='email'
                                className='form-control'
                                placeholder='Enter email'
                            />
                        </div>
                        <div className='form-group'>
                            <label>Password</label>
                            <input
                                type='password'
                                className='form-control'
                                placeholder='Enter password'
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
                            Already registered <a href='/'>Log in?</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
