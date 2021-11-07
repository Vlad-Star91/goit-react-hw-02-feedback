import React from 'react';
import Section from "./Section";
import Controls from "./Controls";
import Statistics from "./Statistics";

import s from "./Feedback.module.css";

export default class Feedback extends React.Component {
    static defaultProps = {
        initialValue: 0,
    };

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    handleClick = (e) => {
        const { name } = e.currentTarget;
        this.setState((prevState) => {
            return {
                [name]: prevState[name] + 1,
            };
        });
    };

    countTotalFeedBack = () => {
        return this.state.good + this.state.bad + this.state.neutral;
    };

    countPositiveFeedbackPercentage = () => {
        return Math.round((this.state.good * 100) / this.countTotalFeedBack());
    };

    render() {
        return (
            <div className={s.container}>
                <Section title="Please leave feedback">
                    <Controls options={this.state} onLeaveFeedback={this.handleClick} />
                </Section>
                <Section title="Statistics">
                    <Statistics
                        good={this.state.good}
                        neutral={this.state.neutral}
                        bad={this.state.neutral}
                        total={this.countTotalFeedBack()}
                        positivePercentage={this.countPositiveFeedbackPercentage()} />
                </Section>
            </div>
        );
    }
}