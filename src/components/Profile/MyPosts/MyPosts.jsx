import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return(
        <div className={classes.profile__posts_container}>
            <h3 className={classes.large_text}>My posts</h3>
            <div className={classes.profile__post_elements}>
                <textarea placeholder="your news..." className={classes.profile__post_textarea}></textarea>
                <button className={classes.profile__send_button}>Send</button>
            </div>
            <Post message='Pomniw kak ya tebe traxal?'/>
            <Post message='I ewo v rot daval'/>
            <Post message='Ti mne prosil wto nenada'/>
        </div>
    )
}
export default MyPosts;