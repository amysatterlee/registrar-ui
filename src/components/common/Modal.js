import React from 'react';
import './styles.css';

const Modal = ({ children }) => {
    return (
        <div className='overlay'>
            <div className='modal'>
                {children}
            </div>
        </div>
    );
}

export default Modal;