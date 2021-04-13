import React, { useState, useEffect } from 'react';
import '../styles/hero.css';
import heading from '../assets/heading.png'
import speachBg from '../assets/speach-bg.png';
import speachText from '../assets/speach-text.png';
import item1 from '../assets/item1.png';
import item2 from '../assets/item2.png';
import item3 from '../assets/item3.png';

const Hero = () => {
    const [IsProductsOut, setIsProductsOut] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 150) {
                setIsProductsOut(true);
            } else {
                setIsProductsOut(false);
            }
        });
    }, []);

    return (
        <div className="hero">
            <div className="hero__container">
                <div className="hero__content">
                    <div className="hero__heading">
                        <img src={heading} alt=""/>
                    </div>
                    <div className="hero__speach">
                        <img className="hero__speach--bg" src={speachBg} alt=""/>
                        <img className="hero__speach--text" src={speachText} alt=""/>
                    </div>
                </div>
                <div className={`hero__products ${IsProductsOut && 'hero__products--out'}`}>
                    <div className="hero__product"><img src={item1} alt=""/></div>
                    <div className="hero__product"><img src={item2} alt=""/></div>
                    <div className="hero__product"><img src={item3} alt=""/></div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
