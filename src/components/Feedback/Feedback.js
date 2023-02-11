import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const stateKeys = Object.keys(this.state);
    const total = Object.values(this.state).reduce((acc, el) => acc + el, 0);
    const positivePercentage = ((good / total) * 100).toFixed() + '%';

    return (
      <>
        <FeedbackOptions
          options={stateKeys}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
}
