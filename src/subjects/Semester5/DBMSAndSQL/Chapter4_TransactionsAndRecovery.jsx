import React from 'react';

const Chapter4_TransactionsAndRecovery = () => {
    return (
        <div>
            <h2>Chapter 4: Transactions and Recovery</h2>
            <p>
                <strong>Q1: What is a transaction in DBMS?</strong>
                <br />
                A1: A transaction is a logical unit of work that performs one or more database operations.
            </p>
            <p>
                <strong>Q2: What are the properties of a transaction (ACID properties)?</strong>
                <br />
                A2: ACID properties include Atomicity, Consistency, Isolation, and Durability.
            </p>
            <p>
                <strong>Q3: Explain Atomicity.</strong>
                <br />
                A3: Atomicity ensures that a transaction is treated as a single, indivisible unit of work, either all changes are applied or none are.
            </p>
            <p>
                <strong>Q4: Explain Consistency.</strong>
                <br />
                A4: Consistency ensures that a transaction maintains the integrity of the database, moving it from one valid state to another.
            </p>
            <p>
                <strong>Q5: Explain Isolation.</strong>
                <br />
                A5: Isolation ensures that concurrent transactions do not interfere with each other, preventing data corruption.
            </p>
            <p>
                <strong>Q6: Explain Durability.</strong>
                <br />
                A6: Durability ensures that once a transaction is committed, its changes are permanent and will survive system failures.
            </p>
            <p>
                <strong>Q7: What is database recovery?</strong>
                <br />
                A7: Database recovery is the process of restoring the database to a consistent state after a failure or crash.
            </p>
        </div>
    );
};

export default Chapter4_TransactionsAndRecovery;
