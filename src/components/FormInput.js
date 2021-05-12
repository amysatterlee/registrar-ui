import React from 'react';

const FormInput = ({ label, inputType, value, handleChange, className }) => {

    const onChange = (e) => {
        handleChange(e.target.value);
    }

    const renderInput = () => {
        if (inputType == 'textarea') {
            return (
                <textarea className={className} rows='4' value={value} onChange={onChange}/>
            );
        }
        return (
            <input className={className} type={inputType} value={value} onChange={onChange}/>
        );
    }

    return (
        <div className='forminput'>
            <label>
                {label}
                {renderInput()}
            </label>
        </div>
    );
}

export default FormInput;