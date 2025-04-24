import React from "react";

const Unit3 = () => {
  return (
    <div className="p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">UNIT-3: Working with Strings in C</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Introduction to Strings</h2>
        <p className="mb-2">\          In C, a string is a sequence of characters terminated with a null character (`\0`). Strings are used to store and manipulate text.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
{`char name[] = "John";  // Stored as ['J','o','h','n','\0']`}
        </pre>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Declaration and Initialization of Strings</h2>
        <p className="mb-2">Strings can be declared in multiple ways:</p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
{`char str1[] = "Hello";         // Implicit size, includes null character
char str2[6] = "World";       // Explicit size
char str3[] = {'H','i','\0'};  // Manual null character`}
        </pre>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Accessing and Modifying Strings</h2>
        <p className="mb-2">You can access and modify individual characters using array indexing:</p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
{`char str[] = "C Programming";
printf("%c", str[0]);  // Output: C
str[0] = 'D';
printf("%s", str);     // Output: D Programming`}
        </pre>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Input and Output with Strings</h2>
        <p className="mb-2">C provides several functions to read and write strings:</p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
{`char name[20];
scanf("%s", name);   // Reads until space
gets(name);          // Reads entire line (unsafe)
fgets(name, 20, stdin);  // Safe alternative to gets`}
        </pre>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. String Handling Functions</h2>
        <p className="mb-2">These functions are available in `string.h`:</p>
        <ul className="list-disc ml-6">
          <li><code>strlen(str)</code> - Returns string length</li>
          <li><code>strcpy(dest, src)</code> - Copies string</li>
          <li><code>strcat(dest, src)</code> - Appends string</li>
          <li><code>strcmp(s1, s2)</code> - Compares strings</li>
        </ul>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto mt-2">
{`char a[20] = "Hello";
char b[] = "World";
strcat(a, b);   // a becomes "HelloWorld"`}
        </pre>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. String Manipulation Examples</h2>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
{`// Convert to uppercase
for (int i = 0; str[i] != '\0'; i++) {
  str[i] = toupper(str[i]);
}`}
        </pre>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. Memory Representation</h2>
        <p className="mb-2">A string is stored as a contiguous array of characters ending in `\0`.</p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
{`char str[] = "Hi";
// Memory: ['H', 'i', '\0']`}
        </pre>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">8. Pointers and Strings</h2>
        <p className="mb-2">Strings can also be accessed via pointers:</p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
{`char *ptr = "Hello";
printf("%c", *ptr);  // Output: H`}
        </pre>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">9. Common Pitfalls and Best Practices</h2>
        <ul className="list-disc ml-6">
          <li>Always null-terminate strings</li>
          <li>Use `fgets` instead of `gets` for safety</li>
          <li>Ensure enough space in destination strings</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">10. Practice Questions</h2>
        <ul className="list-decimal ml-6">
          <li>Write a program to reverse a string.</li>
          <li>Count vowels and consonants in a string.</li>
          <li>Check if a string is a palindrome.</li>
          <li>Convert string to uppercase and lowercase.</li>
        </ul>
      </section>

    </div>
  );
};

export default Unit3;
