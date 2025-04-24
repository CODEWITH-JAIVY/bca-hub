import React from 'react';

const Chapter5_GameTheory = () => {
  return (
    <div>
      <h2>Chapter 5: Game Theory</h2>

      {/* Introduction */}
      <div>
        <h3>Introduction to Game Theory</h3>
        <p>
          <strong>What is Game Theory?</strong>
          <br />
          Game theory is the study of strategic decision-making. More formally, it is the study of mathematical models of conflict and cooperation between intelligent, rational decision-makers.
        </p>
        <p>
          <strong>Purpose and Applications:</strong>
          <br />
          The purpose of game theory is to understand how individuals or entities make decisions when their choices affect each other. It is used in economics, political science, computer science, and biology, among other fields.
        </p>
        <p>
          <strong>History and Evolution:</strong>
          <br />
          Game theory dates back to the early 20th century, with major developments by mathematicians like John von Neumann and economists like Oskar Morgenstern. The field has grown to incorporate various areas like behavioral game theory and evolutionary game theory.
        </p>
        <p>
            <strong>Assumptions of Game Theory:</strong>
            <br />
            Game theory often assumes that players are rational, meaning they aim to maximize their own payoff. It also assumes that players are aware of the rules and possible outcomes of the game.
        </p>
      </div>

      {/* Basic Elements of a Game */}
      <div>
        <h3>Basic Elements of a Game</h3>
        <div>
          <h4>Players</h4>
          <p>
            <strong>Definition:</strong>
            <br />
            Players are the decision-making entities in a game. They can be individuals, companies, or even countries.
          </p>
          <p>
            <strong>Role of Players:</strong>
            <br />
            Players choose their actions based on their own objectives and in anticipation of others' actions.
          </p>
          <p>
            <strong>Examples:</strong>
            <br />
            In a poker game, the players are each person at the table. In a business negotiation, the players are the companies or their representatives.
          </p>
        </div>
        <div>
          <h4>Strategies</h4>
          <p>
            <strong>Definition:</strong>
            <br />
            A strategy is a complete plan of action a player will take, given the circumstances that might arise within the game.
          </p>
          <p>
            <strong>Pure Strategy:</strong>
            <br />
            A pure strategy is when a player always chooses the same action in a given situation.
          </p>
          <p>
            <strong>Mixed Strategy:</strong>
            <br />
            A mixed strategy is when a player randomizes their actions, choosing different actions with different probabilities.
          </p>
          <p>
            <strong>Examples:</strong>
            <br />
            In rock-paper-scissors, a pure strategy is always playing "rock." A mixed strategy might be to play "rock" 30% of the time, "paper" 30% of the time, and "scissors" 40% of the time.
          </p>
        </div>
        <div>
          <h4>Payoffs</h4>
          <p>
            <strong>Definition:</strong>
            <br />
            A payoff is the outcome a player receives after all players have executed their strategies. It represents the value or utility of the outcome to the player.
          </p>
          <p>
            <strong>Representation:</strong>
            <br />
            Payoffs are often represented numerically, in a payoff matrix, with higher numbers generally indicating more desirable outcomes.
          </p>
          <p>
            <strong>Examples:</strong>
            <br />
            In a business game, the payoff might be profit or market share. In a political game, it might be votes or power.
          </p>
        </div>
      </div>

      {/* Types of games */}
      <div>
        <h3>Types of Games</h3>
        <p>
          <strong>Cooperative vs. Non-Cooperative Games:</strong>
          <br />
          In cooperative games, players can form binding agreements. In non-cooperative games, players cannot form such agreements.
        </p>
        <p>
            <strong>Zero-Sum vs. Non-Zero-Sum Games:</strong>
            <br/>
            In a zero-sum game, one player's gain is another's loss. In a non-zero-sum game, all players can gain or lose together.
        </p>
        <p>
            <strong>Simultaneous vs. Sequential Games:</strong>
            <br/>
            In simultaneous games, players choose actions at the same time. In sequential games, players choose actions in a specific order.
        </p>
      </div>

      {/* Solving Games */}
      <div>
        <h3>Solving Games</h3>
        <div>
          <h4>Dominant Strategy</h4>
          <p>
            <strong>Definition:</strong>
            <br />
            A dominant strategy is a strategy that is best for a player regardless of the actions of other players.
          </p>
          <p>
            <strong>Identification:</strong>
            <br />
            To identify a dominant strategy, a player must compare each of their strategies against all of the possible strategies of other players. If one strategy always gives a better payoff, it's dominant.
          </p>
          <p>
            <strong>Example:</strong>
            <br />
            In some games, if one strategy always yields a higher payoff than any other strategy, regardless of what the other player does, it is a dominant strategy.
          </p>
        </div>
        <div>
          <h4>Nash Equilibrium</h4>
          <p>
            <strong>Definition:</strong>
            <br />
            A Nash equilibrium is a set of strategies where no player can benefit by unilaterally changing their strategy, given the strategies of the other players.
          </p>
          <p>
            <strong>Identification:</strong>
            <br />
            To identify a Nash equilibrium, we examine each possible combination of strategies and see if any player can do better by changing their strategy.
          </p>
          <p>
            <strong>Example:</strong>
            <br />
            In the prisoner's dilemma, both players confessing is a Nash equilibrium because neither player can do better by changing their strategy alone.
          </p>
        </div>
      </div>
      {/* Conclusion */}
      <div>
          <h3>Conclusion</h3>
          <p>
            In this chapter, we've covered the basics of game theory, including its purpose, assumptions, basic elements, types of games, and methods for solving games. These concepts are essential for understanding strategic interactions in many fields.
          </p>
      </div>
    </div>
  );
};

export default Chapter5_GameTheory;
