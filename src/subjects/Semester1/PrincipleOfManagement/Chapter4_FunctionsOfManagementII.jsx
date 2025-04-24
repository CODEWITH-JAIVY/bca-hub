'use client';
import React from 'react';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

const Chapter4_FunctionsOfManagementII = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-primary mb-4">Chapter 4: Functions of Management II</h2>

      {/* Organizational Structure */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Organizational Structure</h3>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <strong>Q1: What is organizational structure?</strong>
            </AccordionTrigger>
            <AccordionContent>
              A1: Organizational structure defines how job tasks are formally divided, grouped, and coordinated within an organization. It establishes relationships between individuals and departments.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <strong>Q2: What are different types of organizational structures?</strong>
            </AccordionTrigger>
            <AccordionContent>
              A2: Different types of organizational structures include:
              <ul className="list-disc ml-6">
                <li><strong>Functional Structure:</strong> Groups employees by their specialized skills and tasks.</li>
                <li><strong>Divisional Structure:</strong> Organizes employees into divisions based on products, services, or geographic locations.</li>
                <li><strong>Matrix Structure:</strong> Combines functional and divisional structures, creating cross-functional teams.</li>
                <li><strong>Network Structure:</strong> Connects a central hub with external organizations and resources.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Delegation of Authority */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Delegation of Authority</h3>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <strong>Q3: What is delegation of authority?</strong>
            </AccordionTrigger>
            <AccordionContent>
              A3: Delegation of authority is the process of assigning responsibility and authority to subordinates to perform specific tasks. It empowers employees and distributes workload effectively.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Coordination */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Coordination</h3>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <strong>Q4: What is coordination in management?</strong>
            </AccordionTrigger>
            <AccordionContent>
              A4: Coordination involves integrating the activities of different departments or units to achieve organizational goals effectively. It ensures that everyone works together harmoniously.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Important Questions Section */}
      <section className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Important Questions for Practice:</h3>
        <ol className="list-decimal ml-6 space-y-1">
          <li>
            <strong>Define organizational structure and its importance.</strong>
            <br/>
            <em>Organizational structure is the framework that defines how tasks are divided, grouped, and coordinated. It’s crucial for efficiency, communication, and achieving organizational goals.</em>
          </li>
          <li>
            <strong>Describe the characteristics of functional, divisional, matrix, and network structures.</strong>
            <br/>
            <em>Functional structures group employees by specialized skills. Divisional structures organize by product or region. Matrix structures combine functional and divisional. Network structures rely on external relationships.</em>
          </li>
          <li>
            <strong>Explain the advantages and disadvantages of delegation of authority.</strong>
            <br/>
            <em>Advantages include employee empowerment, improved efficiency, and better decision-making. Disadvantages include potential loss of control and inconsistent quality.</em>
          </li>
          <li>
            <strong>What are the key elements of effective coordination in management?</strong>
            <br/>
            <em>Key elements include clear communication, shared goals, defined roles, and integrated activities. Coordination ensures that everyone works together effectively.</em>
          </li>
          <li>
            <strong>How does organizational structure impact employee performance and satisfaction?</strong>
            <br/>
            <em>A well-designed structure can improve clarity, efficiency, and job satisfaction. A poorly designed structure can lead to confusion, conflicts, and low morale.</em>
          </li>
          <li>
            <strong>What are the challenges of coordinating activities across different departments?</strong>
            <br/>
            <em>Challenges include conflicting goals, communication barriers, and lack of shared understanding. Effective coordination requires strong leadership and communication.</em>
          </li>
          <li>
            <strong>How does delegation of authority contribute to employee development?</strong>
            <br/>
            <em>Delegation empowers employees, provides opportunities for skill development, and increases job satisfaction. It also prepares employees for future leadership roles.</em>
          </li>
          <li>
            <strong>Discuss the role of communication in achieving coordination.</strong>
            <br/>
            <em>Communication is essential for sharing information, clarifying expectations, and resolving conflicts. Effective communication ensures that everyone is on the same page and working towards common goals.</em>
          </li>
        </ol>
      </section>
    </div>
  );
};

export default Chapter4_FunctionsOfManagementII;
