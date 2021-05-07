const SignInForm = ({ handleSubmit }) => {
    const [emailValue, setEmailValue] = React.useState('');
    const [passwordValue, setPasswordValue] = React.useState('');

    const updateEmail = (event) => {
        setEmailValue(event.target.value);
    }

    const updatePassword = (event) => {
        setPasswordValue(event.target.value);
    }

    const submitForm = (e) => {
        e.preventDefault();
        handleSubmit(emailValue, passwordValue);
    }

    return (
        <form>
            <label>
                Email:
                <input type='text' value={emailValue} onChange={updateEmail}/>
            </label>
            <label>
                Password:
                <input type='password' value={passwordValue} onChange={updatePassword}/>
            </label>
            <button onClick={submitForm}>Sign In</button>
        </form>
    )
}

export default SignInForm;