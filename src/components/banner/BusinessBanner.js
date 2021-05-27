import React from 'react';

const BusinessBanner = ({ account }) => {
    const renderStreetOne = () => {
        return account.streetOne;
    };

    const renderStreetTwo = () => {
        return account.streetTwo || null;
    };

    const renderCityState = () => {
        return `${account.city}, ${account.state} ${account.zip}`;
    };

    const imageSource = () => {
        if (account.logoSaved) {
            return `./logos/${account.id}/logo.png`;
        }
        return './src/images/generic-logo.png';
    };

    return (
        <div className='banner'>
            <div className='bannerlogo'>
                <img className='logoimage' src={imageSource()}/>
            </div>
            <div className='bannertext'>
                <div className='title'>{account.businessName}</div>
                <div className='bannertextdetail'>
                    <i className="fas fa-phone-square-alt"></i>
                    <div>{account.phone}</div>
                </div>
                <div className='bannertextdetail'>
                    <i className="fas fa-map-marker-alt"></i>
                    <div>
                        <div>{renderStreetOne()}</div>
                        <div>{renderStreetTwo()}</div>
                        <div>{renderCityState()}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BusinessBanner;