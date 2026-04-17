import React from 'react';
import './card.css';


const Card = ({ title, description, actionText, iconSrc, link }) => {
    return (
        <a href={link} className="service-card soft-glass">
            {/* Icon Container */}
            <div className="service-icon-wrapper">
                <img src={iconSrc} alt={`${title} icon`} style={{ width: '32px', height: '32px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
            </div>

            {/* Content Section */}
            <h3 className="service-title">{title}</h3>
            <p className="service-description">
                {description}
            </p>

            {/* Action/Explore Link */}
            <span className="service-action">
                {actionText}
                <i className="bi bi-arrow-right"></i>
            </span>
        </a>
    );
};

export default Card;