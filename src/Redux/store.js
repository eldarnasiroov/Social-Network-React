import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

const store = {
  _state: {
    profile: {
      postsData: [
        {id: 1, message: 'Hello'}
      ],
      postValue: ''
    },
    dialogs: {
      dialogsData: [
        { id: 1, name: "John" },
        { id: 2, name: "Alex" },
        { id: 3, name: "Benedict" },
        { id: 4, name: "Tom" },
        { id: 5, name: "Thomas" },
        { id: 6, name: "Elliot" },
      ],
      messagesData: [
        { id: 1, message: "Hello ..." }
      ],
      messageTextValue: ''
    }
  },
  
  getState() {
    return this._state;
  },

  rerender() {
  console.log('rerendered');
  },

  subscribe(observer) {
    this.rerender = observer;
  },

  dispatch(action) {
    profileReducer(this._state.profile, action);
    dialogsReducer(this._state.dialogs, action);
    this.rerender(this);
  }
}
export default store;