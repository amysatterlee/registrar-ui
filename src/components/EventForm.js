import React, { useState, useEffect } from 'react';

const EventFrom = ({ event }) => {
    const [editingEvent, setEditingEvent] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [maxTickets, setMaxTickets] = useState(0);
    const [price, setPrice] = useState(0.0);
    const [multiprice, setMultiprice] = useState(false);

    useEffect(() => {
        if (event) {
            setEditingEvent(event);
        }
    }, []);

    return (
        <div className='container'>
            <form className='form'>
                <div className='forminput'>
                    <label>
                        Title:
                        <input type='text' value={title} onChange={setTitle}/>
                    </label>
                </div>
                <div className='forminput'>
                    <label>
                        Description:
                        <input type='text' value={description} onChange={setDescription}/>
                    </label>
                </div>
                <div className='formsection'>
                    <div className='header'>Ticket options</div>
                    <div className='formsubsection'>
                        <div className='formrow'>
                            <div className='forminput'>
                                <label>
                                    Date:
                                    <input type='date' value={date} onChange={setDate}/>
                                </label>
                            </div>
                            <div className='forminput'>
                                <label>
                                    Time:
                                    <input type='time' value={time} onChange={setTime}/>
                                </label>
                            </div>
                            <div className='forminput'>
                                <label>
                                    Tickets Available:
                                    <input type='integer' value={maxTickets} onChange={setMaxTickets}/>
                                </label>
                            </div>
                        </div>
                        <div className='formrow'>
                            <div className='forminput'>
                                <label>
                                    Price:
                                    <input type='money' value={price} onChange={setPrice}/>
                                </label>
                            </div>
                            <div className='forminput'>
                                <label>
                                    Multiple Prices:
                                    <input className='checkbox' type='checkbox' value={multiprice} onChange={setMultiprice}/>
                                </label>
                            </div>
                            <div className='forminput'></div>
                        </div>
                    </div>
                    <div className='formsectiontoggle'>
                        Add another date/time <i className='fas fa-plus fa-lg'></i>
                    </div>
                </div>
                <div className='formrow'>
                    <button className='bigbutton'>Save</button>
                    <button className='bigbutton'>Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default EventFrom;