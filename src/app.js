import Home from './containers/Home';
import About from './containers/About';
import SignUp from './containers/SignUp';
import SignIn from './containers/SignIn';
import AccountHome from './containers/AccountHome';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accountId: null,
      token: null,
      email: null
    }
  }

  componentDidMount() {
    console.log('app component did mount');
    this.getUser();
  }

  setUser = (accountId, email, token) => {
    // the only time this should be called is when the user logs in successfully
    // or signs out
    if (accountId && token && email) {
      this.setState({accountId, token, email}, () => {
        window.localStorage.setItem('QueueTime_Account', accountId);
        window.localStorage.setItem('QueueTime_Email', email);
        window.localStorage.setItem('QueueTime_Token', token);
        window.location.pathname = '/';
      });
    } else {
      this.setState({accountId: null, token: null, email: null}, () => {
        window.localStorage.removeItem('QueueTime_Account');
        window.localStorage.removeItem('QueueTime_Email');
        window.localStorage.removeItem('QueueTime_Token');
        window.location.pathname = '/';
      });
    }
  };

  getUser = () => {
    const id = window.localStorage.getItem('QueueTime_Account');
    const email = window.localStorage.getItem('QueueTime_Email');
    const tok = window.localStorage.getItem('QueueTime_Token');
    if (id && tok && email) {
      this.setState({accountId: id, token: tok, email});
    } else {
      this.setState({accountId: null, token: null, email: null});
    }
  };

  authorized = () => {
    return (this.state.accountId && this.state.email && this.state.token);
  };

  renderAuthorizedRoute = (component) => {
    if (this.authorized()) {
      return component;
    } else {
      return <Redirect to='/signin' />;
    }
  };

  renderNonAuthorizedRoute = (component) => {
    if (this.authorized()) {
      return <Redirect to={`/${this.state.accountId}`} />;
    } else {
      return component;
    }
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => this.renderNonAuthorizedRoute(
            <Home />
          )}/>
          <Route path="/about" component={About}/>
          <Route path="/signup" render={() => this.renderNonAuthorizedRoute(
            <SignUp />
          )}/>
          <Route path="/signin" render={() => this.renderNonAuthorizedRoute(
            <SignIn {...this.props} setUser={this.setUser}/>
          )}/>
          <Route path="/:account_id" render={() => this.renderAuthorizedRoute(
            <AccountHome {...this.props} accountId={this.state.accountId} token={this.state.token}/>
          )}/>
        </Switch>
      </Router>
    );
  }
}

const domContainer = document.querySelector('#App');
ReactDOM.render(<App/>, domContainer);
