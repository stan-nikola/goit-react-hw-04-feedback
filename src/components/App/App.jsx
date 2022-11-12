import { Component } from 'react';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions ';
import { Section } from '../Section/Section';
import { Statistics } from '../Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = btnLabel => {
    this.setState(prevState => ({ [btnLabel]: (prevState[btnLabel] += 1) }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const goodPercentage = good / this.countTotalFeedback();

    if (isNaN(goodPercentage)) {
      return 0;
    }
    return Math.round(goodPercentage * 100);
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            statOptions={this.state}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </div>
    );
  }
}
