'use client';
import React from 'react';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

const Chapter6_StrategicManagement = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-primary mb-4">Chapter 6: Strategic Management</h2>

      {/* Introduction to Strategic Management */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Introduction to Strategic Management</h3>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <strong>Q1: What is strategic management?</strong>
            </AccordionTrigger>
            <AccordionContent>
              A1: Strategic management is the process of formulating and implementing strategies to achieve long-term organizational goals and objectives. It involves making decisions that shape the direction and performance of the organization.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <strong>Q2: What are the steps involved in strategic management?</strong>
            </AccordionTrigger>
            <AccordionContent>
              A2: The steps involved in strategic management are:
              <ol className="list-decimal ml-6">
                <li><strong>Analyzing the Environment:</strong> Assessing the internal and external factors that affect the organization.</li>
                <li><strong>Setting Strategic Goals:</strong> Defining specific, measurable, achievable, relevant, and time-bound (SMART) goals.</li>
                <li><strong>Formulating Strategies:</strong> Developing a set of actions to achieve the strategic goals.</li>
                <li><strong>Implementing Strategies:</strong> Putting the strategies into action, allocating resources, and assigning responsibilities.</li>
                <li><strong>Evaluating and Controlling the Strategies:</strong> Monitoring progress, measuring performance, and making adjustments as needed.</li>
              </ol>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* SWOT Analysis */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">SWOT Analysis</h3>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <strong>Q3: What is SWOT analysis?</strong>
            </AccordionTrigger>
            <AccordionContent>
              A3: SWOT analysis is a strategic planning tool used to evaluate the Strengths, Weaknesses, Opportunities, and Threats involved in a project or business venture. It provides a comprehensive view of the organization's strategic position.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Competitive Strategies */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Competitive Strategies</h3>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <strong>Q4: What are different types of competitive strategies?</strong>
            </AccordionTrigger>
            <AccordionContent>
              A4: Different types of competitive strategies include:
              <ul className="list-disc ml-6">
                <li><strong>Cost Leadership:</strong> Offering products or services at the lowest cost in the industry.</li>
                <li><strong>Differentiation:</strong> Offering unique products or services that customers value and are willing to pay a premium for.</li>
                <li><strong>Focus Strategy:</strong> Concentrating on a specific market segment or niche and serving it exceptionally well.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Important Questions Section */}
      <section className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Important Questions for Practice:</h3>
        <ol className="list-decimal ml-6 space-y-1">
          <li>
            <strong>What is the strategic management process, and why is it important for organizations?</strong>
            <br/>
            <em>The strategic management process provides a structured approach to setting goals, formulating strategies, and allocating resources, ensuring that the organization remains competitive and achieves its objectives.</em>
          </li>
          <li>
            <strong>Describe the steps involved in conducting a SWOT analysis.</strong>
            <br/>
            <em>Steps include identifying internal strengths and weaknesses and external opportunities and threats. Each element requires careful analysis and consideration.</em>
          </li>
          <li>
            <strong>Explain the difference between cost leadership, differentiation, and focus strategies.</strong>
            <br/>
            <em>Cost leadership aims to be the lowest-cost provider, differentiation offers unique value, and focus targets specific market segments. Each strategy requires a different approach to business.</em>
          </li>
          <li>
            <strong>How does strategic planning contribute to an organization's long-term success?</strong>
            <br/>
            <em>Strategic planning provides a roadmap for long-term success, ensuring that the organization remains competitive, adaptable, and aligned with its goals and values.</em>
          </li>
          <li>
            <strong>What are the key factors to consider when formulating a strategic plan?</strong>
            <br/>
            <em>Key factors include market trends, competitive landscape, internal capabilities, and external environment. A thorough analysis of these factors is essential.</em>
          </li>
          <li>
            <strong>What are the challenges of implementing a strategic plan?</strong>
            <br/>
            <em>Challenges include resistance to change, resource constraints, and unexpected events. Effective implementation requires strong leadership and communication.</em>
          </li>
          <li>
            <strong>What is the role of leadership in driving strategic initiatives?</strong>
            <br/>
            <em>Leadership provides vision, direction, and motivation, ensuring that the organization stays focused on its strategic goals and overcomes obstacles.</em>
          </li>
          <li>
            <strong>How does organizational culture impact the success of strategic management?</strong>
            <br/>
            <em>A culture that embraces adaptability, innovation, and collaboration can facilitate strategic management, while a rigid and resistant culture can hinder it. Cultural alignment is key.</em>
          </li>
        </ol>
      </section>
    </div>
  );
};

export default Chapter6_StrategicManagement;
