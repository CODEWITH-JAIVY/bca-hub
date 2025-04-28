"use client";

import React from 'react';
import {MobileMenu} from './MobileMenu';
import {Button} from "@/components/ui/button"
import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="bg-secondary py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          BCA Study Hub ( codewithjaivy)
        </Link>
        <div className="hidden md:flex items-center gap-4">
          <Link href="/about" className="hover:text-primary">
            About
          </Link>
          <Link href="/syllabus" className="hover:text-primary">
            Syllabus
          </Link>
          <Link href="/contact" className="hover:text-primary">
            Contact
          </Link>
           
           <Button variant="outline" asChild>
              <Link href="https://mathesolution-ai.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-sm">
                MathSolutionAI
              </Link>
            </Button>
          <Button variant="outline">Login</Button>
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
};
