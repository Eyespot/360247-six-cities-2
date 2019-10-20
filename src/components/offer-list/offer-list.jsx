import React from 'react';
import PropTypes from 'prop-types';
import OfferCard from "../offer-card/offer-card";

const OfferList = ({offersData}) => {

  const offers = offersData.map((offer, index) => (
    <OfferCard key={index} cardData={offer} />
  ));

  return <div className="cities__places-list places__list tabs__content">
    {offers}
  </div>;
};

OfferList.propTypes = {
  offersData: PropTypes.arrayOf(PropTypes.exact({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    type: PropTypes.oneOf([`Apartment`, `Private room`]).isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    isPremium: PropTypes.bool,
    isBookmarked: PropTypes.bool.isRequired
  }))
};

export default OfferList;
