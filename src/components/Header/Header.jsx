import React from "react";
import classes from './Header.module.css';

const Header = () => {
    return(
        <header className={classes.header}>
        <img className={classes.header__logo} src='https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png' width={50} height={50}/>
      </header>
    )
}
export default Header;