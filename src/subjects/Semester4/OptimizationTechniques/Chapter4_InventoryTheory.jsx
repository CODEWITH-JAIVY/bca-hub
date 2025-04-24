import React from 'react';

const Chapter4_InventoryTheory = () => {
    return (
        <div>
            <h2>Chapter 4: Inventory Theory</h2>
            <p>
                <strong>Q1: What is inventory theory?</strong>
                <br />
                A1: Inventory theory is a set of techniques used to determine the optimal level of inventory to minimize costs while meeting customer demand.
            </p>
            <p>
                <strong>Q2: What are the types of inventory costs?</strong>
                <br />
                A2: Types include ordering costs, holding costs, and shortage costs.
            </p>
            <p>
                <strong>Q3: What is the Economic Order Quantity (EOQ) model?</strong>
                <br />
                A3: The EOQ model is an inventory control technique used to determine the optimal order quantity that minimizes the total inventory costs.
            </p>
            <p>
                <strong>Q4: What is the formula for EOQ?</strong>
                <br />
                A4: EOQ = sqrt((2 * Annual Demand * Ordering Cost) / Holding Cost).
            </p>
        </div>
    );
};

export default Chapter4_InventoryTheory;
