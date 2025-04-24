"use client";

import React from 'react';
import Chapter1_LinearProgramming from '@/subjects/Semester4/OptimizationTechniques/Chapter1_LinearProgramming';
import Chapter2_QueuingTheory from '@/subjects/Semester4/OptimizationTechniques/Chapter2_QueuingTheory';
import Chapter3_ReplacementTheory from '@/subjects/Semester4/OptimizationTechniques/Chapter3_ReplacementTheory';
import Chapter4_InventoryTheory from '@/subjects/Semester4/OptimizationTechniques/Chapter4_InventoryTheory';
import Chapter5_GameTheory from '@/subjects/Semester4/OptimizationTechniques/Chapter5_GameTheory';

const OptimizationTechniquesPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-4">Optimization Techniques</h1>
      <Chapter1_LinearProgramming/>
      <Chapter2_QueuingTheory/>
      <Chapter3_ReplacementTheory/>
      <Chapter4_InventoryTheory/>
      <Chapter5_GameTheory/>
    </div>
  );
};

export default OptimizationTechniquesPage;
