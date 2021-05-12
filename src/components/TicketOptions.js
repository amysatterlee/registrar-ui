import React from 'react';
import FormInput from './FormInput';

const TicketOptions = ({ options, updateOption }) => {

    const renderOption = (option) => {
        const changeDate = (val) => {
            updateOption({ ...option, date: val });
        };
        const changeTime = (val) => {
            updateOption({ ...option, time: val });
        };
        const changeTickets = (val) => {
            updateOption({ ...option, tickets: val });
        };
        const changeMultiprice = (val) => {
            updateOption({ ...option, multiprice: val });
        };
        const changePrice = (val) => {
            updateOption({ ...option, price: val });
        }
        return (
            <div key={option.id} className='formsubsection'>
                <div className='formrow'>
                    <FormInput
                        label='Date:'
                        inputType='date'
                        value={option.date}
                        handleChange={changeDate}
                    />
                    <FormInput
                        label='Time:'
                        inputType='time'
                        value={option.time}
                        handleChange={changeTime}
                    />
                    <FormInput
                        label='Tickets Available:'
                        inputType='integer'
                        value={option.tickets}
                        handleChange={changeTickets}
                    />
                </div>
                <div className='formrow'>
                    <FormInput
                        label='Price:'
                        inputType='money'
                        value={option.price}
                        handleChange={changePrice}
                    />
                    <FormInput
                        label='Multiple Prices:'
                        inputType='checkbox'
                        value={option.multiprice}
                        handleChange={changeMultiprice}
                        className='checkbox'
                    />
                    <div className='forminput'></div>
                </div>
            </div>
        )
    }

    return (
        <div className='formsection'>
            <div className='header'>Ticket Options</div>
            {options.map(option => renderOption(option))}
            <div className='formsectiontoggle'>
                Add another date/time <i className='fas fa-plus fa-lg'></i>
            </div>
        </div>
    );
}

export default TicketOptions;