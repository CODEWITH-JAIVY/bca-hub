import React from 'react';

const Chapter3_InheritanceAndPolymorphism = () => {
    return (
        <div>
            <h2>Chapter 3: Inheritance and Polymorphism</h2>
            <p>
                <strong>Q1: What is inheritance in C++?</strong>
                <br />
                A1: Inheritance is a feature in C++ that allows a class (derived class) to inherit properties and behaviors from another class (base class).
            </p>
            <p>
                <strong>Q2: What are the types of inheritance in C++?</strong>
                <br />
                A2: Types include single inheritance, multiple inheritance, hierarchical inheritance, and multi-level inheritance.
            </p>
            <p>
                <strong>Q3: How do you implement inheritance in C++?</strong>
                <br />
                A3: You use the colon (:) followed by the access specifier and the base class name when defining the derived class.
                <br />
                <code>
                    class Animal {<br />
                    &nbsp;&nbsp;public:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;void eat() { std::cout &lt;&lt; "Animal is eating" &lt;&lt; std::endl; }<br />
                    };<br />
                    class Dog : public Animal {<br />
                    &nbsp;&nbsp;public:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;void bark() { std::cout &lt;&lt; "Dog is barking" &lt;&lt; std::endl; }<br />
                    };
                </code>
            </p>
            <p>
                <strong>Q4: What is polymorphism?</strong>
                <br />
                A4: Polymorphism is the ability of a single interface to represent different types or classes.
            </p>
            <p>
                <strong>Q5: What are the types of polymorphism in C++?</strong>
                <br />
                A5: Types include compile-time polymorphism (function overloading and operator overloading) and runtime polymorphism (virtual functions).
            </p>
            <p>
                <strong>Q6: What are virtual functions?</strong>
                <br />
                A6: Virtual functions are functions declared in a base class that can be overridden in derived classes to achieve runtime polymorphism.
            </p>
        </div>
    );
};

export default Chapter3_InheritanceAndPolymorphism;
