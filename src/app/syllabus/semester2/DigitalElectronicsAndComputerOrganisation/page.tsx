"use client";

import React from 'react';
import Chapter1_LogicGatesAndBooleanAlgebra from '@/subjects/Semester2/DigitalElectronicsAndComputerOrganisation/Chapter1_LogicGatesAndBooleanAlgebra';
import Chapter2_CombinationalCircuits from '@/subjects/Semester2/DigitalElectronicsAndComputerOrganisation/Chapter2_CombinationalCircuits';
import Chapter3_MemoryUnits from '@/subjects/Semester2/DigitalElectronicsAndComputerOrganisation/Chapter3_MemoryUnits';
import Chapter4_SequentialCircuits from '@/subjects/Semester2/DigitalElectronicsAndComputerOrganisation/Chapter4_SequentialCircuits';
import Chapter5_MemoryOrganisation from '@/subjects/Semester2/DigitalElectronicsAndComputerOrganisation/Chapter5_MemoryOrganisation';

const DigitalElectronicsAndComputerOrganisationPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-4">Digital Electronics and Computer Organisation</h1>
      <Chapter1_LogicGatesAndBooleanAlgebra/>
      <Chapter2_CombinationalCircuits/>
      <Chapter3_MemoryUnits/>
      <Chapter4_SequentialCircuits/>
      <Chapter5_MemoryOrganisation/>
    </div>
  );
};

export default DigitalElectronicsAndComputerOrganisationPage;
