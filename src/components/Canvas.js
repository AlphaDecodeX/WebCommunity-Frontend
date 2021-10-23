import React from 'react'
import Footer from './Footer'
import styled from 'styled-components'

function Canvas() {
    return (
        <Container>
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