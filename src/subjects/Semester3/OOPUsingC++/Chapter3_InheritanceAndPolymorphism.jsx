import React from 'react';

const Chapter3_InheritanceAndPolymorphism = () => {
    return (
        <div className="p-4">
            {/* Introduction */}
            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Chapter 3: Inheritance and Polymorphism</h2>
                <h3 className="text-xl font-semibold mb-2">Introduction</h3>
                <p className="mb-4">
                    Inheritance and polymorphism are key principles of object-oriented programming (OOP).
                    Inheritance promotes code reusability by allowing classes to derive properties from existing ones.
                    Polymorphism enables the use of a single interface to represent different data types.
                </p>
            </section>

            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">What is Inheritance?</h3>
                <p>
                    Inheritance is a mechanism in C++ where a class (derived) inherits attributes and methods from another class (base).
                </p>
                <ul className="list-disc list-inside">
                    <li>Code Reusability: Reduces redundancy</li>
                    <li>Extensibility: Enhances functionality</li>
                    <li>Maintainability: Easier updates</li>
                </ul>
            </section>

            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Types of Inheritance</h3>
                <div className="space-y-4">
                    <p><strong>Single Inheritance:</strong></p>
                    <code>class Animal &#123;&#125;; class Dog : public Animal &#123;&#125;;</code>

                    <p><strong>Multiple Inheritance:</strong></p>
                    <code>class Animal &#123;&#125;; class Pet &#123;&#125;; class Dog : public Animal, public Pet &#123;&#125;;</code>

                    <p><strong>Hierarchical Inheritance:</strong></p>
                    <code>class Animal &#123;&#125;; class Dog : public Animal &#123;&#125;; class Cat : public Animal &#123;&#125;;</code>

                    <p><strong>Multilevel Inheritance:</strong></p>
                    <code>class Animal &#123;&#125;; class Mammal : public Animal &#123;&#125;; class Dog : public Mammal &#123;&#125;;</code>

                    <p><strong>Hybrid Inheritance:</strong></p>
                    <code>class Animal &#123;&#125;; class Pet &#123;&#125;; class Mammal : public Animal &#123;&#125;; class Dog : public Mammal, public Pet &#123;&#125;;</code>
                </div>
            </section>

            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Constructors and Inheritance</h3>
                <p>
                    When a derived class object is created, the constructor of the base class is invoked first, followed by the derived class.
                    During destruction, the order is reversed.
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

            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Polymorphism</h3>
                <p>
                    Polymorphism means "many forms" and enables a unified interface for multiple data types.
                </p>
                <p><strong>Types of Polymorphism in C++:</strong></p>
                <ul className="list-disc list-inside">
                    <li>Compile-time Polymorphism (Function & Operator Overloading)</li>
                    <li>Run-time Polymorphism (Virtual Functions)</li>
                </ul>

                <p><strong>Function Overloading:</strong></p>
                <code>int add(int a, int b); double add(double a, double b);</code>

                <p><strong>Operator Overloading:</strong></p>
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

                <p><strong>Virtual Functions:</strong> Used for achieving runtime polymorphism by overriding base class methods in derived classes.</p>
                <p><strong>Abstract Class and Pure Virtual Function:</strong></p>
                <pre className="bg-gray-100 p-2 rounded overflow-x-auto">
<code>{`class Shape {
  public:
    virtual double getArea() = 0; // Pure virtual function
};`}</code>
                </pre>
            </section>

            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Conclusion</h3>
                <p>
                    Inheritance and polymorphism are foundational pillars of OOP in C++. They promote modular, extensible,
                    and maintainable code by enabling hierarchical relationships and dynamic behavior in class structures.
                </p>
            </section>
        </div>
    );
};

export default Chapter3_InheritanceAndPolymorphism;
