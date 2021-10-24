import React from 'react';
import SideBar from "./SideBar";
import Messages from './Messages';
import styled from 'styled-components';

function Canvas() {
    return (
        <Container>
            <SideBar />
            <Messages />
            {/* <Footer /> */}
        </Container>
    )
}

export default Canvas

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color:red;
    position: relative;
`