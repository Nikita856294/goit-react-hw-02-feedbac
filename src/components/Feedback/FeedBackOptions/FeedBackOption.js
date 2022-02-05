import React from 'react';
import { Section } from '../../Section/Section';
import { FeedbackButton } from './FeedBackOptionStyle';
function FeedBackOption({ options, onLeaveFeedback }) {
  return (
    <>
      {options.map(option => (
        <FeedbackButton type="button" key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </FeedbackButton>
      ))}
    </>
  );
}

export { FeedBackOption };
