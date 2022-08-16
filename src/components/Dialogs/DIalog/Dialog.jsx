import React from "react";
import classes from './Dialog.module.css';
import {NavLink} from 'react-router-dom';


const Dialog = ({id, senderName}) => {
    return (
        <NavLink to={"/messages/" + id} className={classes.dialog}>{senderName}</NavLink>
    )
}
export default Dialog;