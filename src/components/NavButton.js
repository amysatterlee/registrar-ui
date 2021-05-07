import React from 'react';
import '../stylesheets/styles.css';

const NavButton = ({ onClick, title, icon }) => {
    return (
        <button className='navbutton' onClick={onClick}>
            <i className={`${icon} fa-lg`}></i>
            <div className='buttontext'>{title}</div>
        </button>
    );
};

export default NavButton;