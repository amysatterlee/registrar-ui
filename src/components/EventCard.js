import React from 'react';
import '../stylesheets/styles.css';

const EventCard = ({ event }) => {

    const renderWhen = (idx) => {
        return `${event.ticketOptions[idx].date} - ${event.ticketOptions[idx].time}`;
    }

    const renderPrice = (idx) => {
        return `$${Number(event.ticketOptions[0].price).toFixed(2)}`
    }

    const multidates = () => {
        return (event.ticketOptions.length > 1);
    }

    const renderUrl = () => {
        return 'https://example.com/this_is_my_url/for_the_event/click_it_now';
    }

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
                    <div>{event.description}</div>
                </div>
                <div className='cardurl'>
                    <div><i>{renderUrl()}</i></div>
                    <button className='iconbutton'><i className="fas fa-external-link-alt fa-lg"></i></button>
                </div>
                <div className='carddetails'>
                    <div className='carddetail'><strong>When:</strong> {renderWhen(0)}</div>
                    <div className='carddetail'><strong>Price:</strong> {renderPrice(0)}</div>
                    <div className='carddetail'><strong>Tickets:</strong> {event.ticketOptions[0].tickets}</div>
                    {multidates && (
                        <button className='iconbutton'><i className="fas fa-caret-down fa-lg"></i></button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default EventCard;