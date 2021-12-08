import React from 'react';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  return (
    <footer data-testid="footer">
      <img src={ drinkIcon } alt="drink icon" data-testid="drinks-bottom-btn" />
      <img src={ exploreIcon } alt="explore icon" data-testid="explore-bottom-btn" />
      <img src={ mealIcon } alt="meal icon" data-testid="food-bottom-btn" />
    </footer>
  );
}

export default Footer;
