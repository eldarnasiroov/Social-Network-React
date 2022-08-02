import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
    return(
        <div className={classes.post__container}>
            <img className={classes.post__profile_photo} src="https://i1.sndcdn.com/avatars-fzLeTxJ4GYQfOS2B-Og6dhQ-t500x500.jpg" alt="profile photo" width={80} height={80}/>
            <p className={classes.post__content}>{props.message}</p>
        </div>
    )
}
export default Post;