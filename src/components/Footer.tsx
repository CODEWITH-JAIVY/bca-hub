import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-secondary text-center py-4 mt-8">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} BCA Study Hub. All rights reserved.
      </p>
    </footer>
  );
};
