import React, { useState, useEffect } from 'react';
import { fetchPublicEvent } from '../api/events';
import { callApi } from '../helpers/helpers';
import EventPage from '../components/public/EventPage';

const Registration = ({ eventId }) => {
    const [event, setEvent] = useState(null);

    useEffect(() => {
        loadEvent();
    }, []);

    const loadEvent = () => {
        callApi({
            api: fetchPublicEvent(eventId),
            successCb: resp => setEvent(resp),
            failureCb: err => console.log(err)
        });
    }

    return (
        <div className='eventpage'>
            {event && (
                <EventPage event={event} />
            )}
        </div>
    );
};

export default Registration;