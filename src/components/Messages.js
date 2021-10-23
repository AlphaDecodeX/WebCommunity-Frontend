import React from 'react'
import styled from 'styled-components';

function Messages() {
    return (
        <Container>
            <h1>Hello Messages here</h1>
        </Container>
    )
}

export default Messages


const Container = styled.div`
    z-index: 2;
    background-color: yellow;
    position: relative;
    left: 25vw;
    width: 70%;
    height: 80vh;
`
// const LeftMessages = styled.div`

// `

// const RightMessages = styled.div`

// `