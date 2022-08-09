const ADD_POST = "ADD-POST";
const CHANGE_POST_TEXT = "CHANGE-POST-TEXT";

const initialState = {
  postsData: [
    {id: 1, message: 'Helloggg'}
  ],
  postValue: ''
}

 const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
          const id = state.postsData[state.postsData.length - 1].id + 1;
          const newPost = {
            id: id,
            message: state.postValue
          }
          const stateCopy = {...state};
          stateCopy.postsData = [...stateCopy.postsData];
          stateCopy.postsData.push(newPost); 
          stateCopy.postValue = '';
          return stateCopy;
        }
        case CHANGE_POST_TEXT: {
          const stateCopy = {...state};
          stateCopy.postValue = action.newText;
          return stateCopy;
        }
        default:
            return state;
        }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
  }
  
  export const postChangeActionCreator = (text) => {
    return {
        type: CHANGE_POST_TEXT,
        newText: text
    }
  }

export default profileReducer;