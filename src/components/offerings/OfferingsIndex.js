import React from 'react';
import Loading from '../common/Loading';
import OfferingCard from './OfferingCard';

const OfferingsIndex = ({ type, offerings, loading, accountId }) => {
    const renderOfferings = () => {
        return (
            <div>
                {offerings.map(offering => (
                    <OfferingCard key={offering.id} accountId={accountId} offering={offering}/>
                ))}
            </div>
        )
    };

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                renderOfferings()
            )}
        </>
    )
};

export default OfferingsIndex;