import React from 'react';

const Chapter5_BTreesAndIndexing = () => {
    return (
        <div>
            <h2>Chapter 5: B-Trees and Indexing</h2>
            <p>
                <strong>Q1: What is a B-tree?</strong>
                <br />
                A1: A B-tree is a self-balancing tree data structure that maintains sorted data and allows searches, sequential access, insertions, and deletions in logarithmic time.
            </p>
            <p>
                <strong>Q2: What are the properties of a B-tree?</strong>
                <br />
                A2: Properties include a balanced structure, each node containing multiple keys, and all leaf nodes being at the same level.
            </p>
            <p>
                <strong>Q3: What is indexing?</strong>
                <br />
                A3: Indexing is a data structure technique used to improve the speed of data retrieval operations in a database.
            </p>
            <p>
                <strong>Q4: What are the types of indexing?</strong>
                <br />
                A4: Types include primary index, secondary index, and clustered index.
            </p>
            <p>
                <strong>Q5: What is a primary index?</strong>
                <br />
                A5: A primary index is an index that is created on the primary key field of a table, uniquely identifying each record.
            </p>
            <p>
                <strong>Q6: What is a secondary index?</strong>
                <br />
                A6: A secondary index is an index created on non-key fields, used to improve search performance based on these fields.
            </p>
        </div>
    );
};

export default Chapter5_BTreesAndIndexing;
