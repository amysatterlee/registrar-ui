import React from 'react';

const OfferingWidget = ({ offering }) => {
    return (
        <div className='container'>
            <div className='offering'>
                <div id='offeringheader'>{offering.title}</div>
                <div id='offeringdetails'>{offering.description}</div>
            </div>
            <div className='formdiv'>
                <form>Form Goes Here</form>
            </div>
        </div>
    );
};

export default OfferingWidget;