import React from 'react';

const Chapter3_InheritanceAndPolymorphism = () => {
    return (
        <div className="p-4">
            {/* Introduction */}
            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Chapter 3: Inheritance and Polymorphism</h2>
                <h3 className="text-xl font-semibold mb-2">Introduction</h3>
                <p className="mb-4">
                    Inheritance and polymorphism are two fundamental principles of Object-Oriented Programming (OOP).
                    Inheritance allows new classes to acquire the properties of existing ones, while polymorphism enables methods to do different things based on the object that is invoking them.
                </p>
            </section>

            {/* Inheritance */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">What is Inheritance?</h3>
                <p className="mb-2">
                    Inheritance is a mechanism in C++ that allows one class (derived class) to inherit features (properties and behaviors) from another class (base class).
                </p>
                <ul className="list-disc list-inside">
                    <li>Enhances code reusability</li>
                    <li>Supports hierarchical classification</li>
                    <li>Promotes maintainability and scalability</li>
                </ul>
            </section>

            {/* Types of Inheritance */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Types of Inheritance</h3>
                <div className="space-y-4">
                    <p><strong>Single Inheritance:</strong> A class inherits from one base class.</p>
                    <code>class Animal &#123;&#125;; class Dog : public Animal &#123;&#125;;</code>

                    <p><strong>Multiple Inheritance:</strong> A class inherits from more than one base class.</p>
                    <code>class Animal &#123;&#125;; class Pet &#123;&#125;; class Dog : public Animal, public Pet &#123;&#125;;</code>

                    <p><strong>Hierarchical Inheritance:</strong> Multiple derived classes inherit from a single base class.</p>
                    <code>class Animal &#123;&#125;; class Dog : public Animal &#123;&#125;; class Cat : public Animal &#123;&#125;;</code>

                    <p><strong>Multilevel Inheritance:</strong> A derived class becomes a base class for another class.</p>
                    <code>class Animal &#123;&#125;; class Mammal : public Animal &#123;&#125;; class Dog : public Mammal &#123;&#125;;</code>

                    <p><strong>Hybrid Inheritance:</strong> A combination of two or more types of inheritance.</p>
                    <code>class Animal &#123;&#125;; class Pet &#123;&#125;; class Mammal : public Animal &#123;&#125;; class Dog : public Mammal, public Pet &#123;&#125;;</code>
                </div>
            </section>

            {/* Constructors and Destructors */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Constructors and Inheritance</h3>
                <p>
                    In inheritance, the constructor of the base class is executed before the derived class constructor.
                    Similarly, destructors are called in reverse order.
                </p>
                <pre className="bg-gray-100 p-2 rounded overflow-x-auto">
<code>{`#include <iostream>
class Base {
  public:
    Base() { std::cout << "Base Constructor" << std::endl; }
    ~Base() { std::cout << "Base Destructor" << std::endl; }
};
class Derived : public Base {
  public:
    Derived() { std::cout << "Derived Constructor" << std::endl; }
    ~Derived() { std::cout << "Derived Destructor" << std::endl; }
};
int main() {
  Derived d;
  return 0;
}`}</code>
                </pre>
                <p><strong>Output:</strong></p>
                <pre className="bg-gray-50 p-2 rounded">
Base Constructor
Derived Constructor
Derived Destructor
Base Destructor
                </pre>
            </section>

            {/* Polymorphism */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Polymorphism</h3>
                <p className="mb-2">
                    Polymorphism means "many forms" and allows objects to be treated as instances of their parent class, while still executing the derived class behavior.
                </p>
                <p><strong>Types:</strong></p>
                <ul className="list-disc list-inside">
                    <li>Compile-time Polymorphism (Function Overloading, Operator Overloading)</li>
                    <li>Run-time Polymorphism (Virtual Functions)</li>
                </ul>

                <p><strong>Function Overloading:</strong> Same function name with different parameters.</p>
                <code>int add(int a, int b); double add(double a, double b);</code>

                <p><strong>Operator Overloading:</strong> Redefining operators for user-defined types.</p>
                <pre className="bg-gray-100 p-2 rounded overflow-x-auto">
<code>{`class Complex {
  public:
    int real, imag;
    Complex operator+(const Complex& obj) {
      Complex temp;
      temp.real = real + obj.real;
      temp.imag = imag + obj.imag;
      return temp;
    }
};`}</code>
                </pre>

                <p><strong>Virtual Functions:</strong> Enable dynamic binding at runtime.</p>
                <p><strong>Abstract Class and Pure Virtual Function:</strong> A class with at least one pure virtual function is abstract and cannot be instantiated.</p>
                <pre className="bg-gray-100 p-2 rounded overflow-x-auto">
<code>{`class Shape {
  public:
    virtual double getArea() = 0; // Pure virtual function
};`}</code>
                </pre>
            </section>

            {/* Conclusion */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Conclusion</h3>
                <p>
                    Inheritance and polymorphism enable better software architecture by promoting modular, scalable, and reusable code. Mastering these concepts is essential for effective object-oriented design in C++.
                </p>
            </section>
        </div>
    );
};

export default Chapter3_InheritanceAndPolymorphism;
