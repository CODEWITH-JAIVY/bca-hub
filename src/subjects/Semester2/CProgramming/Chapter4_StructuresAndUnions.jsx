import React from 'react';

// Chapter4_StructuresAndUnions component: Comprehensive explanation of structures and unions in C
const Chapter4_StructuresAndUnions = () => {
  return (
    <div className='p-4'>
      <h2 className='text-3xl font-bold mb-6'>
        Chapter 4: Structures and Unions in C
      </h2>

      {/* Introduction Section */}
      <section className='mb-6'>
        <h3 className='text-xl font-semibold mb-2'>Introduction</h3>
        <p className='mb-4'>
          In C programming, structures and unions are composite data types that
          allow you to group multiple variables under a single name. This
          chapter delves into the details of structures and unions, including
          their definitions, declarations, member access, and key differences.
        </p>
      </section>

      {/* Structures Section */}
      <section className='mb-6'>
        <h3 className='text-xl font-semibold mb-2'>Structures</h3>
        <div className='mb-4'>
          <h4 className='text-lg font-semibold mb-1'>Definition</h4>
          <p className='mb-2'>
            A structure is a composite data type that allows you to group
            together variables of different data types under a single name.
            Each variable within a structure is called a member. Structures
            are useful for organizing complex data into a single unit.
          </p>
        </div>

        {/* Defining a Structure */}
        <h4 className='text-lg font-semibold mb-2'>Defining a Structure</h4>
        <p className='mb-2'>
          You define a structure using the <code>struct</code> keyword, followed
          by the structure name and a block containing the member variables.
        </p>
        <pre><code>{`struct Person {
  char name[50];
  int age;
  float salary;
};`}</code></pre>
        <p className='mb-2'>
          <b>Note:</b> The structure definition does not allocate any memory.
          It only creates a blueprint for a new data type. Memory is allocated when structure variables are declared.
        </p>

        {/* Declaring Structure Variables */}
        <h4 className='text-lg font-semibold mb-2'>Declaring Structure Variables</h4>
        <p className='mb-2'>
          There are two main methods to declare variables with this type.
        </p>
        <pre><code>{`struct Person person1;`}</code></pre>
        <p className='mb-2'>
          <b>Note:</b> When you declare a structure variable, the compiler allocates memory for each member.
        </p>
        <pre><code>{`struct Person {
  char name[50];
  int age;
  float salary;
} person1, person2;`}</code></pre>

        {/* Initialization Structures */}
        <h4 className='text-lg font-semibold mb-2'>Initialization Structures</h4>
        <pre><code>{`struct Person {
  char name[50];
  int age;
  float salary;
} person1 = {"John Doe", 30, 50000.0};`}</code></pre>

        {/* Accessing Structure Members */}
        <h4 className='text-lg font-semibold mb-2'>Accessing Structure Members</h4>
        <pre><code>{`struct Person person1 = {"John Doe", 30, 50000.0};
printf("Name: %s", person1.name);`}</code></pre>

        {/* Arrays of Structures */}
        <h4 className='text-lg font-semibold mb-2'>Arrays of Structures</h4>
        <pre><code>{`struct Person people[3];
strcpy(people[0].name, "Alice");
people[0].age = 25;`}</code></pre>

        {/* Nested Structures */}
        <h4 className='text-lg font-semibold mb-2'>Nested Structures</h4>
        <pre><code>{`struct Address {
  char city[50];
  char country[50];
};

struct Person {
  char name[50];
  int age;
  float salary;
  struct Address address;
};`}</code></pre>
      </section>

      {/* Pointers to Structures */}
      <section className='mb-6'>
        <h3 className='text-xl font-semibold mb-2'>Pointers to Structures</h3>
        <pre><code>{`struct Person person1 = {"John Doe", 30};
struct Person *ptr = &person1;
printf("Name: %s", ptr->name);`}</code></pre>
      </section>

      {/* Structures and Functions */}
      <section className='mb-6'>
        <h3 className='text-xl font-semibold mb-2'>Structures and Functions</h3>
        <pre><code>{`void displayPerson(struct Person p) {
  printf("Name: %s, Age: %d", p.name, p.age);
}`}</code></pre>
        <pre><code>{`void changeName(struct Person *p, const char *newName) {
  strcpy(p->name, newName);
}`}</code></pre>
      </section>

      {/* Unions */}
      <section className='mb-6'>
        <h3 className='text-xl font-semibold mb-2'>Unions</h3>
        <pre><code>{`union Data {
  int i;
  float f;
  char str[20];
};`}</code></pre>
        <pre><code>{`union Data data1 = {10};`}</code></pre>
        <pre><code>{`data1.i = 10;
printf("Integer: %d", data1.i);`}</code></pre>

        <h4 className='text-lg font-semibold mb-2'>Key Differences</h4>
        <ul className='list-disc list-inside mb-4'>
          <li><strong>Memory:</strong> Structure allocates memory for all members, union shares memory.</li>
          <li><strong>Size:</strong> Structure size is sum of members; union size is max of member sizes.</li>
          <li><strong>Usage:</strong> Structure for data collection; union for memory-saving.</li>
        </ul>
      </section>

      {/* Applications */}
      <section className='mb-6'>
        <h3 className='text-xl font-semibold mb-2'>Applications and Examples</h3>
        <ul className='list-disc list-inside mb-4'>
          <li><strong>Structures:</strong> Data models, records, configuration files.</li>
          <li><strong>Unions:</strong> Protocols, memory management, type variation.</li>
        </ul>
      </section>
    </div>
  );
};

export default Chapter4_StructuresAndUnions;
