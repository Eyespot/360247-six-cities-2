import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OfferCard from "./offer-card";

Enzyme.configure({adapter: new Adapter()});

it(`CardTitleOnClick calls correctly`, () => {
  const mock = {
    title: `Nice, cozy, warm big bed apartment`,
    image: `img/apartment-03.jpg`,
    type: `Apartment`,
    price: 0,
    rating: 0,
    isPremium: true,
    isBookmarked: true,
  };

  const clickHandler = jest.fn();

  const card = mount(<OfferCard
    cardData={mock}
    cardTitleOnClick={clickHandler}
  />);
  const cardTitle = card.find(`#offer-card-title`);

  cardTitle.simulate(`click`, {preventDefault() {}});
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
