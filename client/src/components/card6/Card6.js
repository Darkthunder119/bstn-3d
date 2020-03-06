import React from 'react'
import './card6.scss';
import picture6 from '../../Assets/Images/picture6.png'
import tag1 from '../../Assets/Images/tag1.svg'
import tag from '../../Assets/Images/tag.svg'

export default function Card6() {
    return (
        <div className="card6">
            <div className="image-container">
                <img src={picture6} alt="picture1" />
            </div>

            <div className="wrapper">
            <div className="tags">
                <img  src={tag1} />
        
            </div>
            <h3 className="title">The Best Dessert Spots in New Dehli</h3>
            <p>Tabitha Patel</p>
            <p className="content">

Dessert cafes in New Delhi have become a staple for people in New Delhi looking to satisfy their sweet tooth. Whether it's shaved ice or soft serve, these dessert cafes have got you covered. Here are five Asian dessert cafes you need to check out in New Delhi.
            </p>

            <p>  February 3, 2020 by Elisa Wright</p>
            <div className="tagContainer">
                <img className="tag" src={tag} />
                <p className="tagContent">#NDsweets #cakes #dessert #cafes #asiandesserts #sweettooth </p>
            </div>
            
        </div>
        </div>
    )
}
