import React from 'react';
import './styles.css';

const TextInput = ({ label, value, type, onChange }) => {
    return (
        <label className='inputlabel'><strong>{label}</strong>
            {type === 'textarea' ? (
                <textarea
                    className='textinput'
                    value={value}
                    onChange={onChange}
                    rows='5'
                />
            ) : (
                <input
                    className='textinput'
                    type={type}
                    value={value}
                    onChange={onChange}
                />
            )}
        </label>
    )
}

export default TextInput;