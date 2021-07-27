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
  };

  render() {
    const totalFeedback = Object.values(this.state).reduce(
      (acc, el) => acc + el,
      0
    );
    const positiveFeedbackPercentage = parseInt(
      (this.state.good * 100) / totalFeedback
    );

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={initialValue}
            onFeedback={this.onFeedback}
          />
        </Section>
        {totalFeedback ? (
          <Section title="Statistics">
            <Statistics
              state={this.state}
              totalFeedback={totalFeedback}
              positiveFeedbackPercentage={positiveFeedbackPercentage}
            />
          </Section>
        ) : (
          <Notification message="No feedback given" />
        )}
      </>
    );
  }
}

export default App;
