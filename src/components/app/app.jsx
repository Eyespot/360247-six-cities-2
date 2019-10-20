import React from 'react';
import PropTypes from 'prop-types';
import ScreenMain from "./../screen-main/screen-main";

const App = ({cardsData}) => (<ScreenMain cardsData={cardsData}/>);

App.propTypes = {
  cardsData: PropTypes.arrayOf(PropTypes.exact({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    type: PropTypes.oneOf([`Apartment`, `Private room`]).isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    isPremium: PropTypes.bool,
    isBookmarked: PropTypes.bool.isRequired
  }))
};

export default App;
