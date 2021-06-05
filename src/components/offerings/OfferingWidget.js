import React from 'react';
import Badge from '../common/Badge';

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
    }
    <i class="fas fa-theater-masks"></i>

    return (
        <div className='container'>
            <div className='offering'>
                <div id='offeringheader'>{offering.title}</div>
                <div id='offeringdetails'>{offering.description}</div>
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
                <form>Form Goes Here</form>
            </div>
        </div>
    );
};

export default OfferingWidget;