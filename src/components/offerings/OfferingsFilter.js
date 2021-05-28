import React from 'react';

const OfferingsFilter = ({ activeTab, tabs }) => {
    const tabClass = (tab) => {
        if (activeTab == tab) {
            return 'tab active';
        }
        return 'tab';
    };

    return (
        <div className='categoryfilter'>
            {tabs.map(tab => (
                <button key={tab.key} className={tabClass(tab.key)} onClick={tab.onPress}>
                    {tab.name}
                </button>
            ))}
        </div>
    );
};

export default OfferingsFilter;