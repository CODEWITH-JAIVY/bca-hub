"use client";

import React from 'react';
import Chapter1_BasicComputerDesign from '@/subjects/Semester3/ComputerArchitectureAndAssembly/Chapter1_BasicComputerDesign';
import Chapter2_CPUAndArithmeticAlgorithms from '@/subjects/Semester3/ComputerArchitectureAndAssembly/Chapter2_CPUAndArithmeticAlgorithms';
import Chapter3_ComputerArithmetic from '@/subjects/Semester3/ComputerArchitectureAndAssembly/Chapter3_ComputerArithmetic';
import Chapter4_IOAndDMA from '@/subjects/Semester3/ComputerArchitectureAndAssembly/Chapter4_IOAndDMA';
import Chapter5_MicroprocessorsOverview from '@/subjects/Semester3/ComputerArchitectureAndAssembly/Chapter5_MicroprocessorsOverview';
import Chapter6_AssemblyLanguageBasics from '@/subjects/Semester3/ComputerArchitectureAndAssembly/Chapter6_AssemblyLanguageBasics';

const ComputerArchitectureAndAssemblyPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-4">Computer Architecture and Assembly</h1>
      <Chapter1_BasicComputerDesign/>
      <Chapter2_CPUAndArithmeticAlgorithms/>
      <Chapter3_ComputerArithmetic/>
      <Chapter4_IOAndDMA/>
      <Chapter5_MicroprocessorsOverview/>
      <Chapter6_AssemblyLanguageBasics/>
    </div>
  );
};

export default ComputerArchitectureAndAssemblyPage;
