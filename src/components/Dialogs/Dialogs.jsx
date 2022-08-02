import React from "react";
import classes from './Dialogs.module.css';
import Dialog from "./DIalog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
    const dialogsData = [
        {id: 1, name: 'John'},
        {id: 2, name: 'Alex'},
        {id: 3, name: 'Benedict'},
        {id: 4, name: 'Tom'},
        {id: 5, name: 'Thomas'},
        {id: 6, name: 'Elliot'},
    ];
    const messagesData = [
        {id: 1, message: 'Hello pidr'},
        {id: 2, message: 'Ya xachu kakat'},
        {id: 3, message: 'Otvedi menya kakat'},
        {id: 4, message: 'Bistro'},
        {id: 5, message: 'Ya abasrus'},
        {id: 6, message: 'Bistreeeee'},
    ];

    return(
        <div className={classes.dialogs}>
            <ul className={classes.dialogs__list}>
                <Dialog id={dialogsData[0].id} senderName={dialogsData[0].name}/>
                <Dialog id={dialogsData[1].id} senderName={dialogsData[1].name}/>
                <Dialog id={dialogsData[2].id} senderName={dialogsData[2].name}/>
                <Dialog id={dialogsData[3].id} senderName={dialogsData[3].name}/>
                
            </ul>
            <ul className={classes.messages__list}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
            </ul>
        </div>
    )
}
export default Dialogs; 