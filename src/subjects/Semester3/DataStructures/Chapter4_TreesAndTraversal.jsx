import React from 'react';

const Chapter4_TreesAndTraversal = () => {
    return (
        <div>
            <h2>Chapter 4: Trees and Traversal</h2>
            <p>
                <strong>Q1: What is a tree?</strong>
                <br />
                A tree is a hierarchical data structure that consists of nodes connected by edges. It starts with a root node at the top, which has child nodes branching out from it. Each child node can have its own children, forming a tree-like structure. A tree is different from a linear data structure, like arrays or linked lists, because the elements are organized in a non-linear manner.
            </p>
            <p>
                <strong>Q2: What are the different types of trees?</strong>
                <br />
                There are several types of trees used in computer science, including:
                <ul>
                    <li><strong>Binary Tree</strong>: A tree where each node has at most two children.</li>
                    <li><strong>Binary Search Tree (BST)</strong>: A binary tree with an additional property: for each node, all values in the left subtree are smaller, and all values in the right subtree are greater.</li>
                    <li><strong>AVL Tree</strong>: A self-balancing binary search tree, where the difference in heights of left and right subtrees of any node is at most one.</li>
                    <li><strong>B-tree</strong>: A self-balancing tree data structure that maintains sorted data and allows searches, insertions, deletions, and sequential access in logarithmic time.</li>
                </ul>
            </p>
            <p>
                <strong>Q3: What is a binary tree?</strong>
                <br />
                A binary tree is a tree where each node has at most two children: a left child and a right child. The binary tree is structured such that each node can either have 0, 1, or 2 child nodes. This structure makes it very efficient for searching, insertion, and deletion when combined with additional properties like in Binary Search Trees.
            </p>
            <p>
                <strong>Q4: What is a binary search tree (BST)?</strong>
                <br />
                A binary search tree (BST) is a binary tree where the nodes are organized in such a way that for every node:
                <ul>
                    <li>All nodes in the left subtree of a node contain values less than the node's value.</li>
                    <li>All nodes in the right subtree contain values greater than the node's value.</li>
                </ul>
                This property makes BSTs useful for efficient searching, insertion, and deletion operations.
            </p>
            <p>
                <strong>Q5: What are tree traversal methods?</strong>
                <br />
                Tree traversal is the process of visiting all the nodes in a tree in a specific order. There are three primary methods of tree traversal:
                <ul>
                    <li><strong>Inorder Traversal</strong>: Left subtree -{'>'} Root node { '>'} Right subtree.</li>
                    <li><strong>Preorder Traversal</strong>: Root node  {'->'} Left subtree -{'>'} Right subtree.</li>
                    <li><strong>Postorder Traversal</strong>: Left subtree {'->'} Right subtree {'->'} Root node.</li>
                </ul>
            </p>
            <p>
                <strong>Q6: Explain inorder traversal.</strong>
                <br />
                Inorder traversal visits the nodes in the following order:
                <ul>
                    <li>First, it visits the left subtree recursively.</li>
                    <li>Then, it visits the root node.</li>
                    <li>Finally, it visits the right subtree recursively.</li>
                </ul>
                This method produces a sorted order of nodes in a binary search tree (BST).
            </p>
            <p>
                <strong>Q7: Explain preorder traversal.</strong>
                <br />
                Preorder traversal visits the nodes in the following order:
                <ul>
                    <li>First, it visits the root node.</li>
                    <li>Then, it visits the left subtree recursively.</li>
                    <li>Finally, it visits the right subtree recursively.</li>
                </ul>
                This traversal is useful for creating a copy of a tree or for checking whether a tree is valid.
            </p>
            <p>
                <strong>Q8: Explain postorder traversal.</strong>
                <br />
                Postorder traversal visits the nodes in the following order:
                <ul>
                    <li>First, it visits the left subtree recursively.</li>
                    <li>Then, it visits the right subtree recursively.</li>
                    <li>Finally, it visits the root node.</li>
                </ul>
                This method is commonly used when deleting or freeing up memory of a tree, as it ensures the nodes are deleted starting from the leaves up to the root.
            </p>
        </div>
    );
};

export default Chapter4_TreesAndTraversal;
