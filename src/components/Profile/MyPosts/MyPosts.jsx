import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    const postsElements = props.postsData.map(elem => <Post message={elem.message} />)
    const newPostElement = React.createRef();
    const addPost = () => {
        const text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }


    return(
        <div className={classes.profile__posts_container}>
            <h3 className={classes.large_text}>My posts</h3>
            <div className={classes.profile__post_elements}>
                <textarea ref={newPostElement} placeholder="your news..." className={classes.profile__post_textarea}></textarea>
                <button onClick={addPost} className={classes.profile__send_button}>Send</button>
            </div>
            {postsElements}
        </div>
    )
}
export default MyPosts;