
import React from 'react';
import '../../src/SocialProofSection/SocialProofSection.css'
import BoltshiftImg from '../images/BoltshiftImg.png';
import FeatherdevImg from '../images/FeatherdevImg.png';
import GlobalBankImg from '../images/GlobalBankImg.png';
import lightboxImg from '../images/lightboxImg.png';
import NietzschefImg from '../images/NietzschefImg.png';
import SpherulefImg from '../images/SpherulefImg.png';


const SocialProofSection = () => {
    return (
        <div className="social-proof-container">
            <p className="social-proof-title">Join 4,000+ companies already growing</p>
            <div className="logo-container">
                <img src={BoltshiftImg} alt="Boltshift Logo" className="company-logo" />
                <img src={lightboxImg} alt="Lightbox Logo" className="company-logo" />
                <img src={FeatherdevImg} alt="FeatherDev Logo" className="company-logo" />
                <img src={SpherulefImg} alt="Spherule Logo" className="company-logo" />
                <img src={GlobalBankImg} alt="GlobalBank Logo" className="company-logo" />
                <img src={NietzschefImg} alt="Nietzsche Logo" className="company-logo" />
            </div>
        </div>

    );
}

export default SocialProofSection;