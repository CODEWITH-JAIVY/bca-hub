import React from 'react';

const Chapter3_Strings = () => {
    return (
        <div>
            <h2>Chapter 3: Strings</h2>
            <p>
                <strong>Q1: What is a string in C?</strong>
                <br />
                A1: A string in C is an array of characters terminated by a null character ('\0').
            </p>
            <p>
                <strong>Q2: How do you declare a string in C?</strong>
                <br />
                A2: You can declare a string using the char data type followed by the string name and the maximum number of characters the string can hold.
                <br />
                <code>
                    char str[20]; // Declares a string named 'str' that can hold up to 19 characters + null terminator
                </code>
            </p>
            <p>
                <strong>Q3: How do you initialize a string in C?</strong>
                <br />
                A3: You can initialize a string during declaration or after declaration using string functions.
                <br />
                <code>
                    char str[20] = "Hello"; // Initialization during declaration<br />
                    char str2[20];<br />
                    strcpy(str2, "World"); // Initialization using strcpy function
                </code>
            </p>
            <p>
                <strong>Q4: What are some common string functions in C?</strong>
                <br />
                A4: Common string functions include strlen, strcpy, strcat, strcmp, and strchr.
            </p>
            <p>
                <strong>Q5: What does the strlen() function do?</strong>
                <br />
                A5: The strlen() function returns the length of the string (excluding the null terminator).
                <br />
                <code>
                    size_t length = strlen(str); // Gets the length of the string 'str'
                </code>
            </p>
            <p>
                <strong>Q6: What does the strcpy() function do?</strong>
                <br />
                A6: The strcpy() function copies a string from one variable to another.
                <br />
                <code>
                    strcpy(destination, source); // Copies the string from 'source' to 'destination'
                </code>
            </p>
            <p>
                <strong>Q7: What does the strcat() function do?</strong>
                <br />
                A7: The strcat() function concatenates (appends) one string to the end of another.
                <br />
                <code>
                    strcat(str1, str2); // Appends the string 'str2' to the end of 'str1'
                </code>
            </p>
            <p>
                <strong>Q8: What does the strcmp() function do?</strong>
                <br />
                A8: The strcmp() function compares two strings lexicographically and returns 0 if they are equal, a negative value if the first string is less than the second, and a positive value if the first string is greater than the second.
                <br />
                <code>
                    int result = strcmp(str1, str2); // Compares the strings 'str1' and 'str2'
                </code>
            </p>
        </div>
    );
};

export default Chapter3_Strings;
