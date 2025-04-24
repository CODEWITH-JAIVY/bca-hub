"use client";

import React from 'react';
import Chapter1_ScanConversion from '@/subjects/Semester4/ComputerGraphicsAndMultimedia/Chapter1_ScanConversion';
import Chapter2_DisplayAndClipping from '@/subjects/Semester4/ComputerGraphicsAndMultimedia/Chapter2_DisplayAndClipping';
import Chapter3_2DAnd3DTransformations from '@/subjects/Semester4/ComputerGraphicsAndMultimedia/Chapter3_2DAnd3DTransformations';
import Chapter4_CurvesAndSolids from '@/subjects/Semester4/ComputerGraphicsAndMultimedia/Chapter4_CurvesAndSolids';
import Chapter5_MultimediaConcepts from '@/subjects/Semester4/ComputerGraphicsAndMultimedia/Chapter5_MultimediaConcepts';
import Chapter6_MultimediaApplications from '@/subjects/Semester4/ComputerGraphicsAndMultimedia/Chapter6_MultimediaApplications';

const ComputerGraphicsAndMultimediaPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-4">Computer Graphics and Multimedia</h1>
      <Chapter1_ScanConversion/>
      <Chapter2_DisplayAndClipping/>
      <Chapter3_2DAnd3DTransformations/>
      <Chapter4_CurvesAndSolids/>
      <Chapter5_MultimediaConcepts/>
      <Chapter6_MultimediaApplications/>
    </div>
  );
};

export default ComputerGraphicsAndMultimediaPage;
