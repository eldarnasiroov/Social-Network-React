import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import { connect } from "react-redux";
import { addPostActionCreator, postChangeActionCreator } from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";


// const MyPostsContainer = (props) => {
//     // const postsElements = props.profile.postsData.map(elem => <Post message={elem.message} />)
//     // const newPostElement = React.createRef();
//     const postsData = props.store.getState().profile.postsData;
//     const postValue = props.store.getState().profile.postValue
//     const addPost = () => props.store.dispatch(addPostActionCreator());
       
//     const postChange = (text) => props.store.dispatch(postChangeActionCreator(text));
         
//     return(
//         <MyPosts
//         addPost={addPost}
//         postChange={postChange}
//         postsData={postsData}
//         postValue={postValue}
//         />
//     )
// }


const mapStateToProps = (state) => {
    return {
        postsData: state.profile.postsData,
        postValue: state.profile.postValue
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            return dispatch(addPostActionCreator());
        },
        postChange: (text) => {
           return dispatch(postChangeActionCreator(text));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;