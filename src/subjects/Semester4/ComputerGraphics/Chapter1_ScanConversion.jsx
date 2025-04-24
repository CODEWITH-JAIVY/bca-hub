import React, { useRef, useEffect } from 'react';

const ScanConversion = () => {
    const canvasRef = useRef(null);

    // Function to plot a pixel on the canvas
    const plotPixel = (x, y, ctx) => {
        ctx.fillRect(x, y, 1, 1); // Draw a 1x1 pixel at (x, y)
    };

    // DDA Algorithm for Line Drawing
    const ddaAlgorithm = (x1, y1, x2, y2) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas before drawing

        let dx = x2 - x1;
        let dy = y2 - y1;
        let steps = Math.max(Math.abs(dx), Math.abs(dy));
        let xIncrement = dx / steps;
        let yIncrement = dy / steps;
        let x = x1;
        let y = y1;

        // Plot pixels for the line
        for (let i = 0; i <= steps; i++) {
            plotPixel(Math.round(x), Math.round(y), ctx); // Plot each pixel
            x += xIncrement;
            y += yIncrement;
        }
    };

    // Bresenham's Line Algorithm for Line Drawing
    const bresenhamLineAlgorithm = (x1, y1, x2, y2) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas before drawing

        let dx = x2 - x1;
        let dy = y2 - y1;
        let p = 2 * dy - dx;
        let x = x1;
        let y = y1;

        // Plot the start point
        plotPixel(x, y, ctx);

        // Loop for drawing the line
        while (x < x2) {
            x += 1;
            if (p < 0) {
                p += 2 * dy;
            } else {
                y += 1;
                p += 2 * (dy - dx);
            }
            plotPixel(x, y, ctx); // Plot each pixel
        }
    };

    // Midpoint Circle Algorithm for Circle Drawing
    const midpointCircleAlgorithm = (xc, yc, r) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas before drawing

        let x = 0;
        let y = r;
        let p = 1 - r;

        // Plot pixels for the circle
        const plotCirclePoints = (x, y) => {
            plotPixel(xc + x, yc + y, ctx);
            plotPixel(xc - x, yc + y, ctx);
            plotPixel(xc + x, yc - y, ctx);
            plotPixel(xc - x, yc - y, ctx);
            plotPixel(xc + y, yc + x, ctx);
            plotPixel(xc - y, yc + x, ctx);
            plotPixel(xc + y, yc - x, ctx);
            plotPixel(xc - y, yc - x, ctx);
        };

        // Plot initial points
        plotCirclePoints(x, y);

        // Loop for drawing the circle
        while (x < y) {
            x += 1;
            if (p < 0) {
                p += 2 * x + 1;
            } else {
                y -= 1;
                p += 2 * (x - y) + 1;
            }
            plotCirclePoints(x, y);
        }
    };

    useEffect(() => {
        // Example of using algorithms to draw shapes
        ddaAlgorithm(10, 10, 150, 150); // Draw line using DDA algorithm
        // bresenhamLineAlgorithm(10, 200, 150, 200); // Uncomment to use Bresenham's Line Algorithm
        // midpointCircleAlgorithm(250, 250, 100); // Uncomment to use Midpoint Circle Algorithm
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-5">
            <h2 className="text-3xl font-semibold text-center mb-5">Scan Conversion in Computer Graphics</h2>

            {/* Canvas for drawing */}
            <canvas
                ref={canvasRef}
                width={500}
                height={500}
                style={{ border: '1px solid black', display: 'block', margin: '0 auto' }}
            />

            {/* Content Sections */}
            <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-3">Introduction to Scan Conversion</h3>
                <p>
                    Scan conversion is a fundamental process in computer graphics that transforms geometric primitives (like lines, circles, and polygons) into raster data, which can be displayed on a screen.
                </p>
                <p className="mt-3">
                    <strong>Geometric Primitives vs. Raster Graphics:</strong> Geometric primitives are defined by mathematical equations, while raster graphics are made of pixels. Scan conversion translates geometric shapes into raster form.
                </p>
                <p className="mt-3">
                    <strong>Why Scan Conversion is Needed:</strong> Raster graphics devices use a grid of pixels, and scan conversion helps decide which pixels to light up to display a shape.
                </p>
                <p className="mt-3">
                    <strong>Real-World Examples:</strong>
                    <ul className="list-disc ml-6 mt-2">
                        <li>Drawing lines in drawing software.</li>
                        <li>Rendering shapes in video games.</li>
                        <li>Displaying images on screens.</li>
                    </ul>
                </p>
            </section>

            {/* Algorithms */}
            <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-3">Line Scan Conversion Algorithms</h3>

                {/* DDA Algorithm */}
                <h4 className="text-xl font-medium mb-2">DDA (Digital Differential Analyzer) Algorithm</h4>
                <p>
                    The DDA algorithm is a simple line-drawing algorithm that uses floating-point arithmetic to compute the next pixel coordinates.
                </p>

                {/* Bresenham's Line Algorithm */}
                <h4 className="text-xl font-medium mt-5 mb-2">Bresenham's Line Algorithm</h4>
                <p>
                    Bresenham's algorithm is more efficient than DDA because it uses integer arithmetic, which avoids rounding errors.
                </p>

                {/* Midpoint Circle Algorithm */}
                <h4 className="text-xl font-medium mt-5 mb-2">Midpoint Circle Algorithm</h4>
                <p>
                    The midpoint circle algorithm efficiently plots a circle by using decision parameters and symmetry.
                </p>
            </section>
        </div>
    );
};

export default ScanConversion;
