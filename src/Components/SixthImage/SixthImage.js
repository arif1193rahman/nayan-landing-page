import React from 'react';
import './SixthImage.css';
import sixthImage from '../../images/sixthImage.png';

const SixthImage = () => {
    return (
        <div className="container">
            <img className="image4-responsive" src={sixthImage} alt="" />
            <button className="image4-button-text">YES! I WANT THE FREE SUPER FUNNEL</button>
        </div>
    );
};

export default SixthImage;