import React from 'react';

// Chapter4_PermutationAndCombination: Detailed explanation of permutations and combinations with examples, formulas, and applications.
const Chapter4_PermutationAndCombination = () => {
  return (
    <div className="p-4">
      {/* Introduction */}
      <h2 className="text-3xl font-bold mb-6">
        Chapter 4: Permutation and Combination
      </h2>
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Introduction</h3>
        <p className="mb-4">
          Permutations and combinations are fundamental concepts in combinatorics, a branch of mathematics that deals with counting, arrangement, and selection. Understanding these concepts is essential for solving problems in probability, statistics, computer science, and various real-world applications.
        </p>
      </section>
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Factorial</h3>
        <p className="mb-4">
          The factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 5! = 5 × 4 × 3 × 2 × 1 = 120.
        </p>
      </section>

      {/* Permutation */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Permutation</h3>
        <p className="mb-4">
          Permutation refers to the different ways in which a set of objects can be arranged in a specific order. Order is significant in permutations.
        </p>
        <p className="mb-4">
          <strong>Ordered Arrangements:</strong> In permutations, the order of the arrangement matters. For example, ABC is a different permutation from ACB.
        </p>
        <p className="mb-4">
          <strong>Examples:</strong>
          <ul className="list-disc list-inside">
            <li>Arranging books on a shelf.</li>
            <li>Determining the batting order of a baseball team.</li>
            <li>Creating a password with specific characters in a certain order.</li>
          </ul>
        </p>
        <p className="mb-4">
          <strong>Formula:</strong> The number of permutations of n objects taken r at a time is given by P(n, r) = n! / (n - r)!.
        </p>
        <p className="mb-4">
          <strong>Example:</strong> How many ways can 3 books be arranged from a set of 5 books?
          <ul className="list-disc list-inside">
            <li>n = 5 (total number of books)</li>
            <li>r = 3 (number of books to arrange)</li>
            <li>P(5, 3) = 5! / (5 - 3)! = 5! / 2! = (5 × 4 × 3 × 2 × 1) / (2 × 1) = 60</li>
          </ul>
          So there are 60 ways to arrange 3 books from 5 books.
        </p>
        <p className="mb-4">
          <strong>Permutation with Repetition Allowed:</strong>
          When repetition is allowed, each position can be filled by any of the n items. The formula is: n<sup>r</sup>, where n is the number of items to choose from, and r is the number of choices to be made.
        </p>
         <p className="mb-4">
          <strong>Formula of Permutation with Repetition:</strong> n<sup>r</sup>
        </p>
         <p className="mb-4">
          <strong>Example of Permutation with Repetition:</strong>
           How many 3-digit codes can be created using the digits 0-9 with repetition allowed?
            <ul className="list-disc list-inside">
            <li>n = 10 (digits 0-9)</li>
            <li>r = 3 (3-digit code)</li>
            <li>Permutations with repetition = 10<sup>3</sup> = 1000</li>
            </ul>
            So, there are 1000 possible 3-digit codes.
        </p>
        <p className="mb-4">
          <strong>Application:</strong> Permutations are used in scenarios where order matters, such as:
          <ul className="list-disc list-inside">
            <li>Arranging students in a line for a photograph.</li>
            <li>Ranking the top three winners in a race.</li>
            <li>Creating unique passwords or codes.</li>
          </ul>
        </p>
      </section>

      {/* Combination */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Combination</h3>
        <p className="mb-4">
          Combination refers to the different ways of selecting items from a set where the order of selection does not matter.
        </p>
        <p className="mb-4">
          <strong>Unordered Selections:</strong> In combinations, the order of the selection does not matter. For example, selecting items A, B, C is the same as selecting items C, B, A.
        </p>
        <p className="mb-4">
          <strong>Examples:</strong>
          <ul className="list-disc list-inside">
            <li>Choosing a committee from a group of people.</li>
            <li>Selecting lottery numbers.</li>
            <li>Choosing toppings for a pizza.</li>
          </ul>
        </p>
        <p className="mb-4">
          <strong>Formula:</strong> The number of combinations of n objects taken r at a time is given by C(n, r) = n! / (r! * (n - r)!).
        </p>
        <p className="mb-4">
          <strong>Example:</strong> How many ways can a committee of 3 people be chosen from a group of 5 people?
          <ul className="list-disc list-inside">
            <li>n = 5 (total number of people)</li>
            <li>r = 3 (number of people in the committee)</li>
            <li>C(5, 3) = 5! / (3! * (5 - 3)!) = 5! / (3! * 2!) = (5 × 4 × 3 × 2 × 1) / ((3 × 2 × 1) × (2 × 1)) = 10</li>
          </ul>
          So there are 10 ways to choose a committee of 3 people from 5 people.
        </p>
        <p className="mb-4">
          <strong>Combination with Repetition Allowed:</strong>
          When repetition is allowed, each item can be selected more than once. The formula is: C(n + r - 1, r) = (n + r - 1)! / (r! * (n - 1)!), where n is the number of items to choose from, and r is the number of choices to be made.
        </p>
         <p className="mb-4">
          <strong>Formula of Combination with Repetition:</strong>  C(n + r - 1, r) = (n + r - 1)! / (r! * (n - 1)!)
        </p>
         <p className="mb-4">
          <strong>Example of Combination with Repetition:</strong>
           How many ways are there to choose 3 ice cream scoops from 5 flavors when repetition is allowed?
            <ul className="list-disc list-inside">
            <li>n = 5 (ice cream flavors)</li>
            <li>r = 3 (scoops)</li>
            <li>C(5 + 3 - 1, 3) = C(7, 3) = 7! / (3! * (7 - 3)!) = 7! / (3! * 4!) = (7 × 6 × 5) / (3 × 2 × 1) = 35</li>
            </ul>
            So, there are 35 ways to choose 3 ice cream scoops with repetition allowed.
        </p>
        <p className="mb-4">
          <strong>Application:</strong> Combinations are used in scenarios where the order of selection does not matter, such as:
          <ul className="list-disc list-inside">
            <li>Forming a team from a group of players.</li>
            <li>Choosing a set of questions for an exam.</li>
            <li>Selecting ingredients for a recipe.</li>
          </ul>
        </p>
      </section>

      {/* Difference Between Permutation and Combination */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Difference Between Permutation and Combination
        </h3>
        <p className="mb-4">
          <strong>Key Difference:</strong> The primary difference between permutations and combinations is that permutations are concerned with ordered arrangements, while combinations are concerned with unordered selections.
        </p>
        <p className="mb-4">
          <strong>Scenarios:</strong>
          <ul className="list-disc list-inside">
            <li>
              <strong>Permutation:</strong> Use permutation when the order of selection is important, such as arranging books on a shelf or creating a password.
            </li>
            <li>
              <strong>Combination:</strong> Use combination when the order of selection does not matter, such as choosing a team from a group of players or selecting lottery numbers.
            </li>
          </ul>
        </p>
      </section>

      {/* Conclusion */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Conclusion</h3>
        <p className="mb-4">
          Permutations and combinations are powerful tools in counting and probability. Understanding whether order matters (permutation) or does not matter (combination) is crucial in determining which formula to apply. These concepts have broad applications in various fields, including cryptography, statistical sampling, and problem-solving.
        </p>
      </section>
    </div>
  );
};

export default Chapter4_PermutationAndCombination;
