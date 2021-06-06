import React from 'react';
import BusinessBanner from '../components/banner/BusinessBanner';
import OfferingsWidget from '../components/offerings/OfferingsWidget';
import OfferingWidget from '../components/offerings/OfferingWidget';
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
                <OfferingWidget
                    offering={offering}
                />
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