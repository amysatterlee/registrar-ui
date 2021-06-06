import React, { useState } from 'react';
import TextInput from '../common/TextInput';
import Button from '../common/Button';

const AppointmentForm = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [comment, setComment] = useState('');

    const changeEmail = (e) => {
        setEmail(e.target.value);
    };

    const changeName = (e) => {
        setName(e.target.value);
    };

    const changePhone = (e) => {
        setPhone(e.target.value);
    };

    const changeComment = (e) => {
        setComment(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitting form');
    }

    return (
        <form className='form'>
            <TextInput
                type='text'
                label='Email:'
                value={email}
                onChange={changeEmail}
            />
            <TextInput
                type='text'
                label='Name:'
                value={name}
                onChange={changeName}
            />
            <TextInput
                type='text'
                label='Phone:'
                value={phone}
                onChange={changePhone}
            />
            <TextInput
                type='textarea'
                label='Comments/Questions:'
                value={comment}
                onChange={changeComment}
            />
            <Button text='Submit' handleClick={handleSubmit} />
        </form>
    );
};

export default AppointmentForm;