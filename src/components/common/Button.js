import React from 'react';
import './styles.css';

const Button = ({ text, handleClick }) => {

    const onClick = (e) => {
        e.preventDefault();
        handleClick();
    }

    return (
        <button className='button' onClick={onClick}>
            {text}
        </button>
    )
}

export default Button;