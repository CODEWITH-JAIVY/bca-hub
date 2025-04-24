import React from 'react';

const Chapter5_FileHandlingAndExceptions = () => {
    return (
        <div>
            <h2>Chapter 5: File Handling and Exceptions</h2>
            <p>
                <strong>Q1: How do you handle files in C++?</strong>
                <br />
                A1: You handle files using the <code>fstream</code> library, which provides classes for reading from and writing to files.
            </p>
            <p>
                <strong>Q2: What are the classes used for file handling in C++?</strong>
                <br />
                A2: Classes include <code>ofstream</code> (for writing to files), <code>ifstream</code> (for reading from files), and <code>fstream</code> (for both reading and writing).
            </p>
            <p>
                <strong>Q3: How do you open a file for writing?</strong>
                <br />
                A3: You open a file for writing using the <code>ofstream</code> class and the <code>open()</code> method.
                <br />
                <code>
                    #include &lt;fstream&gt;<br/>
                    std::ofstream outfile("example.txt");<br/>
                    if (outfile.is_open()) {<br/>
                    &nbsp;&nbsp;outfile &lt;&lt; "Hello, File!" &lt;&lt; std::endl;<br/>
                    &nbsp;&nbsp;outfile.close();<br/>
                    }
                </code>
            </p>
            <p>
                <strong>Q4: How do you open a file for reading?</strong>
                <br />
                A4: You open a file for reading using the <code>ifstream</code> class and the <code>open()</code> method.
                <br />
                <code>
                    #include &lt;fstream&gt;<br/>
                    std::ifstream infile("example.txt");<br/>
                    if (infile.is_open()) {<br/>
                    &nbsp;&nbsp;std::string line;<br/>
                    &nbsp;&nbsp;while (getline(infile, line)) {<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;std::cout &lt;&lt; line &lt;&lt; std::endl;<br/>
                    &nbsp;&nbsp;}<br/>
                    &nbsp;&nbsp;infile.close();<br/>
                    }
                </code>
            </p>
            <p>
                <strong>Q5: What are exceptions in C++?</strong>
                <br />
                A5: Exceptions are runtime anomalies or unusual conditions that a program encounters during its execution.
            </p>
            <p>
                <strong>Q6: How do you handle exceptions in C++?</strong>
                <br />
                A6: You handle exceptions using the <code>try</code>, <code>catch</code>, and <code>throw</code> keywords.
                <br />
                <code>
                    try {<br/>
                    &nbsp;&nbsp;if (/* condition that may cause an exception */) {<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;throw std::runtime_error("An error occurred");<br/>
                    &nbsp;&nbsp;}<br/>
                    } catch (const std::runtime_error&amp; error) {<br/>
                    &nbsp;&nbsp;std::cerr &lt;&lt; "Exception caught: " &lt;&lt; error.what() &lt;&lt; std::endl;<br/>
                    }
                </code>
            </p>
        </div>
    );
};

export default Chapter5_FileHandlingAndExceptions;
