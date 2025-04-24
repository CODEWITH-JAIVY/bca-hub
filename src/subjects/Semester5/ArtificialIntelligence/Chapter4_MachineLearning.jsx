import React from 'react';

const Chapter4_MachineLearning = () => {
  return (
    <div>
      <h2>Chapter 4: Machine Learning</h2>

      <p>
        <strong>Q1: What is machine learning?</strong>
        <br />
        A1: Machine learning is a type of artificial intelligence (AI) that enables systems to learn from data and improve their performance without being explicitly programmed. 
        Instead of following a set of predefined rules, machine learning algorithms use patterns in data to make predictions or decisions.
      </p>

      <p>
        <strong>Q2: What are the types of machine learning?</strong>
        <br />
        A2: There are three main types of machine learning:
        <ul>
          <li><strong>Supervised Learning:</strong> The model is trained using labeled data, and it learns to predict outcomes or classifications.</li>
          <li><strong>Unsupervised Learning:</strong> The model identifies patterns, clusters, or relationships within unlabeled data.</li>
          <li><strong>Reinforcement Learning:</strong> The model learns through interactions with an environment, receiving feedback in the form of rewards or penalties.</li>
        </ul>
      </p>

      <p>
        <strong>Q3: What is supervised learning?</strong>
        <br />
        A3: Supervised learning involves training a model on labeled data. Each input data point is paired with a known output (label), and the model learns the mapping between the input and the correct output. It's used for tasks like classification and regression.
      </p>

      <p>
        <strong>Q4: What are the common supervised learning algorithms?</strong>
        <br />
        A4: Common supervised learning algorithms include:
        <ul>
          <li><strong>Linear Regression:</strong> Used for predicting continuous outcomes.</li>
          <li><strong>Logistic Regression:</strong> Used for binary classification tasks.</li>
          <li><strong>Support Vector Machines (SVM):</strong> A powerful classification technique that separates data using a hyperplane.</li>
          <li><strong>Decision Trees:</strong> A tree-like structure that makes decisions based on feature values.</li>
        </ul>
      </p>

      <p>
        <strong>Q5: What is unsupervised learning?</strong>
        <br />
        A5: Unsupervised learning involves training a model on data that is not labeled. The goal is to identify hidden patterns, clusters, or relationships in the data. It's typically used for clustering, anomaly detection, and dimensionality reduction.
      </p>

      <p>
        <strong>Q6: What are the common unsupervised learning algorithms?</strong>
        <br />
        A6: Common unsupervised learning algorithms include:
        <ul>
          <li><strong>K-means Clustering:</strong> Partitions data into k clusters based on feature similarity.</li>
          <li><strong>Hierarchical Clustering:</strong> Builds a hierarchy of clusters.</li>
          <li><strong>Principal Component Analysis (PCA):</strong> Reduces the dimensionality of the data while retaining as much variance as possible.</li>
        </ul>
      </p>
    </div>
  );
};

export default Chapter4_MachineLearning;
