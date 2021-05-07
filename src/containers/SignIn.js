import SignInForm from '../components/SignInForm';

const SignIn = ({ setUser }) => {
    const handleSubmit = (email, password) => {
        console.log('submitted');
        // TODO call api with email and password to validate account and get token and account id
        // TODO pass account id and token to setUser
    }
    return (
        <SignInForm handleSubmit={handleSubmit}/>
    );
};

export default SignIn;