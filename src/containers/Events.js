import React, { useState, useEffect } from 'react';
import { fetchEvents } from '../api/events';
import { callApi } from '../helpers/helpers';
import EventsIndex from '../components/EventsIndex';
import EventsHeader from '../components/EventsHeader';
import EventForm from '../components/EventForm';

const Events = ({ accountId, token, email }) => {
    const [events, setEvents] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [event, setEvent] = useState(null);

    useEffect(() => {
        console.log('inside Events useEffect');
        callApi({
            api: fetchEvents(accountId, token),
            successCb: resp => {
                console.log(resp);
                setEvents(resp.events)
            },
            failureCb: err => console.log(err)
        })
    }, []);

    const handleFormClick = () => {
        setEvent(null);
        setShowForm(true);
    };

    const setTitle = () => {
        if (showForm) {
            if (event) {
                return 'Edit Event';
            } else {
                return 'Create Event';
            }
        }
        return 'Events';
    }

    return (
        <>
            <EventsHeader title={setTitle()} handleFormClick={handleFormClick} formOpen={showForm}/>
            {showForm ? (
                <EventForm event={event}/>
            ) : (                    
                <EventsIndex events={events}/>
            )}
        </>
    )
};

export default Events;