import React from 'react';
import Badge from '../common/Badge';
import DropInForm from '../forms/DropInForm';
import AppointmentForm from '../forms/AppointmentForm';
import RegisterForm from '../forms/RegisterForm';
import '../../stylesheets/styles.css';

const OfferingWidget = ({ offering }) => {

    const ageGroupColor = () => {
        switch (offering.ageGroup) {
            case 'adult':
                return 'purple';
            case 'teen':
                return 'blue';
            case 'child':
                return 'green';
            default:
                return 'grey';
        }
    };

    const locationColor = () => {
        switch (offering.offeringLocation) {
            case 'studio':
                return 'orange';
            case 'virtual':
                return 'green';
            default:
                return 'grey';
        }
    };

    const categoryColor = () => {
        switch (offering.category) {
            case 'fitness':
                return 'red';
            case 'dance':
                return 'green';
            default:
                return 'orange';
        }
    };

    const ageGroupIcon = () => {
        switch (offering.ageGroup) {
            case 'adult':
                return 'fas fa-male fa-lg';
            case 'teen':
                return 'fas fa-male fa-lg';
            case 'child':
                return 'fas fa-child fa-lg';
            default:
                return 'fas fa-users fa-lg';
        }
    };

    const locationIcon = () => {
        switch (offering.offeringLocation) {
            case 'studio':
                return 'far fa-building fa-lg';
            case 'virtual':
                return 'fas fa-desktop fa-lg';
            default:
                return 'far fa-plus-square fa-lg';
        }
    };

    const categoryIcon = () => {
        switch(offering.category) {
            case 'fitness':
                return 'fas fa-running fa-lg';
            case 'dance':
                return 'fas fa-music fa-lg';
            default:
                return 'fas fa-theater-masks fa-lg';
        }
    };
    
    const formHeader = () => {
        switch (offering.offeringType) {
            case 'drop-in':
                return 'Reserve Your Spot Now!';
            case 'appointment':
                return 'Request More Information';
            default:
                return 'Register Now!';
        }
    };

    const renderForm = () => {
        switch (offering.offeringType) {
            case 'drop-in':
                return <DropInForm />;
            case 'appointment':
                return <AppointmentForm />;
            default:
                return <RegisterForm />;
        }
    }

    return (
        <div className='container'>
            <div className='offering'>
                <div className='offeringheader'>{offering.title}</div>
                <div className='offeringdetails'>{offering.description}</div>
                <div className='badgesection'>
                    <Badge
                        text={offering.category}
                        color={categoryColor()}
                        icon={categoryIcon()}
                    />
                    <Badge
                        text={offering.ageGroup}
                        color={ageGroupColor()}
                        icon={ageGroupIcon()}
                    />
                    <Badge
                        text={offering.offeringLocation}
                        color={locationColor()}
                        icon={locationIcon()}
                    />
                </div>
            </div>
            <div className='formdiv'>
                <div className='formheader'>{formHeader()}</div>
                {renderForm()}
            </div>
        </div>
    );
};

export default OfferingWidget;