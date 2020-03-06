import React from 'react'
import './card1.scss';
import picture1 from '../../Assets/Images/picture1.png'
import tag1 from '../../Assets/Images/tag1.svg'
import tag from '../../Assets/Images/tag.svg'

export default function Card1() {
    return (
        <div className="card1">
            <div className="image-container">
                <img src={picture1} alt="picture1" />
            </div>

            <div className="wrapper">
            <div>
                <img src={tag1} />
            </div>
            <h3 className="title">10 High-end Restaurants in New Dehli worth the splurge</h3>
            <p>Tabitha Patel</p>
            <p className="content">

            Some high-end restaurants in New Delhi are just worth the splurge. Maybe it’s your birthday, someone’s visiting from out of town, or you just want to treat yo’ self. Whatever the occasion, these are the places to head for tasting menus and caviar when you’ve got a little extra money in the bank or just want to live for to…</p>

            <p> February 3, 2020 by Tabitha Patel</p>
            <div className="tagContainer">
                <img className="tag" src={tag} />
                <p className="tagContent">#ND10 #tabithapatel #Newdehli #baller #splurge #highend </p>
            </div>
            
        </div>
        </div>
    )
}
