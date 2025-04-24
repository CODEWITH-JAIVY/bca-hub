import React from 'react';

const Chapter4_GenericFunctionsAndTemplates = () => {
    return (
        <div>
            <h2>Chapter 4: Generic Functions and Templates</h2>
            <p>
                <strong>Q1: What is a generic function?</strong>
                <br />
                A1: A generic function is a function that can work with multiple data types without being rewritten for each type.
            </p>
            <p>
                <strong>Q2: What are templates in C++?</strong>
                <br />
                A2: Templates are a feature in C++ that allows you to write generic code that can work with different data types.
            </p>
            <p>
                <strong>Q3: How do you create a function template?</strong>
                <br />
                A3: You create a function template using the <code>template</code> keyword followed by the type parameter in angle brackets (&lt;&gt;).
                <br />
                <code>
                    template &lt;typename T&gt;<br />
                    T max(T a, T b) {<br />
                    &nbsp;&nbsp;return (a > b) ? a : b;<br />
                    }
                </code>
            </p>
            <p>
                <strong>Q4: How do you use a function template?</strong>
                <br />
                A4: You use a function template by calling the function with specific data types.
                <br />
                <code>
                    int result = max(5, 10); // Calls max function with int type<br />
                    double result2 = max(5.5, 10.2); // Calls max function with double type
                </code>
            </p>
            <p>
                <strong>Q5: How do you create a class template?</strong>
                <br />
                A5: You create a class template using the <code>template</code> keyword followed by the type parameter in angle brackets (&lt;&gt;) before the class definition.
                <br />
                <code>
                    template &lt;typename T&gt;<br />
                    class MyArray {<br />
                    &nbsp;&nbsp;T arr[10];<br />
                    &nbsp;&nbsp;public:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;void setValue(int index, T value) { arr[index] = value; }<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;T getValue(int index) { return arr[index]; }<br />
                    };
                </code>
            </p>
        </div>
    );
};

export default Chapter4_GenericFunctionsAndTemplates;
