import React from "react";
import classes from './Dialogs.module.css';
import Dialog from "./DIalog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
    const dialogsElements = props.dialogsData.map(elem => <Dialog id={elem.id} senderName={elem.name}/>);
    const mesagesElements = props.messagesData.map(elem => <Message message={elem.message} />);

    return(
        <div className={classes.dialogs}>
            <ul className={classes.dialogs__list}>
                {dialogsElements}
            </ul>
            <ul className={classes.messages__list}>
                {mesagesElements}
            </ul>
        </div>
    )
}
export default Dialogs; 