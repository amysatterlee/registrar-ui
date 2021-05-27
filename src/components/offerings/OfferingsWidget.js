import React, { useState } from 'react';

const OfferingsWidget = ({ account }) => {
    const [activeTab, setActiveTab] = useState('drop-in');

    const tabClass = (tab) => {
        if (activeTab == tab) {
            return 'tab active';
        }
        return 'tab';
    };

    const handlePress = (type) => {
        setActiveTab(type);
        // TODO this is where you will call api to fetch the appropriate offerings
    }

    return (
        <div className='container'>
            <div className='categoryfilter'>
                <button
                    className={tabClass('drop-in')}
                    onClick={() => handlePress('drop-in')}
                >
                    Drop In
                </button>
                <button
                    className={tabClass('program')}
                    onClick={() => handlePress('program')}
                >
                    Programs
                </button>
                <button
                    className={tabClass('appointment')}
                    onClick={() => handlePress('appointment')}
                >
                    Appointments
                </button>
            </div>
        </div>
    );
};

export default OfferingsWidget;