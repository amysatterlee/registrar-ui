import React from 'react';
import '../stylesheets/styles.css';
import NavButton from './NavButton';

const AccountNavBar = ({ options }) => {
    return (
        <div className='navbar'>
            {options.map(option => (
                <NavButton
                    key={option.id}
                    onClick={option.onClick}
                    title={option.title}
                    icon={option.icon}
                /> 
            ))}
        </div>
    );
};

export default AccountNavBar;