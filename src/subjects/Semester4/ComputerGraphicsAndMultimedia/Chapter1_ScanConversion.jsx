import React from 'react';

const Chapter1_ScanConversion = () => {
    return (
        <div>
            <h2>Chapter 1: Scan Conversion</h2>
            <p>
                <strong>Q1: What is scan conversion?</strong>
                <br />
                A1: Scan conversion is the process of converting geometric primitives (like lines, circles, and polygons) into discrete pixels for display on a raster graphics display.
            </p>
            <p>
                <strong>Q2: What are the common algorithms for scan converting a line?</strong>
                <br />
                A2: Common algorithms include DDA (Digital Differential Analyzer) algorithm and Bresenham's line algorithm.
            </p>
            <p>
                <strong>Q3: Explain the DDA algorithm for line drawing.</strong>
                <br />
                A3: The DDA algorithm calculates the intermediate points along a line by incrementing x and y coordinates based on the slope of the line.
            </p>
            <p>
                <strong>Q4: Explain Bresenham's line algorithm.</strong>
                <br />
                A4: Bresenham's line algorithm uses integer arithmetic to determine which pixels should be drawn to approximate a line between two given endpoints.
            </p>
            <p>
                <strong>Q5: What are the common algorithms for scan converting a circle?</strong>
                <br />
                A5: Algorithms include the midpoint circle algorithm and Bresenham's circle algorithm.
            </p>
        </div>
    );
};

export default Chapter1_ScanConversion;
