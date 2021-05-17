import React, { useState } from 'react';
import DropdownSelect from '../common/DropdownSelect';

const TicketOptions = ({ options }) => {
    const [selectedOption, setSelectedOption] =  useState(options[0]);

    const getDateOptions = () => {
        // options = [{ id: , name: , value: }]
        return options.map(option => (
            { id: option.id, name: `${option.date} - ${option.time}`, value: option.id }
        ))
    }

    const getPriceOptions = () => {
        if (selectedOption && selectedOption.multiprice) {
            return selectedOption.prices.map(price => (
                { id: price.id, name: price.value, value: price.id }
            ));
        }
        return [ { id: 1, name: selectedOption.price, value: selectedOption.price } ];
    }

    const getCountOptions = () => {
        let countOptions = [];
        let max = Number(selectedOption.tickets);
        for (let idx = 1; idx <= max; idx ++) {
            countOptions.push({ id: idx, name: idx, value: idx });
        }
        return countOptions;
    }

    console.log(options);

    return (
        <div className='ticketoptions'>
            <div className='selectoption'>
                <DropdownSelect options={getDateOptions()} />
            </div>
            <div className='selectoption'>
                <DropdownSelect options={getPriceOptions()} />
            </div>
            <div className='selectoption'>
                <DropdownSelect options={getCountOptions()} />
            </div>
            <button className='bigbutton'>
                Add to Cart
            </button>
        </div>
    )
}

export default TicketOptions;