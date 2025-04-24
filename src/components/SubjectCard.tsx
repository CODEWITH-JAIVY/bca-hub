import React from 'react';

interface SubjectCardProps {
  subjectName: string;
  description: string;
  semester: number;
}

export const SubjectCard: React.FC<SubjectCardProps> = ({
  subjectName,
  description,
  semester,
}) => {
  return (
    <div className="bg-secondary rounded-lg shadow-md p-4">
      <h3 className="text-xl font-semibold text-primary mb-2">{subjectName}</h3>
      <p className="text-muted-foreground">{description}</p>
      <a
        href={`/subjects/Semester${semester}/${subjectName.replace(/\s/g, '')}`}
        className="inline-block mt-4 text-accent hover:underline"
      >
        View Chapters
      </a>
    </div>
  );
};
