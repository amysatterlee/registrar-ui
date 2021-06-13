import React from 'react';
import Modal from './Modal';
import '../../stylesheets/common.css';

const InformationPopUp = ({ header, text, dismiss }) => {
    return (
        <Modal>
            <div className='modalbody'>
                <div className='modalheader'>
                    {header}
                </div>
                <div className='modaltext'>
                    {text}
                </div>
            </div>
            <div className='modalbuttons'>
                <button className='button' onClick={dismiss}>
                    OK
                </button>
            </div>
        </Modal>
    );
}

export default InformationPopUp;