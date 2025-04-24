import React from 'react';

const Chapter4_PermutationAndCombination = () => {
    return (
        <div>
            <h2>Chapter 4: Permutation and Combination</h2>
            <p>
                <strong>Q1: What is permutation?</strong>
                <br />
                A1: Permutation is the arrangement of objects in a specific order.
            </p>
            <p>
                <strong>Q2: What is combination?</strong>
                <br />
                A2: Combination is the selection of objects without regard to the order.
            </p>
            <p>
                <strong>Q3: What is the formula for permutations?</strong>
                <br />
                A3: The number of permutations of n objects taken r at a time is given by P(n, r) = n! / (n - r)!.
            </p>
            <p>
                <strong>Q4: What is the formula for combinations?</strong>
                <br />
                A4: The number of combinations of n objects taken r at a time is given by C(n, r) = n! / (r! * (n - r)!).
            </p>
        </div>
    );
};

export default Chapter4_PermutationAndCombination;
