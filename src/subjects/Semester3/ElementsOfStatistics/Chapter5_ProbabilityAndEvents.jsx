import React from 'react';

// Chapter5_ProbabilityAndEvents component: Detailed explanations of probability concepts, events, sample space, and their relationships.
const Chapter5_ProbabilityAndEvents = () => {
  return (
    <div className="p-4">
      {/* Introduction */}
      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-6">
          Chapter 5: Probability and Events
        </h2>
        <p className="mb-4">
          Welcome to the world of probability and events! In this chapter, we
          will explore the fundamental concepts of probability, events, sample
          space, and the relationships between different types of events.
        </p>
      </section>

      {/* Probability */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Probability</h3>
        <p className="mb-2">
          Probability is the measure of the likelihood that an event will occur.
          It is a numerical value that ranges from 0 to 1, where 0 represents an
          impossible event and 1 represents a certain event.
        </p>
        <p className="mb-2">
          <strong>Theoretical Probability</strong> is based on reasoning and
          known conditions, such as the chances of rolling a 6 on a fair die.
        </p>
        <p className="mb-2">
          <strong>Empirical Probability</strong> is based on observed data or
          experiments, such as tracking the results of multiple die rolls.
        </p>
        <p className="mb-2">
          <strong>Example:</strong> The probability of getting heads when tossing
          a fair coin is 1/2 or 0.5. The probability of rolling a 6 on a fair die
          is 1/6.
        </p>
      </section>

      {/* Event */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Event</h3>
        <p className="mb-2">
          An event is a set of outcomes of an experiment to which a probability
          is assigned.
        </p>
        <ul className="list-disc list-inside mb-2">
          <li>
            <strong>Simple Event:</strong> An event that contains only one
            outcome. Example: Rolling a 3 on a die.
          </li>
          <li>
            <strong>Compound Event:</strong> An event that contains more than one
            outcome. Example: Rolling an even number on a die.
          </li>
          <li>
            <strong>Certain Event:</strong> An event that will definitely occur.
            Its probability is 1. Example: Rolling a number less than 7 on a
            standard six-sided die.
          </li>
          <li>
            <strong>Impossible Event:</strong> An event that cannot occur. Its
            probability is 0. Example: Rolling a 7 on a standard six-sided die.
          </li>
        </ul>
      </section>

      {/* Sample Space */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Sample Space</h3>
        <p className="mb-2">
          The sample space is the set of all possible outcomes of an experiment.
        </p>
        <ul className="list-disc list-inside mb-2">
          <li>
            <strong>Example 1:</strong> For a coin toss, the sample space is
            {'{Heads, Tails}'}.
          </li>
          <li>
            <strong>Example 2:</strong> For rolling a die, the sample space is
            {'{1, 2, 3, 4, 5, 6}'}.
          </li>
        </ul>
      </section>

      {/* Formula for Probability */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Formula for Probability</h3>
        <p className="mb-2">
          The probability of an event A is calculated using the formula:
          <strong>
            P(A) = Number of favorable outcomes / Total number of possible
            outcomes
          </strong>
        </p>
        <p className="mb-2">
          <strong>Example:</strong> What is the probability of rolling an even
          number on a standard six-sided die?
        </p>
        <p className="mb-2">
          <strong>Solution:</strong>
        </p>
        <ul className="list-disc list-inside mb-2">
          <li>Favorable outcomes: {'{2, 4, 6} '} (3 outcomes)</li>
          <li>Total possible outcomes:{' {1, 2, 3, 4, 5, 6}'} (6 outcomes)</li>
          <li>P(Even) = 3/6 = 1/2 = 0.5</li>
        </ul>
      </section>

      {/* Independent Events */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Independent Events</h3>
        <p className="mb-2">
          Independent events are events where the outcome of one event does not
          affect the outcome of the other event.
        </p>
        <p className="mb-2">
          To determine if events are independent, check if the occurrence of one
          event changes the probability of the other event.
        </p>
        <p className="mb-2">
          The probability of two independent events A and B both occurring is
          given by:
          <strong>P(A and B) = P(A) * P(B)</strong>
        </p>
        <p className="mb-2">
          <strong>Example:</strong> Tossing a coin and rolling a die are
          independent events. The result of the coin toss does not affect the
          result of the die roll.
          <br />
          The probability of getting heads on the coin toss and rolling a 6 on
          the die is P(Heads) * P(6) = (1/2) * (1/6) = 1/12.
        </p>
      </section>

      {/* Dependent Events */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Dependent Events</h3>
        <p className="mb-2">
          Dependent events are events where the outcome of one event affects the
          outcome of another event.
        </p>
        <p className="mb-2">
          <strong>Conditional Probability</strong> is the probability of an event
          occurring given that another event has already occurred.
        </p>
        <p className="mb-2">
          The probability of two dependent events A and B both occurring is
          given by:
          <strong>P(A and B) = P(A) * P(B|A)</strong>, where P(B|A) is the
          probability of B given A has occurred.
        </p>
        <p className="mb-2">
          <strong>Example:</strong> Drawing two cards from a deck without
          replacement. The probability of the second card depends on what the
          first card was.
        </p>
      </section>

      {/* Mutually Exclusive Events */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Mutually Exclusive Events
        </h3>
        <p className="mb-2">
          Mutually exclusive events are events that cannot occur at the same time.
          If one event happens, the other cannot happen.
        </p>
        <p className="mb-2">
          The probability of either one of two mutually exclusive events A or B
          occurring is given by:
          <strong>P(A or B) = P(A) + P(B)</strong>
        </p>
        <p className="mb-2">
          <strong>Example:</strong> When rolling a die, the events "rolling a 2"
          and "rolling a 5" are mutually exclusive because you cannot roll both
          numbers simultaneously.
          <br />
          The probability of rolling a 2 or a 5 is P(2) + P(5) = (1/6) + (1/6) =
          1/3.
        </p>
      </section>

      {/* Conclusion */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Conclusion</h3>
        <p className="mb-4">
          Understanding probability and events is crucial in various fields,
          including statistics, data science, and many areas of research. The
          ability to calculate probabilities and understand the relationships
          between events helps in making informed decisions and drawing accurate
          conclusions.
        </p>
      </section>
    </div>
  );
};

export default Chapter5_ProbabilityAndEvents;
