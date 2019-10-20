import React from 'react';
import renderer from 'react-test-renderer';
import OfferCard from './offer-card';

it(`OfferCard component renders correctly after relaunch`, () => {
  const mock = {
    title: `Nice, cozy, warm big bed apartment`,
    image: `img/apartment-03.jpg`,
    type: `Apartment`,
    price: 0,
    rating: 0,
    isPremium: true,
    isBookmarked: true,
  };

  const onClick = ()=>{};

  const tree = renderer
    .create(<OfferCard cardData={mock} cardTitleOnClick={onClick} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
