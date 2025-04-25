import React from 'react';

const Chapter4_GenericFunctionsAndTemplates = () => {
  return (
    <div>
      <h2>Chapter 4: Generic Functions and Templates</h2>
      {/* Introduction to Generic Functions and Templates */}
      <p>
        Templates are a powerful feature in C++ that enable the creation of
        generic code. They allow programmers to write functions and classes that
        can operate with different data types without needing to rewrite the
        code for each type. This chapter will delve into the details of generic
        functions and templates.
      </p>

      {/* Generic Functions */}
      <h3>Generic Functions</h3>
      <p>
        <strong>Q1: What is a generic function?</strong>
        <br />
        A1: A generic function is a function that can operate with multiple data
        types without needing to be rewritten for each type. This is achieved
        through the use of function templates, which allow the function to
        accept different types of arguments.
      </p>
      <p>
        <strong>Q2: Benefits of using generic functions?</strong>
        <br />
        A2: Generic functions enhance code reusability, reduce code redundancy,
        and improve code maintainability by allowing the same function logic to
        be applied to different data types.
      </p>
      <p>
        <strong>Q3: How are function templates defined?</strong>
        <br />
        A3: Function templates are defined using the <code>template</code> keyword
        followed by the template parameters in angle brackets <code>&lt;&gt;</code>.
        The parameters specify the generic types or values that the function
        will operate on.
        <br />
        <code>
          template &lt;typename T&gt;<br />
          T max(T a, T b) {'{'} <br />
          &nbsp;&nbsp;return (a{ '>'} b) ? a : b; <br />
          {'}'}
        </code>
      </p>
      <p>
        <strong>Q4: Example of a function template.</strong>
        <br />
        A4:
        <code>
          template &lt;typename T&gt; <br />
          T add(T a, T b) {'{'} <br />
          &nbsp;&nbsp;return a + b; <br />
          {'}'}
        </code>
        <br />
        In this example, <code>T</code> is a template type parameter. This
        function template can be used to add two integers, two doubles, or any
        other data type that supports the <code>+</code> operator.
      </p>
      <p>
        <strong>Q5: What are template type parameters?</strong>
        <br />
        A5: Template type parameters are placeholders for data types. They are
        defined using the <code>typename</code> or <code>class</code> keyword
        followed by an identifier (e.g., <code>T</code>). This identifier is
        used within the template to represent the generic type.
        <br />
        <code> template &lt;typename T&gt;</code>
      </p>
      <p>
        <strong>Q6: What are non-type template arguments?</strong>
        <br />
        A6: Non-type template arguments are values that are passed to a template
        at compile time. They can be used to specify the size of arrays or other
        constant values within a template.
        <br />
        <code>
          template &lt;typename T, int size&gt; <br />
          class MyArray {'{'} <br />
          &nbsp;&nbsp;T arr[size]; <br />
          {'}'}
        </code>
      </p>
      <p>
        <strong>Q7: Function template specialization.</strong>
        <br />
        A7: Function template specialization is when we provide a specific
        implementation of a function template for a particular data type. This
        allows us to provide customized behavior for certain types while still
        maintaining the generic behavior for others.
        <br />
        <strong>Example of Function Template Specialization.</strong>
        <br />
        <code>
          template &lt;&gt; <br />
          const char* max&lt;const char*&gt;(const char* a, const char* b) {'{'}
          <br />
          &nbsp;&nbsp;return (std::strcmp(a, b) {'>'} 0) ? a : b; <br />
          {'}'}
        </code>
      </p>

      {/* Class Templates */}
      <h3>Class Templates</h3>
      <p>
        <strong>Q8: What is a class template?</strong>
        <br />
        A8: A class template is a blueprint for creating generic classes. It
        allows you to write a single class definition that can work with various
        data types, similar to function templates.
      </p>
      <p>
        <strong>Q9: How are class templates defined?</strong>
        <br />
        A9: Class templates are defined using the <code>template</code> keyword
        followed by the template parameters in angle brackets <code>&lt;&gt;</code>{' '}
        before the class definition.
        <br />
        <code>
          template &lt;typename T&gt; <br />
          class MyArray {'{'} <br />
          &nbsp;&nbsp;T arr[10]; <br />
          &nbsp;&nbsp;public: <br />
          &nbsp;&nbsp;&nbsp;&nbsp;void setValue(int index, T value) {'{'} arr[index]
          = value; {'}'} <br />
          &nbsp;&nbsp;&nbsp;&nbsp;T getValue(int index) {'{'} return arr[index]; {'}'}{' '}
          <br />
          {'}'};
        </code>
      </p>
      <p>
        <strong>Q10: Example of a class template.</strong>
        <br />
        A10:
        <code>
          template &lt;typename T&gt; <br />
          class Pair {'{'} <br />
          &nbsp;&nbsp;T first, second; <br />
          &nbsp;&nbsp;public: <br />
          &nbsp;&nbsp;&nbsp;&nbsp;Pair(T a, T b) : first(a), second(b) {'{}'} <br />
          &nbsp;&nbsp;&nbsp;&nbsp;T getFirst() {'{'} return first; {'}'} <br />
          &nbsp;&nbsp;&nbsp;&nbsp;T getSecond() {'{'} return second; {'}'} <br />
          {'}'};
        </code>
        <br />
        This <code>Pair</code> class template can be used to create pairs of
        integers, pairs of strings, or any other type.
      </p>
      <p>
        <strong>Q11: Class template specialization.</strong>
        <br />
        A11: Class template specialization is when we provide a specific
        implementation of a class template for a particular data type. This
        allows us to provide customized behavior or optimized implementations for
        certain types while still maintaining the generic behavior for others.
        <br />
        <strong>Example of Class Template Specialization.</strong>
        <br />
        <code>
          template &lt;&gt; <br />
          class Pair&lt;const char*&gt; {'{'} <br />
          &nbsp;&nbsp;const char* first, second; <br />
          &nbsp;&nbsp;public: <br />
          &nbsp;&nbsp;&nbsp;&nbsp;Pair(const char* a, const char* b) : first(a),
          second(b) {'{}'} <br />
          &nbsp;&nbsp;&nbsp;&nbsp;const char* getFirst() {'{'} return first; {'}'}{' '}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;const char* getSecond() {'{'} return second;{' '}
          {'}'} <br />
          {'}'};
        </code>
      </p>
      <p>
        <strong>Q12: Use of templates in generic data structures.</strong>
        <br />
        A12: Templates are crucial for implementing generic data structures like
        vectors, lists, and maps. They allow these structures to hold any type
        of data, making them highly versatile and reusable.
      </p>

      {/* Template Instantiation */}
      <h3>Template Instantiation</h3>
      <p>
        <strong>Q13: What is template instantiation?</strong>
        <br />
        A13: Template instantiation is the process where the compiler generates
        concrete code from a template when it is used with specific data types.
        For example, when you call a function template with an <code>int</code>,
        the compiler generates the code for that specific type.
      </p>
      <p>
        <strong>Q14: How does the compiler generate code for different data types?</strong>
        <br />
        A14: The compiler generates code for different data types by creating
        specific versions of the template code for each type. This happens at
        compile time, and the generated code is tailored to each specific type.
      </p>
      {/*Template Arguments*/}
      <h3>Template arguments</h3>
      <p>
        <strong>Q15: What are template arguments?</strong>
        <br />
        A15: Template arguments are the specific types or values that are
        supplied to a template when it is instantiated. These arguments
        determine the concrete types or values that the template will use.
      </p>
      <p>
        <strong>Q16: How to specify template arguments?</strong>
        <br />
        A16: Template arguments are specified within angle brackets <code>&lt;&gt;</code> when instantiating a template. For example,
        <code>max&lt;int&gt;(5, 10)</code> specifies that the template argument <code>T</code> is <code>int</code>. If the arguments can be deduced by the compiler, you can omit the explicit specification.
      </p>

      {/* Conclusion */}
      <p>
        Templates are a cornerstone of generic programming in C++, providing the
        ability to write flexible, reusable, and type-safe code. Understanding
        how to use function templates and class templates is essential for any C++
        programmer.
      </p>
    </div>
  );
};

export default Chapter4_GenericFunctionsAndTemplates;
