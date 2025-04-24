import React from 'react';

// Chapter6_SortingAndSearching component: Detailed explanations of sorting and searching algorithms.
const Chapter6_SortingAndSearching = () => {
    return (
        <div className="p-4">
            {/* Chapter Title */}
            <h2 className="text-3xl font-bold mb-6">Chapter 6: Sorting and Searching</h2>

            {/* Introduction */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Introduction</h3>
                <p className="mb-4">
                    Sorting and searching are fundamental operations in computer science, essential for organizing and retrieving data efficiently. This chapter provides a detailed exploration of various sorting and searching algorithms, explaining their principles, steps, and efficiencies. Understanding these algorithms is crucial for optimizing data processing and retrieval in many applications.
                </p>
            </section>

            {/* Sorting Algorithms */}
            <section className="mb-6">
                <h3 className="text-2xl font-semibold mb-4">Sorting Algorithms</h3>
                <p className="mb-4">
                    Sorting is the process of arranging elements in a specific order, such as ascending or descending. There are many sorting algorithms, each with its own efficiency and use cases.
                </p>

                {/* Common Sorting Algorithms */}
               {/* <p>
                <strong>Common sorting algorithms?</strong>
                <br />
                A2: Algorithms include bubble sort, selection sort, insertion sort, merge sort, and quicksort.
            </p>
            <p>
                <strong>Q3: What is bubble sort?</strong>
                <br />
                A3: Bubble sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.
            </p>
                */}

                {/* Bubble Sort */}
                <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">Bubble Sort</h4>
                    <p className="mb-2">
                        Bubble Sort works by repeatedly stepping through the list, comparing each pair of adjacent items, and swapping them if they are in the wrong order. The pass through the list is repeated until the list is sorted.
                    </p>
                    <p className="mb-2">
                        <strong>Example:</strong> Consider the list [5, 1, 4, 2, 8].
                        <br />
                        - First pass: [1, 5, 4, 2, 8] - {'->'}[1, 4, 5, 2, 8] -{'->'} [1, 4, 2, 5, 8] -{'->'} [1, 4, 2, 5, 8].
                        <br />
                        - Second pass: [1, 4, 2, 5, 8] -{'->'} [1, 2, 4, 5, 8] -{'->'}  [1, 2, 4, 5, 8] -{'->'} [1, 2, 4, 5, 8].
                    </p>
                    <p className="mb-2">
                        <strong>Efficiency:</strong> Bubble Sort has a time complexity of O(n^2) in the worst and average cases, making it inefficient for large lists.
                    </p>
                </div>

                {/* Selection Sort */}
                <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">Selection Sort</h4>
                    <p className="mb-2">
                        Selection Sort repeatedly finds the minimum element from the unsorted part of the list and places it at the beginning of the sorted part. The algorithm divides the list into two parts: a sorted sublist and an unsorted sublist.
                    </p>
                    <p className="mb-2">
                        <strong>Example:</strong> Consider the list [64, 25, 12, 22, 11].
                        <br />
                        - First pass: Find 11, swap with 64 -{'->'} [11, 25, 12, 22, 64].
                        <br />
                        - Second pass: Find 12, swap with 25 -  {'->'} [11, 12, 25, 22, 64].
                        <br />
                         - Third pass: Find 22, swap with 25 {'->'} [11, 12, 22, 25, 64].
                    </p>
                    <p className="mb-2">
                        <strong>Efficiency:</strong> Selection Sort has a time complexity of O(n^2) in all cases, similar to Bubble Sort.
                    </p>
                </div>

                {/* Insertion Sort */}
                <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">Insertion Sort</h4>
                    <p className="mb-2">
                        Insertion Sort builds the final sorted array one item at a time. It repeatedly inserts the next element into its correct position in the sorted part of the array.
                    </p>
                    <p className="mb-2">
                        <strong>Example:</strong> Consider the list [5, 1, 4, 2, 8].
                        <br />
                        - First pass: [1, 5, 4, 2, 8].
                        <br />
                        - Second pass: [1, 4, 5, 2, 8].
                         <br />
                         - Third pass: [1, 2, 4, 5, 8].
                    </p>
                    <p className="mb-2">
                        <strong>Efficiency:</strong> Insertion Sort has a time complexity of O(n^2) in the worst and average cases but O(n) in the best case (when the list is already sorted).
                    </p>
                </div>

                {/* Merge Sort */}
                <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">Merge Sort</h4>
                    <p className="mb-2">
                        Merge Sort is a divide and conquer algorithm that divides the input array into two halves, recursively sorts each half, and then merges the sorted halves.
                    </p>
                    <p className="mb-2">
                        <strong>Steps:</strong>
                        <br />
                        - <strong>Divide:</strong> Split the array into two halves.
                        <br />
                        - <strong>Conquer:</strong> Recursively sort each half.
                        <br />
                        - <strong>Merge:</strong> Combine the sorted halves into one sorted array.
                    </p>
                    <p className="mb-2">
                        <strong>Example:</strong> For [38, 27, 43, 3, 9, 82, 10], it would be split into halves, sorted recursively, and then merged back together.
                    </p>
                    <p className="mb-2">
                        <strong>Efficiency:</strong> Merge Sort has a time complexity of O(n log n) in all cases, making it efficient for large lists.
                    </p>
                </div>

                {/* Quick Sort */}
                <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">Quick Sort</h4>
                    <p className="mb-2">
                        Quick Sort is another divide and conquer algorithm. It selects a 'pivot' element and partitions the other elements into two sub-arrays, according to whether they are less than or greater than the pivot.
                    </p>
                    <p className="mb-2">
                        <strong>Steps:</strong>
                        <br />
                        - <strong>Pivot Selection:</strong> Choose a pivot element.
                        <br />
                        - <strong>Partitioning:</strong> Rearrange the array so that elements less than the pivot are before it, and elements greater than the pivot are after it.
                    </p>
                    <p className="mb-2">
                        <strong>Example:</strong> For [10, 7, 8, 9, 1, 5], if we choose 10 as the pivot, the array could be partitioned into [7, 8, 9, 1, 5] and [10], and then it would be sorted recursively.
                    </p>
                    <p className="mb-2">
                        <strong>Efficiency:</strong> Quick Sort has an average time complexity of O(n log n) but can degrade to O(n^2) in the worst case.
                    </p>
                </div>
            </section>

            {/* Searching Algorithms */}
            <section className="mb-6">
                <h3 className="text-2xl font-semibold mb-4">Searching Algorithms</h3>
                <p className="mb-4">
                    Searching is the process of finding a specific element in a data structure. Different algorithms are used depending on whether the data is sorted or unsorted.
                </p>

                {/* Linear Search */}
                <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">Linear Search</h4>
                    <p className="mb-2">
                        Linear Search sequentially checks each element of the list until the target element is found or the end of the list is reached.
                    </p>
                    <p className="mb-2">
                        <strong>Example:</strong> To find 3 in [1, 5, 3, 7, 9], Linear Search would check each element until it finds 3.
                    </p>
                    <p className="mb-2">
                        <strong>Efficiency:</strong> Linear Search has a time complexity of O(n), where n is the number of elements in the list.
                    </p>
                </div>

                {/* Binary Search */}
                <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">Binary Search</h4>
                    <p className="mb-2">
                        Binary Search is used for sorted lists. It works by repeatedly dividing the search interval in half. If the middle element is the target, the search is successful. Otherwise, the search continues in either the left or right half, depending on the target's value.
                    </p>
                    <p className="mb-2">
                        <strong>Example:</strong> To find 3 in [1, 2, 3, 4, 5], Binary Search would check the middle, see if it's higher or lower, and repeat in the relevant half.
                    </p>
                    <p className="mb-2">
                        <strong>Efficiency:</strong> Binary Search has a time complexity of O(log n), making it much faster than Linear Search for large lists.
                    </p>
                </div>
            </section>
             {/* Conclusion */}
             <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Conclusion</h3>
                <p className="mb-4">
                Sorting and searching algorithms are critical for efficiently managing and accessing data. Each algorithm has its strengths and weaknesses, making certain algorithms more suitable for specific scenarios. Understanding these algorithms' trade-offs enables programmers to choose the best approach for a given task, leading to more effective and faster data processing.
                </p>
            </section>
        </div>
    );
};

export default Chapter6_SortingAndSearching;
