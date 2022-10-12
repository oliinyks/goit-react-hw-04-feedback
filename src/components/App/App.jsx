import React, { useState } from 'react';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';
import Section from '../Section';
import css from './App.module.css';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        throw new Error('Not supported type');
    }
  };

  const total = good + neutral + bad;
  const positivePercentage = Number.parseInt((good / total) * 100);
  const options = Object.keys({ good, neutral, bad });

  return (
    <section className={css.feedback}>
      <h1 className={css.title}>Our reviews</h1>
      <Section
        title={total !== 0 ? 'Thanks for your choice' : 'Please leave feedback'}
      >
        <FeedbackOptions onLeaveFeedback={onLeaveFeedback} options={options} />
      </Section>
      {total !== 0 && (
        <>
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          </Section>
        </>
      )}
    </section>
  );
}
