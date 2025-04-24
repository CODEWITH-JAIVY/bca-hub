import React from 'react';

const Chapter6_FileHandling = () => {
    return (
        <div>
            <h2>Chapter 6: File Handling</h2>
            <p>
                <strong>Q1: What is file handling in C?</strong>
                <br />
                A1: File handling is the process of reading from and writing to files in a computer's file system.
            </p>
            <p>
                <strong>Q2: What are the steps involved in file handling?</strong>
                <br />
                A2: The steps include opening the file, reading from or writing to the file, and closing the file.
            </p>
            <p>
                <strong>Q3: How do you open a file in C?</strong>
                <br />
                A3: You open a file using the <code>fopen()</code> function, which returns a file pointer.
                <br />
                <code>
                    FILE *fp = fopen("example.txt", "r"); // Opens "example.txt" in read mode
                </code>
            </p>
            <p>
                <strong>Q4: What are the different modes for opening a file?</strong>
                <br />
                A4: Common modes include "r" (read), "w" (write), "a" (append), "rb" (read binary), "wb" (write binary), and "ab" (append binary).
            </p>
            <p>
                <strong>Q5: How do you read from a file in C?</strong>
                <br />
                A5: You can read from a file using functions like <code>fscanf()</code>, <code>fgets()</code>, and <code>fread()</code>.
                <br />
                <code>
                    char buffer[100];<br />
                    fgets(buffer, 100, fp); // Reads a line from the file into 'buffer'
                </code>
            </p>
            <p>
                <strong>Q6: How do you write to a file in C?</strong>
                <br />
                A6: You can write to a file using functions like <code>fprintf()</code>, <code>fputs()</code>, and <code>fwrite()</code>.
                <br />
                <code>
                    fprintf(fp, "Hello, File!"); // Writes "Hello, File!" to the file
                </code>
            </p>
            <p>
                <strong>Q7: How do you close a file in C?</strong>
                <br />
                A7: You close a file using the <code>fclose()</code> function.
                <br />
                <code>
                    fclose(fp); // Closes the file pointed to by 'fp'
                </code>
            </p>
        </div>
    );
};

export default Chapter6_FileHandling;
