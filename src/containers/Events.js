import React, { useState, useEffect } from 'react';
import { fetchEvents, createEvent, updateEvent } from '../api/events';
import { callApi } from '../helpers/helpers';
import EventsIndex from '../components/events/EventsIndex';
import EventsHeader from '../components/events/EventsHeader';
import EventForm from '../components/events/EventForm';

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

    const openForm = () => {
        setEvent(null);
        setShowForm(true);
    };

    const closeForm = () => {
        setEvent(null);
        setShowForm(false);
    };

    const editEvent = (eventToEdit) => {
        setEvent(eventToEdit);
        setShowForm(true);
    };

    const handleSave = (newEvent) => {
        if (event) {
            changeEvent(newEvent);
        } else {
            addEvent(newEvent);
        }
        updateIndex(newEvent);
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

    const changeEvent = (updatedEvent) => {
        callApi({
            api: updateEvent(accountId, event.id, updatedEvent, token),
            successCb: resp => {
                console.log(resp);
            },
            failureCb: err => { console.log(err) }
        })
    }

    const updateIndex = (newEvent) => {
        let newEvents;
        if (event) {
            newEvents = events.map(item => {
                if (item.id == event.id) {
                    return newEvent;
                }
                return item;
            });
        } else {
            newEvents = events.slice();
            newEvents.push(newEvent);
        }
        setEvents(newEvents);
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
            <EventsHeader title={setTitle()} handleFormClick={openForm} formOpen={showForm}/>
            {showForm ? (
                <EventForm event={event} saveEvent={handleSave} closeForm={closeForm}/>
            ) : (                    
                <EventsIndex events={events} editEvent={editEvent}/>
            )}
        </>
    )
};

export default Events;