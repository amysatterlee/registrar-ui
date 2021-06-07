import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { fetchAccount } from './api/accounts';
import { callApi } from './helpers/helpers';
import BusinessPage from './pages/BusinessPage';
import { fetchPublicOffering, fetchPublicOfferings, offeringSubmission } from './api/offerings';

const parseAccount = (path) => {
  const parts = path.split('/').filter(item => item.length > 0);
  return parts[0];
};

const parseOffering = (search) => {
  const queryPart = search.replace('?', '').split('&')
                          .filter(item => item.includes('offering='));
  if (queryPart && queryPart[0]) {
    return queryPart[0].replace('offering=', '');
  }
  return;
};

const App = () => {
  const [account, setAccount] = useState(null);
  const [offering, setOffering] = useState(null);
  const [activeTab, setActiveTab] = useState('drop-in');
  const [offerings, setOfferings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(null);

  const tabs = [
    {key: 'drop-in', name: 'Drop In', onPress: () => handleTabPress('drop-in')},
    {key: 'program', name: 'Programs', onPress: () => handleTabPress('program')},
    {key: 'appointment', name: 'By Appointment', onPress: () => handleTabPress('appointment')}
  ];

  const handleTabPress = (type) => {
    setActiveTab(type);
    loadOfferings(type);
  };

  const loadOfferings = (type) => {
    setLoading(true);
    callApi({
        api: fetchPublicOfferings(account.id, type),
        successCb: resp => {
            setOfferings(resp);
            setLoading(false);
        },
        failureCb: err => {
            console.log(err);
            setLoading(false);
        }
    });
  };

  const formSubmission = (offeringId, data) => {
    callApi({
      api: offeringSubmission(account.id, offeringId, data),
      successCb: resp => setSubmitted(true),
      failureCb: err => console.log(err)
    });
  }

  useEffect(() => {
    const accountId = parseAccount(window.location.pathname);
    if (accountId && (!account || account.id !== accountId)) {
      // fetch account
      callApi({
        api: fetchAccount(accountId),
        successCb: resp => setAccount(resp),
        failureCb: err => console.log(err)
      });
    }
    const offeringId = parseOffering(window.location.search);
    if (offeringId) {
      // fetch offering
      callApi({
        api: fetchPublicOffering(accountId, offeringId),
        successCb: resp => setOffering(resp),
        failureCb: err => console.log(err)
      });
    }
  }, [window.location.pathname]);

  useEffect(() => {
    if (account && account.id && !offering) {
      loadOfferings(activeTab);
    }
  }, [account]);

  const render = () => {
    if (account) {
      return (
        <BusinessPage
          account={account}
          offering={offering}
          activeTab={activeTab}
          offerings={offerings}
          loading={loading}
          onTabPress={handleTabPress}
          tabs={tabs}
          formSubmission={formSubmission}
          submitted={submitted}
          clearSubmitted={() => setSubmitted(false)}
        />
      )
    }
    return null;
  }

  return render();
}

const domContainer = document.querySelector('#App');
ReactDOM.render(<App/>, domContainer);