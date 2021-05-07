import Home from './containers/Home';
import About from './containers/About';
import SignUp from './containers/SignUp';
import SignIn from './containers/SignIn';
import AccountHome from './containers/AccountHome';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    state = {
      accountId: null,
      token: null
    }
  }

  componentDidMount() {
    this.getUser();
  }

  updateUser = ({accountId, token}) => {
    // the only time this should be called is when the user logs in successfully
    // or signs out
    if (accountId && token) {
      window.localStorage.setItem('QueueTime_Account', accountId);
      window.localStorage.setItem('QueueTime_Token', token);
      window.location.pathname = '/';
    } else {
      window.localStorage.removeItem('QueueTime_Account');
      window.localStorage.removeItem('QueueTime_Token');
      window.location.pathname = '/';
    }
  };

  getUser = () => {
    const id = window.localStorage.getItem('QueueTime_Account');
    const tok = window.localStorage.getItem('QueueTime_Token');
    if (id && tok) {
      this.setState({accountId: id, token: tok});
    } else {
      this.setState({accountId: null, token: null});
    }
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/signin" component={SignIn}/>
          <Route path="/:account_id" component={AccountHome}/>
        </Switch>
      </Router>
    );
  }
}

const domContainer = document.querySelector('#App');
ReactDOM.render(<App/>, domContainer);
