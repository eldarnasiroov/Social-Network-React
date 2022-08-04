import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    
    return(
      <div className={classes.profile__content}>
        <ProfileInfo/>
        <MyPosts profile={props.profile} addPost={props.addPost} onChangePost={props.onChangePost} />
      </div>
    )
}
export default Profile;