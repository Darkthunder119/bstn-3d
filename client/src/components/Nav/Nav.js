import React from 'react';
import './nav.scss';

const Nav=() =>{

    return (
    <nav className="nav">
        <hr className="nav__rule"></hr>
        <div className="nav__menu">
            <a className="nav__home nav__single">Home</a>
            <a className="nav__map  nav__single">Map</a>
            <a className="nav__hot nav__single">Hot<sup></sup></a>
            <a className="nav__new nav__single">New</a>
            <a className="nav__rest nav__single">Restaurants</a>
        </div>
        <hr className="nav__rule-2"></hr>
    </nav>
    );
}

export default Nav;