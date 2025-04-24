import React from 'react';

const Chapter2_JavaScriptAndDOM = () => {
    return (
        <div>
            <h2>Chapter 2: JavaScript and DOM</h2>
            <p>
                <strong>Q1: What is JavaScript?</strong>
                <br />
                A1: JavaScript is a high-level, versatile programming language used to make web pages interactive and dynamic.
            </p>
            <p>
                <strong>Q2: How do you include JavaScript in HTML?</strong>
                <br />
                A2: JavaScript can be included using inline scripts (<code>&lt;script&gt;</code> tag within the HTML) or external JavaScript files (<code>&lt;script src=""&gt;</code>).
            </p>
            <p>
                <strong>Q3: What are the basic data types in JavaScript?</strong>
                <br />
                A3: Data types include number, string, boolean, null, undefined, and symbol.
            </p>
            <p>
                <strong>Q4: What is the DOM?</strong>
                <br />
                A4: The DOM (Document Object Model) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content.
            </p>
            <p>
                <strong>Q5: How do you access HTML elements using JavaScript?</strong>
                <br />
                A5: Elements can be accessed using methods like <code>document.getElementById()</code>, <code>document.querySelector()</code>, and <code>document.querySelectorAll()</code>.
            </p>
        </div>
    );
};

export default Chapter2_JavaScriptAndDOM;
