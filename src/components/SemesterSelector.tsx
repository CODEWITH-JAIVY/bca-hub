"use client";

import React from 'react';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"

const semesters = [1, 2, 3, 4, 5, 6];

export const SemesterSelector = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
      {semesters.map((semester) => (
        <Card key={semester} className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="text-primary">Semester {semester}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Explore the subjects and chapters for Semester {semester}.
            </p>
            <a
              href={`/syllabus/semester${semester}`}
              className="inline-block mt-4 text-accent hover:underline"
            >
              View Syllabus
            </a>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
