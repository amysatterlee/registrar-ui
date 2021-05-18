import React, { useState, useMemo } from 'react';
import DropdownSelect from '../common/DropdownSelect';

const TicketForm = ({ options, handleAdd }) => {
    const [selectedWhen, setSelectedWhen] =  useState(options[0]);
    const [selectedPrice, setSelectedPrice] =  useState(options[0].price);
    const [selectedCount, setSelectedCount] =  useState(1);

    const whenOptions = useMemo(() => {
        return options.map(option => (
            { id: option.id, name: `${option.date} - ${option.time}`, value: option.id }
        ));
    }, [options]);

    const priceOptions = useMemo(() => {
        // start with single price per date/time assumption but leave room for multiprice
        return [ { id: 1, name: `$${selectedWhen.price}`, value: selectedWhen.price } ];
    }, [selectedWhen]);

    const countOptions = useMemo(() => {
        let opts = [];
        const max = Number(selectedWhen.tickets);
        for (let i = 1; i <= max; i++) {
            opts.push({ id: i, name: i, value: i });
        }
        return opts;
    }, [selectedWhen]);

    const setTicketsSelected = (e) => {
        setSelectedCount(Number(e.target.value));
    }

    const setPriceSelected = (e) => {
        // this won't be invoked until we have multiprice option
        console.log(e);
    }

    const setWhenSelected = (e) => {
        const option = options.find(opt => opt.id == e.target.value);
        setSelectedWhen(option);
        setSelectedPrice(option.price);
    }

    const handleAddToCart = (e) => {
        e.preventDefault();
        handleAdd(
            { option: selectedWhen, price: selectedPrice, count: selectedCount },
            resetForm
        );
    }

    const resetForm = () => {
        setSelectedCount(1);
    }

    return (
        <div className='ticketoptions'>
            <div className='selectoption'>
                <DropdownSelect
                    label='When: '
                    options={whenOptions}
                    setSelected={setWhenSelected}
                    selectedValue={selectedWhen.id}
                />
            </div>
            <div className='selectoption'>
                <DropdownSelect
                    label='Price: '
                    options={priceOptions}
                    setSelected={setPriceSelected}
                    selectedValue={selectedPrice}
                />
            </div>
            <div className='selectoption'>
                <DropdownSelect
                    label='# Tickets: '
                    options={countOptions}
                    setSelected={setTicketsSelected}
                    selectedValue={selectedCount}
                />
            </div>
            <button className='optionsbutton' onClick={handleAddToCart}>
                Add to Cart
            </button>
        </div>
    )
}

export default TicketForm;