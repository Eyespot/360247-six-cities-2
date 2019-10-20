import React from 'react';
import OfferCard from "../offer-card/offer-card";

const OfferList = () => {
  const mockCardsData = [
    {
      title: `Beautiful & luxurious apartment at great location`,
      image: `img/apartment-01.jpg`,
      type: `Apartment`,
      price: 120,
      rating: 93,
      isPremium: true,
      isBookmarked: false,
    },
    {
      title: `Wood and stone place`,
      image: `img/room.jpg`,
      type: `Private room`,
      price: 80,
      rating: 80,
      isPremium: false,
      isBookmarked: true,
    },
    {
      title: `Canal View Prinsengracht`,
      image: `img/apartment-02.jpg`,
      type: `Apartment`,
      price: 132,
      rating: 80,
      isPremium: false,
      isBookmarked: false,
    },
    {
      title: `Nice, cozy, warm big bed apartment`,
      image: `img/apartment-03.jpg`,
      type: `Apartment`,
      price: 180,
      rating: 100,
      isPremium: true,
      isBookmarked: false,
    },
    {
      title: `Wood and stone place`,
      image: `img/room.jpg`,
      type: `Private room`,
      price: 80,
      rating: 80,
      isPremium: false,
      isBookmarked: true,
    }
  ];

  const cardTitleOnClick = (event) => {
    event.preventDefault();
  };

  const offers = mockCardsData.map((offer, index) => (
    <OfferCard key={index} cardData={offer} cardTitleOnClick={cardTitleOnClick} />
  ));

  return <div className="cities__places-list places__list tabs__content">
    {offers}
  </div>;
};

export default OfferList;
