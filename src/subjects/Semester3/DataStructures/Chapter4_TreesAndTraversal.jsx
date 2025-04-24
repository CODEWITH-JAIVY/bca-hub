import React from 'react';

const Chapter4_TreesAndTraversal = () => {
    return (
        <div>
            <h2>Chapter 4: Trees and Traversal</h2>
            <p>
                <strong>Q1: What is a tree?</strong>
                <br />
                A1: A tree is a hierarchical data structure consisting of nodes connected by edges, with a root node at the top and child nodes branching from it.
            </p>
            <p>
                <strong>Q2: What are the different types of trees?</strong>
                <br />
                A2: Types include binary tree, binary search tree (BST), AVL tree, and B-tree.
            </p>
            <p>
                <strong>Q3: What is a binary tree?</strong>
                <br />
                A3: A binary tree is a tree where each node has at most two children: a left child and a right child.
            </p>
            <p>
                <strong>Q4: What is a binary search tree (BST)?</strong>
                <br />
                A4: A BST is a binary tree where the value of each node is greater than all values in its left subtree and less than all values in its right subtree.
            </p>
            <p>
                <strong>Q5: What are tree traversal methods?</strong>
                <br />
                A5: Methods include inorder, preorder, and postorder traversal.
            </p>
            <p>
                <strong>Q6: Explain inorder traversal.</strong>
                <br />
                A6: Inorder traversal visits the left subtree, then the root node, and finally the right subtree.
            </p>
            <p>
                <strong>Q7: Explain preorder traversal.</strong>
                <br />
                A7: Preorder traversal visits the root node, then the left subtree, and finally the right subtree.
            </p>
            <p>
                <strong>Q8: Explain postorder traversal.</strong>
                <br />
                A8: Postorder traversal visits the left subtree, then the right subtree, and finally the root node.
            </p>
        </div>
    );
};

export default Chapter4_TreesAndTraversal;
