import React from 'react';

const Chapter4_CurvesAndSolids = () => {
    return (
        <div>
            <h2>Chapter 4: Curves and Solids</h2>
            <p>
                <strong>Q1: What are curves in computer graphics?</strong>
                <br />
                A1: Curves are mathematical representations used to draw smooth, continuous lines in computer graphics.
            </p>
            <p>
                <strong>Q2: What are different types of curves?</strong>
                <br />
                A2: Types include Bezier curves, B-spline curves, and NURBS curves.
            </p>
            <p>
                <strong>Q3: What is a Bezier curve?</strong>
                <br />
                A3: A Bezier curve is a parametric curve defined by a set of control points, which determine the shape of the curve.
            </p>
            <p>
                <strong>Q4: What is a B-spline curve?</strong>
                <br />
                A4: A B-spline curve is a more flexible type of curve that allows for local control, meaning that changing one control point only affects a portion of the curve.
            </p>
            <p>
                <strong>Q5: What are solids in computer graphics?</strong>
                <br />
                A5: Solids are three-dimensional objects represented in a computer graphics scene.
            </p>
            <p>
                <strong>Q6: What are different types of solid modeling techniques?</strong>
                <br />
                A6: Techniques include boundary representation (B-rep) and constructive solid geometry (CSG).
            </p>
            <p>
                <strong>Q7: What is B-rep?</strong>
                <br />
                A7: B-rep (Boundary Representation) represents a solid by defining its bounding surfaces, such as faces, edges, and vertices.
            </p>
            <p>
                <strong>Q8: What is CSG?</strong>
                <br />
                A8: CSG (Constructive Solid Geometry) represents a solid as a combination of simple geometric primitives (e.g., cubes, cylinders, spheres) using Boolean operations (union, intersection, difference).
            </p>
        </div>
    );
};

export default Chapter4_CurvesAndSolids;
