import React from 'react';

// Chapter6_FileHandling component: Explains file handling in C, covering definitions, file opening modes, standard functions, and practical examples.
const Chapter6_FileHandling = () => {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-6">Chapter 6: File Handling in C</h2>

      {/* Introduction */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Introduction</h3>
        <p className="mb-4">
          File handling in C is the process of reading from and writing to
          files in a computer's file system. It allows programs to store and
          retrieve data from persistent storage. This chapter covers the
          essential aspects of file handling, including file opening, reading,
          writing, and closing, along with various modes and functions.
        </p>
      </section>

      {/* Definition of File Handling */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Definition of File Handling
        </h3>
        <p className="mb-4">
          File handling involves manipulating files on a storage medium. This
          includes creating new files, reading data from existing files, writing
          data to files, and modifying files. In C, files are treated as streams
          of bytes.
        </p>
      </section>

      {/* Steps in File Handling */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Steps in File Handling</h3>
        <p className="mb-4">
          The main steps involved in file handling are:
          <ul className='list-disc list-inside'>
            <li>Opening the file</li>
            <li>Reading from or writing to the file</li>
            <li>Closing the file</li>
          </ul>
        </p>
      </section>

      {/* Opening a File (fopen) */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Opening a File (fopen)</h3>
        <p className="mb-2">
          The <code>fopen()</code> function is used to open a file. It returns a
          file pointer (<code>FILE *</code>) that is used to perform operations
          on the file.
        </p>
        <pre>
          <code>
            {`FILE *fp = fopen("example.txt", "r"); // Opens "example.txt" in read mode\nif (fp == NULL) {\n  printf("Error opening file!\\n");\n  return 1;\n}`}
          </code>
        </pre>
        <p className='mt-2'>
          It's important to check if the file pointer is <code>NULL</code> to
          ensure that the file was opened successfully.
        </p>
      </section>

      {/* File Opening Modes */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">File Opening Modes</h3>
        <p className="mb-2">
          The <code>fopen()</code> function takes a mode string as its second
          argument, which specifies how the file should be opened.
        </p>
        <ul className="list-disc list-inside">
          <li>
            <code>"r"</code>: Read mode. Opens an existing file for reading.
          </li>
          <li>
            <code>"w"</code>: Write mode. Creates a new file for writing. If
            the file exists, it truncates the file to zero length.
          </li>
          <li>
            <code>"a"</code>: Append mode. Opens a file for writing, appending
            to the end of the file if it exists, or creates a new file if it
            does not.
          </li>
          <li>
            <code>"rb"</code>: Read binary mode. Opens an existing binary file
            for reading.
          </li>
          <li>
            <code>"wb"</code>: Write binary mode. Creates a new binary file for
            writing.
          </li>
          <li>
            <code>"ab"</code>: Append binary mode. Opens a binary file for
            appending.
          </li>
        </ul>
      </section>

      {/* Standard File Handling Functions */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Standard File Handling Functions
        </h3>
        <ul className="list-disc list-inside">
          <li>
            <strong>fopen(filename, mode)</strong>: Opens the file specified by
            filename with the given mode.
          </li>
          <li>
            <strong>fclose(fp)</strong>: Closes the file associated with the
            file pointer <code>fp</code>.
            <pre>
              <code>fclose(fp); // Closes the file pointed to by 'fp'</code>
            </pre>
          </li>
          <li>
            <strong>feof(fp)</strong>: Checks if the end-of-file indicator for
            the file pointer <code>fp</code> is set.
          </li>
          <li>
            <strong>fseek(fp, offset, origin)</strong>: Moves the file pointer{" "}
            <code>fp</code> to a new position specified by <code>offset</code> and{" "}
            <code>origin</code>.
          </li>
          <li>
            <strong>rewind(fp)</strong>: Sets the file pointer <code>fp</code> to
            the beginning of the file.
          </li>
          <li>
            <strong>fgetc(fp)</strong>: Reads a character from the file
            associated with <code>fp</code>.
          </li>
          <li>
            <strong>fputc(char, fp)</strong>: Writes a character to the file
            associated with <code>fp</code>.
          </li>
          <li>
            <strong>fscanf(fp, format, ...)</strong>: Reads formatted input from
            the file associated with <code>fp</code>.
            <pre>
              <code>
                {`char buffer[100];\nfscanf(fp, "%s", buffer); // Reads a string from the file into 'buffer'`}
              </code>
            </pre>
          </li>
        </ul>
      </section>

      {/* Practical Examples */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Practical Examples</h3>
        <p className="mb-4">
        Here are some examples of how to read and write to a file
        </p>
        <p><strong>Write</strong></p>
        <pre>
          <code>
            {`fprintf(fp, "Hello, File!\\n"); // Writes "Hello, File!" to the file`}
          </code>
        </pre>
        <p><strong>Read</strong></p>
        <pre>
          <code>
            {`char buffer[100];\nfgets(buffer, 100, fp); // Reads a line from the file into 'buffer'`}
          </code>
        </pre>
      </section>
    </div>
  );
};

export default Chapter6_FileHandling;
