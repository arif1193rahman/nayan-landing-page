import React from 'react';
import './FifthImage.css';
import fifthImage from '../../images/image3.png';

const FifthImage = () => {
    return (
        <div className="container">
            <img className="image3-responsive" src={fifthImage} alt="" />
            {/* <button className="image3-button-text">YES! I WANT THE FREE SUPER FUNNEL</button> */}
        </div>
    );
};

export default FifthImage;