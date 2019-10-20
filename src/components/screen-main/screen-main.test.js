import React from 'react';
import renderer from 'react-test-renderer';
import ScreenMain from './screen-main';

it(`ScreenMain component renders correctly after relaunch`, () => {
  const tree = renderer
    .create(<ScreenMain />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
