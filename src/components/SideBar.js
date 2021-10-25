import React from 'react'
import styled from 'styled-components'

function SideBar() {
    return (
        <Container>
            <Logo>
                <img src="https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg" alt="" />
                <span>Community</span>
            </Logo>
            <Channels>
                <a href="a">Channel 1</a>
                <a href="a">Channel 2</a>
                <a href="a">Channel 3</a>
            </Channels>
        </Container>
    )
}

export default SideBar


const Container = styled.div`
    height: 100vh;
    width: 20vw;
    position: absolute;
    z-index: 1;
    background-color: white;
`

const Logo = styled.div`
    display: flex;
    img{
        border: 2px solid black;
        border-radius: 50%;
        width: 30%;
        height: 30%;
    }
    align-items: center;
    justify-content: flex-start;
    gap: 0 5%;
`

const Channels = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5% 0% 0% 5%;
`