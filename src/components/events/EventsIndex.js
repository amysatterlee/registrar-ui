import React from 'react';
import '../../stylesheets/styles.css';
import EventCard from './EventCard';

const EventsIndex = ({ events, editEvent, deleteEvent }) => {
    return (
        <div className='container center-items'>
            {events.map(event => (
                <EventCard
                    key={event.id}
                    event={event}
                    editEvent={editEvent}
                    deleteEvent={deleteEvent}
                />
            ))}
        </div>
    )
}

export default EventsIndex;