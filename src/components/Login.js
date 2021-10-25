import React from 'react'
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

function Login() {
    const history = useHistory();

    const routeChange = () => {
        let path = `/community`;
        history.push(path);
    }

    return (
        <Container>
            <Logo />
            <Sign__In>
                <button onClick={routeChange}>Sign In</button>
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