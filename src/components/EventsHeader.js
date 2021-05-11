import React from 'react';
import '../stylesheets/styles.css';

const EventsHeader = ({ handleFormClick, formOpen, title }) => {
    return (
        <div className='cardlistheader'>
            <div className='pageheader'>{title}</div>
            {formOpen ? null : (
                <button className='bigbutton' onClick={handleFormClick}>
                    Create Event <i className='fas fa-plus fa-lg'></i>
                </button>
            )}
        </div>
    )
}

export default EventsHeader;