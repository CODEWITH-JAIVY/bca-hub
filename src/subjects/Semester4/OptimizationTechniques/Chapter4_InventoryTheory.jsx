import React from 'react';

const Chapter4_InventoryTheory = () => {
  return (
    <div>
      <h2>Chapter 4: Inventory Theory</h2>
      {/* Introduction to the Chapter */}
      <p>
        Welcome to Chapter 4 on Inventory Theory! In this chapter, we will explore the fundamental concepts of inventory theory,
        a crucial aspect of operations management. Understanding how to manage inventory effectively is essential for businesses to
        minimize costs and maximize customer satisfaction. Let's dive into the details!
      </p>

      {/* Introduction to Inventory Theory */}
      <h3>Introduction to Inventory Theory</h3>
      <p>
        <strong>What is Inventory Theory?</strong>
        <br />
        Inventory theory is a set of techniques and models used to determine the optimal level of inventory a business should maintain.
        The main goal of inventory theory is to balance the costs associated with holding inventory against the costs of ordering or
        producing more inventory.
      </p>
      <p>
        <strong>Role of Inventory Theory in Operations Management:</strong>
        <br />
        Inventory theory plays a crucial role in operations management by helping businesses optimize their inventory levels.
        Effective inventory management ensures that businesses have enough stock to meet customer demand without incurring excessive
        costs.
      </p>
      <p>
        <strong>Importance of Inventory Management:</strong>
        <br />
        Proper inventory management is vital because it directly impacts a company's profitability and customer satisfaction.
        Having too much inventory ties up capital and increases storage costs, while too little inventory can lead to stockouts and lost sales.
      </p>

      {/* Types of Inventory Costs */}
      <h3>Types of Inventory Costs</h3>
      <p>
        <strong>Ordering Costs:</strong>
        <br />
        Ordering costs are the expenses incurred each time an order is placed. These costs are independent of the quantity ordered and
        include the administrative costs associated with placing and receiving orders.
        <br />
        <strong>Examples:</strong>
        <ul>
          <li>Cost of preparing a purchase order</li>
          <li>Cost of receiving and inspecting goods</li>
          <li>Transportation and delivery fees</li>
          <li>Administrative staff time and paperwork</li>
        </ul>
      </p>
      <p>
        <strong>Holding Costs:</strong>
        <br />
        Holding costs, also known as carrying costs, are the costs of storing and maintaining inventory over a period. These costs increase with
        the amount of inventory held.
        <br />
        <strong>Examples:</strong>
        <ul>
          <li>Warehouse rental or depreciation</li>
          <li>Insurance and taxes on inventory</li>
          <li>Spoilage, obsolescence, and theft</li>
          <li>Cost of capital tied up in inventory</li>
        </ul>
      </p>
      <p>
        <strong>Shortage Costs:</strong>
        <br />
        Shortage costs are the expenses incurred when a business runs out of stock. These costs are often harder to quantify but can
        significantly impact profitability and customer relations.
        <br />
        <strong>Examples:</strong>
        <ul>
          <li>Lost sales revenue</li>
          <li>Customer dissatisfaction and loss of goodwill</li>
          <li>Expedited shipping costs to fulfill backorders</li>
          <li>Cost of production downtime due to lack of materials</li>
        </ul>
      </p>

      {/* Economic Order Quantity (EOQ) Model */}
      <h3>Economic Order Quantity (EOQ) Model</h3>
      <p>
        <strong>What is the EOQ Model?</strong>
        <br />
        The Economic Order Quantity (EOQ) model is a classic inventory control technique that helps determine the optimal order
        quantity to minimize the total inventory costs, which include ordering and holding costs.
      </p>
      <p>
        <strong>Assumptions of the EOQ Model:</strong>
        <br />
        The EOQ model is based on several assumptions, including constant demand, fixed ordering and holding costs, no quantity discounts, and instantaneous replenishment.
      </p>
      <p>
        <strong>EOQ Formula Derivation:</strong>
        <br />
        The EOQ formula is derived by finding the point where the total ordering costs equal the total holding costs. The formula is:
        <br />
        <strong>EOQ = sqrt((2 * D * S) / H)</strong>
        <br />
        Where:
        <ul>
          <li>D = Annual Demand</li>
          <li>S = Ordering Cost per order</li>
          <li>H = Holding Cost per unit per year</li>
        </ul>
      </p>
      <p>
        <strong>Example:</strong> If a company has an annual demand of 1000 units, an ordering cost of $10 per order, and a holding cost of $2 per unit per year, the EOQ is: EOQ = sqrt((2 * 1000 * 10) / 2) = sqrt(10000) = 100 units.
      </p>
    <h3>Types of Inventory:</h3>
    <p><strong>Raw Materials Inventory:</strong> These are the basic materials a company uses to make its products.</p>
    <p><strong>Work-in-Process (WIP) Inventory:</strong> These are partially finished goods that are still in the production process.</p>
    <p><strong>Finished Goods Inventory:</strong> These are completed products ready for sale to customers.</p>
    <p><strong>Maintenance, Repair, and Operating (MRO) Inventory:</strong> These are items used to support the production process.</p>
     {/* Conclusion */}
      <p>
        <strong>Conclusion:</strong> In this chapter, we've learned the basics of inventory theory, explored the different types of inventory costs,
        and examined the Economic Order Quantity (EOQ) model. Understanding these concepts is crucial for effective inventory management and
        overall business success. There are many other inventory models that build on these fundamentals, and I encourage you to study
        them as well.
      </p>
    </div>
  );
};

export default Chapter4_InventoryTheory;
