'use client';

import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

/**
 * Footer component for the application. 
 * This component displays copyright information and links to various social media platforms.
 */
export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-100 to-blue-300 text-center py-4 mt-8">
      {/* Copyright text */}
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} BCA Study Hub. All rights reserved (codewithjaivy).
      </p>
      {/* Social Media Links Section */}
      <div className="mt-4">
        {/* Section header for social media links */}
        <p className="text-sm text-muted-foreground mb-2">
          <strong>Follow us on Social media</strong>
        </p>
        {/* Container for social media links */}
        <div className="flex flex-row items-center justify-center gap-6">
          {/* LinkedIn link */}
          <a
            href="https://www.linkedin.com/in/sanjeet-kumar-8a21171a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-blue-500 transition-colors duration-300"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          {/* Instagram link */}
          <a
            href="https://www.instagram.com/codewithjaivy?igsh=MWJtY3hleGo5NWxkNg=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-pink-500 transition-colors duration-300"
          >
            <FaInstagram className="text-2xl" />
          </a>
          {/* GitHub link */}
          <a
            href="https://github.com/CODEWITH-JAIVY"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-gray-700 transition-colors duration-300"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a href="https://youtube.com/@codewithjaivy?si=xHt4DWSjJUpWVkzj" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-red-600 transition-colors duration-300"><FaYoutube className="text-2xl" /></a>
        </div>
      </div>
    </footer>
  );
};

