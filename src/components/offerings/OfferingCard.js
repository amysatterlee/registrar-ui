import React from 'react';
import Button from '../common/Button';

const OfferingCard = ({ accountId, offering }) => {
    const buttonText = () => {
        switch (offering.offeringType) {
            case 'drop-in':
                return 'Book Now';
            case 'appointment':
                return 'Learn More';
            default:
                return 'Register'
        }
    };

    const handleClick = (e) => {
        e.preventDefault();
        const href = `${window.location.origin}/${accountId}?offering=${offering.id}`;
        window.location.href = href;
    };

    return (
        <div className='offeringcard'>
            <div id='cardtitle'>
                {offering.title}
            </div>
            <div id='cardbutton'>
                <Button text={buttonText()} handleClick={handleClick} />
            </div>
        </div>
    )
};

export default OfferingCard;