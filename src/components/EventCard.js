import React from 'react';
import '../stylesheets/styles.css';

const EventCard = ({ event }) => {
    return (
        <div className='card'>
            <div className='cardheader'>
                <div className='headertext'>{event.title}</div>
                <button className='iconbutton'>
                    <i className="far fa-edit fa-lg"></i>
                </button>
                <br></br>
                <button className='iconbutton'>
                    <i className='far fa-trash-alt fa-lg'></i>
                </button>
            </div>
            <div className='cardbody'>
                <div className='cardtext'>
                    <div>{event.details.description}</div>
                </div>
                <div className='carddetails'>
                    <div className='carddetail'><strong>Date:</strong> {event.details.date}</div>
                    <div className='carddetail'><strong>Time:</strong> {event.details.time}</div>
                    <div className='carddetail'><strong>Tickets:</strong> {event.details.maxTickets}</div>
                </div>
            </div>
        </div>
    )
}

export default EventCard;