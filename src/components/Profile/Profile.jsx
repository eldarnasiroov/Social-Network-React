import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return(
      <div className={classes.profile__content}>
        <ProfileInfo/>
        <MyPostsContainer store={props.store} />
      </div>
    )
}
export default Profile;