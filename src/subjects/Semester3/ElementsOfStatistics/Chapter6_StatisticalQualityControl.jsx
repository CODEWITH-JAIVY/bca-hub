import React from 'react';

// Chapter6_StatisticalQualityControl component: Detailed explanations of Statistical Quality Control (SQC) and its tools.
const Chapter6_StatisticalQualityControl = () => {
    return (
        <div>
            {/* Introduction to Statistical Quality Control */}
            <section className="mb-6">
                <h2 className="text-3xl font-bold mb-6">Chapter 6: Statistical Quality Control</h2>
                <p className="mb-4">
                    Statistical Quality Control (SQC) is a critical aspect of modern manufacturing and service industries. It involves using statistical methods to monitor, control, and improve the quality of products and processes. This chapter explores the various tools and techniques used in SQC to ensure that products meet customer expectations and regulatory standards.
                </p>
            </section>

            {/* Definition and Objectives of SQC */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Statistical Quality Control (SQC)</h3>
                <p className="mb-4">
                    <strong>Definition:</strong> Statistical Quality Control (SQC) is the application of statistical methods to monitor and maintain the quality of products and processes.
                    It involves collecting, analyzing, and interpreting data to ensure that products meet specified standards and to identify areas for improvement.
                </p>
                <p className="mb-4">
                    <strong>Basic principle:</strong> The basic principle of statistical quality control (SQC) is to use statistical techniques to monitor and maintain the quality of processes or products.
                    This principle involves gathering data, analyzing it statistically, and then making decisions or adjustments to the process or product based on the results of that analysis.
                </p>
                <p className="mb-4">
                    <strong>Objectives:</strong>
                    <ul className="list-disc list-inside">
                        <li>Maintain the quality of products and services.</li>
                        <li>Reduce process variability.</li>
                        <li>Detect and correct deviations from quality standards.</li>
                        <li>Improve overall process efficiency and effectiveness.</li>
                    </ul>
                </p>
                <p className="mb-4">
                    <strong>Benefits:</strong>
                    <ul className="list-disc list-inside">
                        <li>Enhanced product quality.</li>
                        <li>Reduced waste and rework.</li>
                        <li>Improved customer satisfaction.</li>
                        <li>Increased productivity and profitability.</li>
                    </ul>
                </p>
            </section>

            {/* Main Tools Used in SQC */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Main Tools Used in SQC</h3>
                <p className="mb-4">
                    SQC utilizes several statistical tools to monitor and control quality. These include control charts, acceptance sampling, and process capability analysis.
                </p>
                <ul className="list-disc list-inside">
                    <li><strong>Control Charts:</strong> Used to monitor process stability over time.</li>
                    <li><strong>Acceptance Sampling:</strong> Used to make decisions about accepting or rejecting lots of products.</li>
                    <li><strong>Process Capability Analysis:</strong> Used to determine if a process is capable of producing products that meet specifications.</li>
                </ul>
            </section>

            {/* Control Charts */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Control Charts</h3>
                <p className="mb-4">
                    Control charts are graphical tools used to monitor the stability of a process over time.
                    They help determine whether a process is in a state of statistical control or if there are any special causes of variation that need to be addressed.
                </p>
                <p className="mb-4">
                    <strong>Components:</strong>
                    <ul className="list-disc list-inside">
                        <li><strong>Centerline:</strong> Represents the average of the process.</li>
                        <li><strong>Upper Control Limit (UCL):</strong> The upper boundary of acceptable process variation.</li>
                        <li><strong>Lower Control Limit (LCL):</strong> The lower boundary of acceptable process variation.</li>
                    </ul>
                </p>
                <p className="mb-4">
                    <strong>Process Stability:</strong>
                    Control charts are used to monitor process stability by plotting data points over time.
                    If points fall outside the control limits, it indicates that the process is out of control and requires investigation.
                </p>
                <p className="mb-4">
                    <strong>Interpreting Points Outside Control Limits:</strong>
                    Points falling outside the control limits (UCL or LCL) indicate that the process is unstable or out of control.
                    These points suggest the presence of special cause variation that needs to be investigated and corrected.
                </p>
            </section>

            {/* Types of Control Charts */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Types of Control Charts</h3>

                {/* X-bar Charts */}
                <h4 className="text-lg font-semibold mt-4">X-bar Charts</h4>
                <p className="mb-4">
                    <strong>Use:</strong> X-bar charts are used to monitor the central tendency (mean) of a continuous process.
                    They are typically used when measuring variables such as length, weight, or temperature.
                </p>
                <p className="mb-4">
                    <strong>Monitoring Central Tendency:</strong>
                    These charts track the average of subgroups over time to ensure that the process average remains stable.
                </p>

                {/* R Charts */}
                <h4 className="text-lg font-semibold mt-4">R Charts</h4>
                <p className="mb-4">
                    <strong>Use:</strong> R charts are used to monitor the variability or spread of a continuous process.
                    They are used alongside X-bar charts to ensure that the process is both centered and consistent.
                </p>
                <p className="mb-4">
                    <strong>Monitoring Variability:</strong>
                    These charts track the range (difference between the maximum and minimum values) within subgroups over time to ensure that process variability remains stable.
                </p>

                {/* p-Charts */}
                <h4 className="text-lg font-semibold mt-4">p-Charts</h4>
                <p className="mb-4">
                    <strong>Use:</strong> p-charts are used to monitor the proportion of defective items in a process.
                    They are typically used when dealing with attribute data (pass/fail, go/no-go).
                </p>
                <p className="mb-4">
                    <strong>Monitoring Defect Proportion:</strong>
                    These charts track the proportion of nonconforming units in samples over time to identify any shifts in the rate of defects.
                </p>
            </section>

            {/* Acceptance Sampling */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Acceptance Sampling</h3>
                <p className="mb-4">
                    <strong>Definition:</strong> Acceptance sampling is a statistical method used to determine whether to accept or reject a lot of products based on the inspection of a sample.
                    It is commonly used to inspect incoming materials, work in progress, or finished goods.
                </p>
                <p className="mb-4">
                    <strong>Purpose:</strong>
                    The primary purpose of acceptance sampling is to decide whether a production lot meets the specified quality standards without having to inspect every single item.
                </p>
                <p className="mb-4">
                    <strong>Basic Procedure:</strong>
                    <ol className="list-decimal list-inside">
                        <li>Select a random sample from the lot.</li>
                        <li>Inspect each item in the sample.</li>
                        <li>Count the number of defective items.</li>
                        <li>Based on the count, decide whether to accept or reject the entire lot.</li>
                    </ol>
                </p>
            </section>

            {/* Process Capability Analysis */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Process Capability Analysis</h3>
                <p className="mb-4">
                    <strong>Definition:</strong> Process capability analysis is a statistical method used to determine whether a process is capable of producing products that meet specified tolerances or requirements.
                </p>
                <p className="mb-4">
                    <strong>Purpose:</strong>
                    The purpose of process capability analysis is to quantify the process's ability to produce items within the specified limits, thus ensuring customer satisfaction and reducing the cost of poor quality.
                </p>
                <p className="mb-4">
                    <strong>Measures Used:</strong>
                    <ul className="list-disc list-inside">
                        <li>
                            <strong>Cp (Process Capability Index):</strong> A measure of potential capability, comparing the process spread (6 standard deviations) to the specification width.
                        </li>
                        <li>
                            <strong>Cpk (Process Capability Index):</strong> A measure of actual capability, considering both process spread and process centering.
                        </li>
                    </ul>
                </p>
            </section>

            {/* Conclusion */}
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Conclusion</h3>
                <p className="mb-4">
                    Statistical Quality Control (SQC) provides essential tools for maintaining and improving product and process quality.
                    Control charts, acceptance sampling, and process capability analysis help organizations ensure that their products meet customer expectations and regulatory standards.
                    By understanding and implementing these methods, businesses can achieve higher quality, reduce waste, and improve overall efficiency.
                </p>
            </section>
        </div>
    );
};

export default Chapter6_StatisticalQualityControl;
