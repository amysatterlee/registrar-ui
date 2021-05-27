import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { fetchAccount } from './api/accounts';
import { callApi } from './helpers/helpers';
import BusinessPage from './containers/BusinessPage';

const App = () => {
  const [account, setAccount] = useState(null);

  useEffect(() => {
    const accountId = window.location.pathname.replace('/', '');
    if (accountId) {
      callApi({
        api: fetchAccount(accountId),
        successCb: resp => setAccount(resp),
        failureCb: err => console.log(err)
      })
    }
  }, []);

  const render = () => {
    if (account) {
      return <BusinessPage account={account}/>
    }
    return null;
  }

  return render();
}

const domContainer = document.querySelector('#App');
ReactDOM.render(<App/>, domContainer);