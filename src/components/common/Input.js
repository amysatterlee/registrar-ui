import React, { useMemo } from 'react';
import '../../stylesheets/common.css';

const Input = ({
    label,
    value,
    type,
    onChange,
    valid,
    error
}) => {

    const inputClass = useMemo(() => {
        if (valid) {
            return 'textinput';
        }
        return 'textinput invalidinput'
    }, [valid]);

    return (
        <label className='inputlabel'><strong>{label}</strong>
            {type === 'textarea' ? (
                <div className='inputrow'>
                    <textarea
                        className={inputClass}
                        value={value}
                        onChange={onChange}
                        rows='5'
                    />
                    {!valid ? <i className="fas fa-times invalidicon"></i> : null}
                </div>
            ) : (
                <div className='inputrow'>
                    <input
                        className={inputClass}
                        type={type}
                        value={value}
                        onChange={onChange}
                    />
                    {!valid ? <i className="fas fa-times invalidicon"></i> : null}
                </div>
            )}
            <div className='invalidtext'>
                {error}
            </div>
        </label>
    )
}

export default Input;