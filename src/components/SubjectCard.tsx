import React from 'react';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"

interface SubjectCardProps {
  subjectName: string;
  description: string;
  semester: number;
  chapters: string[];
  subjectLink?: string;
}

export const SubjectCard: React.FC<SubjectCardProps> = ({
  subjectName,
  description,
  semester,
  chapters,
  subjectLink,
}) => {

  return (
     <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle className="text-primary">{subjectName}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
        {subjectLink && (
          <a
            href={subjectLink}
            className="inline-block mt-4 text-accent hover:underline"
          >
            View Content
          </a>
        )}
      </CardContent>
    </Card>
  );
};
