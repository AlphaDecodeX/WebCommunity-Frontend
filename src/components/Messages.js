import React from 'react'
import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';
import AttachmentIcon from '@mui/icons-material/Attachment';
import MicIcon from '@mui/icons-material/Mic';

function Messages() {
    return (
        <Container>
            <LeftMessages>
                <p>Hello Lovepreet Singh</p>
                <p>What are you doing</p>
            </LeftMessages>

            <RightMessages>
                <p>I am doing Good</p>
                <p>What about you</p>
            </RightMessages>

            <Footer>
                <TextArea />
                <Buttons__Container>
                    <SendIcon fontSize="large" />
                    <AttachmentIcon fontSize="large" />
                    <MicIcon fontSize="large" />
                </Buttons__Container>
            </Footer>
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
    display: flex;
    justify-content: space-around;

`
const LeftMessages = styled.div`
    border: 2px solid red;
    position: absolute;
    bottom:0;
    left:0;
`

const RightMessages = styled.div`
    border: 2px solid red;
    position: absolute;
    bottom:0;
    right:0;
`
const Footer = styled.div`
    position: absolute;
    bottom: 5%;
    display: flex;
    right: 10%;
    justify-content: space-around;
    border: 2px solid yellow;
`
const TextArea = styled.textarea`
    border-radius: 5%;
    width: 50vw;
`

const Buttons__Container = styled.div`
    border: 2px solid black;
    color: white;
    justify-content: space-around;
    left: 2%;
    display:flex;
`