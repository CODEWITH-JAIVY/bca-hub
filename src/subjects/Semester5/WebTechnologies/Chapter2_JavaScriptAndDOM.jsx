import React from "react";

// Component for Chapter 2: JavaScript and DOM
const Chapter2_JavaScriptAndDOM = () => {
  return (
    <div>
      {/* Chapter Title */}
      <h2>Chapter 2: JavaScript and the DOM</h2>

      {/* Introduction to the Chapter */}
      <p>
        Welcome to Chapter 2! Here, we'll dive into JavaScript, the language
        that brings interactivity to web pages. We'll also explore the DOM
        (Document Object Model), which allows JavaScript to manipulate the
        content and structure of a webpage.
      </p>

      {/* Introduction to JavaScript */}
      <h3>Introduction to JavaScript</h3>
      <p>
        <strong>What is JavaScript?</strong>
        <br />
        JavaScript is a high-level, interpreted programming language primarily
        known for its use in web development. It allows developers to create
        dynamic and interactive web pages, adding behavior and functionality to
        otherwise static HTML and CSS content.
      </p>
      <p>
        <strong>Purpose of JavaScript:</strong>
        <br />
        JavaScript enables developers to make web pages come alive by handling
        user interactions, manipulating page content, validating forms, and much
        more.
      </p>
      <p>
        <strong>History and Evolution of JavaScript:</strong>
        <br />
        JavaScript was created by Brendan Eich in 1995 while he was working at
        Netscape. It was initially called Mocha, then LiveScript, and finally
        JavaScript. Over the years, it has evolved from a simple scripting
        language to a powerful tool for building complex web applications.
      </p>
      <p>
        <strong>JavaScript, HTML, and CSS:</strong>
        <br />
        JavaScript, HTML, and CSS work together to create a complete web
        experience. HTML provides the structure, CSS handles the styling, and
        JavaScript adds interactivity.
      </p>

      {/* Basic JavaScript Concepts */}
      <h3>Basic JavaScript Concepts</h3>
      <p>
        <strong>Variables:</strong>
        <br />
        Variables are containers for storing data values. In JavaScript, you can
        declare variables using <code>let</code>, <code>const</code>, or{" "}
        <code>var</code>. Example: <code>let age = 30;</code>
      </p>
      <p>
        <strong>Data Types:</strong>
        <br />
        JavaScript has several data types, including:
        <ul>
          <li>
            <code>string</code>: Represents textual data. Example:{" "}
            <code>let name = "John";</code>
          </li>
          <li>
            <code>number</code>: Represents numeric values. Example:{" "}
            <code>let count = 10;</code>
          </li>
          <li>
            <code>boolean</code>: Represents true/false values. Example:{" "}
            <code>let isLoggedIn = true;</code>
          </li>
          <li>
            <code>null</code>: Represents the intentional absence of a value.
          </li>
          <li>
            <code>undefined</code>: Represents a variable that has not been
            assigned a value.
          </li>
          <li>
            <code>object</code>: Represents a collection of properties. Example:{" "}
          
          </li>
          <li>
            <code>array</code>: Represents an ordered list of values. Example:{" "}
            <code>let colors = ["red", "green", "blue"];</code>
          </li>
        </ul>
      </p>
      <p>
        <strong>Operators:</strong>
        <br />
        Operators are used to perform operations on variables and values:
        <ul>
          <li>
            Arithmetic: <code>+</code>, <code>-</code>, <code>*</code>,{" "}
            <code>/</code>, <code>%</code>
          </li>
          <li>
            Comparison: <code>==</code>, <code>===</code>, <code>!=</code>,{" "}
            <code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>,{" "}
            <code>&lt;=</code>
          </li>
          <li>
            Logical: <code>&amp;&amp;</code> (AND), <code>||</code> (OR),{" "}
            <code>!</code> (NOT)
          </li>
        </ul>
      </p>
      <p>
        <strong>Control Flow:</strong>
        <br />
        Control flow statements manage the order of execution:
        <ul>
          <li>
            <code>if/else</code>: Executes code based on a condition.
          </li>
          <li>
            <code>switch</code>: Chooses from multiple code blocks.
          </li>
          <li>
            <code>for</code>: Repeats a block of code a specific number of times.
          </li>
          <li>
            <code>while</code>: Repeats a block of code while a condition is true.
          </li>
        </ul>
      </p>
      <p>
        <strong>Functions:</strong>
        <br />
        Functions are reusable blocks of code. Example:
        <code>
          function greet(name) {"{"} console.log("Hello, " + name + "!");{"}"}
        </code>
      </p>

      {/* Introduction to the DOM */}
      <h3>Introduction to the DOM</h3>
      <p>
        <strong>What is the DOM?</strong>
        <br />
        The DOM (Document Object Model) is a programming interface for HTML and
        XML documents. It represents the page as a tree structure where each
        node is an object.
      </p>
      <p>
        <strong>Purpose of the DOM:</strong>
        <br />
        The DOM allows programs (like JavaScript) to change the document
        structure, style, and content. It's the way JavaScript interacts with
        web pages.
      </p>
      <p>
        <strong>DOM Tree Structure:</strong>
        <br />
        The DOM is structured as a tree of nodes, with the root being the{" "}
        <code>document</code> node. Each HTML element is a node, and nodes can
        have parent, child, and sibling relationships.
      </p>

      {/* DOM Manipulation */}
      <h3>DOM Manipulation</h3>
      <p>
        <strong>Selecting Elements:</strong>
        <br />
        JavaScript provides several methods to select elements:
        <ul>
          <li>
            <code>document.getElementById(id)</code>: Selects an element by its
            ID.
          </li>
          <li>
            <code>document.querySelector(selector)</code>: Selects the first
            element that matches a CSS selector.
          </li>
          <li>
            <code>document.querySelectorAll(selector)</code>: Selects all
            elements that match a CSS selector.
          </li>
        </ul>
      </p>
      <p>
        <strong>Modifying Content and Attributes:</strong>
        <br />
        <ul>
          <li>
            <code>textContent</code>: Sets or gets the text content of a node.
          </li>
          <li>
            <code>innerHTML</code>: Sets or gets the HTML content of a node.
          </li>
          <li>
            <code>setAttribute(name, value)</code>: Sets the value of an
            attribute.
          </li>
          <li>
            <code>getAttribute(name)</code>: Gets the value of an attribute.
          </li>
        </ul>
      </p>
      <p>
        <strong>Adding and Removing Elements:</strong>
        <br />
        You can create new elements using <code>document.createElement()</code>,
        append them using <code>appendChild()</code>, and remove elements using
        <code>removeChild()</code>.
      </p>
      <p>
        <strong>Events</strong>
        <br />
        Events are actions or occurrences that happen in the browser, such as a
        user clicking a button, moving the mouse, or loading a page.
        <br />
        Example: <code>onclick</code>, <code>onmouseover</code>,{" "}
        <code>onkeydown</code>.
      </p>
      <p>
        <strong>Event Listeners</strong>
        <br />
        Event listeners are functions that wait for a specific event to happen
        and then run some code.
        <br />
        Example: <code>element.addEventListener("click", myFunction)</code>.
      </p>

      {/* Conclusion */}
      <h3>Conclusion</h3>
      <p>
        In this chapter, we've explored the fundamentals of JavaScript and how
        it interacts with the DOM. These are essential concepts for creating
        dynamic web pages. Keep practicing, and you'll become more comfortable
        with these tools!
      </p>
    </div>
  );
};

export default Chapter2_JavaScriptAndDOM;
