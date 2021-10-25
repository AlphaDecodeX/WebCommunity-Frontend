import React from 'react'
import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';
import AttachmentIcon from '@mui/icons-material/Attachment';
import MicIcon from '@mui/icons-material/Mic';

function Messages() {
    const textValue = React.useRef(null);
    const myMessage = React.useRef(null);

    function printValue() {
        var p = document.createElement('Me');
        var textAnswer = document.createTextNode(textValue.current.value);
        p.appendChild(textAnswer);
        myMessage.current.appendChild(p);
        console.log(textValue.current.value);
    }

    return (
        <Container>
            <Messages__Box ref={myMessage}>
                <Other>Hello Lovepreet Singh</Other>
                <Me>Hi, How can I help you ?</Me>
            </Messages__Box>

            {/* Footer Starts From Here..... */}
            <Footer>
                <TextArea ref={textValue} />
                <Buttons__Container>
                    <SendIcon fontSize="large" onClick={printValue} />
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
    height: 100vh;
    display: flex;
    justify-content: space-around;
    overflow: hidden;
`
const Messages__Box = styled.div`
    border: 2px solid red;
    position: absolute;
    bottom:15%;
    left:0;
    width: 70vw;
`

const Footer = styled.div`
    position: absolute;
    bottom: 5%;
    display: flex;
    right: 10%;
    justify-content: space-around;
    border: 2px solid black;
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
const Other = styled.p`
    border: 2px solid black;
    max-width: 20%;
`

const Me = styled.p`
    float: right;
    border: 2px solid black;
    max-width: 20%;
`