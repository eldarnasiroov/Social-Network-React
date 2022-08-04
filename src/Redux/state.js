const store = {
  _state: {
    profile: {
      postsData: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
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
        { id: 1, message: "Hello pidr" },
        { id: 2, message: "Raz dva tri" },
        { id: 3, message: "Hello world" },
        { id: 4, message: "Goodbye world" },
        { id: 5, message: "Ya sdkjfskldfjdslnein" },
        { id: 6, message: "Bistreeeee" },
      ]
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
    switch(action.type) {
      case 'ADD-POST':
        const id = this._state.profile.postsData[this._state.profile.postsData.length - 1].id + 1;
        const newPost = {
          id: id,
          message: this._state.profile.postValue
        }
        this._state.profile.postsData.push(newPost); 
        this._state.profile.postValue = '';
        this.rerender(this);
        break;
      case 'CHANGE-POST-TEXT':
        this._state.profile.postValue = action.newText;
        this.rerender(this);
    }
  }
}
export default store;
