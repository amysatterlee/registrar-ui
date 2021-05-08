import React, { useState, useEffect } from 'react';
import { fetchEvents } from '../api/events';
import { callApi } from '../helpers/helpers';
import EventsIndex from '../components/EventsIndex';
import EventsHeader from '../components/EventsHeader';

const Events = ({ accountId, token, email }) => {
    const [events, setEvents] = useState([]);

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

    return (
        <>
            <EventsHeader />
            <EventsIndex events={events}/>
        </>
    )
};

export default Events;