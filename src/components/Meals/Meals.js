import React, {Fragment} from 'react';

import MealSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';

const Meal = () => {
  return (
    <Fragment>
      <MealSummary />
      <AvailableMeals />
    </Fragment>
  );
};


export default Meal;