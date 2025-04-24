"use client";

import React from 'react';
import Chapter1_IntroToComputersAndNumberSystems from '@/subjects/Semester1/ComputerFundamentalsAndOfficeAutomation/Chapter1_IntroToComputersAndNumberSystems';
import Chapter2_AlgorithmAndFlowchart from '@/subjects/Semester1/ComputerFundamentalsAndOfficeAutomation/Chapter2_AlgorithmAndFlowchart';
import Chapter3_OperatingSystemBasics from '@/subjects/Semester1/ComputerFundamentalsAndOfficeAutomation/Chapter3_OperatingSystemBasics';
import Chapter4_WindowsOSBasics from '@/subjects/Semester1/ComputerFundamentalsAndOfficeAutomation/Chapter4_WindowsOSBasics';
import Chapter5_EditorsAndWordProcessors from '@/subjects/Semester1/ComputerFundamentalsAndOfficeAutomation/Chapter5_EditorsAndWordProcessors';
import Chapter6_ExcelAndDatabaseBasics from '@/subjects/Semester1/ComputerFundamentalsAndOfficeAutomation/Chapter6_ExcelAndDatabaseBasics';

const ComputerFundamentalsAndOfficeAutomationPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-4">Computer Fundamentals And Office Automation</h1>
      <Chapter1_IntroToComputersAndNumberSystems/>
      <Chapter2_AlgorithmAndFlowchart/>
      <Chapter3_OperatingSystemBasics/>
      <Chapter4_WindowsOSBasics/>
      <Chapter5_EditorsAndWordProcessors/>
      <Chapter6_ExcelAndDatabaseBasics/>
    </div>
  );
};

export default ComputerFundamentalsAndOfficeAutomationPage;
