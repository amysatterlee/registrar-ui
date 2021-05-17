import React from 'react';

const EventBanner = ({ title, description }) => {
    return (
        <>
            <div className='eventheader'>
                {title}
            </div>
            <div className='eventdetails'>
                <div>{description}</div>
            </div>
        </>
    )
}

export default EventBanner;