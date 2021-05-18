import React from 'react';

const DropdownSelect = ({ label, options, setSelected, selectedValue }) => {
    // options = [ { id: , name: , value: } ]
    return (
        <div className='dropdownselect'>
            <div className='dropdownlabel'>
                {label}
            </div>
            { options.length > 1 ? (
                <select onChange={setSelected} value={selectedValue}>
                    {options.map(option => (
                        <option key={option.id} value={option.value}>{option.name}</option>
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

DropdownSelect.defaultProps = {
    label: '',
    options: [{ name: '' }],
    setSelected: () => true
}

export default DropdownSelect;