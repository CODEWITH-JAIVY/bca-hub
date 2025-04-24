"use client";

import React from 'react';
import Chapter1_ArraysAndMatrices from '@/subjects/Semester3/DataStructures/Chapter1_ArraysAndMatrices';
import Chapter2_StacksAndQueues from '@/subjects/Semester3/DataStructures/Chapter2_StacksAndQueues';
import Chapter3_LinkedLists from '@/subjects/Semester3/DataStructures/Chapter3_LinkedLists';
import Chapter4_TreesAndTraversal from '@/subjects/Semester3/DataStructures/Chapter4_TreesAndTraversal';
import Chapter5_BTreesAndIndexing from '@/subjects/Semester3/DataStructures/Chapter5_BTreesAndIndexing';
import Chapter6_SortingAndSearching from '@/subjects/Semester3/DataStructures/Chapter6_SortingAndSearching';

const DataStructuresPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-4">Data Structures</h1>
      <Chapter1_ArraysAndMatrices/>
      <Chapter2_StacksAndQueues/>
      <Chapter3_LinkedLists/>
      <Chapter4_TreesAndTraversal/>
      <Chapter5_BTreesAndIndexing/>
      <Chapter6_SortingAndSearching/>
    </div>
  );
};

export default DataStructuresPage;
