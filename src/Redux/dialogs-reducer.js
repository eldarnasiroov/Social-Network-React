const CHANGE_MESSAGE_TEXT = "CHANGE-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

const dialogsReducer = (state, action) => {
    switch(action.type) {
        case SEND_MESSAGE:
            const messageID = state.messagesData[state.messagesData.length - 1].id + 1;
            const message = {
              id: messageID,
              message: state.messageTextValue
            }
            state.messagesData.push(message);
            state.messageTextValue = '';
            return state;
    
        case CHANGE_MESSAGE_TEXT:
            state.messageTextValue = action.newText;
            return state;

        default:
            return state;
    }
}

export const sendMessageActionCreator = () => {
    return {
      type: SEND_MESSAGE
    }
  }
  
  export const messageChangeActionCreator = (text) => {
    return {
      type: CHANGE_MESSAGE_TEXT,
      newText: text
    }
  }

export default dialogsReducer;