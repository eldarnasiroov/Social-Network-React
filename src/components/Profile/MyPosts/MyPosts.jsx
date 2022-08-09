import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import { addPostActionCreator, postChangeActionCreator } from "../../../Redux/profile-reducer";


const MyPosts = (props) => {
    const postsElements = props.postsData.map(elem => <Post message={elem.message} />)
    const newPostElement = React.createRef();
    
    const onAddPost = () => props.addPost();
    const onPostChange = () => {
        props.postChange(newPostElement.current.value)
    };


    return(
        <div className={classes.profile__posts_container}>
            <h3 className={classes.large_text}>My posts</h3>
            <div className={classes.profile__post_elements}>
                <textarea onChange={onPostChange} ref={newPostElement} placeholder="your news..." className={classes.profile__post_textarea} value={props.postValue} />
                <button onClick={onAddPost} className={classes.profile__send_button}>Send</button>
            </div>
            {postsElements}
        </div>
    )
}
export default MyPosts;