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
    border : 2px solid red;
`