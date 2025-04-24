"use client";

import React from 'react';
import Chapter1_NumericalMethodsAndRootFinding from '@/subjects/Semester5/ComputationalMathematics/Chapter1_NumericalMethodsAndRootFinding';
import Chapter2_InterpolationAndApproximation from '@/subjects/Semester5/ComputationalMathematics/Chapter2_InterpolationAndApproximation';
import Chapter3_IntegrationAndDifferentiation from '@/subjects/Semester5/ComputationalMathematics/Chapter3_IntegrationAndDifferentiation';
import Chapter4_DifferentialEquations from '@/subjects/Semester5/ComputationalMathematics/Chapter4_DifferentialEquations';
import Chapter5_LinearAlgebra from '@/subjects/Semester5/ComputationalMathematics/Chapter5_LinearAlgebra';

const ComputationalMathematicsPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-4">Computational Mathematics</h1>
      <Chapter1_NumericalMethodsAndRootFinding/>
      <Chapter2_InterpolationAndApproximation/>
      <Chapter3_IntegrationAndDifferentiation/>
      <Chapter4_DifferentialEquations/>
      <Chapter5_LinearAlgebra/>
    </div>
  );
};

export default ComputationalMathematicsPage;
