import React, { useState, useEffect } from 'react';
import FormInput from './FormInput';
import TicketOptions from './TicketOptions';

const defaultTicketOptions = [
    { id: 1, date: '', time: '', tickets: 0, multiprice: false, price: 0.0 }
];

const EventFrom = ({ event }) => {
    const [editingEvent, setEditingEvent] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [ticketOptions, setTicketOptions] = useState([...defaultTicketOptions]);
    /*
        [
            { id: , date: , time: , tickets: , multiprice: false, price: },
            { id: , date: , time: , tickets: , multiprice: true, prices: [ { price: , description: } ] }
        ]
    */

    useEffect(() => {
        if (event) {
            console.log(event);
            setEditingEvent(true);
            setTitle(event.title);
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
        console.log('Save clicked');
    }

    const handleCancel = (e) => {
        e.preventDefault();
        console.log('Cancel clicked');
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