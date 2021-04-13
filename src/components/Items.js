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
                <img className="items__card-img"src={card1} alt="" />
                <div className="items__card-info">
                    <p>Para un hijo de la mezcla,😎 tres sabores rifados: Vicky Chamoy, Vicky Mango y Vicky Chelada.</p>
                </div>
            </div>
            <div className="items__card">
                <img className="items__card-img"src={card2} alt="" />
                <div className="items__card-info">
                    <p>¡Pásele! ¡Pásele! Ya llegó la ¡Vicky Chamoy! 🍺🔥</p>
                </div>
            </div>
            <div className="items__card">
                <img className="items__card-img"src={card3} alt="" />
                <div className="items__card-info">
                    <p>Le venimos manejando lo que viene siendo la sabrosa ¡Vicky Mango! ⚡</p>
                </div>
            </div>
            <div className="items__card">
                <img className="items__card-img"src={card4} alt="" />
                <div className="items__card-info">
                    <p>Del barrio pa'l mundo, le traemos la ¡Vicky Chelada!💥👌🏽</p>
                </div>
            </div>
        </div>
    );
};

export default Items;
