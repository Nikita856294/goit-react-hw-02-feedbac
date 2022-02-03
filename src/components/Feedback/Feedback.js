import React, { Component } from 'react/';

class FeedBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleClick = key => {
    this.setState(prevState => {
      console.log(prevState[key]);
      return { [key]: prevState[key] + 1 };
    });
  };
  countTotalFeedback = () => {};
  countPositiveFeedbackPercentage = () => {};
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <h2>Please leave feedback</h2>
        {Object.keys(this.state).map(key => (
          <button type="button" key={key} onClick={() => this.handleClick(key)}>
            {key}
          </button>
        ))}
        <h2>Statistics</h2>
        <ul>
          <li>Good:{good}</li>
          <li>Neutral:{neutral}</li>
          <li>Bad:{bad}</li>
        </ul>
      </div>
    );
  }
}

export { FeedBack };
