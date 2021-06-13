import React from 'react';
import '../../stylesheets/common.css';

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