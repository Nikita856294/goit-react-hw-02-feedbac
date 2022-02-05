import React from 'react';

import { Title } from './StatisticsStyle';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <Title></Title>
      <ul>
        <li>Good:{good}</li>
        <li>Neutral:{neutral}</li>
        <li>Bad:{bad}</li>
        <li>Total:{total}</li>
        <li>Positive feedback:{positivePercentage}%</li>
      </ul>
    </>
  );
};

export { Statistics };
