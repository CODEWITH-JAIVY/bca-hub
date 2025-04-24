import React from 'react';

const Chapter2_Pointers = () => {
    return (
        <div>
            <h2>Chapter 2: Pointers</h2>
            <p>
                <strong>Q1: What is a pointer in C?</strong>
                <br />
                A1: A pointer is a variable that stores the memory address of another variable.
            </p>
            <p>
                <strong>Q2: How do you declare a pointer in C?</strong>
                <br />
                A2: You declare a pointer by specifying the data type of the variable it will point to, followed by an asterisk (*), and the pointer name.
                <br />
                <code>
                    int *ptr; // Declares a pointer to an integer
                </code>
            </p>
            <p>
                <strong>Q3: What is the difference between a pointer and a regular variable?</strong>
                <br />
                A3: A regular variable stores a value, while a pointer stores the memory address of a variable.
            </p>
            <p>
                <strong>Q4: How do you assign the address of a variable to a pointer?</strong>
                <br />
                A4: Use the address-of operator (&) to get the memory address of a variable.
                <br />
                <code>
                    int num = 10;<br />
                    int *ptr = &num; // Assigns the address of 'num' to 'ptr'
                </code>
            </p>
            <p>
                <strong>Q5: How do you access the value stored at the address pointed to by a pointer?</strong>
                <br />
                A5: Use the dereference operator (*) to access the value.
                <br />
                <code>
                    int value = *ptr; // Accesses the value stored at the address pointed to by 'ptr'
                </code>
            </p>
            <p>
                <strong>Q6: What is pointer arithmetic?</strong>
                <br />
                A6: Pointer arithmetic involves performing arithmetic operations on pointers to navigate through memory locations, commonly used with arrays.
            </p>
            <p>
                <strong>Q7: How are pointers used with arrays?</strong>
                <br />
                A7: Pointers can be used to access array elements by incrementing or decrementing the pointer to move through the array.
                <br />
                <code>
                    int arr[5] = {1, 2, 3, 4, 5};<br />
                    int *ptr = arr; // 'ptr' points to the first element of 'arr'<br />
                    int value = *(ptr + 2); // Accesses the third element of 'arr'
                </code>
            </p>
        </div>
    );
};

export default Chapter2_Pointers;
