import React from 'react';
import '../stylesheets/styles.css';
import EventCard from './EventCard';

const EventsIndex = ({ events }) => {
    return (
        <div className='container center-items'>
            {events.map(event => (
                <EventCard key={event.id} event={event}/>
            ))}
        </div>
    )
}

export default EventsIndex;