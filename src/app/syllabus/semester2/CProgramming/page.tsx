"use client";

import React from 'react';
import Chapter1_Arrays from '@/subjects/Semester2/CProgramming/Chapter1_Arrays';
import Chapter2_Pointers from '@/subjects/Semester2/CProgramming/Chapter2_Pointers';
import Chapter3_Strings from '@/subjects/Semester2/CProgramming/Chapter3_Strings';
import Chapter4_StructuresAndUnions from '@/subjects/Semester2/CProgramming/Chapter4_StructuresAndUnions';
import Chapter5_PreprocessorAndBitwiseOps from '@/subjects/Semester2/CProgramming/Chapter5_PreprocessorAndBitwiseOps';
import Chapter6_FileHandling from '@/subjects/Semester2/CProgramming/Chapter6_FileHandling';

const CProgrammingPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-4">C Programming</h1>
      <Chapter1_Arrays/>
      <Chapter2_Pointers/>
      <Chapter3_Strings/>
      <Chapter4_StructuresAndUnions/>
      <Chapter5_PreprocessorAndBitwiseOps/>
      <Chapter6_FileHandling/>
    </div>
  );
};

export default CProgrammingPage;
