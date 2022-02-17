import React from 'react';
import PropTypes from 'prop-types';
import Notification from '../Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      {total > 0 ? (
        <ul>
          <li>Good:{good}</li>
          <li>Neutral:{neutral}</li>
          <li>Bad:{bad}</li>
          <li>Total:{total}</li>
          <li>Positive feedback:{positivePercentage}%</li>
        </ul>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
