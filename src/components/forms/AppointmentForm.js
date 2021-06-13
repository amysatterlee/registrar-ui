import React, { useState, useEffect } from 'react';
import Input from '../common/Input';
import Button from '../common/Button';

const defaultValue = {
    value: '',
    valid: true,
    error: ''
};

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const AppointmentForm = ({ submitForm, submitted }) => {
    const [email, setEmail] = useState(defaultValue);
    const [name, setName] = useState(defaultValue);
    const [phone, setPhone] = useState(defaultValue);
    const [comment, setComment] = useState(defaultValue);

    useEffect(() => {
        if (submitted) {
            setEmail(defaultValue);
            setName(defaultValue);
            setPhone(defaultValue);
            setComment(defaultValue);
        }
    }, [submitted]);

    const changeEmail = (e) => {
        const newEmail = { value: e.target.value, valid: true, error: '' };
        setEmail(newEmail);
    };

    const changeName = (e) => {
        const newName = { value: e.target.value, valid: true, error: '' };
        setName(newName);
    };

    const changePhone = (e) => {
        const newPhone = { value: e.target.value, valid: true, error: '' };
        setPhone(newPhone);
    };

    const changeComment = (e) => {
        const newComment = { ...comment, value: e.target.value };
        setComment(newComment);
    };

    const formValidated = () => {
        let formValid = true;
        if (name.value.length == 0) {
            const newName = { ...name, valid: false, error: 'Please enter a name' };
            setName(newName);
            formValid = false;
        }
        if (phone.value.length < 10) {
            const newPhone = { ...phone, valid: false, error: 'Please enter a valid phone number' };
            setPhone(newPhone);
            formValid = false;
        }
        if (!emailRegex.test(email.value.toLowerCase())) {
            const newEmail = { ...email, valid: false, error: 'Please enter a valid email' };
            setEmail(newEmail);
            formValid = false;
        }
        return formValid;
    }

    const handleSubmit = () => {
        if (formValidated()) {
            submitForm({
                email: email.value,
                name: name.value,
                phone: phone.value,
                comment: comment.value
            });
        }
    };

    return (
        <form className='form'>
            <Input
                type='text'
                label='Email:'
                value={email.value}
                onChange={changeEmail}
                valid={email.valid}
                error={email.error}
            />
            <Input
                type='text'
                label='Name:'
                value={name.value}
                onChange={changeName}
                valid={name.valid}
                error={name.error}
            />
            <Input
                type='text'
                label='Phone:'
                value={phone.value}
                onChange={changePhone}
                valid={phone.valid}
                error={phone.error}
            />
            <Input
                type='textarea'
                label='Comments/Questions:'
                value={comment.value}
                onChange={changeComment}
                valid={comment.valid}
                error={comment.error}
            />
            <Button text='Submit' handleClick={handleSubmit} />
        </form>
    );
};

export default AppointmentForm;