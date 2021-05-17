import React from 'react';
import './styles.css';
import EventBanner from './EventBanner';
import TicketOptions from './TicketOptions';

const EventPage = ({ event }) => {
    return (
        <div className='container fullpage'>
            <EventBanner title={event.title} description={event.description} />
            <div className='cartline'>
                <button className='iconbutton'>
                    <i className="fas fa-shopping-cart fa-2x"></i>
                </button>
            </div>
            <TicketOptions options={event.ticketOptions} />
        </div>
    )
}

export default EventPage;