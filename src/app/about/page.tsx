import React from "react";

// Define the AboutPage component
const AboutPage = () => {
  return (
    // Main container for the about page
    <div className="container mx-auto px-4 py-8">
      {/* About Me section */}
      <section className="mb-12">
        {/* Heading for the About Me section */}
        <h1 className="text-4xl font-bold text-primary mb-6">About Me</h1>
        {/* Introduction paragraph */}
        <p className="text-muted-foreground mb-4">
          Hello! I'm Jaivy Roy (Sanjeet Kumar), a passionate coder and a BCA
          student at the Greater Noida Institute of Management. I'm driven by a
          deep love for coding and a desire to learn and explore various
          technologies.
        </p>
      </section>

      {/* Skills and Experience section */}
      <section className="mb-12">
        {/* Subheading for skills and experience */}
        <h2 className="text-2xl font-semibold text-primary mb-4">
          Skills and Experience
        </h2>
        {/* Paragraph detailing skills and experience */}
        <p className="text-muted-foreground mb-4">
          I'm proficient in programming languages and technologies such as{" "}
          <span className="font-medium">
            C, C++, Python, JavaScript, HTML, CSS
          </span>
          , and <span className="font-medium">front-end development</span>.
          Currently, my focus is on mastering the{" "}
          <span className="font-medium">MERN stack</span> (MongoDB, Express.js,
          React.js, Node.js). I actively participate in{" "}
          <span className="font-medium">open-source projects</span> and enjoy
          honing my skills through{" "}
          <span className="font-medium">coding contests</span> on platforms like
          LeetCode and GeeksforGeeks.
        </p>
      </section>

      {/* YouTube Channel section */}
      <section className="mb-12">
        {/* Subheading for the YouTube channel */}
        <h2 className="text-2xl font-semibold text-primary mb-4">
          YouTube Channel
        </h2>
        {/* Paragraph describing the YouTube channel */}
        <p className="text-muted-foreground mb-4">
          On my YouTube channel, I share tutorials on{" "}
          <span className="font-medium">DSA (Data Structures and Algorithms)</span> and other tech topics. My goal is to simplify complex concepts and make them accessible to learners of all levels.
          You can visit my channel here:{" "}
          <a
            href="https://youtube.com/@codewithjaivy?si=xHt4DWSjJUpWVkzj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            CodeWithJaivy
          </a>
          .
        </p>
      </section>

      {/* Creative Side section */}
      <section className="mb-12">
        {/* Subheading for the creative side */}
        <h2 className="text-2xl font-semibold text-primary mb-4">
          Creative Side
        </h2>
        {/* Paragraph describing the creative side */}
        <p className="text-muted-foreground mb-4">
          Beyond coding, I have a passion for writing emotional poetry and
          shayari. My themes often revolve around life struggles, dreams, and
          the journey of finding a job.
        </p>
      </section>

      {/* Current Project section */}
      <section className="mb-12">
        {/* Subheading for the current project */}
        <h2 className="text-2xl font-semibold text-primary mb-4">
          Current Project
        </h2>
        {/* Paragraph describing the current project */}
        <p className="text-muted-foreground mb-4">
          I am currently working on a <span className="font-medium">React</span>
          -based educational platform designed to assist BCA students. This
          platform will offer subject-wise and semester-wise chapters, complete
          with detailed explanations and interactive quizzes.
        </p>
      </section>

      {/* Connect with Me section */}
      <section className="mb-12">
        {/* Subheading for social media links */}
        <h2 className="text-2xl font-semibold text-primary mb-4">
          Connect with Me
        </h2>
        {/* Social media links */}
        <div className="flex space-x-4">
          {/* GitHub link */}
          <a
            href="https://github.com/CODEWITH-JAIVY"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            GitHub
          </a>
          {/* LinkedIn link */}
          <a
            href="https://www.linkedin.com/in/sanjeet-kumar-8a21171a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            LinkedIn
          </a>
          {/* Instagram link */}
          <a
            href="https://www.instagram.com/codewithjaivy?igsh=MWJtY3hleGo5NWxkNg=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Instagram
          </a>
        </div>
      </section>
      <section className="mb-12 p-6 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
        <h2 className="text-2xl font-semibold text-white mb-4">Image Section</h2>
        <div className="bg-gray-300 h-64 w-full"></div>
      </section>
    </div>
  );
};

export default AboutPage;
