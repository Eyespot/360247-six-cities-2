import React from 'react';
import PropTypes from 'prop-types';

const OfferCard = ({cardData, cardTitleOnClick}) => {

  return <article className="cities__place-card place-card">
    {cardData.isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    }

    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img className="place-card__image" src={cardData.image} width="260" height="200" alt="Place image"/>
      </a>
    </div>

    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{cardData.price}</b>

          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>

        <button className={`place-card__bookmark-button button ` + (cardData.isBookmarked && `place-card__bookmark-button--active`)} type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"/>
          </svg>

          <span className="visually-hidden">{cardData.isBookmarked ? `In bookmarks` : `To bookmarks`}</span>
        </button>
      </div>

      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: cardData.rating + `%`}}/>

          <span className="visually-hidden">Rating</span>
        </div>
      </div>

      <h2 className="place-card__name">
        <a href="#" id="offer-card-title" onClick={cardTitleOnClick}>{cardData.title}</a>
      </h2>

      <p className="place-card__type">{cardData.type}</p>
    </div>
  </article>;
};

OfferCard.propTypes = {
  cardData: PropTypes.exact({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    type: PropTypes.oneOf([`Apartment`, `Private room`]).isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    isPremium: PropTypes.bool,
    isBookmarked: PropTypes.bool.isRequired
  }),

  cardTitleOnClick: PropTypes.func.isRequired
};

export default OfferCard;
