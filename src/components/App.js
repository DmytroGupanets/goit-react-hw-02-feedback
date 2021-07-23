import React, { Component } from "react";

import FeedbackOptions from "./feedbackOptions/FeedbackOptions";
import Section from "./section/Section";
import Statistics from "./statistics/Statistics";
import Notification from "./notification/Notification";

import initialValue from "../data/data";

class App extends Component {
  state = initialValue;

  onFeedback = (e) => {
    const name = e.target.name;

    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    this.setState((prevState) => {
      prevState.total = 0;
      prevState.positivePercentage = 0;
      const value = Object.values(prevState).reduce((acc, el) => acc + el, 0);
      return { total: value };
    });
  };

  countPositiveFeedbackPercentage = () => {
    this.setState((prevState) => {
      const value = parseInt(
        (prevState.good * 100) / (prevState.bad + prevState.good)
      );

      if (isNaN(value)) return { positivePercentage: 100 };
      return { positivePercentage: value };
    });
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={initialValue}
            onFeedback={this.onFeedback}
          />
        </Section>
        {Object.values(this.state).reduce((acc, el) => acc + el, 0) === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Section title="Statistics">
            <Statistics state={this.state} />
          </Section>
        )}
      </>
    );
  }
}

export default App;
