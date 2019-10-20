import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

it(`App component renders correctly after relaunch`, () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
