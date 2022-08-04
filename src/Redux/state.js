import { rerender } from "../render.js";

const state = {
  postsData: [{id: 1, message: 'Hello'}],
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
};

export const addPost = postMessage => {
  const id = state.postsData[state.postsData.length - 1].id + 1;
  const newPost = {
    id: id,
    message: postMessage
  }
  state.postsData.push(newPost);
  console.log('ggggg');
  rerender(state);
}

export default state;
