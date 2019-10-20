import React from 'react';
import renderer from 'react-test-renderer';
import OfferList from './offer-list';

it(`OfferList component renders correctly after relaunch`, () => {
  const tree = renderer
    .create(<OfferList />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
