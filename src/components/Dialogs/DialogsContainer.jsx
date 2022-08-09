import React from "react";
import { messageChangeActionCreator, sendMessageActionCreator } from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        messageChange: (value) => {
           return dispatch(messageChangeActionCreator(value));
        },
        sendMessage: () => {
            return dispatch(sendMessageActionCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer; 