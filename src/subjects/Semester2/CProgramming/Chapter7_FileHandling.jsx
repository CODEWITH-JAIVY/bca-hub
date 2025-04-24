import React from 'react';

// Chapter7_FileHandling component: Comprehensive guide to file handling in C
const Chapter7_FileHandling = () => {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-6">Chapter 7: File Handling in C</h2>

      {/* Introduction */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Introduction</h3>
        <p className="mb-4">
          File handling is a vital part of C programming, allowing programs to interact with external files for data storage and retrieval. This chapter provides a thorough guide to file handling in C, covering file operations, modes, standard I/O functions, error handling, and common file handling techniques. Mastering these concepts enables you to create C programs that can effectively manage persistent data.
        </p>
      </section>

      {/* File Operations */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">File Operations</h3>
        <p className="mb-4">
          File operations involve a series of actions performed on files, including opening, closing, reading, and writing. Each of these operations is essential for managing data stored in files.
        </p>

        <h4 className="text-lg font-semibold mb-2">Opening a File (fopen)</h4>
        <p className="mb-4">
          The <code>fopen</code> function is used to open a file. It takes two primary arguments: the file name and the file mode.
        </p>
        <pre><code>
#include &lt;stdio.h&gt;
FILE *filePointer;
filePointer = fopen("filename.txt", "r"); // Opens filename.txt in read mode
if (filePointer == NULL) {
    // Handle error: file could not be opened
}
        </code></pre>

        <h4 className="text-lg font-semibold mb-2">Closing a File (fclose)</h4>
        <p className="mb-4">
          The <code>fclose</code> function is used to close an opened file. It takes the file pointer as an argument.
        </p>
        <pre><code>
#include &lt;stdio.h&gt;
FILE *filePointer;
filePointer = fopen("filename.txt", "r");
fclose(filePointer); // Closes the file
        </code></pre>

        <h4 className="text-lg font-semibold mb-2">Reading from a File</h4>
        <p className="mb-4">
          Reading involves retrieving data from a file. Functions like <code>fscanf</code>, <code>fgets</code>, and <code>fgetc</code> are commonly used.
        </p>

        <h4 className="text-lg font-semibold mb-2">Writing to a File</h4>
        <p className="mb-4">
          Writing involves storing data into a file. Functions like <code>fprintf</code>, <code>fputs</code>, and <code>fputc</code> are used for this.
        </p>
      </section>

      {/* File Modes */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">File Modes</h3>
        <p className="mb-4">
          File modes determine how a file is opened and what operations can be performed on it.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li><strong>"r" (Read):</strong> Opens a file for reading. The file must exist.</li>
          <li><strong>"w" (Write):</strong> Opens a file for writing. If the file exists, its contents are truncated. If the file does not exist, it is created.</li>
          <li><strong>"a" (Append):</strong> Opens a file for appending. Data is added to the end of the file. If the file does not exist, it is created.</li>
          <li><strong>"r+" (Read and Write):</strong> Opens a file for both reading and writing. The file must exist.</li>
          <li><strong>"w+" (Write and Read):</strong> Opens a file for both reading and writing. If the file exists, its contents are truncated. If the file does not exist, it is created.</li>
          <li><strong>"a+" (Append and Read):</strong> Opens a file for both appending and reading. If the file does not exist, it is created.</li>
        </ul>
      </section>

      {/* Standard I/O Functions */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Standard I/O Functions</h3>
        <p className="mb-4">
          The C standard library provides several functions for file handling, defined in <code>stdio.h</code>.
        </p>

        <h4 className="text-lg font-semibold mb-2">fopen()</h4>
        <pre><code>
FILE *fopen(const char *filename, const char *mode);
        </code></pre>

        <h4 className="text-lg font-semibold mb-2">fclose()</h4>
        <pre><code>
int fclose(FILE *filePointer);
        </code></pre>

        <h4 className="text-lg font-semibold mb-2">fprintf()</h4>
        <pre><code>
#include &lt;stdio.h&gt;
FILE *filePointer = fopen("output.txt", "w");
fprintf(filePointer, "Name: %s, Age: %d", "John Doe", 30);
fclose(filePointer);
        </code></pre>

        <h4 className="text-lg font-semibold mb-2">fscanf()</h4>
        <pre><code>
#include &lt;stdio.h&gt;
FILE *filePointer = fopen("input.txt", "r");
char name[50];
int age;
fscanf(filePointer, "Name: %s, Age: %d", name, &age);
fclose(filePointer);
        </code></pre>

        <h4 className="text-lg font-semibold mb-2">fgets()</h4>
        <pre><code>
#include &lt;stdio.h&gt;
FILE *filePointer = fopen("data.txt", "r");
char line[100];
fgets(line, sizeof(line), filePointer);
fclose(filePointer);
        </code></pre>

        <h4 className="text-lg font-semibold mb-2">fputs()</h4>
        <pre><code>
#include &lt;stdio.h&gt;
FILE *filePointer = fopen("data.txt", "w");
fputs("Hello, World!", filePointer);
fclose(filePointer);
        </code></pre>

        <h4 className="text-lg font-semibold mb-2">fgetc()</h4>
        <pre><code>
#include &lt;stdio.h&gt;
FILE *filePointer = fopen("data.txt", "r");
int ch = fgetc(filePointer);
fclose(filePointer);
        </code></pre>

        <h4 className="text-lg font-semibold mb-2">fputc()</h4>
        <pre><code>
#include &lt;stdio.h&gt;
FILE *filePointer = fopen("data.txt", "w");
fputc('A', filePointer);
fclose(filePointer);
        </code></pre>
      </section>

      {/* Error Handling */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Error Handling</h3>
        <p className="mb-4">
          Error handling is crucial in file operations. The <code>fopen</code> function returns <code>NULL</code> if the file cannot be opened. It's essential to check for this return value and handle errors appropriately.
        </p>
        <pre><code>

         
        </code></pre>
      </section>

      {/* Common File Handling Techniques */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Common File Handling Techniques</h3>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Reading the Entire File:</strong> Iterating through the file character by character using <code>fgetc</code> or line by line using <code>fgets</code>.</li>
          <li><strong>Writing to the Entire File:</strong> Writing data to the file using <code>fputs</code> or <code>fprintf</code>.</li>
          <li><strong>Appending Data:</strong> Using the "a" or "a+" mode to add data to the end of a file.</li>
        </ul>
      </section>

      {/* Applications and Examples */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Applications and Examples</h3>
        <p className="mb-4">
          File Handling is used in numerous contexts, such as:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Data Persistence</li>
          <li>Configuration files handling</li>
          <li>Logging information</li>
          <li>Database operations</li>
          <li>Reading and writing text data</li>
        </ul>
      </section>
    </div>
  );
};

export default Chapter7_FileHandling;
