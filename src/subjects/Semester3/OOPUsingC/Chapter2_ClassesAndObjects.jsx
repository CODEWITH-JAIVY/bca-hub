import React from 'react';

const Chapter2_ClassesAndObjects = () => {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-6">Chapter 2: Classes and Objects in C++</h2>

      {/* Introduction */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Introduction</h3>
        <p className="mb-4">
          Classes and objects are the fundamental building blocks of object-oriented programming in C++. This chapter explains these concepts in detail, including how to define classes, create objects, and understand the role of access specifiers, constructors, and destructors.
        </p>
      </section>

      {/* Class in C++ */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">1. Class in C++</h3>
        <p className="mb-4">
          A class is a blueprint or template for creating objects. It defines the properties (data members) and behaviors (member functions) that objects of that class will have.
        </p>
        <p className="mb-4">
          <strong>Structure of a Class:</strong> A class definition consists of the <code>class</code> keyword, followed by the class name, and a block of code enclosed in curly braces <code>&#123; &#125;</code>.
        </p>
        <p className="mb-4">
          <strong>Data Members:</strong> These are the attributes or properties of the class, typically variables that store data.
        </p>
        <p className="mb-4">
          <strong>Member Functions:</strong> These are the methods or operations that an object of the class can perform.
        </p>
        <p className="mb-4">
          <strong>Access Specifiers:</strong> Access specifiers define the visibility of class members:
          <ul className="list-disc list-inside">
            <li>
              <strong>Public:</strong> Members are accessible from outside the class.
            </li>
            <li>
              <strong>Private:</strong> Members are only accessible within the class.
            </li>
            <li>
              <strong>Protected:</strong> Members are accessible within the class and its subclasses.
            </li>
          </ul>
        </p>
        <p className="mb-4">
          <strong>Example: Class with Access Specifiers</strong>
        </p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
          <code className="text-sm">
            {`#include <iostream>
#include <string>

class Dog {
private:
    std::string breed; // Private data member
    int age;          // Private data member

protected:
    std::string name; // Protected data member

public:
    // Public member function to set breed and age
    void setDetails(const std::string& dogBreed, int dogAge, const std::string& dogName) {
        breed = dogBreed;
        age = dogAge;
        name = dogName;
    }

    // Public member function to get breed
    std::string getBreed() const {
        return breed;
    }

    // Public member function to get name
    std::string getName() const {
        return name;
    }

    // Public member function to get age
    int getAge() const {
        return age;
    }

    // Public member function
    void bark() {
        std::cout << "Woof!" << std::endl;
    }
};`}
          </code>
        </pre>
        <p className="mb-4">
            <strong>Scope Resolution Operator (::):</strong> The scope resolution operator (::) is used to define a member function outside of the class definition.
        </p>
      </section>

      {/* Object in C++ */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">2. Object in C++</h3>
        <p className="mb-4">
          An object is an instance of a class. It is a concrete entity created based on the class blueprint.
        </p>
        <p className="mb-4">
          <strong>Creating Objects:</strong> To create an object, specify the class name followed by the object name.
        </p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
          <code className="text-sm">
            {`Dog myDog; // Creates an object named 'myDog' of class 'Dog'`}
          </code>
        </pre>
        <p className="mb-4">
          <strong>Accessing Members:</strong> You access class members (attributes and methods) using the dot (.) operator.
        </p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
          <code className="text-sm">
            {`
myDog.setDetails("Golden Retriever", 3,"Buddy");
std::cout << "My dog's name is " << myDog.getName() << std::endl; // Output: My dog's name is Buddy
std::cout << "My dog's breed is " << myDog.getBreed() << std::endl; // Output: My dog's breed is Golden Retriever
std::cout << "My dog's age is " << myDog.getAge() << std::endl; // Output: My dog's age is 3
myDog.bark(); // Output: Woof!
`}
          </code>
        </pre>
      </section>

      {/* Constructors */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">3. Constructors</h3>
        <p className="mb-4">
          A constructor is a special member function of a class that is automatically called when an object of that class is created. It is used to initialize the object's data members.
        </p>
        <p className="mb-4">
          <strong>Types of Constructors:</strong>
          <ul className="list-disc list-inside">
            <li>
              <strong>Default Constructor:</strong> A constructor with no parameters.
            </li>
            <li>
              <strong>Parameterized Constructor:</strong> A constructor with parameters to initialize data members.
            </li>
            <li>
              <strong>Copy Constructor:</strong> A constructor that creates an object by copying the data from another object of the same class.
            </li>
          </ul>
        </p>
        <p className="mb-4">
          <strong>Example: Constructors</strong>
        </p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
          <code className="text-sm">
            {`class Dog {
public:
    std::string name;
    int age;

    // Default constructor
    Dog() : name("Unknown"), age(0) {
        std::cout << "Default constructor called for: " << name << std::endl;
    }

    // Parameterized constructor
    Dog(const std::string& dogName, int dogAge) : name(dogName), age(dogAge) {
        std::cout << "Parameterized constructor called for: " << name << std::endl;
    }

    // Copy constructor
    Dog(const Dog& other) : name(other.name), age(other.age) {
        std::cout << "Copy constructor called for: " << name << std::endl;
    }
};

int main() {
    Dog dog1; // Default constructor
    Dog dog2("Buddy", 3); // Parameterized constructor
    Dog dog3 = dog2; // Copy constructor
    return 0;
}`}
          </code>
        </pre>
      </section>

      {/* Destructors */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">4. Destructors</h3>
        <p className="mb-4">
          A destructor is a special member function of a class that is automatically called when an object of that class is destroyed. It is used to release resources allocated by the object.
        </p>
        <p className="mb-4">
          <strong>Usefulness of Destructors:</strong>
          <ul className="list-disc list-inside">
            <li>
              <strong>Resource Deallocation:</strong> Destructors are used to deallocate memory or release resources that an object has acquired.
            </li>
            <li>
              <strong>Cleanup Operations:</strong> They can perform any necessary cleanup operations before an object is removed from memory.
            </li>
          </ul>
        </p>
        <p className="mb-4">
          <strong>Example: Destructor</strong>
        </p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
          <code className="text-sm">
            {`#include <iostream>
#include <string>

class Dog {
public:
    std::string name;
    int age;

    // Constructor
    Dog(const std::string& dogName, int dogAge) : name(dogName), age(dogAge) {
        std::cout << "Constructor called for: " << name << std::endl;
    }

    // Destructor
    ~Dog() {
        std::cout << "Destructor called for: " << name << std::endl;
    }
};

int main() {
    Dog myDog("Buddy", 3);
    return 0;
}
`}
          </code>
        </pre>
      </section>
        {/* Conclusion */}
        <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Conclusion</h3>
        <p className="mb-4">
          In this chapter, we have explored the concepts of classes and objects in C++, including class definitions, object creation, access specifiers, constructors, and destructors. These concepts are the foundation of object-oriented programming, allowing for structured, modular, and reusable code.
        </p>
      </section>
    </div>
  );
};

export default Chapter2_ClassesAndObjects;
            