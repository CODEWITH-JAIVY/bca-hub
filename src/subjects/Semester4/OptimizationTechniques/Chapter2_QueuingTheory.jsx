import React from 'react';

const Chapter2_QueuingTheory = () => {
    return (
        <div>
            <h2>Chapter 2: Queuing Theory</h2>
            <p>
                <strong>Q1: What is queuing theory?</strong>
                <br />
                A1: Queuing theory is the mathematical study of waiting lines (or queues). It provides a framework for analyzing and predicting the behavior of systems that involve waiting lines.
            </p>
            <p>
                <strong>Q2: What are the key components of a queuing system?</strong>
                <br />
                A2: Key components include the arrival process, the service process, the queue discipline, and the number of servers.
            </p>
            <p>
                <strong>Q3: What is the arrival process?</strong>
                <br />
                A3: The arrival process describes how customers arrive at the system, including the arrival rate and the inter-arrival time distribution.
            </p>
            <p>
                <strong>Q4: What is the service process?</strong>
                <br />
                A4: The service process describes how customers are served, including the service rate and the service time distribution.
            </p>
            <p>
                <strong>Q5: What is the queue discipline?</strong>
                <br />
                A5: The queue discipline specifies the order in which customers are served, such as First-Come, First-Served (FCFS), Last-Come, First-Served (LCFS), or priority-based.
            </p>
        </div>
    );
};

export default Chapter2_QueuingTheory;
