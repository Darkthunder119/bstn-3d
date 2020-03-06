import React from 'react'
import './card5.scss';
import picture5 from '../../Assets/Images/picture5.png'
import tag2 from '../../Assets/Images/tag2.svg'
import tag3 from '../../Assets/Images/tag3.svg'
import tag from '../../Assets/Images/tag.svg'

export default function Card5() {
    return (
        <div className="card5">
            <div className="image-container">
                <img src={picture5} alt="picture1" />
            </div>

            <div className="wrapper">
            <div className="tags">
                <img  src={tag2} />
                <img  className="tagpad" src={tag3} />
            </div>
            <h3 className="title">Bukhara</h3>
            <p className="content">Bukhara is one of the most iconic brands for fine dining among the ITC hotels. It has won the 'Restaurant Magazine Award' for the Best 50 hotels in the world 7 times. This is definitely a must visit if you are in Delhi. Once you go inside and sit they have aprons instead of napkins that you can wear while having your meal. 
            .</p>

            <p>  February 28, 2020 by Mark Weins</p>
            <div className="tagContainer">
                <img className="tag" src={tag} />
                <p className="tagContent">#Weinstravels #Bukhara #ITChotels #dehlisbest  </p>
            </div>
            
        </div>
        </div>
    )
}
