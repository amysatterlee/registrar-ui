import React, { useState } from 'react';
import FormInput from './common/FormInput';

const SignInForm = ({ handleSubmit }) => {
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        handleSubmit(emailValue, passwordValue);
    }

    return (
        <div className='sm-container'>
            <form className='form'>
                <FormInput
                    label='Email:'
                    inputType='text'
                    value={emailValue}
                    handleChange={setEmailValue}
                />
                <FormInput
                    label='Password:'
                    inputType='password'
                    value={passwordValue}
                    handleChange={setPasswordValue}
                />
                <div className='formrow mar-10'>
                    <button className='bigbutton' onClick={submitForm}>Sign In</button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;