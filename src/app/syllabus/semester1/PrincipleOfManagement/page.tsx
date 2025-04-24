"use client";

import React from 'react';
import Chapter1_NatureOfManagement from '@/subjects/Semester1/PrincipleOfManagement/Chapter1_NatureOfManagement';
import Chapter2_ManagementThought from '@/subjects/Semester1/PrincipleOfManagement/Chapter2_ManagementThought';
import Chapter3_FunctionsOfManagementI from '@/subjects/Semester1/PrincipleOfManagement/Chapter3_FunctionsOfManagementI';
import Chapter4_FunctionsOfManagementII from '@/subjects/Semester1/PrincipleOfManagement/Chapter4_FunctionsOfManagementII';
import Chapter5_ManagementOfChange from '@/subjects/Semester1/PrincipleOfManagement/Chapter5_ManagementOfChange';
import Chapter6_StrategicManagement from '@/subjects/Semester1/PrincipleOfManagement/Chapter6_StrategicManagement';

const PrincipleOfManagementPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-4">Principle Of Management</h1>
      <Chapter1_NatureOfManagement/>
      <Chapter2_ManagementThought/>
      <Chapter3_FunctionsOfManagementI/>
      <Chapter4_FunctionsOfManagementII/>
      <Chapter5_ManagementOfChange/>
      <Chapter6_StrategicManagement/>
    </div>
  );
};

export default PrincipleOfManagementPage;
