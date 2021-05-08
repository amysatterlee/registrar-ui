import React from 'react';
import '../stylesheets/styles.css';

const EventsHeader = () => {
    return (
        <div className='cardlistheader'>
            <div className='pageheader'>Events</div>
            <button className='bigbutton'>
                Create Event <i class='fas fa-plus fa-lg'></i>
            </button>
        </div>
    )
}

export default EventsHeader;