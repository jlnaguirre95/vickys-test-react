import React from 'react';
import '../styles/items.css';
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import card4 from '../assets/card4.png';

const Items = () => {
    return (
        <div className="items">
            <div className="items__card">
                <div className="items__text"></div>
                <img src={card1} alt="" />
            </div>
            <div className="items__card">
                <div className="items__text"></div>
                <img src={card2} alt="" />
            </div>
            <div className="items__card">
                <div className="items__text"></div>
                <img src={card3} alt="" />
            </div>
            <div className="items__card">
                <div className="items__text"></div>
                <img src={card4} alt="" />
            </div>
        </div>
    );
};

export default Items;
