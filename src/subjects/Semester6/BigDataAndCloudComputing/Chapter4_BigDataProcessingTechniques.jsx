import React from 'react';

const Chapter4_BigDataProcessingTechniques = () => {
    return (
        <div>
            <h2>Chapter 4: Big Data Processing Techniques</h2>
            <p>
                <strong>Q1: What are the common techniques for processing Big Data?</strong>
                <br />
                A1: Common techniques include MapReduce, Apache Spark, and stream processing.
            </p>
            <p>
                <strong>Q2: What is MapReduce?</strong>
                <br />
                A2: MapReduce is a programming model and software framework for processing large datasets in parallel on distributed computing systems.
            </p>
            <p>
                <strong>Q3: How does MapReduce work?</strong>
                <br />
                A3: MapReduce works by dividing the input data into smaller chunks, processing them in parallel using map functions, and then combining the results using reduce functions.
            </p>
            <p>
                <strong>Q4: What is Apache Spark?</strong>
                <br />
                A4: Apache Spark is a fast and general-purpose distributed computing system used for Big Data processing and analytics.
            </p>
        </div>
    );
};

export default Chapter4_BigDataProcessingTechniques;
