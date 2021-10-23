import React from 'react';
import Footer from './Footer';
import SideBar from "./SideBar";
import styled from 'styled-components';

function Canvas() {
    return (
        <Container>
            <SideBar />
            <Footer />
        </Container>
    )
}

export default Canvas

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color:black;
`