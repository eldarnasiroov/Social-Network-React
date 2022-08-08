import React from "react";
import { messageChangeActionCreator, sendMessageActionCreator } from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    const messageChange = (value) => props.store.dispatch(messageChangeActionCreator(value));
    const sendMessage = () => props.store.dispatch(sendMessageActionCreator());
        
    const messageTextValue = props.store.getState().dialogs.messageTextValue;
    const dialogsData = props.store.getState().dialogs.dialogsData;
    const messagesData = props.store.getState().dialogs.messagesData;

    return(
        <Dialogs
        messageChange={messageChange}
        sendMessage={sendMessage}
        messageTextValue={messageTextValue}
        dialogsData={dialogsData}
        messagesData={messagesData}
         />
    )
}
export default DialogsContainer; 