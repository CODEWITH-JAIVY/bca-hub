import React, { useState } from 'react';

const Chapter3_LinkedLists = () => {
    const [output, setOutput] = useState('');

    // Singly Linked List Implementation
    class SinglyLinkedList {
        constructor() {
            this.head = null;
        }

        // Node class
        Node(data) {
            return { data, next: null };
        }

        // Insert at the end of the list
        insertAtEnd(data) {
            const newNode = this.Node(data);
            if (!this.head) {
                this.head = newNode;
                return;
            }

            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }

        // Traverse the list and display elements
        traverse() {
            if (!this.head) return 'List is empty';

            let current = this.head;
            let result = '';
            while (current) {
                result += current.data + ' -> ';
                current = current.next;
            }
            return result.slice(0, -4); // Removing last '->'
        }

        // Delete a node by value
        deleteByValue(value) {
            if (!this.head) return 'List is empty';
            if (this.head.data === value) {
                this.head = this.head.next;
                return;
            }

            let current = this.head;
            while (current.next && current.next.data !== value) {
                current = current.next;
            }

            if (current.next) {
                current.next = current.next.next;
            } else {
                return 'Value not found';
            }
        }

        // Search for a node by value
        search(value) {
            if (!this.head) return 'List is empty';

            let current = this.head;
            while (current) {
                if (current.data === value) {
                    return 'Value found';
                }
                current = current.next;
            }
            return 'Value not found';
        }
    }

    // Doubly Linked List Implementation
    class DoublyLinkedList {
        constructor() {
            this.head = null;
        }

        // Node class for doubly linked list
        Node(data) {
            return { data, next: null, prev: null };
        }

        // Insert at the end
        insertAtEnd(data) {
            const newNode = this.Node(data);
            if (!this.head) {
                this.head = newNode;
                return;
            }

            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
            newNode.prev = current;
        }

        // Traverse the list (forward direction)
        traverseForward() {
            if (!this.head) return 'List is empty';

            let current = this.head;
            let result = '';
            while (current) {
                result += current.data + ' <-> ';
                current = current.next;
            }
            return result.slice(0, -5); // Removing last '<->'
        }

        // Traverse the list (backward direction)
        traverseBackward() {
            if (!this.head) return 'List is empty';

            let current = this.head;
            while (current.next) {
                current = current.next;
            }

            let result = '';
            while (current) {
                result += current.data + ' <-> ';
                current = current.prev;
            }
            return result.slice(0, -5); // Removing last '<->'
        }

        // Delete a node by value
        deleteByValue(value) {
            if (!this.head) return 'List is empty';

            if (this.head.data === value) {
                this.head = this.head.next;
                if (this.head) this.head.prev = null;
                return;
            }

            let current = this.head;
            while (current && current.data !== value) {
                current = current.next;
            }

            if (!current) return 'Value not found';

            if (current.next) {
                current.next.prev = current.prev;
            }
            if (current.prev) {
                current.prev.next = current.next;
            }
        }

        // Search for a node by value
        search(value) {
            if (!this.head) return 'List is empty';

            let current = this.head;
            while (current) {
                if (current.data === value) {
                    return 'Value found';
                }
                current = current.next;
            }
            return 'Value not found';
        }
    }

    const handleSinglyLinkedListOperations = () => {
        const sll = new SinglyLinkedList();
        sll.insertAtEnd(10);
        sll.insertAtEnd(20);
        sll.insertAtEnd(30);
        setOutput(`Singly Linked List after insertions: ${sll.traverse()}`);

        sll.deleteByValue(20);
        setOutput(`Singly Linked List after deletion: ${sll.traverse()}`);

        const searchResult = sll.search(30);
        setOutput(`Singly Linked List search result: ${searchResult}`);
    };

    const handleDoublyLinkedListOperations = () => {
        const dll = new DoublyLinkedList();
        dll.insertAtEnd(10);
        dll.insertAtEnd(20);
        dll.insertAtEnd(30);
        setOutput(`Doubly Linked List forward traversal: ${dll.traverseForward()}`);

        dll.deleteByValue(20);
        setOutput(`Doubly Linked List after deletion: ${dll.traverseForward()}`);

        const searchResult = dll.search(30);
        setOutput(`Doubly Linked List search result: ${searchResult}`);
    };

    return (
        <div>
            <h2>Chapter 3: Linked Lists</h2>
            <p>
                <strong>Q1: What is a linked list?</strong>
                <br />
                A linked list is a linear data structure where elements are stored in nodes. Each node contains a data part and a pointer to the next node in the sequence. 
                This allows for dynamic memory allocation and efficient insertion and deletion at both ends of the list.
            </p>
            <p>
                <strong>Q2: What are the different types of linked lists?</strong>
                <br />
                Types of linked lists include:
                <ul>
                    <li><strong>Singly Linked List</strong>: Each node points to the next node.</li>
                    <li><strong>Doubly Linked List</strong>: Each node points to both the next and previous nodes.</li>
                    <li><strong>Circular Linked List</strong>: The last node points back to the first node, forming a circle.</li>
                </ul>
            </p>
            <p>
                <strong>Q3: What is a singly linked list?</strong>
                <br />
                A singly linked list is a type of linked list where each node has a reference to the next node in the list. The last node points to null.
            </p>
            <p>
                <strong>Q4: What is a doubly linked list?</strong>
                <br />
                A doubly linked list is a type of linked list where each node has two references: one to the next node and another to the previous node. This allows traversal in both directions.
            </p>
            <p>
                <strong>Q5: What is a circular linked list?</strong>
                <br />
                A circular linked list is a linked list in which the last node points to the first node, forming a circular structure.
            </p>
            <p>
                <strong>Q6: What are the basic operations of a linked list?</strong>
                <br />
                Basic operations include:
                <ul>
                    <li><strong>Insertion</strong>: Add a new node to the list.</li>
                    <li><strong>Deletion</strong>: Remove a node from the list.</li>
                    <li><strong>Traversal</strong>: Visit each node in the list.</li>
                    <li><strong>Searching</strong>: Find a node by its value.</li>
                </ul>
            </p>
            <p>
                <strong>Q7: What are the advantages of using linked lists?</strong>
                <br />
                Advantages of linked lists include:
                <ul>
                    <li><strong>Dynamic Memory Allocation</strong>: The size of the list can grow or shrink as needed.</li>
                    <li><strong>Efficient Insertion and Deletion</strong>: You can insert or delete nodes without shifting other elements.</li>
                    <li><strong>No Fixed Size</strong>: Unlike arrays, linked lists do not have a fixed size limitation.</li>
                </ul>
            </p>
            <button onClick={handleSinglyLinkedListOperations}>Perform Singly Linked List Operations</button>
            <button onClick={handleDoublyLinkedListOperations}>Perform Doubly Linked List Operations</button>
            <h4>Output:</h4>
            <p>{output}</p>
        </div>
    );
};

export default Chapter3_LinkedLists;
 