import { login } from '../api/accounts';
import { callApi } from '../helpers/helpers.js';
import SignInForm from '../components/SignInForm';

const SignIn = ({ setUser }) => {

    const successfulSignIn = (resp) => {
        setUser(resp.id, resp.email, resp.token);
    }

    const failedSignIn = (err) => {
        console.log('Error logging in');
        console.log(err);
    }

    const handleSubmit = (email, password) => {
        callApi({
            api: login({email, password}),
            successCb: resp => successfulSignIn(resp),
            failureCb: err => failedSignIn(err)
        });
    }
    return (
        <SignInForm handleSubmit={handleSubmit}/>
    );
};

export default SignIn;