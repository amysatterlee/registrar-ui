import React, { useEffect, useState } from 'react';
import AccountNavBar from '../components/AccountNavBar';

const AccountHome = ({ accountId, token, email, handleSignOut }) => {
    const [view, setView] = useState('dashboard');

    const options = [
        { id: 1, title: 'Dashboard', onClick: () => setView('dashboard'), icon: 'far fa-chart-bar' },
        { id: 2, title: 'Events', onClick: () => setView('events'), icon: 'far fa-calendar-alt' },
        { id: 3, title: 'FAQ', onClick: () => setView('faq'), icon: 'far fa-question-circle' },
        { id: 4, title: 'Sign Out', onClick: handleSignOut, icon: 'fas fa-sign-out-alt' }
    ];

    useEffect(() => {
        // TODO fetch account data for dashboard
        console.log('AccountHome useEffect');
    }, []);

    return (
        <AccountNavBar options={options} />
    );
};

export default AccountHome;