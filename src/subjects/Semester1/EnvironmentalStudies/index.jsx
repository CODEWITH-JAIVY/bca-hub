'use client';
import React from 'react';

const EnvironmentalStudiesIndex = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Environmental Studies</h2>

      {/* Introduction */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Introduction</h3>
        <p className="mb-4">
          <strong>Q1: What is environmental studies?</strong>
          <br />
          A1: Environmental studies is an interdisciplinary academic field that integrates physical, biological, and information sciences to study the environment and solve environmental problems.
        </p>

        <p className="mb-4">
          <strong>Q2: What are the main components of the environment?</strong>
          <br />
          A2: The main components include the atmosphere, lithosphere, hydrosphere, and biosphere.
        </p>
      </section>

      {/* Ecosystems */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Ecosystems</h3>
        <p className="mb-4">
          <strong>Q3: What are ecosystems?</strong>
          <br />
          A3: Ecosystems are communities of living organisms (plants, animals, and microbes) interacting with each other and with their physical environment (soil, water, air, light).
        </p>
      </section>

      {/* Environmental Pollution */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Environmental Pollution</h3>
        <p className="mb-4">
          <strong>Q4: What are different types of environmental pollution?</strong>
          <br />
          A4: Types of pollution include air pollution, water pollution, soil pollution, noise pollution, and radioactive pollution.
        </p>
      </section>

      {/* Natural Resources */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Natural Resources</h3>
        <p className="mb-4">
          <strong>Q5: What are natural resources?</strong>
          <br />
          A5: Natural resources are materials or substances occurring in nature which can be exploited for economic gain, such as minerals, forests, water, and fertile land.
        </p>
      </section>

      {/* Environmental Conservation */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Environmental Conservation</h3>
        <p className="mb-4">
          <strong>Q6: What are the importance of environmental conservation?</strong>
          <br />
          A6: Environmental conservation protects biodiversity, maintains ecological balance, ensures sustainable use of resources, and mitigates the impacts of climate change.
        </p>
      </section>

      {/* Important Questions Section */}
      <section className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Important Questions for Practice:</h3>
        <ol className="list-decimal ml-6 space-y-1">
          <li>Define environmental studies and its scope.</li>
          <li>Describe the different components of the environment and their interactions.</li>
          <li>Explain the concept of an ecosystem and its various components.</li>
          <li>What are the main causes and effects of air pollution?</li>
          <li>Describe the sources and impacts of water pollution.</li>
          <li>What are the different types of natural resources and their importance?</li>
          <li>Explain the importance of environmental conservation and sustainable development.</li>
          <li>Discuss the impacts of human activities on the environment.</li>
        </ol>
      </section>
    </div>
  );
};

export default EnvironmentalStudiesIndex;
