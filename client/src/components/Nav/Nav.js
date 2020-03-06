import React from 'react';
import './nav.scss';
import dot from '../../Assets/Images/new-content-icon.svg'

const Nav=() =>{

    return (
    <nav className="nav">
        <hr className="nav__rule"></hr>
        <div className="nav__menu">
            <a className="nav__home nav__single" href="/">Home</a>
            <a className="nav__map  nav__single" href="/map">Map</a>
            <a className="nav__hot nav__single">Hot <sup className="nav__super"><img src={dot}/></sup></a>
            <a className="nav__new nav__single">New <sup className="nav__super"><img src={dot}/></sup></a>
            <a className="nav__rest nav__single">Restaurants</a>
        </div>
        <hr className="nav__rule-2"></hr>
    </nav>
    );
}

export default Nav;