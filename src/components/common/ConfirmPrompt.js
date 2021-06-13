import React from 'react';
import Modal from './Modal';
import '../../stylesheets/common.css';

const ConfirmPrompt = ({ confirmText, confirmButtonText, handleConfirm, handleCancel }) => {
    return (
        <Modal>
            <div className='modalbody'>
                <div className='modalheader'>
                    Please Confirm
                </div>
                <div className='modaltext'>
                    {confirmText}
                </div>
            </div>
            <div className='modalbuttons'>
                <button className='button' onClick={handleConfirm}>
                    {confirmButtonText}
                </button>
                <button className='button' onClick={handleCancel}>
                    Cancel
                </button>
            </div>
        </Modal>
    );
}

export default ConfirmPrompt;