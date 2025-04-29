
"use client";

import React from 'react';
import {MobileMenu} from './MobileMenu';
import {Button} from "@/components/ui/button"
import Link from 'next/link';
import DarkModeSwitcher from '@/app/components/DarkModeSwitcher'; // Correct import path

export const Navbar = () => {
  return (
    <nav className="bg-card py-4 border-b"> {/* Changed bg-secondary to bg-card and added border-b */}
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          BCA Study Hub ( codewithjaivy)
        </Link>
        <div className="hidden md:flex items-center gap-4">
          <Link href="/about" className="text-foreground hover:text-primary transition-colors"> {/* Added text-foreground and transition */}
            About
          </Link>
          <Link href="/syllabus" className="text-foreground hover:text-primary transition-colors"> {/* Added text-foreground and transition */}
            Syllabus
          </Link>
          <Link href="/contact" className="text-foreground hover:text-primary transition-colors"> {/* Added text-foreground and transition */}
            Contact
          </Link>

           <Button variant="outline" asChild>
              <Link href="https://mathesolution-ai.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-sm">
                MathSolutionAI
              </Link>
            </Button>
          <Button variant="outline">Login</Button>
           <DarkModeSwitcher/> {/* Ensure DarkModeSwitcher is correctly imported and used */}
        </div>
         <div className="md:hidden flex items-center gap-2"> {/* Added container for mobile menu and dark mode switch */}
           <DarkModeSwitcher />
           <MobileMenu />
         </div>
      </div>
    </nav>
  );
};
