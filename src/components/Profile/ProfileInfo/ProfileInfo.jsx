import React from "react";
import classes from './ProfileInfo.module.css'
import profile from './../../../images/lexa.jpg'

const ProfileInfo = () => {
    return (
        <div className={classes.profile__content}>
      <section className={classes.profile__background_banner}></section>
      <section className={classes.profile__info}>
        <img src={profile} width={150} height={150}/>
        <div className={classes.profile__text_info}>
          <h1 className={classes.large_text}>Alexey Jidkiy</h1>
          <ul className={classes.profile__info_list}>
            <li>Date of birth: 8 December</li>
            <li>City: Baku</li>
            <li>Education: Ukraine University of Nazism</li>
            <li>Website: https://protein.com</li>
          </ul>
        </div>
      </section>
      </div>
    )
}
export default ProfileInfo;