import React from 'react';
import '../../stylesheets/common.css';

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