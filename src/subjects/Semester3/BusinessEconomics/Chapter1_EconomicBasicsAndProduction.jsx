"use client";

import React from 'react';

const Chapter1_EconomicBasicsAndProduction = () => {
  return (
    <div className="p-4">
      {/* Chapter Title */}
      <h2 className="text-3xl font-bold mb-6">
        Chapter 1: Economic Basics and Production
      </h2>

      {/* Introduction to Economics */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-3">Introduction to Economics</h3>
        <p className="mb-4">
          Economics is the study of how individuals, businesses, and societies
          allocate scarce resources to satisfy their unlimited wants. It
          encompasses a wide range of topics, from individual decision-making to
          global trade patterns.
        </p>
      </section>

      {/* Scarcity */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-3">Scarcity</h3>
        <p className="mb-4">
          Scarcity is the fundamental economic problem that arises because human
          wants are unlimited, but the resources to satisfy those wants are
          limited. This limitation forces individuals and societies to make
          choices about how to allocate resources efficiently.
        </p>
      </section>

      {/* Opportunity Cost */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-3">Opportunity Cost</h3>
        <p className="mb-4">
          Opportunity cost is the value of the next best alternative forgone when
          a decision is made. In business economics, understanding opportunity
          cost helps in making informed decisions by assessing what is given up
          when choosing one option over another.
        </p>
      </section>

      {/* Factors of Production */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-3">Factors of Production</h3>
        <p className="mb-4">
          Factors of production are the inputs used to produce goods and
          services. They include:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Land:</strong> Natural resources used in production.</li>
          <li><strong>Labor:</strong> Human effort and skills used in production.</li>
          <li><strong>Capital:</strong> Man-made resources like machinery and tools.</li>
          <li>
            <strong>Entrepreneurship:</strong> The ability to organize and manage
            the other factors of production.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Chapter1_EconomicBasicsAndProduction;
