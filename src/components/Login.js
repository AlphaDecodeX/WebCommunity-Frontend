import React from 'react'
import styled from 'styled-components';
import GoogleLogin from 'react-google-login';
import { useHistory } from 'react-router';
import { useDispatch } from "react-redux";
import { login } from './actions';

function Login() {
    let history = useHistory();
    const dispatch = useDispatch();

    const responseGoogle = (response) => {
        // console.log(response["profileObj"]["name"]);
        let profileName = (response["profileObj"]["name"]);
        let email = (response["profileObj"]["email"]);
        let url = (response["profileObj"]["imageUrl"]);

        let infoArray = [profileName, email, url];
        dispatch(login(infoArray));

        history.push({
            pathname: "/home"
        }
        );
    }

    return (
        <Container>
            <Logo />
            <Sign__In>
                <GoogleLogin
                    clientId="696722676551-6hg4e3ks5fumu5f17pt8e9e3904r5b6b.apps.googleusercontent.com"
                    buttonText="Sign In"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'} />
            </Sign__In>
        </Container>
    )
}

export default Login


const Container = styled.div`
    
`
const Logo = styled.div`
    background-image: url("https://www.pngall.com/wp-content/uploads/1/Community-High-Quality-PNG.png");

`
const Sign__In = styled.div`

`