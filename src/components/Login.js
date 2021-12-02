import React from 'react'
import GoogleLogin from 'react-google-login';
import { useHistory } from 'react-router';
import classes from "./Login.module.css"

function Login() {
    let history = useHistory();

    const responseGoogle = (response) => {
        let profileName = (response["profileObj"]["name"]);
        let email = (response["profileObj"]["email"]);
        let url = (response["profileObj"]["imageUrl"]);

        localStorage.setItem("profileName", profileName);
        localStorage.setItem("email", email);
        localStorage.setItem("url", url);

        history.push({
            pathname: "/home"
        }
        );
    }

    return (
        <div className={classes.login__homepage}>
            <img src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-will-provide-official-verification-esports-team-4.png" />
            <GoogleLogin
                clientId="696722676551-6hg4e3ks5fumu5f17pt8e9e3904r5b6b.apps.googleusercontent.com"
                buttonText="Sign In"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}

export default Login