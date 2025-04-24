'use client';
import React from 'react';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

const Chapter1_NatureOfManagement = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-primary mb-4">Chapter 1: Nature of Management</h2>

      {/* Introduction to Management */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Introduction to Management</h3>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <strong>Q1: What is management?</strong>
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-4">
                A1: Management is the process of planning, organizing, leading, and controlling resources (including human, financial, and technological) to achieve organizational goals effectively and efficiently. It involves coordinating the efforts of people to accomplish desired objectives using available resources in the best possible way.
              </p>
              <p>
                In simpler terms, management ensures that a business runs smoothly by setting goals, organizing resources, guiding employees, and monitoring performance.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Key Functions of Management */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Key Functions of Management</h3>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <strong>Q2: What are the key functions of management?</strong>
            </AccordionTrigger>
            <AccordionContent>
              A2: The key functions of management are generally considered to be:
              <ul className="list-disc ml-6">
                <li><strong>Planning:</strong> Setting organizational goals and deciding how to achieve them.</li>
                <li><strong>Organizing:</strong> Arranging resources and activities in a structured manner to implement plans effectively.</li>
                <li><strong>Leading:</strong> Motivating, directing, and influencing employees to achieve organizational goals.</li>
                <li><strong>Controlling:</strong> Monitoring performance, comparing it against goals, and taking corrective actions as needed.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <strong>Q3: Explain the planning function.</strong>
            </AccordionTrigger>
            <AccordionContent>
              A3: Planning involves:
              <ul className="list-disc ml-6">
                <li>Defining organizational objectives</li>
                <li>Determining the actions needed to achieve these objectives</li>
                <li>Developing schedules and budgets</li>
                <li>Establishing policies, procedures, and rules</li>
              </ul>
              <p>
                Effective planning helps organizations anticipate future challenges and opportunities, allocate resources effectively, and coordinate activities towards common goals.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <strong>Q4: What does organizing involve?</strong>
            </AccordionTrigger>
            <AccordionContent>
              A4: Organizing includes:
              <ul className="list-disc ml-6">
                <li>Identifying and grouping activities</li>
                <li>Assigning duties and responsibilities</li>
                <li>Establishing authority relationships</li>
                <li>Coordinating activities</li>
              </ul>
              <p>
                The organizing function creates a framework that enables efficient and effective execution of plans.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              <strong>Q5: What is the leading function of management?</strong>
            </AccordionTrigger>
            <AccordionContent>
              A5: Leading encompasses:
              <ul className="list-disc ml-6">
                <li>Motivating employees</li>
                <li>Directing activities</li>
                <li>Selecting effective communication channels</li>
                <li>Resolving conflicts</li>
              </ul>
              <p>
                Effective leadership inspires employees, fosters a positive work environment, and guides the organization towards achieving its goals.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              <strong>Q6: What is the controlling function of management?</strong>
            </AccordionTrigger>
            <AccordionContent>
              A6: Controlling involves:
              <ul className="list-disc ml-6">
                <li>Setting performance standards</li>
                <li>Measuring actual performance</li>
                <li>Comparing performance against standards</li>
                <li>Taking corrective action if necessary</li>
              </ul>
              <p>
                The controlling function helps ensure that the organization stays on track and achieves its objectives efficiently.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Important Questions Section */}
      <section className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Important Questions for Practice:</h3>
        <ol className="list-decimal ml-6 space-y-1">
          <li>
            <strong>Define management and explain its importance in an organization.</strong>
            <br/>
            <em>Management is crucial for coordinating resources, setting goals, and ensuring efficient operations. It's the backbone of any successful organization.</em>
          </li>
          <li>
            <strong>Describe the planning function and provide examples of planning activities.</strong>
            <br/>
            <em>Planning involves setting goals, developing strategies, and creating action plans. Examples include market analysis, budgeting, and project scheduling.</em>
          </li>
          <li>
            <strong>Explain the organizing function and its role in implementing plans.</strong>
            <br/>
            <em>Organizing involves structuring resources, assigning tasks, and establishing authority relationships. It's essential for efficient execution and coordination.</em>
          </li>
          <li>
            <strong>What are the key qualities of an effective leader?</strong>
            <br/>
            <em>Effective leaders possess qualities such as vision, communication skills, integrity, empathy, and decision-making ability. They inspire and guide their teams.</em>
          </li>
          <li>
            <strong>Describe the controlling function and its significance in achieving organizational goals.</strong>
            <br/>
            <em>Controlling involves monitoring performance, comparing it against standards, and taking corrective actions. It ensures that the organization stays on track and meets its goals.</em>
          </li>
          <li>
            <strong>How do the four functions of management (planning, organizing, leading, and controlling) relate to each other?</strong>
            <br/>
            <em>These functions are interconnected and interdependent, forming a continuous cycle. Planning sets the direction, organizing structures the resources, leading motivates the team, and controlling ensures progress and adjustments.</em>
          </li>
          <li>
            <strong>What is the difference between efficiency and effectiveness in management?</strong>
            <br/>
            <em>Efficiency is doing things right (using resources wisely), while effectiveness is doing the right things (achieving goals). Both are important for successful management.</em>
          </li>
          <li>
            <strong>Why is it important for managers to adapt to changing circumstances?</strong>
            <br/>
            <em>Adaptability allows managers to respond effectively to new challenges and opportunities, ensuring the organization remains competitive and resilient in a dynamic environment.</em>
          </li>
        </ol>
      </section>
    </div>
  );
};

export default Chapter1_NatureOfManagement;
