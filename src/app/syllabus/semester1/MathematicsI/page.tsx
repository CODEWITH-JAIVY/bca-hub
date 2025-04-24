"use client";

import React from 'react';
import Chapter1_DeterminantsAndMatrices from '@/subjects/Semester1/MathematicsI/Chapter1_DeterminantsAndMatrices';
import Chapter2_LimitsAndContinuity from '@/subjects/Semester1/MathematicsI/Chapter2_LimitsAndContinuity';
import Chapter3_Differentiation from '@/subjects/Semester1/MathematicsI/Chapter3_Differentiation';
import Chapter4_Integration from '@/subjects/Semester1/MathematicsI/Chapter4_Integration';
import Chapter5_VectorAlgebra from '@/subjects/Semester1/MathematicsI/Chapter5_VectorAlgebra';

const MathematicsIPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-4">Mathematics I</h1>
      <Chapter1_DeterminantsAndMatrices/>
      <Chapter2_LimitsAndContinuity/>
      <Chapter3_Differentiation/>
      <Chapter4_Integration/>
      <Chapter5_VectorAlgebra/>
    </div>
  );
};

export default MathematicsIPage;
