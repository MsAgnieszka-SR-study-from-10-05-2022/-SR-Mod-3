import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShareNodes, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { format } from 'date-fns';

import colors from 'components/colors';
import image from './img/paella.jpg';

import './Card.css';

function Card({ title, intro, showMoreContent }) {
    const styles = {
        display: 'flex',
        flexDirection: 'column',
        margin: '20px 5px',
        padding: 20,
        width: 400,
        minHeight: 300,
        backgroundColor: colors.bgColorCustom,
        border: `1px solid ${colors.border}`,
        boxShadow: `1px 1px 10px ${colors.border}`,
    };

    const currentDay = new Date();
    const currentDayToShow = format(currentDay, 'PPPP');

    const [isActive, setIsActive] = useState(false);

    const showMoreChange = () => {
        setIsActive(isActive => !isActive);
    };

    const showMoreToggle = () => {
        if (isActive) {
            return (
            <div className='card__content'>
                {showMoreContent}
            </div>);
        };
    };

    return (
        <div className='card' style={styles}>
            <div className='card__header'>
                <h4 className='card__header-title'>{title}</h4>
                <p className='card__header-date'>{currentDayToShow}</p>
            </div>
            <img className='card__img' src={image} alt={title} />
            <p>{intro}</p>
            <div className='card__icons'>
                <div className='card__icon-social'>
                    <FontAwesomeIcon icon={faHeart} />
                    <FontAwesomeIcon icon={faShareNodes} />
                </div>
                <div className='card__icon-show-more'>
                    <FontAwesomeIcon icon={faChevronDown}  active={isActive} onClick={showMoreChange} />
                </div>
            </div>
            {showMoreToggle()}
        </div>
    );
}

export default Card;