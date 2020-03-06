import React from 'react'
import './card3.scss'
import bitmap from '../../Assets/Images/bitmap1.png'
import icon from '../../Assets/Images/new-icon-copy.png'
import icon2 from '../../Assets/Images/new-icon-copy-5.png'

export default function Card3() {
    return (
        <div className="card3">
            <img src={bitmap} className="card3__image1"/>
            <img src={icon} className="card3__image2"/>
            <img src={icon2} className="card3__image3"/>
            <h2 className="card3__heading">Indian Accent</h2>
            <p className="card3__text">Literally accenting Indian food with global touches, chef Manish Mehrotra’s unique fusion menu includes the likes of blue cheese naan and chicken tikka meatballs. The restaurant is located in the swanky Lodhi Hotel and now also boasts locations in New York and London. We highly suggest opting for the chef’s six-course tasting menu—each one comes paired with a wine selection.</p>
            <p className="card3__text2">March 1, 2020 by Mark Weins</p>
            <p className="card3__text3">#Weinstravels #indianaccent #mehrotra #bluecheesenaan #chickentikka #wine #tastingmenu</p>
        </div>
    )
}
