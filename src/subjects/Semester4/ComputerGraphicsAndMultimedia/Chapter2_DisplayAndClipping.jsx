import React from 'react';

const Chapter2_DisplayAndClipping = () => {
    return (
        <div>
            <h2>Chapter 2: Display and Clipping</h2>
            <p>
                <strong>Q1: What are the types of display devices?</strong>
                <br />
                A1: Display devices include CRT (Cathode Ray Tube) monitors, LCD (Liquid Crystal Display) monitors, and LED (Light Emitting Diode) displays.
            </p>
            <p>
                <strong>Q2: What is the working principle of a CRT monitor?</strong>
                <br />
                A2: A CRT monitor uses electron beams to strike a phosphor surface, causing it to emit light and create an image.
            </p>
            <p>
                <strong>Q3: What is the working principle of an LCD monitor?</strong>
                <br />
                A3: An LCD monitor uses liquid crystals to control the passage of light through the display, creating an image.
            </p>
            <p>
                <strong>Q4: What is clipping in computer graphics?</strong>
                <br />
                A4: Clipping is the process of removing portions of a graphical primitive that lie outside the viewing window or viewport.
            </p>
            <p>
                <strong>Q5: What are the different types of clipping algorithms?</strong>
                <br />
                A5: Types include point clipping, line clipping, and polygon clipping.
            </p>
            <p>
                <strong>Q6: What is the Cohen-Sutherland line clipping algorithm?</strong>
                <br />
                A6: The Cohen-Sutherland algorithm is a line clipping algorithm that quickly rejects lines that are entirely inside or entirely outside the clipping window.
            </p>
            <p>
                <strong>Q7: What is the Liang-Barsky line clipping algorithm?</strong>
                <br />
                A7: The Liang-Barsky algorithm uses parametric equations to determine the intersection points of a line with the clipping window.
            </p>
        </div>
    );
};

export default Chapter2_DisplayAndClipping;
