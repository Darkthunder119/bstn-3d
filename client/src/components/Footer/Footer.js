import React from 'react';
import './footer.scss';

const Footer=() =>{

    return (
    <footer className="footer">
        <hr className="footer__rule"></hr>
        <div className="footer__menu">
            <a className="footer__about ">About</a>
            <a className="footer__contact  ">Contact Us</a>
            <a className="footer__priv ">Privacy Policy</a>
            <a className="footer__terms ">Terms of Use</a>
        </div>
        <div className="footer__seam">©2020 SEAMLIST</div>
    </footer>
    );
}

export default Footer;