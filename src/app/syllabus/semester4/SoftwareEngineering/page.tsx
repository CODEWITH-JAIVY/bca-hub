
"use client";

import React from 'react';
import Unit1_IntroAndParadigms from '../../../../subjects/Semester4/softwareEngineering/Unit1_IntroAndParadigms';
import Unit2_RequirementAnalysis from "@/subjects/Semester4/softwareEngineering/Unit2_RequirementAnalysis";
import Unit3_DesigningSoftwareSolutions from "@/subjects/Semester4/softwareEngineering/Unit3_DesigningSoftwareSolutions";
import Unit4_SoftwareImplementation from "@/subjects/Semester4/softwareEngineering/Unit4_SoftwareImplementation";
import Unit5_SoftwareMaintenance from "@/subjects/Semester4/softwareEngineering/Unit5_SoftwareMaintenance";
import Unit6_ExamplesAndConfigMgmt from "@/subjects/Semester4/softwareEngineering/Unit6_ExamplesAndConfigMgmt";
  
const SoftwareEngineeringPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-4">Software Engineering</h1>
     
      <Unit1_IntroAndParadigms />
      <Unit2_RequirementAnalysis />
      <Unit3_DesigningSoftwareSolutions />
      <Unit4_SoftwareImplementation />
      <Unit5_SoftwareMaintenance />
      <Unit6_ExamplesAndConfigMgmt />
    </div>
  );
};

export default SoftwareEngineeringPage;
