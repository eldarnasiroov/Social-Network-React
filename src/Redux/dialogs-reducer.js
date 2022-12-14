const CHANGE_MESSAGE_TEXT = "CHANGE-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

const initialState = {
  dialogsData: [
    { id: 1, name: "John" },
    { id: 2, name: "Alex" },
    { id: 3, name: "Benedict" },
    { id: 4, name: "Tom" },
    { id: 5, name: "Thomas" },
    { id: 6, name: "Elliot" },
  ],
  messagesData: [{ id: 1, message: "Hello ..." }],
  messageTextValue: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      const messageID =
        state.messagesData[state.messagesData.length - 1].id + 1;
      const message = {
        id: messageID,
        message: state.messageTextValue,
      };
      const stateCopy = { ...state };
      stateCopy.messagesData = [...state.messagesData];
      stateCopy.messagesData.push(message);
      stateCopy.messageTextValue = "";
      return stateCopy;
    }
    case CHANGE_MESSAGE_TEXT: {
      const stateCopy = { ...state };
      stateCopy.messageTextValue = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
};

export const sendMessageActionCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};

export const messageChangeActionCreator = (text) => {
  return {
    type: CHANGE_MESSAGE_TEXT,
    newText: text,
  };
};

export default dialogsReducer;
