import React from 'react';
import './SeventhSection.css';
import seventhImageFirst from '../../images/seventhImage-first.png';
import seventhImageSecond from '../../images/seventhImage-second.png';

const SeventhSection = () => {
    return (
        <div className="image5-responsive">
            <img className="container image5-responsive-first" src={seventhImageFirst} alt="" />
            <img className="container image5-responsive-second" src={seventhImageSecond} alt="" />
        </div>
    );
};

export default SeventhSection;