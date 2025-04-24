import React from 'react';
import {Hero} from '@/components/Hero';
import {SemesterSelector} from '@/components/SemesterSelector';

export default function Home() {
  return (
    <div>
      <Hero />
      <SemesterSelector />
    </div>
  );
}

