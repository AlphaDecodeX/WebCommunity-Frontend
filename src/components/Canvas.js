import React from 'react'
import classes from "./Canvas.module.css"
import { useRef } from "react";

function Canvas() {
    const messageInput = useRef();
    const sendMessageHandler = (event) => {
        event.preventDefault();
        const username = localStorage.getItem("profileName");
        const message = messageInput.current.value;
        const channel = "Investing";

    }
    return (
        <div className={classes.canvas__homepage}>
            <div className={classes.input__message}>
                <input placeholder="Send a message" ref={messageInput} />
                <button className={classes.send__button}
                    onClick={sendMessageHandler}>SEND</button>
            </div>
            <div className={classes.messages__box}>
                <div className={classes.right__message}>Hello Guys I am Lovepreet Singh</div>
                <div className={classes.left__message}>Hello People, I am Rohan</div>
            </div>
        </div>
    )
}

export default Canvas
