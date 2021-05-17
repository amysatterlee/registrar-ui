import React from 'react';

const DropdownSelect = ({ options }) => {
    // options = [ { id: , name: , value: } ]
    return (
        <div className='dropdownselect'>
            { options.length > 1 ? (
                <select>
                    {options.map(option => (
                        <option value={option.value}>{option.name}</option>
                    ))}
                </select>
            ) : (
                <div className='displaytext'>
                    {options[0].name}
                </div>
            ) } 
        </div>
    )
}

export default DropdownSelect;