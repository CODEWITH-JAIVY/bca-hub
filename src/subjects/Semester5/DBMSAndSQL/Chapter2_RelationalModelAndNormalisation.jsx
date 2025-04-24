import React from 'react';

const Chapter2_RelationalModelAndNormalisation = () => {
    return (
        <div>
            <h2>Chapter 2: Relational Model and Normalization</h2>
            <p>
                <strong>Q1: What is a relational model?</strong>
                <br />
                A1: The relational model is a database model that organizes data into tables with rows and columns, and establishes relationships between tables using keys.
            </p>
            <p>
                <strong>Q2: What are the key components of the relational model?</strong>
                <br />
                A2: Components include tables, attributes (columns), tuples (rows), and keys.
            </p>
            <p>
                <strong>Q3: What are the types of keys in a relational database?</strong>
                <br />
                A3: Types include primary key, foreign key, candidate key, and composite key.
            </p>
            <p>
                <strong>Q4: What is normalization?</strong>
                <br />
                A4: Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity.
            </p>
            <p>
                <strong>Q5: What are the normal forms?</strong>
                <br />
                A5: Normal forms include 1NF (First Normal Form), 2NF (Second Normal Form), and 3NF (Third Normal Form).
            </p>
            <p>
                <strong>Q6: What is 1NF?</strong>
                <br />
                A6: 1NF (First Normal Form) requires that each column in a table contains only atomic values and there are no repeating groups.
            </p>
            <p>
                <strong>Q7: What is 2NF?</strong>
                <br />
                A7: 2NF (Second Normal Form) requires that the table is in 1NF and all non-key attributes are fully functionally dependent on the primary key.
            </p>
            <p>
                <strong>Q8: What is 3NF?</strong>
                <br />
                A8: 3NF (Third Normal Form) requires that the table is in 2NF and all non-key attributes are not transitively dependent on the primary key.
            </p>
        </div>
    );
};

export default Chapter2_RelationalModelAndNormalisation;
