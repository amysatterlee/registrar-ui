import React from 'react';
import BusinessBanner from '../components/banner/BusinessBanner';
import OfferingsWidget from '../components/offerings/OfferingsWidget';
import OfferingWidget from '../components/offerings/OfferingWidget';
import { fetchPublicOfferings } from '../api/offerings';
import { callApi } from '../helpers/helpers';
import '../stylesheets/styles.css';

const BusinessPage = ({
    account,
    offering,
    offerings,
    activeTab,
    tabs,
    onTabPress,
    loading
}) => {

    return (
        <>
            <BusinessBanner account={account} />
            {offering ? (
                <OfferingWidget />
            ) : (
                <OfferingsWidget
                    activeTab={activeTab}
                    tabs={tabs}
                    offerings={offerings}
                    loading={loading}
                    accountId={account.id}
                    onTabPress={onTabPress}
                />
            )}
        </>
    );
};

export default BusinessPage;