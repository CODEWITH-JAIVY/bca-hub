import React from 'react';

const Chapter2_CentralTendency = () => {
  return (
    <div className="p-4">
      {/* Introduction to Central Tendency */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">
          Chapter 2: Measures of Central Tendency
        </h2>
        <p className="mb-4">
          This chapter explores measures of central tendency, which are essential
          statistical tools used to describe the central position within a set of
          data. These measures help summarize data into a single representative
          value.
        </p>
      </section>

      {/* Concept of Central Tendency */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Concept of Central Tendency</h3>
        <p className="mb-4">
          Central tendency refers to the central or typical value of a dataset.
          Measures of central tendency are important because they summarize a
          dataset with a single value that is considered most representative of
          the entire data. They help us understand the 'typical' value of a
          dataset and make comparisons between different datasets.
        </p>
      </section>

      {/* Requirements of a Good Measure of Central Tendency */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">
          Requirements of a Good Measure of Central Tendency
        </h3>
        <p className="mb-4">
          A good measure of central tendency should be easy to understand and
          compute, based on all observations, and not unduly affected by extreme
          values. It should also be rigidly defined and capable of further
          mathematical treatment.
        </p>
      </section>

      {/* Arithmetic Mean */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Arithmetic Mean</h3>
        <p className="mb-4">
          The arithmetic mean, or average, is the sum of all values divided by
          the number of values.
        </p>
        <p className="mb-4">
          <strong>Ungrouped Data:</strong> Sum all values and divide by the number
          {/* of values. Formula: \( \bar{x} = \frac{\sum x}{n} \), where \( \bar{x} \)
          is the mean, \( \sum x \) is the sum of all values, and \( n \) is the
          number of values. */}
        </p>
        <p className="mb-4">
          Example of Ungrouped Data: Suppose we have the numbers 4, 6, 8, 10,
          and 12. The mean is:
          <br />
          (4 + 6 + 8 + 10 + 12) / 5 = 40 / 5 = 8.
        </p>
        <p className="mb-4">
          <strong>Grouped Data:</strong> Multiply each class's midpoint by its
          frequency, sum these products, and divide by the total number of
          {/* observations. Formula: \( \bar{x} = \frac{\sum fx}{\sum f} \), where */}
          \( f \) is the frequency of each class, and \( x \) is the midpoint
          of each class.
        </p>
        <p className="mb-4">
          Example of Grouped Data: Suppose we have the following data.
          <br />
          Intervals: (0-10) (10-20) (20-30) (30-40)
          <br />
          Frequencies: 5 10 15 20
          <br />
          Midpoint: 5, 15, 25, 35
          <br />
          \( \bar{x} = \frac{(5*5 + 10*15 + 15*25 + 20*35)}{50} = 23 \)
        </p>
        <p className="mb-4">
          <strong>Advantages:</strong> Easy to calculate, uses all data values,
          and can be used for further statistical calculations.
        </p>
        <p className="mb-4">
          <strong>Disadvantages:</strong> Affected by extreme values (outliers).
        </p>
      </section>

      {/* Median */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Median</h3>
        <p className="mb-4">
          The median is the middle value in an ordered dataset.
        </p>
        <p className="mb-4">
          <strong>Ungrouped Data:</strong> Sort the data and find the middle
          value. If there's an even number of values, take the average of the
          two middle values.
          <br />
          Formula: If the number of elements \(n\) is odd: Median = \((\frac{n+1}{2})^{th}\) element; If \(n\) is even: Median = average of \((\frac{n}{2})^{th}\) and \((\frac{n}{2}+1)^{th}\) elements.
        </p>
        <p className="mb-4">
          Example of Ungrouped Data: For the numbers 4, 6, 8, 10, 12, the median
          is 8. For 4, 6, 8, 10, the median is (6+8)/2 = 7.
        </p>
        <p className="mb-4">
          <strong>Grouped Data:</strong> Locate the median class (the class
          containing the middle value) and use interpolation.
          <br />
          {/* Formula: Median = \( L + \left(\frac{\frac{n}{2} - cf}{f}\right) \times h \), where \( L \) is the lower boundary of the median class, \( n \) is the total number of data, \( cf \) is the cumulative frequency of the class before the median class, \( f \) is the frequency of the median class, and \( h \) is the class width. */}
        </p>
        <p className="mb-4">
          Example of Grouped Data: Suppose we have the following data.
          <br />
          Intervals: (0-10) (10-20) (20-30) (30-40)
          <br />
          Frequencies: 5 10 15 20
          <br />
          Cumulative frequency: 5, 15, 30, 50
          <br />
          \(n/2\) = 50/2 = 25 median class : (20-30)
          <br />
          Median = 20 + ((25-15)/15)\*10 = 26.66.
        </p>
        <p className="mb-4">
          <strong>Advantages:</strong> Not affected by extreme values, easy to
          understand.
        </p>
        <p className="mb-4">
          <strong>Disadvantages:</strong> Ignores most values, cannot be used for
          further algebraic treatment.
        </p>
      </section>

      {/* Mode */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Mode</h3>
        <p className="mb-4">
          The mode is the most frequently occurring value in a dataset.
        </p>
        <p className="mb-4">
          <strong>Ungrouped Data:</strong> Identify the value that occurs most
          often.
        </p>
        <p className="mb-4">
          Example of Ungrouped Data: In the set {'{4, 6, 8, 8, 10}' }, the mode is 8.
        </p>
        <p className="mb-4">
          <strong>Grouped Data:</strong> The mode is the value at which the
          concentration of data is the greatest, that is, in the class with the
          highest frequency.
          <br />
          {/* Formula: \( Mode = L + \left(\frac{f_1 - f_0}{2f_1 - f_0 - f_2}\right) \times h \), where \( L \) is the lower boundary of the modal class, \( f_1 \) is the frequency of the modal class, \( f_0 \) is the frequency of the class preceding the modal class, \( f_2 \) is the frequency of the class succeeding the modal class, and \( h \) is the class width. */}
        </p>
        <p className="mb-4">
        Example of Grouped Data: Suppose we have the following data.
          <br />
          Intervals: (0-10) (10-20) (20-30) (30-40)
          <br />
          Frequencies: 5 10 15 20
          <br />
          Modal class is (30-40)
          <br />
          Mode = 30+((20-15)/(2\*20-15-10))\*10 = 32.5
        </p>
        <p className="mb-4">
          <strong>Advantages:</strong> Easy to compute, useful for categorical data.
        </p>
        <p className="mb-4">
          <strong>Disadvantages:</strong> May not be unique, not useful for continuous data.
        </p>
      </section>
    </div>
  );
};

export default Chapter2_CentralTendency;
