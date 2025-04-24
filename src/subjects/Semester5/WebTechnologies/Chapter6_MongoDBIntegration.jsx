import React from 'react';

const Chapter6_MongoDBIntegration = () => {
    return (
        <div>
            <h2>Chapter 6: MongoDB Integration</h2>
            <p>
                <strong>Q1: What is MongoDB?</strong>
                <br />
                A1: MongoDB is a NoSQL, document-oriented database that stores data in flexible, JSON-like documents.
            </p>
            <p>
                <strong>Q2: What are the advantages of using MongoDB?</strong>
                <br />
                A2: Advantages include flexible schema, scalability, and high performance.
            </p>
            <p>
                <strong>Q3: How do you connect to MongoDB using Node.js?</strong>
                <br />
                A3: You can connect to MongoDB using the <code>mongodb</code> Node.js driver or Mongoose.
            </p>
            <p>
                <strong>Q4: What is Mongoose?</strong>
                <br />
                A4: Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js.
            </p>
            <p>
                <strong>Q5: How do you perform CRUD operations in MongoDB using Mongoose?</strong>
                <br />
                A5: CRUD (Create, Read, Update, Delete) operations can be performed using Mongoose methods such as <code>create()</code>, <code>find()</code>, <code>update()</code>, and <code>delete()</code>.
            </p>
        </div>
    );
};

export default Chapter6_MongoDBIntegration;
