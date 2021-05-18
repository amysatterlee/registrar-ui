import React, { useState, useEffect } from 'react';
import FormInput from '../common/FormInput';
import TicketOptions from './TicketOptions';
import { generateRandomId } from '../../helpers/helpers';

const defaultTicketOptions = [
    { id: generateRandomId(), date: '', time: '', tickets: 0, multiprice: false, price: 0.0 }
];

const EventFrom = ({ event, saveEvent, closeForm }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [ticketOptions, setTicketOptions] = useState([...defaultTicketOptions]);
    /*
        [
            { id: , date: , time: , tickets: , multiprice: false, price: },
            { id: , date: , time: , tickets: , multiprice: true, prices: [ { id: , price: , description: } ] }
        ]
    */

    useEffect(() => {
        if (event) {
            setTitle(event.title);
            setDescription(event.description);
            setTicketOptions(event.ticketOptions);
        }
    }, [event]);

    const updateOption = (option) => {
        const options = ticketOptions.map(item => {
            if (item.id == option.id) {
                return option;
            }
            return item;
        });
        setTicketOptions(options);
    };

    const handlePreview = (e) => {
        e.preventDefault();
        console.log('Preview clicked');
    }

    const handleSave = (e) => {
        e.preventDefault();
        const newEvent = { title, description, ticketOptions };
        saveEvent(newEvent);
        closeForm();
    }

    const handleCancel = (e) => {
        e.preventDefault();
        closeForm();
    }

    return (
        <div className='container'>
            <form className='form'>
                <FormInput
                    label='Title:'
                    inputType='text'
                    value={title}
                    handleChange={setTitle}
                />
                <FormInput
                    label='Description:'
                    inputType='textarea'
                    value={description}
                    handleChange={setDescription}
                />
                <TicketOptions options={ticketOptions} updateOption={updateOption}/>
                <div className='formrow'>
                    <button className='bigbutton' onClick={handlePreview}>Preview</button>
                    <button className='bigbutton' onClick={handleSave}>Save</button>
                    <button className='bigbutton' onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default EventFrom;