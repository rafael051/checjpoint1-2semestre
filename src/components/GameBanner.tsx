import React from 'react';
import userStarIcon from '../assets/icons/estrela.svg';
import starIcon from '../assets/icons/star.svg';
import gameplayScene from '../assets/images/banner2.jpg';
import godOfWarCover from '../assets/images/god-of-war-cover.jpg';
import '../styles/GameBanner.css';

const GameBanner: React.FC = () => {
  return (
    <section className="game-banner">
      <div className="banner-content">
        <div className="game-title">
          <h1>God of War: Ragnarök</h1>
        </div>
        <div className="game-ratings">
          <div className="ratings-section">
            <div className="rating-label">Avaliação da Ratings</div>
            <div className="rating-score">
              <img src={starIcon} alt="Star" className="star-icon" />
              <span>9,6</span>
              <span className="out-of">/10</span>
            </div>
          </div>
          <div className="user-rating">
            <div className="rating-label">Sua Avaliação</div>
            <div className="user-rate">
              <img src={userStarIcon} alt="User Star" className="star-icon" />
              Avaliar
            </div>
          </div>
        </div>
      </div>
      <div className="banner-images">
        <img src={godOfWarCover} alt="God of War Cover" className="cover-image" />
        <img src={gameplayScene} alt="Gameplay Scene" className="gameplay-image" />
      </div>
    </section>
  );
};

export default GameBanner;
