import React from 'react';

const Chapter2_SearchAlgorithms = () => {
    return (
        <div>
            <h2>Chapter 2: Search Algorithms</h2>
            <p>
                <strong>Q1: What are search algorithms in AI?</strong>
                <br />
                A1: Search algorithms are used to explore possible solutions to a problem and find the optimal solution.
            </p>
            <p>
                <strong>Q2: What are the types of search algorithms?</strong>
                <br />
                A2: Types include uninformed search and informed search.
            </p>
            <p>
                <strong>Q3: What is uninformed search?</strong>
                <br />
                A3: Uninformed search algorithms do not use any domain-specific knowledge to guide the search process, such as Breadth-First Search (BFS) and Depth-First Search (DFS).
            </p>
            <p>
                <strong>Q4: What is Breadth-First Search (BFS)?</strong>
                <br />
                A4: BFS explores all the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level.
            </p>
            <p>
                <strong>Q5: What is Depth-First Search (DFS)?</strong>
                <br />
                A5: DFS explores as far as possible along each branch before backtracking.
            </p>
            <p>
                <strong>Q6: What is informed search?</strong>
                <br />
                A6: Informed search algorithms use domain-specific knowledge to guide the search process, such as A* search and Greedy best-first search.
            </p>
            <p>
                <strong>Q7: What is A* search?</strong>
                <br />
                A7: A* search uses a heuristic function to estimate the cost from the current node to the goal and selects the node with the lowest estimated cost to explore next.
            </p>
        </div>
    );
};

export default Chapter2_SearchAlgorithms;
