import React from 'react';
import BusinessBanner from '../components/banner/BusinessBanner';
import OfferingsWidget from '../components/offerings/OfferingsWidget';
import '../stylesheets/styles.css';

const BusinessPage = ({ account }) => {
    return (
        <>
            <BusinessBanner account={account} />
            <OfferingsWidget account={account} />
        </>
    );
};

export default BusinessPage;