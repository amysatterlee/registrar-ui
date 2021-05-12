import React, { useState, useEffect } from 'react';
import { fetchEvents, createEvent } from '../api/events';
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
                console.log(resp.events)
                setEvents(resp.events)
            },
            failureCb: err => console.log(err)
        });
    }, []);

    const handleFormClick = () => {
        setEvent(null);
        setShowForm(true);
    };

    const handleSave = (newEvent) => {
        if (event) {
            console.log('updating event');
        } else {
            addEvent(newEvent);
        }
    }

    const addEvent = (newEvent) => {
        callApi({
            api: createEvent(accountId, newEvent, token),
            successCb: resp => {
                console.log(resp);
            },
            failureCb: err => { console.log(err) }
        })
    }

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
                <EventForm event={event} saveEvent={handleSave}/>
            ) : (                    
                <EventsIndex events={events}/>
            )}
        </>
    )
};

export default Events;