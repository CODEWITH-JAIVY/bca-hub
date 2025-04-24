import React from 'react';

const Chapter3_2DAnd3DTransformations = () => {
    return (
        <div className="p-4 text-justify leading-7 space-y-4">
            <h2 className="text-2xl font-bold mb-4">Chapter 3: 2D and 3D Transformations</h2>

            <p>
                <strong>Q1: What is a geometric transformation?</strong><br />
                A1: A geometric transformation is a process of changing the position, orientation, shape, or size of an object. It involves mapping the original coordinates of an object to a new set of coordinates.
            </p>

            <p>
                <strong>Q2: What are the basic 2D transformations?</strong><br />
                A2: The basic 2D transformations are:
                <ul className="list-disc pl-6">
                    <li>Translation</li>
                    <li>Rotation</li>
                    <li>Scaling</li>
                    <li>Reflection</li>
                </ul>
            </p>

            <p>
                <strong>Q3: What is translation?</strong><br />
                A3: Translation is moving every point of an object by the same distance in a given direction. It is defined by Tx and Ty (translation distances along the X and Y axes).
                <br />
                <em>Matrix representation:</em><br />
                [x'] = [x + Tx]<br />
                [y'] = [y + Ty]
            </p>

            <p>
                <strong>Q4: What is rotation?</strong><br />
                A4: Rotation turns an object around a pivot point (usually the origin) by an angle θ.
                <br />
                <em>Matrix representation:</em><br />
                [x'] = x·cosθ - y·sinθ<br />
                [y'] = x·sinθ + y·cosθ
            </p>

            <p>
                <strong>Q5: What is scaling?</strong><br />
                A5: Scaling enlarges or shrinks an object by scale factors Sx and Sy.
                <br />
                <em>Matrix representation:</em><br />
                [x'] = x·Sx<br />
                [y'] = y·Sy
            </p>

            <p>
                <strong>Q6: What is reflection?</strong><br />
                A6: Reflection is a transformation that flips an object about a line, such as the X-axis, Y-axis, or origin.
                <br />
                <em>Examples:</em><br />
                Reflect about X-axis: [x', y'] = [x, -y]<br />
                Reflect about Y-axis: [x', y'] = [-x, y]<br />
                Reflect about origin: [x', y'] = [-x, -y]
            </p>

            <p>
                <strong>Q7: What are homogeneous coordinates?</strong><br />
                A7: Homogeneous coordinates are a system where a 2D point (x, y) is represented as (x, y, 1). This allows all transformations (including translation) to be represented as matrix multiplications.
                <br />
                <em>Example:</em> [x', y', 1] = [x, y, 1] × Transformation Matrix
            </p>

            <p>
                <strong>Q8: What is matrix representation of 2D transformations?</strong><br />
                A8: All 2D transformations can be represented using 3x3 matrices in homogeneous coordinates. For example:
                <br />
                <em>Translation matrix:</em><br />
                <pre>
[1  0  Tx]
[0  1  Ty]
[0  0   1]
                </pre>
                <em>Rotation matrix:</em><br />
                <pre>
[cosθ -sinθ  0]
[sinθ  cosθ  0]
[  0     0   1]
                </pre>
            </p>

            <p>
                <strong>Q9: What is the composition of 2D transformations?</strong><br />
                A9: Composition is the process of combining multiple transformations into a single matrix. The combined matrix is obtained by multiplying individual transformation matrices in the order they are applied.
            </p>

            <p>
                <strong>Q10: What is window-to-viewport transformation?</strong><br />
                A10: It maps a portion of a world coordinate scene (window) to a device coordinate scene (viewport).
                <br />
                <em>Formulas:</em><br />
                <pre>
Sx = (Xvmax - Xvmin) / (Xwmax - Xwmin)
Sy = (Yvmax - Yvmin) / (Ywmax - Ywmin)

Xv = Xvmin + (Xw - Xwmin) * Sx
Yv = Yvmin + (Yw - Ywmin) * Sy
                </pre>
            </p>

            <p>
                <strong>Q11: What are basic 3D transformations?</strong><br />
                A11: Basic 3D transformations include:
                <ul className="list-disc pl-6">
                    <li>Translation (Tx, Ty, Tz)</li>
                    <li>Rotation (around X, Y, Z axes)</li>
                    <li>Scaling (Sx, Sy, Sz)</li>
                    <li>Reflection (about XY, YZ, XZ planes)</li>
                </ul>
            </p>

            <p>
                <strong>Q12: How is 3D rotation performed?</strong><br />
                A12: 3D rotation is performed using 4x4 matrices. Each axis has its own rotation matrix.
                <br />
                <em>Example - Rotation about Z-axis:</em>
                <pre>
[cosθ -sinθ  0  0]
[sinθ  cosθ  0  0]
[  0     0   1  0]
[  0     0   0  1]
                </pre>
            </p>

            <p>
                <strong>Q13: What is the role of homogeneous coordinates in 3D?</strong><br />
                A13: In 3D, points are represented as (x, y, z, 1) using homogeneous coordinates. This enables consistent transformation using 4x4 matrices for all types of transformations.
            </p>
        </div>
    );
};

export default Chapter3_2DAnd3DTransformations;
