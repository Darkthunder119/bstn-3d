import React from 'react';
import './header.scss';
import user from '../../Assets/Images/user-1.svg'
import wheel from '../../Assets/Images/wheel.svg'

const Header=() =>{

    return (
    <header className="header">
        <h1 className="header__heading">WEBSITE TITLE</h1>
        <img src={user} alt="userimage" className="header__user-one"/>
        <img src={wheel} alt="settings" className="header__settings"/>
    </header>
    );
}

export default Header;