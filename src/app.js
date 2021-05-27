import React, { useState, useEffect } from 'react';
import Home from './containers/Home';

const App = () => {
  const [account, setAccount] = useState(null);

  useEffect(() => {
    console.log(window.location);
  }, []);

  return (
    <div>Hello</div>
  )
}

const domContainer = document.querySelector('#App');
ReactDOM.render(<App/>, domContainer);