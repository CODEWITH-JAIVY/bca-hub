import React from 'react';

const Chapter2_ClassesAndObjects = () => {
    return (
        <div>
            <h2>Chapter 2: Classes and Objects</h2>
            <p>
                <strong>Q1: What is a class in C++?</strong>
                <br />
                A1: A class is a blueprint for creating objects, defining the attributes and methods that the objects will have.
            </p>
            <p>
                <strong>Q2: How do you define a class in C++?</strong>
                <br />
                A2: You define a class using the <code>class</code> keyword, followed by the class name and a block containing the class members.
                <br />
                <code>
                    class Dog {<br />
                    &nbsp;&nbsp;public:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;std::string name;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;int age;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;void bark() {<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;std::cout &lt;&lt; "Woof!" &lt;&lt; std::endl;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;}<br />
                    };
                </code>
            </p>
            <p>
                <strong>Q3: What is an object in C++?</strong>
                <br />
                A3: An object is an instance of a class, created using the class blueprint.
            </p>
            <p>
                <strong>Q4: How do you create an object of a class?</strong>
                <br />
                A4: You create an object by specifying the class name followed by the object name.
                <br />
                <code>
                    Dog myDog; // Creates an object named 'myDog' of class 'Dog'
                </code>
            </p>
            <p>
                <strong>Q5: How do you access members of a class through an object?</strong>
                <br />
                A5: You access class members (attributes and methods) using the dot (.) operator.
                <br />
                <code>
                    myDog.name = "Buddy";<br />
                    myDog.age = 3;<br />
                    myDog.bark();
                </code>
            </p>
        </div>
    );
};

export default Chapter2_ClassesAndObjects;
