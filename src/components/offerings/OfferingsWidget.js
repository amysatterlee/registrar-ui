import React from 'react';
import OfferingsFilter from './OfferingsFilter';
import OfferingsIndex from './OfferingsIndex';

const OfferingsWidget = ({ tabs, activeTab, offerings, loading, accountId }) => {
    return (
        <div className='container'>
            <OfferingsFilter activeTab={activeTab} tabs={tabs}/>
            <OfferingsIndex
                type={activeTab}
                offerings={offerings}
                loading={loading}
                accountId={accountId}
            />
        </div>
    );
};

export default OfferingsWidget;