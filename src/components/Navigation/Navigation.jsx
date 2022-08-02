import React from "react";
import classes from './Navigation.module.css';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className={classes.navigation}>
        <li ><NavLink to="/profile" className = { name => name.isActive ? classes.active : classes.navigation__item }>Profile</NavLink></li>
        <li ><NavLink to="/messages" className = { name => name.isActive ? classes.active : classes.navigation__item }>Messages</NavLink></li>
        <li ><NavLink to="/news" className = { name => name.isActive ? classes.active : classes.navigation__item }>News</NavLink></li>
        <li ><NavLink to="/music" className = { name => name.isActive ? classes.active : classes.navigation__item }>Music</NavLink></li>
        <li ><NavLink to="/settings" className = { name => name.isActive ? classes.active + ' ' + classes.navigation__item_last : classes.navigation__item_last }>Settings</NavLink></li>
      </nav>
    )
}
export default Navigation;