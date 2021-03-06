import React from 'react';
import './header.scss';
import user from '../../Assets/Images/user-1.svg'
import wheel from '../../Assets/Images/wheel.svg'
import logo from '../../Assets/Images/logo-1-a.png'

const Header=() =>{

    return (
    <header className="header">
        <h1 className="header__heading"><img src={logo} className="header__logo"/>SEAMLIST</h1>
        <img src={user} alt="userimage" className="header__user-one"/>
        <img src={wheel} alt="settings" className="header__settings"/>
    </header>
    );
}

export default Header;