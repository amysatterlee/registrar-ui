import React from 'react';
import '../stylesheets/styles.css';

const EventCard = ({ event }) => {
    return (
        <div className='card'>
            <div className='cardheader'>
                <div>{event.title}</div>
            </div>
            <div className='cardbody'>
                <div className='cardtext'>
                    <div>{event.details.description}</div>
                </div>
                <div className='carddetails'>
                    <div className='carddetail'><bold>Date:</bold> {event.details.date}</div>
                    <div className='carddetail'><bold>Time:</bold> {event.details.time}</div>
                    <div className='carddetail'><bold>Tickets:</bold> {event.details.maxTickets}</div>
                </div>
            </div>
        </div>
    )
}

export default EventCard;