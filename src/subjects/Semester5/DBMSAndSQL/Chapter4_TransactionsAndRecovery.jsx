import React from 'react';

const Chapter4_TransactionsAndRecovery = () => {
    return (
        <div>
            <h2>Chapter 4: Transactions and Recovery</h2>

            <section>
                <h3>1. What is a Transaction in DBMS?</h3>
                <p>
                    A transaction in DBMS is a sequence of one or more operations performed as a single unit of work. Transactions ensure that the database remains in a consistent state, even in the event of system failures.
                    It may involve multiple database operations, such as INSERT, UPDATE, or DELETE, all of which are treated as a single unit of execution.
                </p>
                <p><strong>Example:</strong> If you're transferring money from one bank account to another, it involves two operations: deducting the amount from one account and adding it to another. These two operations should happen together as a transaction.</p>
            </section>

            <section>
                <h3>2. What Are the Properties of a Transaction (ACID properties)?</h3>
                <p>
                    The ACID properties (Atomicity, Consistency, Isolation, and Durability) ensure that a transaction is executed in a reliable, predictable, and secure manner.
                </p>
                <ul>
                    <li><strong>Atomicity:</strong> This property ensures that a transaction is either fully completed or fully rolled back. There is no partial completion. If a transaction is interrupted (for example, due to a system crash), all changes made during the transaction are discarded, ensuring that the database remains consistent.</li>
                    <li><strong>Consistency:</strong> The database must always remain in a valid state before and after the transaction. After the transaction is committed, all data must adhere to the defined rules, constraints, and business logic of the database.</li>
                    <li><strong>Isolation:</strong> Isolation ensures that concurrent transactions do not affect each other. Each transaction should be executed in isolation, meaning that intermediate results are not visible to other transactions until the transaction is fully committed.</li>
                    <li><strong>Durability:</strong> Once a transaction is committed, its effects are permanent, even in the case of a system failure. The changes made by the transaction will be preserved and can be recovered after a crash.</li>
                </ul>
            </section>

            <section>
                <h3>3. Explain Atomicity.</h3>
                <p>
                    Atomicity ensures that a transaction is indivisible. In other words, it guarantees that either all the operations of a transaction are completed successfully, or none of them are applied. If any operation in a transaction fails (for example, due to a power failure), the entire transaction is rolled back, and no changes are made to the database.
                </p>
                <p><strong>Example:</strong> Imagine a banking system where money is being transferred from Account A to Account B. If the deduction from Account A is successful, but the addition to Account B fails, atomicity ensures that the entire transaction is canceled, and no money is transferred. The system ensures no partial transaction is left, preserving consistency.</p>
            </section>

            <section>
                <h3>4. Explain Consistency.</h3>
                <p>
                    Consistency ensures that a transaction transforms the database from one valid state to another. The database is always in a consistent state before and after a transaction. If a transaction violates any database constraints (like primary key, foreign key, or other business rules), the transaction is rolled back to its initial state, preventing any inconsistency.
                </p>
                <p><strong>Example:</strong> In a banking system, a rule might be that no account can have a negative balance. If a transaction tries to withdraw more than the available balance, the database ensures that this rule is not violated and the transaction fails.</p>
            </section>

            <section>
                <h3>5. Explain Isolation.</h3>
                <p>
                    Isolation ensures that the operations of a transaction are isolated from the operations of other concurrent transactions. The intermediate state of a transaction is not visible to other transactions until the transaction is fully committed. This prevents anomalies such as dirty reads (reading uncommitted data), non-repeatable reads, and phantom reads, which could lead to inconsistent or incorrect results.
                </p>
                <p><strong>Example:</strong> If two people try to book the last ticket for a flight simultaneously, isolation ensures that only one of them will be able to successfully book the ticket, and the other will receive an error message or wait for the ticket to become available.</p>
            </section>

            <section>
                <h3>6. Explain Durability.</h3>
                <p>
                    Durability ensures that once a transaction is committed, its changes are permanent and will survive any subsequent system failures. Even if the system crashes immediately after a transaction is committed, the changes made by the transaction are safely stored and can be recovered when the system is restarted.
                </p>
                <p><strong>Example:</strong> After a bank transfer is committed, even if the server crashes immediately after, the changes (deduction from one account and addition to another) will be preserved, and the transaction will be fully reflected in the database upon recovery.</p>
            </section>

            <section>
                <h3>7. What is Database Recovery?</h3>
                <p>
                    Database recovery refers to the process of restoring a database to a consistent state after a failure, such as a system crash or power outage. Recovery mechanisms ensure that the database is restored to the last committed state, either by rolling back uncommitted transactions or applying the changes of committed transactions that were not written to disk.
                </p>
                <p>
                    Common recovery techniques include:
                    <ul>
                        <li><strong>Log-based recovery:</strong> Transactions are logged in a transaction log, and this log is used to restore the database to a consistent state after a crash. If a transaction was committed before the crash, its changes are reapplied; if it was not, the changes are rolled back.</li>
                        <li><strong>Checkpoints:</strong> Periodic snapshots of the database that can be used to restore the system to a recent state quickly.</li>
                        <li><strong>Shadow Paging:</strong> Involves maintaining a shadow copy of the database pages, which allows recovery without relying on logs.</li>
                    </ul>
                </p>
            </section>

        </div>
    );
};

export default Chapter4_TransactionsAndRecovery;
