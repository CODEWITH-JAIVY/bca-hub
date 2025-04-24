import React from 'react';

const Chapter2_DisplayAndClipping = () => {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Chapter 2: Display and Clipping</h2>

            {/* Hardcopy Technologies */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Hardcopy Technologies</h3>
                <p>Hardcopy devices are used to produce a physical copy of the computer output. Examples include:</p>
                <ul className="list-disc list-inside">
                    <li>Printers (Dot Matrix, Inkjet, Laser)</li>
                    <li>Plotters (used for large-scale vector graphics)</li>
                </ul>
            </section>

            {/* Display Technologies */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Display Technologies</h3>
                <ul className="list-disc list-inside">
                    <li><strong>CRT (Cathode Ray Tube):</strong> Uses electron beams to light up phosphor pixels on the screen.</li>
                    <li><strong>LCD (Liquid Crystal Display):</strong> Uses liquid crystals and a backlight to display images.</li>
                    <li><strong>LED (Light Emitting Diode):</strong> Uses LEDs as light sources, often more efficient and brighter than LCDs.</li>
                </ul>
            </section>

            {/* Raster-Scan Display System */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Raster-Scan Display System</h3>
                <p>Raster-scan systems refresh the screen by scanning line by line from top to bottom, forming images as a grid of pixels.</p>
            </section>

            {/* Video Controller */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Video Controller</h3>
                <p>A video controller converts digital image data from the CPU into signals required for the monitor. It handles refresh rates and pixel mapping.</p>
            </section>

            {/* Random-Scan Display Processor */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Random-Scan Display Processor</h3>
                <p>Also known as vector displays, these systems draw images using geometric primitives (lines, curves) rather than pixels.</p>
            </section>

            {/* Input Devices for Operator Interaction */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Input Devices for Operator Interaction</h3>
                <ul className="list-disc list-inside">
                    <li>Keyboard</li>
                    <li>Mouse</li>
                    <li>Trackball</li>
                    <li>Light pen</li>
                    <li>Touch screen</li>
                </ul>
            </section>

            {/* Image Scanners */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Image Scanners</h3>
                <p>Devices that digitize physical images and convert them into computer-readable formats. Examples include flatbed scanners and handheld scanners.</p>
            </section>

            {/* Graphics Tools */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Graphics Tools</h3>
                <p>Tools like Adobe Dreamweaver are used for web design. 3D effects tools help create and manipulate 3D graphics using software like Blender, Maya, etc.</p>
            </section>

            {/* Clipping */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Clipping</h3>
                <p>Clipping is the process of confining drawing to a specified region (viewport or window). It eliminates parts of graphics that lie outside the defined area.</p>
            </section>

            {/* Cohen-Sutherland Algorithm */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Cohen-Sutherland Line Clipping Algorithm</h3>
                <p>This algorithm divides space into regions using outcodes and quickly determines trivial accept/reject cases before performing intersection checks.</p>
            </section>

            {/* Cyrus-Beck Algorithm */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Cyrus-Beck Line Clipping Algorithm</h3>
                <p>It is a parametric line clipping algorithm applicable to convex polygon clipping regions using dot products and normal vectors.</p>
            </section>

            {/* Midpoint Subdivision Algorithm */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Midpoint Subdivision Clipping Algorithm</h3>
                <p>This method recursively divides a line segment into two halves until a visible segment inside the clipping window is identified.</p>
            </section>
        </div>
    );
};

export default Chapter2_DisplayAndClipping;
