import React, { useState } from 'react';
import OfferingsFilter from './OfferingsFilter';

const OfferingsWidget = ({ account }) => {
    const [activeTab, setActiveTab] = useState('drop-in');

    const tabs = [
        {key: 'drop-in', name: 'Drop In', onPress: () => handlePress('drop-in')},
        {key: 'program', name: 'Programs', onPress: () => handlePress('program')},
        {key: 'appointment', name: 'By Appointment', onPress: () => handlePress('appointment')}
    ];

    const handlePress = (type) => {
        setActiveTab(type);
        // TODO this is where you will call api to fetch the appropriate offerings
    };

    const renderActiveTab = () => {
        switch (activeTab) {
            case 'drop-in':
                return <div>Drop In Tab</div>;
            case 'program':
                return <div>Programs Tab</div>;
            case 'appointment':
                return <div>Appointment Tab</div>;
        }
    };

    return (
        <div className='container'>
            <OfferingsFilter activeTab={activeTab} tabs={tabs}/>
            {renderActiveTab()}
        </div>
    );
};

export default OfferingsWidget;