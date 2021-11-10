import React from 'react';
import Section from "../Section/Section";
import Controls from "../Controls/Controls";
import Statistics from "../Statistics/Statistics";

import s from "./FeedbackRender.module.css";



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
        const { good, bad, neutral } = this.state;
        return good + bad + neutral;
    };

    countPositiveFeedbackPercentage = () => {
        return Math.round((this.state.good * 100) / this.countTotalFeedBack());
    };

    render() {
        const { good, bad, neutral } = this.state;
        return (
            <div className={s.container}>
                <Section title="Please leave feedback">
                    <Controls options={this.state} onLeaveFeedback={this.handleClick} />
                </Section>
                <Section title="Statistics">
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={this.countTotalFeedBack()}
                        positivePercentage={this.countPositiveFeedbackPercentage()} />
                </Section>
            </div>
        );
    }
}