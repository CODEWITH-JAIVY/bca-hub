import React from 'react';

const Chapter4_StructuresAndUnions = () => {
    return (
        <div>
            <h2>Chapter 4: Structures and Unions</h2>
            <p>
                <strong>Q1: What is a structure in C?</strong>
                <br />
                A1: A structure is a composite data type that groups together variables of different data types into a single unit.
            </p>
            <p>
                <strong>Q2: How do you define a structure in C?</strong>
                <br />
                A2: You define a structure using the <code>struct</code> keyword, followed by the structure name and a block containing the member variables.
                <br />
                <code>
                    struct Person {<br />
                    &nbsp;&nbsp;char name[50];<br />
                    &nbsp;&nbsp;int age;<br />
                    &nbsp;&nbsp;float salary;<br />
                    };
                </code>
            </p>
            <p>
                <strong>Q3: How do you declare a variable of a structure type?</strong>
                <br />
                A3: You declare a structure variable by using the <code>struct</code> keyword followed by the structure name and the variable name.
                <br />
                <code>
                    struct Person person1; // Declares a structure variable named 'person1' of type 'Person'
                </code>
            </p>
            <p>
                <strong>Q4: How do you access the members of a structure?</strong>
                <br />
                A4: Structure members are accessed using the dot (.) operator.
                <br />
                <code>
                    strcpy(person1.name, "John Doe");<br />
                    person1.age = 30;<br />
                    person1.salary = 50000.0;<br />
                </code>
            </p>
            <p>
                <strong>Q5: What is a union in C?</strong>
                <br />
                A5: A union is a composite data type similar to a structure, but it stores its members in the same memory location. Therefore, only one member of a union can hold a value at any given time.
            </p>
            <p>
                <strong>Q6: How do you define a union in C?</strong>
                <br />
                A6: You define a union using the <code>union</code> keyword, followed by the union name and a block containing the member variables.
                <br />
                <code>
                    union Data {<br />
                    &nbsp;&nbsp;int i;<br />
                    &nbsp;&nbsp;float f;<br />
                    &nbsp;&nbsp;char str[20];<br />
                    };
                </code>
            </p>
            <p>
                <strong>Q7: What is the key difference between a structure and a union?</strong>
                <br />
                A7: In a structure, each member has its own memory location, so all members can hold values simultaneously. In a union, all members share the same memory location, so only one member can hold a value at any given time.
            </p>
        </div>
    );
};

export default Chapter4_StructuresAndUnions;
