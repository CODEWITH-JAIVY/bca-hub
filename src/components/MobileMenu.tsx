"use client";

import React, {useState} from 'react';
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"
import {Menu} from "lucide-react"
import {Button} from "@/components/ui/button"
import Link from "next/link";

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5"/>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="sm:w-[300px] p-4">
        <div className="flex flex-col gap-4">
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
              <Link href="https://mathesolution-ai.vercel.app/" target="_blank" rel="noopener noreferrer">
                MathSolutionAI
              </Link>
            </Button>
          
          
          <Button variant="outline">Login</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
