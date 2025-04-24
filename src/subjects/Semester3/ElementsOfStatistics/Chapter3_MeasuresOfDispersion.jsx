import React from 'react';

// Chapter3_MeasuresOfDispersion component: Detailed explanation of measures of dispersion in statistics, covering range, variance, standard deviation, quartile deviation, and mean deviation.
const Chapter3_MeasuresOfDispersion = () => {
    return (
        <div>
            {/* Introduction */}
            <section className="mb-6">
                <h2 className="text-3xl font-bold mb-6">Chapter 3: Measures of Dispersion</h2>
                <p className="mb-4">
                    Measures of dispersion are essential statistical tools that describe the spread or variability of a dataset. This chapter provides a detailed explanation of various measures of dispersion and their calculation methods.
                </p>
            </section>

            {/* Concept of Dispersion */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Concept of Dispersion</h3>
                <p className="mb-4">
                    Dispersion, also known as variability or spread, measures how stretched or squeezed a dataset is. It provides insights into the consistency of data points around the central tendency.
                </p>
                <p className="mb-4">
                    Measures of dispersion are crucial because they complement central tendency by describing the variability of data, helping to understand how representative the central value is.
                </p>
            </section>

            {/* Range */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Range</h3>
                <p className="mb-4">
                    The range is the simplest measure of dispersion, calculated as the difference between the maximum and minimum values in a dataset.
                </p>
                <p className="mb-4">
                    <strong>Ungrouped Data Formula:</strong> Range = Max(X) - Min(X)
                </p>
                <p className="mb-4">
                    <strong>Grouped Data Formula:</strong> Range = Upper Boundary of Highest Class - Lower Boundary of Lowest Class
                </p>
                <p className="mb-4">
                    <strong>Example (Ungrouped):</strong> For data {`{2, 5, 8, 12, 15}`}, Range = 15 - 2 = 13
                </p>
                <p className="mb-4">
                    <strong>Advantages:</strong> Easy to calculate and understand.
                </p>
                <p className="mb-4">
                    <strong>Disadvantages:</strong> Sensitive to extreme values (outliers) and only considers two data points.
                </p>
            </section>

            {/* Variance */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Variance</h3>
                <p className="mb-4">
                    Variance measures the average squared deviation of each number from the mean. It provides a measure of the dispersion within the dataset.
                </p>
                <p className="mb-4">
                    <strong>Ungrouped Data Formula:</strong> Variance = Σ(X - Mean)<sup>2</sup> / N
                </p>
                <p className="mb-4">
                    <strong>Grouped Data Formula:</strong> Variance = Σf(X - Mean)<sup>2</sup> / N
                </p>
                <p className="mb-4">
                    <strong>Example (Ungrouped):</strong> For data {`{2, 4, 6}`}, Mean = 4, Variance = {`((2-4)² + (4-4)² + (6-4)²) / 3 = 2.67`}
                </p>
                <p className="mb-4">
                    <strong>Advantages:</strong> Considers every data point, useful for further statistical analysis.
                </p>
                <p className="mb-4">
                    <strong>Disadvantages:</strong> Squared units are not always easy to interpret.
                </p>
            </section>

            {/* Standard Deviation */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Standard Deviation</h3>
                <p className="mb-4">
                    Standard deviation is the square root of the variance. It measures the spread of the data around the mean in the original units.
                </p>
                <p className="mb-4">
                    <strong>Ungrouped Data Formula:</strong> Standard Deviation = √(Variance) = √[Σ(X - Mean)<sup>2</sup> / N]
                </p>
                <p className="mb-4">
                    <strong>Grouped Data Formula:</strong> Standard Deviation = √(Variance) = √[Σf(X - Mean)<sup>2</sup> / N]
                </p>
                <p className="mb-4">
                    <strong>Example (Ungrouped):</strong> Using the previous example, Standard Deviation = √2.67 ≈ 1.63
                </p>
                <p className="mb-4">
                    <strong>Advantages:</strong> Easy to interpret as it's in the same units as the data, widely used.
                </p>
                <p className="mb-4">
                    <strong>Disadvantages:</strong> Sensitive to outliers.
                </p>
            </section>

             {/* Quartile Deviation */}
             <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Quartile Deviation</h3>
                <p className="mb-4">
                    Quartile deviation, also known as semi-interquartile range, measures the dispersion based on the quartiles of the data.
                </p>
                <p className="mb-4">
                    <strong>Ungrouped Data Formula:</strong> Quartile Deviation = (Q3 - Q1) / 2
                </p>
                <p className="mb-4">
                    <strong>Grouped Data Formula:</strong> Quartile Deviation = (Q3 - Q1) / 2
                </p>
                <p className="mb-4">
                    <strong>Example (Ungrouped):</strong> For data {`{2, 4, 6, 8, 10, 12, 14}`}, Q1 = 4, Q3 = 12, Quartile Deviation = (12 - 4) / 2 = 4
                </p>
                <p className="mb-4">
                    <strong>Advantages:</strong> Less sensitive to extreme values, focuses on the middle 50% of the data.
                </p>
                <p className="mb-4">
                    <strong>Disadvantages:</strong> Does not use all data points, only considers the middle half.
                </p>
            </section>

             {/* Mean Deviation */}
             <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Mean Deviation</h3>
                <p className="mb-4">
                    Mean deviation measures the average absolute deviation of each data point from the mean.
                </p>
                <p className="mb-4">
                    <strong>Ungrouped Data Formula:</strong> Mean Deviation = Σ|X - Mean| / N
                </p>
                <p className="mb-4">
                    <strong>Grouped Data Formula:</strong> Mean Deviation = Σf|X - Mean| / N
                </p>
                <p className="mb-4">
                    <strong>Example (Ungrouped):</strong> For data {`{2, 4, 6}`}, Mean = 4, Mean Deviation = {`(|2-4| + |4-4| + |6-4|) / 3 = 1.33`}
                </p>
                <p className="mb-4">
                    <strong>Advantages:</strong> Easy to understand, uses all data points.
                </p>
                <p className="mb-4">
                    <strong>Disadvantages:</strong> More difficult to use in further calculations due to the absolute values.
                </p>
            </section>

            {/* Conclusion */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Conclusion</h3>
                <p className="mb-4">
                    Measures of dispersion are crucial for understanding the spread and variability within datasets. Each measure—range, variance, standard deviation, quartile deviation, and mean deviation—offers unique insights and is chosen based on the data's nature and the analysis's goals.
                </p>
            </section>
        </div>
    );
};

export default Chapter3_MeasuresOfDispersion;