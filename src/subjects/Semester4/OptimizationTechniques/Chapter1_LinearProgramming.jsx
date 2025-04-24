import React from 'react';

const Chapter1_LinearProgramming = () => {
  return (
    <div>
      {/* Introduction to the Chapter */}
      <h2>Chapter 1: Linear Programming</h2>
      <p>
        Welcome to the world of Linear Programming! In this chapter, we will
        explore a powerful mathematical technique used to optimize outcomes in
        various scenarios. We'll cover what Linear Programming is, its key
        components, the different methods for solving these problems, and some
        real-world applications.
      </p>

      {/* Introduction to Linear Programming */}
      <h3>Introduction to Linear Programming</h3>
      <p>
        <strong>What is Linear Programming (LP)?</strong>
        <br />
        Linear programming (LP) is a mathematical method for determining a way to
        achieve the best outcome (such as maximum profit or lowest cost) in a
        given mathematical model. It involves a linear objective function,
        subject to linear equality and inequality constraints.
      </p>
      <p>
        <strong>History and Evolution of Linear Programming</strong>
        <br />
        Linear programming was developed during World War II by George Dantzig
        for planning expenditures and reducing costs in the army. Since then, it
        has been widely adopted in various fields to improve decision-making.
      </p>
      <p>
        <strong>Real-World Applications of Linear Programming</strong>
        <br />
        LP is used in a wide range of fields, including:
        <ul>
          <li>
            <strong>Business:</strong> Maximizing profits and minimizing costs.
          </li>
          <li>
            <strong>Operations Management:</strong> Optimizing resource allocation
            and scheduling.
          </li>
          <li>
            <strong>Transportation:</strong> Planning delivery routes and logistics.
          </li>
          <li>
            <strong>Finance:</strong> Optimizing investment portfolios.
          </li>
          <li>
            <strong>Manufacturing:</strong> Optimizing production processes.
          </li>
        </ul>
      </p>
      <p>
          <strong>Assumptions of Linear Programming</strong>
          <br/>
          Linear Programming has four important assumptions:
          <ul>
              <li><strong>Proportionality</strong>: The contribution of each decision variable in the objective function and constraints are proportional to the value of the decision variable.</li>
              <li><strong>Additivity</strong>: The contribution of each decision variable in the objective function and constraints is independent of the other decision variables.</li>
              <li><strong>Divisibility</strong>: Decision variables can take on fractional values.</li>
              <li><strong>Certainty</strong>: All model parameters are assumed to be known with certainty.</li>
          </ul>
      </p>

      {/* Key Components of a Linear Programming Problem */}
      <h3>Key Components of a Linear Programming Problem</h3>
      <p>
        <strong>Objective Function</strong>
        <br />
        The objective function is a linear equation that represents the goal to
        be optimized (maximized or minimized). It expresses the relationship
        between the decision variables and the objective.
        <br />
        <strong>Example:</strong>
        <ul>
          <li>
            <strong>Maximization:</strong> Maximize Z = 3x + 5y (e.g., maximizing
            profit)
          </li>
          <li>
            <strong>Minimization:</strong> Minimize C = 2x + 4y (e.g., minimizing
            cost)
          </li>
        </ul>
      </p>
      <p>
        <strong>Decision Variables</strong>
        <br />
        Decision variables are the quantities that we can control to achieve our
        objective. They are the unknowns we are trying to solve for.
        <br />
        <strong>Example:</strong> x and y in the above objective functions could
        represent the number of units of two different products.
      </p>
      <p>
        <strong>Constraints</strong>
        <br />
        Constraints are linear equalities or inequalities that limit the values
        of the decision variables. They represent resource limitations or
        requirements.
        <br />
        <strong>Example:</strong>
        <ul>
          <li>x + y ≤ 10 (e.g., a limited resource)</li>
          <li>2x + 3y = 12 (e.g., a fixed requirement)</li>
          <li>x ≥ 0, y ≥ 0 (non-negativity constraints)</li>
        </ul>
      </p>

      {/* Methods for Solving Linear Programming Problems */}
      <h3>Methods for Solving Linear Programming Problems</h3>
      <p>
        <strong>Graphical Method</strong>
        <br />
        The graphical method is a visual way to solve LP problems with two
        decision variables. It involves plotting the constraints on a graph,
        identifying the feasible region, and finding the optimal solution at one
        of the vertices of this region.
        <br />
        <strong>Steps:</strong>
        <ol>
          <li>Plot each constraint as a line on a graph.</li>
          <li>Identify the feasible region (the area where all constraints are satisfied).</li>
          <li>Determine the vertices (corner points) of the feasible region.</li>
          <li>Evaluate the objective function at each vertex.</li>
          <li>Choose the vertex that gives the optimal value (maximum or minimum).</li>
        </ol>
        <br />
        <strong>Limitations:</strong> Only suitable for problems with two decision variables.
        <br/>
        <strong>Example:</strong> Consider the following problem:
        <br/>
        Maximize: Z = 3x + 2y
        <br/>
        Subject to:
        <br/>
        2x + y ≤ 18
        <br/>
        2x + 3y ≤ 42
        <br/>
        3x + y ≤ 24
        <br/>
        x ≥ 0, y ≥ 0
        <br/>
        We can solve this problem graphically by representing each of the constraints and identifying the feasible region.
      </p>
      <p>
        <strong>Simplex Method</strong>
        <br />
        The simplex method is an algebraic method used to solve LP problems with
        any number of variables. It iteratively moves from one vertex of the
        feasible region to another, improving the objective function value at
        each step.
        <br />
        <strong>Key Concepts:</strong>
        <ul>
          <li>
            <strong>Slack Variables:</strong> Added to convert inequality
            constraints into equalities (≤).
          </li>
          <li>
            <strong>Surplus Variables:</strong> Subtracted to convert inequality
            constraints into equalities (≥).
          </li>
          <li>
            <strong>Artificial Variables:</strong> Used to find an initial
            feasible solution.
          </li>
        </ul>
        <br />
        <strong>Advantages:</strong> Can handle problems with many decision variables.
      </p>
        <p>
        <strong>Types of linear programming</strong>
        <br />
        <ul>
          <li>
            <strong>Integer Linear Programming (ILP):</strong> All variables are restricted to be integers.
          </li>
          <li>
            <strong>Mixed-Integer Linear Programming (MILP):</strong> Some variables are integers, while others are continuous.
          </li>
          <li>
            <strong>Binary Linear Programming (BLP):</strong> All variables are restricted to be binary (0 or 1).
          </li>
        </ul>
      </p>
        {/* Conclusion */}
      <p>
        In this chapter, we've learned the basics of Linear Programming. We
        explored what LP is, its history, key components, real-world
        applications, and methods for solving LP problems.
      </p>
    </div>
  );
};

export default Chapter1_LinearProgramming;
