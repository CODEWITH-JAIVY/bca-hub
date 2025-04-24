import React from 'react';

const Chapter2_MarketStructures = () => {
    return (
        <div className="p-4 space-y-4">
            <h2 className="text-2xl font-bold mb-4">Chapter 2: Market Structures</h2>

            <h3 className="text-xl font-semibold">1. What is Market Structure?</h3>
            <p>
                Market structure refers to the organizational and other characteristics of a market. It focuses on the nature of competition and the pricing decisions of firms. It includes:
                <ul className="list-disc list-inside mt-2">
                    <li>Number of buyers and sellers</li>
                    <li>Type of products (homogeneous or differentiated)</li>
                    <li>Barriers to entry and exit</li>
                    <li>Control over price</li>
                </ul>
            </p>

            <h3 className="text-xl font-semibold">2. Types of Market Structures</h3>
            <ul className="list-decimal list-inside mt-2">
                <li><strong>Perfect Competition</strong></li>
                <li><strong>Monopolistic Competition</strong></li>
                <li><strong>Oligopoly</strong></li>
                <li><strong>Monopoly</strong></li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">3. Perfect Competition</h3>
            <p>
                A market with many small firms, homogeneous products, and no barriers to entry or exit.
            </p>
            <p><strong>Price & Output Determination:</strong> Price is determined by the industry through the interaction of demand and supply. Firms are price takers. Equilibrium occurs where MC = MR (Marginal Cost = Marginal Revenue).</p>
            <p><strong>Firm Equilibrium:</strong> In the short run, a firm can earn supernormal profits, normal profits, or losses. In the long run, only normal profit exists due to free entry and exit.</p>

            <h3 className="text-xl font-semibold mt-6">4. Monopoly</h3>
            <p>
                A market with a single seller, a unique product, and high barriers to entry.
            </p>
            <p><strong>Price & Output Determination:</strong> The monopolist is a price maker. The firm sets output where MR = MC and then uses the demand curve to set price.</p>
            <p><strong>Firm Equilibrium:</strong> Can earn supernormal profits in the short and long run due to lack of competition.</p>
            <p><strong>Important Note:</strong> Monopoly results in higher prices and lower output compared to perfect competition, leading to inefficiency and consumer loss.</p>

            <h3 className="text-xl font-semibold mt-6">5. Monopolistic Competition</h3>
            <p>
                A market with many firms selling similar but differentiated products. Examples: Fast food chains, clothing brands.
            </p>
            <p><strong>Price & Output Determination:</strong> Firms have some control over price due to product differentiation. Equilibrium occurs where MR = MC.</p>
            <p><strong>Firm Equilibrium:</strong> In the short run, firms may earn abnormal profits or losses. In the long run, entry of new firms erodes abnormal profits, leading to normal profits only.</p>

            <h3 className="text-xl font-semibold mt-6">6. Oligopoly</h3>
            <p>
                A market with few large firms that dominate the industry. Products may be homogeneous (e.g., steel) or differentiated (e.g., smartphones).
            </p>
            <p><strong>Key Feature:</strong> Interdependence among firms. One firm's decisions influence the others.</p>
            <p><strong>Price & Output Determination:</strong> No single model fits all oligopolies. Two common models:
                <ul className="list-disc list-inside mt-2">
                    <li><strong>Kinked Demand Curve:</strong> Suggests price rigidity; firms are hesitant to change prices due to expected reactions from competitors.</li>
                    <li><strong>Collusion/Cartel:</strong> Firms may cooperate to fix prices and output (e.g., OPEC).</li>
                </ul>
            </p>
            <p><strong>Firm Equilibrium:</strong> Varies depending on whether firms compete or collude.</p>

            <h3 className="text-xl font-semibold mt-6">7. Comparison Table of Market Structures</h3>
            <table className="w-full border border-collapse mt-2 text-sm">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border px-2 py-1">Feature</th>
                        <th className="border px-2 py-1">Perfect Competition</th>
                        <th className="border px-2 py-1">Monopoly</th>
                        <th className="border px-2 py-1">Monopolistic Competition</th>
                        <th className="border px-2 py-1">Oligopoly</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border px-2 py-1">Number of Sellers</td>
                        <td className="border px-2 py-1">Many</td>
                        <td className="border px-2 py-1">One</td>
                        <td className="border px-2 py-1">Many</td>
                        <td className="border px-2 py-1">Few</td>
                    </tr>
                    <tr>
                        <td className="border px-2 py-1">Product Type</td>
                        <td className="border px-2 py-1">Homogeneous</td>
                        <td className="border px-2 py-1">Unique</td>
                        <td className="border px-2 py-1">Differentiated</td>
                        <td className="border px-2 py-1">Homogeneous/Differentiated</td>
                    </tr>
                    <tr>
                        <td className="border px-2 py-1">Price Control</td>
                        <td className="border px-2 py-1">None</td>
                        <td className="border px-2 py-1">High</td>
                        <td className="border px-2 py-1">Some</td>
                        <td className="border px-2 py-1">Significant</td>
                    </tr>
                    <tr>
                        <td className="border px-2 py-1">Entry & Exit</td>
                        <td className="border px-2 py-1">Free</td>
                        <td className="border px-2 py-1">Blocked</td>
                        <td className="border px-2 py-1">Relatively Free</td>
                        <td className="border px-2 py-1">Difficult</td>
                    </tr>
                    <tr>
                        <td className="border px-2 py-1">Profit in Long Run</td>
                        <td className="border px-2 py-1">Normal</td>
                        <td className="border px-2 py-1">Supernormal</td>
                        <td className="border px-2 py-1">Normal</td>
                        <td className="border px-2 py-1">Supernormal (if collusion exists)</td>
                    </tr>
                </tbody>
            </table>

            <h3 className="text-xl font-semibold mt-6">8. Conclusion</h3>
            <p>
                Understanding market structures helps firms and policymakers make informed decisions regarding pricing, production, and regulations. Each structure offers different challenges and opportunities for both firms and consumers.
            </p>
        </div>
    );
};

export default Chapter2_MarketStructures;
