import React from "react";
import "./card4.scss";
import bitmap from "../../Assets/Images/bitmap.png";
import icon from '../../Assets/Images/new-icon-copy.png'
import icon2 from '../../Assets/Images/new-icon-copy-5.png'

export default function Card4() {
  return (
    <div className="card4">
      <img src={bitmap} className="card4__image1" />
      <img src={icon} className="card4__image2" />
      <img src={icon2} className="card4__image3" />
      <h2 className="card4__heading">Gray Global Kitchen and Bar</h2>
      <p className="card4__text">
        This one month old restaurant bar based in New Delhi stole my heart on
        the very first visit. Serene and lively was what I felt when I had a
        look at this place. Spread out on two floors, Gray sets the perfect
        ambience to enjoy one of their amazing signature cocktails.
      </p>
      <p className="card4__text2">February 6, 2020 by First We Feast</p>
      <p className="card4__text3">
      #grayglobal #serene #ambience #moodlighting #newdehli #cocktails #bars
      </p>
    </div>
  );
}
