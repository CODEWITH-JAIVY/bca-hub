import React from 'react';

const Chapter1_DBIntroAndModels = () => {
    return (
        <div>
            <h2>Chapter 1: Database Introduction and Models</h2>
            <p>
                <strong>Q1: What is a database?</strong>
                <br />
                A1: A database is an organized collection of structured information, or data, typically stored electronically in a computer system.
            </p>
            <p>
                <strong>Q2: What are the advantages of using a database?</strong>
                <br />
                A2: Advantages include data integrity, data consistency, data security, and efficient data access.
            </p>
            <p>
                <strong>Q3: What are the types of database models?</strong>
                <br />
                A3: Types include hierarchical, network, relational, and object-oriented database models.
            </p>
            <p>
                <strong>Q4: What is the hierarchical database model?</strong>
                <br />
                A4: The hierarchical database model organizes data in a tree-like structure, with a one-to-many relationship between nodes.
            </p>
            <p>
                <strong>Q5: What is the network database model?</strong>
                <br />
                A5: The network database model extends the hierarchical model by allowing a node to have multiple parent nodes, forming a network-like structure.
            </p>
            <p>
                <strong>Q6: What is the relational database model?</strong>
                <br />
                A6: The relational database model organizes data into tables with rows (records) and columns (fields), and establishes relationships between tables using keys.
            </p>
        </div>
    );
};

export default Chapter1_DBIntroAndModels;
