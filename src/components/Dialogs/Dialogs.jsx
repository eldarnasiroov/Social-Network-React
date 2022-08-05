import React from "react";
import classes from './Dialogs.module.css';
import Dialog from "./DIalog/Dialog";
import Message from "./Message/Message";
import { messageChangeActionCreator, sendMessageActionCreator } from "../../Redux/dialogs-reducer";

const Dialogs = (props) => {
    const newChangeInMessage = React.createRef();

    const onMessageChange = () => {
        props.dispatch(messageChangeActionCreator(newChangeInMessage.current.value))
    }
    const sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }

    const dialogsElements = props.dialogs.dialogsData.map(elem => <Dialog id={elem.id} senderName={elem.name}/>);
    const mesagesElements = props.dialogs.messagesData.map(elem => <Message message={elem.message} />);

    return(
        <div className={classes.dialogs__container}>
        <div className={classes.dialogs}>
            <ul className={classes.dialogs__list}>
                {dialogsElements}
            </ul>
            <ul className={classes.messages__list}>
                {mesagesElements}
            </ul>
        </div>
            <div className={classes.create__message_container}>
                <input value={props.dialogs.messageTextValue} onChange={onMessageChange} ref={newChangeInMessage} placeholder="your message..." type="text" />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}
export default Dialogs; 