import React from 'react';
import BusinessBanner from '../components/banner/BusinessBanner';
import OfferingsWidget from '../components/offerings/OfferingsWidget';
import OfferingWidget from '../components/offerings/OfferingWidget';
import InformationPopUp from '../components/common/InformationPopUp';
import '../stylesheets/styles.css';

const BusinessPage = ({
    account,
    offering,
    offerings,
    activeTab,
    tabs,
    onTabPress,
    loading,
    formSubmission,
    submitted,
    clearSubmitted
}) => {

    const handleFormSubmit = (data) => {
        formSubmission(offering.id, data);
    }

    return (
        <>
            <BusinessBanner account={account} />
            {offering ? (
                <>
                    <OfferingWidget
                        offering={offering}
                        handleSubmit={handleFormSubmit}
                        submitted={submitted}
                    />
                    {submitted && (
                        <InformationPopUp
                            header='Request Submitted'
                            text='Thank you for submitting your information. You should receive a phone call or email within 48 hours to discuss your request.'
                            dismiss={clearSubmitted}
                        />
                    )}
                </>
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