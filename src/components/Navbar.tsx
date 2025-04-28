"use client";

import React from 'react';
import {MobileMenu} from './MobileMenu';
import {Button} from "@/components/ui/button"

export const Navbar = () => {
  return (
    <nav className="bg-secondary py-4">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-primary">
          BCA Study Hub ( codewithjaivy)
        </a>
        <div className="hidden md:flex items-center gap-4">
          <a href="/about" className="hover:text-primary">
            About
          </a>
          <a href="/syllabus" className="hover:text-primary">
            Syllabus
          </a>
          <a href="/contact" className="hover:text-primary">
            Contact
          </a>
           
           <Button variant="outline" asChild>
              <a href="https://mathesolution-ai.vercel.app/" target="_blank" rel="noopener noreferrer">
                MathSolutionAI
              </a>
            </Button>
          <Button variant="outline">Login</Button>
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
};



