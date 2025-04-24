import React from 'react';

const Chapter2_SearchAlgorithms = () => {
  return (
    <div>
      <h2>Chapter 2: Search Algorithms</h2>

      {/* Introduction */}
      <div>
        <h3>Introduction to Search Algorithms</h3>
        <p>
          <strong>What are Search Algorithms?</strong>
          <br />
          Search algorithms are fundamental techniques used in AI to systematically explore a set of possible solutions to find the optimal one or a satisfactory one. They are essential for solving problems where the solution is not immediately obvious and needs to be found by exploring a set of possible states.
        </p>
        <p>
          <strong>Importance of Search Algorithms in AI</strong>
          <br />
          Search algorithms are crucial for solving a wide range of AI problems, including pathfinding, game playing, planning, and scheduling. They provide a systematic way to navigate complex problem spaces and find the most effective solution.
        </p>
        <p>
          <strong>Search Space</strong>
          <br />
          The search space is the set of all possible states or configurations that a problem can have. A state represents a specific configuration or snapshot of the problem. The search algorithm explores this space to find the path from an initial state to a goal state.
        </p>
        <p>
          <strong>Goal of Search Algorithms</strong>
          <br/>
          The goal of search algorithms is to find the best or optimal path from the initial state to the goal state, exploring the search space.
        </p>
      </div>

      {/* Uninformed Search Algorithms */}
      <div>
        <h3>Uninformed Search Algorithms</h3>
        <p>
            Uninformed search algorithms do not have any additional information about the states beyond that provided in the problem definition. They use brute-force approaches to explore the search space.
        </p>
        {/* Breadth-First Search (BFS) */}
        <div>
          <h4>Breadth-First Search (BFS)</h4>
          <p>
            <strong>Explanation:</strong>
            <br />
            BFS explores all the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level. It starts at the root node and explores all its neighbors. Then, for each of those neighbors, it explores their unexplored neighbors, and so on.
          </p>
          <p>
            <strong>Algorithm Steps:</strong>
            <br />
            <ol>
              <li>Enqueue the root node.</li>
              <li>Dequeue a node and examine it.</li>
              <li>If the element being searched for is found in this node, quit the search and return a result.</li>
              <li>Otherwise, enqueue any successors (the direct child nodes) that have not yet been discovered.</li>
              <li>If the queue is empty, every node on the graph has been examined — quit the search and return "not found".</li>
              <li>Repeat from Step 2.</li>
            </ol>
          </p>
          <p>
            <strong>Advantages:</strong>
            <br />
            <ul>
              <li>Finds the shortest path to the goal node.</li>
              <li>Is complete (it will always find a solution if one exists).</li>
            </ul>
          </p>
          <p>
            <strong>Disadvantages:</strong>
            <br />
            <ul>
              <li>Requires a lot of memory as it stores all nodes at each level.</li>
              <li>Can be slow if the search space is large.</li>
            </ul>
          </p>
          <p>
            <strong>Example:</strong>
            <br />
            Imagine searching for a friend in a social network. BFS would explore all your immediate friends first, then your friends' friends, and so on.
          </p>
        </div>
        {/* Depth-First Search (DFS) */}
        <div>
          <h4>Depth-First Search (DFS)</h4>
          <p>
            <strong>Explanation:</strong>
            <br />
            DFS explores as far as possible along each branch before backtracking. It starts at the root node and explores one branch as deep as possible before moving to the next branch.
          </p>
          <p>
            <strong>Algorithm Steps:</strong>
            <br />
            <ol>
              <li>Start by putting any one of the graph's vertices on top of a stack.</li>
              <li>Take the top item of the stack and add it to the visited list.</li>
              <li>Create a list of that vertex's adjacent nodes. Add the ones which aren't in the visited list to the top of the stack.</li>
              <li>Keep repeating steps 2 and 3 until the stack is empty.</li>
            </ol>
          </p>
          <p>
            <strong>Advantages:</strong>
            <br />
            <ul>
              <li>Requires less memory compared to BFS.</li>
              <li>Can find a solution more quickly than BFS in some cases.</li>
            </ul>
          </p>
          <p>
            <strong>Disadvantages:</strong>
            <br />
            <ul>
              <li>Can get stuck in infinite loops if the search space is not finite.</li>
              <li>Does not guarantee finding the shortest path.</li>
            </ul>
          </p>
          <p>
            <strong>Example:</strong>
            <br />
            Consider navigating a maze. DFS would go down one path until a dead end, then backtrack and try a different path.
          </p>
        </div>
      </div>

      {/* Informed Search Algorithms */}
      <div>
        <h3>Informed Search Algorithms</h3>
        <p>
          Informed search algorithms use domain-specific knowledge (heuristics) to guide the search process, making it more efficient.
        </p>
        {/* Greedy Best-First Search */}
        <div>
          <h4>Greedy Best-First Search</h4>
          <p>
            <strong>Explanation:</strong>
            <br />
            Greedy Best-First Search expands the node that is closest to the goal, as estimated by a heuristic function. It tries to move towards the goal as quickly as possible.
          </p>
          <p>
            <strong>Heuristic Functions:</strong>
            <br />
            Heuristic functions estimate the cost from the current node to the goal node.
          </p>
          <p>
            <strong>Advantages:</strong>
            <br />
            <ul>
              <li>Can be very efficient in some cases.</li>
            </ul>
          </p>
          <p>
            <strong>Disadvantages:</strong>
            <br />
            <ul>
              <li>Not complete (it might not find a solution if one exists).</li>
              <li>Not optimal (it might not find the shortest path).</li>
            </ul>
          </p>
          <p>
            <strong>Example:</strong>
            <br/>
            When traveling from one city to another, greedy best-first search might always choose the next city that is closest to the destination without considering the total distance.
          </p>
        </div>
        {/* A* Search */}
        <div>
          <h4>A* Search</h4>
          <p>
            <strong>Explanation:</strong>
            <br />
            A* search uses a heuristic function to estimate the cost from the current node to the goal and selects the node with the lowest estimated total cost to explore next.
          </p>
          <p>
            <strong>Heuristic Functions:</strong>
            <br />
            Heuristic functions estimate the cost from the current node to the goal node.
          </p>
          <p>
            <strong>Evaluation Function:</strong>
            <br />
            In A* search, f(n) = g(n) + h(n), where:
            <ul>
                <li>f(n) is the estimated total cost.</li>
                <li>g(n) is the cost from the start node to the current node.</li>
                <li>h(n) is the heuristic cost from the current node to the goal node.</li>
            </ul>
          </p>
          <p>
            <strong>Advantages:</strong>
            <br />
            <ul>
              <li>Is complete (it will always find a solution if one exists).</li>
              <li>Is optimal (it will find the shortest path if the heuristic is admissible).</li>
            </ul>
          </p>
          <p>
            <strong>Disadvantages:</strong>
            <br />
            <ul>
              <li>Can require a lot of memory.</li>
            </ul>
          </p>
          <p>
            <strong>Example:</strong>
            <br/>
            Consider planning a route on a map. A* search would evaluate each route based on both the distance traveled so far (g(n)) and the estimated distance to the destination (h(n)).
          </p>
        </div>
      </div>

      {/* Conclusion */}
      <div>
        <h3>Conclusion</h3>
        <p>
          Search algorithms are at the heart of many AI applications, enabling us to find solutions in vast and complex search spaces. Understanding the different types of search algorithms—uninformed and informed—and their respective strengths and weaknesses is essential for developing efficient AI systems.
        </p>
      </div>
    </div>
  );
};

export default Chapter2_SearchAlgorithms;
