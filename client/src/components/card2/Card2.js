import React from 'react'
import './card2.scss';
import picture2 from '../../Assets/Images/picture2.png'
import tag2 from '../../Assets/Images/tag2.svg'
import tag3 from '../../Assets/Images/tag3.svg'
import tag from '../../Assets/Images/tag.svg'

export default function Card2() {
    return (
        <div className="card2">
            <div className="image-container">
                <img src={picture2} alt="picture1" />
            </div>

            <div className="wrapper">
            <div className="tags">
                <img src={tag2} />
                <img className="tagpad" src={tag3} />
            </div>
            <h3 className="title">Bo Tai Qutub</h3>
            <p className="content">Arguably Delhi’s trendiest (and newest) destination, this beautifully done rooftop restaurant and bar is quickly becoming a favourite among locals. The scenically located eatery in Mehrauli (the ethereal Qutub Minar is right around the corner) serves an experimental Thai menu that includes some funky must-tries, like the tamarind crab cakes.</p>

            <p>  February 16, 2020 by Mike Chen</p>
            <div className="tagContainer">
                <img className="tag" src={tag} />
                <p className="tagContent">#Strictlydumpling #Botaiqutub #ITChotels #dehlisbest </p>
            </div>
            
        </div>
        </div>
    )
}


