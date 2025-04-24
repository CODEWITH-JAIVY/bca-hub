'use client';
import React from 'react';

const Chapter4_WindowsOSBasics = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Chapter 4: Windows OS Basics</h2>

      {/* Introduction to Windows OS */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Introduction to Windows OS</h3>
        <p className="mb-4">
          Windows is a series of graphical operating systems developed by Microsoft, widely used on personal computers.
        </p>

        <p className="mb-4">
          <strong>Q1: What are the key features of Windows OS?</strong>
          <br />
          A1: Key features include a graphical user interface (GUI), multitasking, virtual memory, and support for a wide range of hardware and software.
        </p>
      </section>

      {/* Windows Desktop */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Windows Desktop</h3>
        <p className="mb-4">
          <strong>Q2: Explain the Windows desktop.</strong>
          <br />
          A2: The Windows desktop is the main screen that appears after booting up, containing icons, shortcuts, and the taskbar.
        </p>
      </section>

      {/* Taskbar */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Taskbar</h3>
        <p className="mb-4">
          <strong>Q3: What is the taskbar in Windows?</strong>
          <br />
          A3: The taskbar is a bar at the bottom of the screen that displays running applications, system tray, and the Start button.
        </p>
      </section>

      {/* File Management */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">File Management</h3>
        <p className="mb-4">
          <strong>Q4: How do you manage files and folders in Windows?</strong>
          <br />
          A4: Use File Explorer to create, copy, move, rename, and delete files and folders.
        </p>
      </section>

      {/* Control Panel */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Control Panel</h3>
        <p className="mb-4">
          <strong>Q5: What is the Control Panel in Windows?</strong>
          <br />
          A5: The Control Panel provides access to system settings for configuring hardware, software, and user preferences.
        </p>
      </section>

      {/* Installing and Uninstalling Software */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Installing and Uninstalling Software</h3>
        <p className="mb-4">
          <strong>Q6: How do you install and uninstall software in Windows?</strong>
          <br />
          A6: Use the Programs and Features option in the Control Panel to uninstall software, and run the installer for new software.
        </p>
      </section>

      {/* Important Questions Section */}
      <section className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Important Questions for Practice:</h3>
        <ol className="list-decimal ml-6 space-y-1">
          <li>Describe the key features of the Windows operating system.</li>
          <li>Explain the function of the taskbar and its components.</li>
          <li>How do you create a new folder on the Windows desktop?</li>
          <li>What are the steps to change the screen resolution in Windows?</li>
          <li>Describe the process of installing a printer in Windows.</li>
          <li>Explain how to customize the appearance of the Windows desktop.</li>
          <li>How do you use the search function in Windows to find files?</li>
          <li>Describe the steps to create a shortcut on the Windows desktop.</li>
        </ol>
      </section>
    </div>
  );
};

export default Chapter4_WindowsOSBasics;
