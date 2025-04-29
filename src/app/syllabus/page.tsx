import React from 'react';
import Link from 'next/link';

const SyllabusPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-4">Syllabus Overview</h1>
      <p className="text-muted-foreground mb-4">
        Select a semester to view the detailed syllabus.
      </p>

      <p className="text-muted-foreground">
        <ul className='list-disc ml-6'>
            <li><Link href="/syllabus/semester1">Semester 1</Link></li>
            <li><Link href="/syllabus/semester2">Semester 2</Link></li>
            <li><Link href="/syllabus/semester3">Semester 3</Link></li>
            <li><Link href="/syllabus/semester4">Semester 4</Link></li>
            <li><Link href="/syllabus/semester5">Semester 5</Link></li>
            <li><Link href="/syllabus/semester6">Semester 6</Link></li>
        </ul>
      </p>

      <p className='text-muted-foreground'>

      </p>
    </div>
  );
};

export default SyllabusPage;
