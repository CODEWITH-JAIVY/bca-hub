"use client";

import React from 'react';
import Chapter1_HTMLAndCSSBasics from '@/subjects/Semester5/WebTechnologies/Chapter1_HTMLAndCSSBasics';
import Chapter2_JavaScriptAndDOM from '@/subjects/Semester5/WebTechnologies/Chapter2_JavaScriptAndDOM';
import Chapter3_ResponsiveDesign from '@/subjects/Semester5/WebTechnologies/Chapter3_ResponsiveDesign';
import Chapter4_BootstrapAndFrameworks from '@/subjects/Semester5/WebTechnologies/Chapter4_BootstrapAndFrameworks';
import Chapter5_NodeAndExpress from '@/subjects/Semester5/WebTechnologies/Chapter5_NodeAndExpress';
import Chapter6_MongoDBIntegration from '@/subjects/Semester5/WebTechnologies/Chapter6_MongoDBIntegration';

const WebTechnologiesPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-4">Web Technologies</h1>
      <Chapter1_HTMLAndCSSBasics/>
      <Chapter2_JavaScriptAndDOM/>
      <Chapter3_ResponsiveDesign/>
      <Chapter4_BootstrapAndFrameworks/>
      <Chapter5_NodeAndExpress/>
      <Chapter6_MongoDBIntegration/>
    </div>
  );
};

export default WebTechnologiesPage;
