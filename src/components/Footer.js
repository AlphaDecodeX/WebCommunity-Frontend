import React from 'react'
import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send';
import AttachmentIcon from '@mui/icons-material/Attachment';
import MicIcon from '@mui/icons-material/Mic';

function Footer() {
    return (
        <Container>
            <TextArea />
            <Buttons__Container>
                <SendIcon fontSize="large" />
                <AttachmentIcon fontSize="large" />
                <MicIcon fontSize="large" />
            </Buttons__Container>
        </Container>
    )
}

export default Footer


const Container = styled.div`
    position: absolute;
    bottom: 5%;
    display: flex;
    right: 20%;
    justify-content: space-around;
    border: 2px solid yellow;
`
const TextArea = styled.textarea`
    border-radius: 5%;
    width: 50vw;
`

const Buttons__Container = styled.div`
    border: 2px solid red;
    color: white;
    justify-content: space-around;
    left: 2%;
    display:flex;
`

