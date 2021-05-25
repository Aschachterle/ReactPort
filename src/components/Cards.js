import React from 'react'
import Carditem from '../components/Carditem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <Carditem 
                        src='images/img-9.jpeg'
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label='Adventures'
                        path="/services"/>      
                        <Carditem 
                        src='images/img-2.jpeg'
                        text="Travel Through the Islands of Bali on a private cruise"
                        label='Luxury'
                        path="/services"/>                           

                    </ul>
                </div>
            </div>
        </div>        
    )
}

export default Cards
