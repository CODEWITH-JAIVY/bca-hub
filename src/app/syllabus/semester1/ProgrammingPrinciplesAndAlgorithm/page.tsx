"use client";

import React from 'react';
import Chapter1_BasicsAndCIntro from '@/subjects/Semester1/ProgrammingPrinciplesAndAlgorithm/Chapter1_BasicsAndCIntro';
import Chapter2_OperatorsAndIO from '@/subjects/Semester1/ProgrammingPrinciplesAndAlgorithm/Chapter2_OperatorsAndIO';
import Chapter3_ControlStructures from '@/subjects/Semester1/ProgrammingPrinciplesAndAlgorithm/Chapter3_ControlStructures';
import Chapter4_ProblemSolvingAndAlgorithms from '@/subjects/Semester1/ProgrammingPrinciplesAndAlgorithm/Chapter4_ProblemSolvingAndAlgorithms';
import Chapter5_SimpleArithmeticProblems from '@/subjects/Semester1/ProgrammingPrinciplesAndAlgorithm/Chapter5_SimpleArithmeticProblems';
import Chapter6_Functions from '@/subjects/Semester1/ProgrammingPrinciplesAndAlgorithm/Chapter6_Functions';

const ProgrammingPrinciplesAndAlgorithmPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-4">Programming Principles And Algorithm</h1>
      <Chapter1_BasicsAndCIntro/>
      <Chapter2_OperatorsAndIO/>
      <Chapter3_ControlStructures/>
      <Chapter4_ProblemSolvingAndAlgorithms/>
      <Chapter5_SimpleArithmeticProblems/>
      <Chapter6_Functions/>
    </div>
  );
};

export default ProgrammingPrinciplesAndAlgorithmPage;
