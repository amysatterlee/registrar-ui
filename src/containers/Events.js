import React, { useState, useEffect } from 'react';
import { fetchEvents, createEvent, updateEvent, deleteEvent } from '../api/events';
import { callApi } from '../helpers/helpers';
import EventsIndex from '../components/events/EventsIndex';
import EventsHeader from '../components/events/EventsHeader';
import EventForm from '../components/events/EventForm';
import ConfirmPrompt from '../components/common/ConfirmPrompt';

const Events = ({ accountId, token, email }) => {
    const [events, setEvents] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [event, setEvent] = useState(null);
    const [deleteModal, setDeleteModal] = useState(false);

    useEffect(() => {
        console.log('inside Events useEffect');
        callApi({
            api: fetchEvents(accountId, token),
            successCb: resp => {
                console.log(resp.events)
                
                setEvents(resp.events.map(item => (
                    { ...item, url: `${window.location.origin}/event/${accountId}/${item.id}` }
                )))
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
    };

    const confirmDelete = (eventToDelete) => {
        setEvent(eventToDelete);
        setDeleteModal(true);
    };

    const handleDelete = () => {
        removeEvent(event.id);
        setEvent(null);
        setDeleteModal(false);
    }

    const cancelDelete = () => {
        setEvent(null);
        setDeleteModal(false);
    };

    const addEvent = (newEvent) => {
        callApi({
            api: createEvent(accountId, newEvent, token),
            successCb: resp => {
                updateIndex(newEvent);
            },
            failureCb: err => { console.log(err) }
        })
    }

    const changeEvent = (updatedEvent) => {
        callApi({
            api: updateEvent(accountId, event.id, updatedEvent, token),
            successCb: resp => {
                updateIndex(updatedEvent);
            },
            failureCb: err => { console.log(err) }
        })
    }

    const removeEvent = (id) => {
        callApi({
            api: deleteEvent(accountId, id, token),
            successCb: resp => {
                const newEvents = events.filter(item => item.id != id)
                setEvents(newEvents);
            },
            failureCb: err => {
                console.log(err);
            }
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
            newEvents.push({ ...newEvent, url: `${window.location.origin}/event/${accountId}/${event.id}` });
        }
        setEvent(null);
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
                <EventsIndex events={events} editEvent={editEvent} deleteEvent={confirmDelete}/>
            )}
            {deleteModal && (
                <ConfirmPrompt
                    confirmText='Are you sure you want to delete this event?'
                    confirmButtonText='Yes'
                    handleConfirm={handleDelete}
                    handleCancel={cancelDelete}
                />
            )}
        </>
    )
};

export default Events;