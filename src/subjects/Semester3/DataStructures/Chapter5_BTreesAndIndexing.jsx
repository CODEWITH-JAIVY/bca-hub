import React from 'react';

const Chapter5_BTreesAndIndexing = () => {
    return (
        <div>
            <h2>Chapter 5: B-Trees and Indexing</h2>
            
            <p>
                <strong>Q1: What is a B-tree?</strong>
                <br />
                A B-tree is a self-balancing tree data structure that maintains sorted data and allows searches, sequential access, insertions, and deletions in logarithmic time. It is particularly useful in databases and file systems where large amounts of data need to be stored and accessed quickly. Unlike binary trees, where each node has at most two children, a B-tree node can contain multiple keys and has multiple children. This allows B-trees to maintain balance and perform efficient operations, even with large datasets.
            </p>
            
            <p>
                <strong>Q2: What are the properties of a B-tree?</strong>
                <br />
                The key properties of a B-tree are:
                <ul>
                    <li><strong>Balanced Structure:</strong> The height of the tree is kept low, ensuring that all leaf nodes are at the same level. This balance guarantees efficient operations (search, insert, delete) in logarithmic time.</li>
                    <li><strong>Node Contains Multiple Keys:</strong> Each node in the B-tree can hold more than one key. This allows the tree to have fewer levels, making operations faster. A node typically contains keys in sorted order and pointers to child nodes.</li>
                    <li><strong>Nodes Have Multiple Children:</strong> Each internal node in a B-tree has more than two children (unlike binary trees, which have at most two children). The number of children per node is determined by the order of the tree.</li>
                    <li><strong>Uniform Depth:</strong> All leaf nodes in the B-tree are at the same level, ensuring that the tree remains balanced. This uniform depth allows for fast searching because every search involves traversing the same number of levels, regardless of the position of the data.</li>
                    <li><strong>Self-Balancing:</strong> B-trees are self-balancing, meaning that the tree automatically adjusts itself after every insertion or deletion to maintain its balance and ensure optimal search times.</li>
                </ul>
            </p>
            
            <p>
                <strong>Q3: What is indexing?</strong>
                <br />
                Indexing is a data structure technique used to improve the speed of data retrieval operations in a database or any large dataset. Just like an index in a book helps you find topics quickly, an index in a database allows the system to quickly locate the data without needing to scan through every record. Indexing creates a separate data structure (such as a B-tree, hash table, or a bitmap) that points to the actual data in a table, which significantly speeds up search operations.
            </p>

            <p>
                <strong>Q4: What are the types of indexing?</strong>
                <br />
                There are several types of indexing, each used for different purposes in database systems:
                <ul>
                    <li><strong>Primary Index:</strong> This type of index is created on the primary key of a table. The primary key uniquely identifies each record in the table, and the primary index provides a way to quickly locate records using this key. It is the most common and essential index type in any database.</li>
                    <li><strong>Secondary Index:</strong> A secondary index is created on non-key columns that are frequently queried but are not the primary key. For example, if you frequently search for records based on a "customer name" field but it's not the primary key, you can create a secondary index on this field to speed up queries.</li>
                    <li><strong>Clustered Index:</strong> A clustered index determines the physical order of data in the database. In a table with a clustered index, the rows are stored in the order of the indexed column. A table can have only one clustered index because the data can only be physically sorted in one order. Typically, the primary key is used as the clustered index.</li>
                </ul>
            </p>

            <p>
                <strong>Q5: What is a primary index?</strong>
                <br />
                A primary index is an index that is created on the primary key of a table. The primary key is a field or combination of fields that uniquely identifies each record in a database table. The primary index helps in efficiently retrieving data based on this key. Since each record is uniquely identified by its primary key, the index allows quick access to any record in the table. In many databases, the primary index is automatically created when a primary key is defined.
            </p>
            
            <p>
                <strong>Q6: What is a secondary index?</strong>
                <br />
                A secondary index is an index created on columns that are not part of the primary key but are frequently used in queries. For example, if you are querying a customer table based on "customer name" but the name is not the primary key, you can create a secondary index on the "name" column to speed up those queries. Unlike the primary index, a secondary index can have duplicates, as non-key fields can have multiple records with the same value. This index improves the speed of queries that use non-key attributes, but it does not affect the physical storage order of data in the table.
            </p>

        </div>
    );
};

export default Chapter5_BTreesAndIndexing;
 