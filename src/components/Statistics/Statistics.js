import React from 'react';
import PropTypes from 'prop-types';
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

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};