'use client';

import React, { useState } from "react";
import {
  FaGithub, FaLinkedin, FaInstagram, FaYoutube,
} from "react-icons/fa";
import DarkModeSwitcher from "@/components/DarkModeSwitcher";
import Image from 'next/image';

// Define the AboutPage component
const AboutPage = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8 relative">
      {/* Dark Mode Switcher */}
      <div className="absolute top-4 right-4">
        <DarkModeSwitcher />
      </div>
      {/* Hero Section */}
      <section className="mb-12 flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-shrink-0 w-full lg:w-1/2">
          <Image
            src="/jaivyroy.jpg"
            alt="developer jaivy roy"
            width={400}
            height={300}
            className="h-72 w-full object-cover rounded-l-3xl shadow-lg"
          />
        </div>

        {/* About Me Content */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl font-bold text-primary mb-4">About Me</h1>
          <p className="text-muted-foreground mb-4">
            Hello! I'm Jaivy Roy (Sanjeet Kumar), a passionate coder and a BCA
            student at the Greater Noida Institute of Management. I'm driven by a
            deep love for coding and a desire to learn and explore various
            technologies.
          </p>

          <button
            onClick={() => setShowDetails(!showDetails)}
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            {showDetails ? "Hide Details" : "More About Me"}
          </button>

          {/* Collapsible Extra Details */}
          {showDetails && (
            <div className="mt-4 bg-gray-100 p-4 rounded-md text-gray-700">
              <p>
                🎓 I’m pursuing BCA (2023-26) from GNIM, affiliated to CCSU,
                Meerut.
                <br />
                💡 I'm skilled in C, C++, Python, JavaScript, HTML, CSS, and
                React.
                <br />
                🔥 Learning the MERN stack and backend development.
                <br />
                💻 Active on GitHub and LeetCode.
                <br />
                🎥 I run a YouTube channel –{" "}
                <a className="text-blue-600 underline" href="https://youtube.com/@codewithjaivy" target="_blank">
                  CodeWithJaivy
                </a>
                .
                <br />
                ✍️ I write emotional poetry & shayari about dreams, struggles, and jobs.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Other Sections remain the same */}
      {/* Skills and Experience */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primary mb-4">
          Skills and Experience
        </h2>
        <p className="text-muted-foreground mb-4">
          I'm proficient in{" "}
          <span className="font-medium">
            C, C++, Python, JavaScript, HTML, CSS
          </span>
          , and <span className="font-medium">front-end development</span>.
          Currently, mastering the{" "}
          <span className="font-medium">MERN stack</span>. Active in{" "}
          <span className="font-medium">open-source</span> and{" "}
          <span className="font-medium">coding contests</span> on LeetCode,
          GeeksforGeeks.
        </p>
      </section>

      {/* YouTube */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primary mb-4">
          YouTube Channel
        </h2>
        <p className="text-muted-foreground mb-4">
          I share DSA tutorials and simplify complex tech topics on my channel:{" "}
          <a
            href="https://youtube.com/@codewithjaivy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            CodeWithJaivy
          </a>
        </p>
        <a
          href="https://youtube.com/@codewithjaivy"
          target="_blank"
          className="text-red-600 text-2xl"
        >
          <FaYoutube />
        </a>
      </section>

      {/* Creative Side */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primary mb-4">
          Creative Side
        </h2>
        <p className="text-muted-foreground mb-4">
          I write emotional poetry and shayari around life struggles, dreams, and
          the job journey.
        </p>
      </section>

      {/* Current Project */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primary mb-4">
          Current Project
        </h2>
        <p className="text-muted-foreground mb-4">
          Working on a <span className="font-medium">React</span>-based educational platform
          for BCA students with detailed chapters and interactive quizzes.
        </p>
      </section>

      {/* Social Links */}
      <section className="mb-12 ">
        <h2 className="text-2xl font-semibold text-primary mb-4">
          Connect with Me
        </h2>
        <div className="flex space-x-6 items-center p-4 rounded-lg bg-gray-100">
          <a
            href="https://github.com/CODEWITH-JAIVY"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700"
          >
            <FaGithub className="text-3xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/sanjeet-kumar-8a21171a3"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700"
          >
            <FaLinkedin className="text-3xl" />
          </a>
          <a
            href="https://www.instagram.com/codewithjaivy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <FaInstagram className="text-3xl" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
