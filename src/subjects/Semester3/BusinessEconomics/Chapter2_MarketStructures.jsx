"use client";

import React from 'react';

const Chapter2_MarketStructures = () => {
    return (
        <div className="p-4 space-y-4">
            {/* Introduction to Market Structures */}
            <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Chapter 2: Market Structures</h2>
                <p className="mb-4">
                    In this chapter, we will explore different market structures, which are essential for understanding the nature of competition in various industries. Market structure refers to the characteristics of a market, including the number of firms, the nature of the products, and the ease of entry and exit for firms.
                </p>
            </section>

            {/* What is Market Structure? */}
            <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-3">What is Market Structure?</h3>
                <p className="mb-4">
                    Market structure refers to the organizational and other characteristics of a market. It focuses on the nature of competition and the pricing decisions of firms. Key elements include:
                    <ul className="list-disc list-inside mt-2">
                        <li><strong>Number of Buyers and Sellers:</strong> The quantity of buyers and sellers in a market impacts the competitive environment.</li>
                        <li><strong>Type of Products:</strong> Products can be homogeneous (identical) or differentiated (unique).</li>
                        <li><strong>Barriers to Entry and Exit:</strong> These are obstacles that prevent new firms from entering or existing firms from leaving the market.</li>
                        <li><strong>Control over Price:</strong> The degree to which firms can influence market prices.</li>
                    </ul>
                </p>
            </section>

            {/* Types of Market Structures */}
            <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-3">Types of Market Structures</h3>
                <p className="mb-4">There are four main types of market structures:</p>
                <ul className="list-decimal list-inside mt-2">
                    <li><strong>Perfect Competition:</strong> Many firms, homogeneous products, free entry and exit.</li>
                    <li><strong>Monopolistic Competition:</strong> Many firms, differentiated products, relatively free entry and exit.</li>
                    <li><strong>Oligopoly:</strong> Few large firms, homogeneous or differentiated products, difficult entry and exit.</li>
                    <li><strong>Monopoly:</strong> Single firm, unique product, blocked entry.</li>
                </ul>
            </section>

            {/* Perfect Competition */}
            <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-3">Perfect Competition</h3>
                <p className="mb-4">
                    Perfect competition is characterized by many small firms selling identical (homogeneous) products. There are no barriers to entry or exit, and firms are price takers.
                </p>
                <p className="mb-4"><strong>Characteristics:</strong> Many buyers and sellers, homogeneous products, free entry and exit, perfect information, no control over price.</p>
                <p className="mb-4"><strong>Behavior of Firms:</strong> Firms are price takers. They must accept the market price and can sell as much as they want at that price. Their demand curve is horizontal.</p>
                <p className="mb-4"><strong>Implications:</strong> In the long run, firms earn only normal profits. Any supernormal profits attract new entrants, increasing supply and decreasing price until only normal profits remain. This market structure is efficient.</p>
            </section>

            {/* Monopoly */}
            <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-3">Monopoly</h3>
                <p className="mb-4">
                    A monopoly is a market with a single seller, a unique product, and high barriers to entry. The monopolist is a price maker.
                </p>
                <p className="mb-4"><strong>Characteristics:</strong> Single seller, unique product, high barriers to entry, significant control over price.</p>
                <p className="mb-4"><strong>Behavior of Firms:</strong> The monopolist can set the price and output level to maximize its profits. It faces a downward-sloping demand curve and can charge a higher price by restricting output.</p>
                <p className="mb-4"><strong>Implications:</strong> Monopolies can earn supernormal profits in both the short and long run due to the absence of competition. This leads to inefficiencies, higher prices, and lower output compared to perfect competition, harming consumer welfare.</p>
            </section>

            {/* Monopolistic Competition */}
            <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-3">Monopolistic Competition</h3>
                <p className="mb-4">
                    Monopolistic competition involves many firms selling similar but differentiated products. Examples include fast food chains and clothing brands.
                </p>
                <p className="mb-4"><strong>Characteristics:</strong> Many firms, differentiated products, relatively free entry and exit, some control over price due to product differentiation.</p>
                <p className="mb-4"><strong>Behavior of Firms:</strong> Firms have some control over price due to product differentiation. They use advertising and branding to create perceived differences.</p>
                <p className="mb-4"><strong>Implications:</strong> In the short run, firms may earn abnormal profits or losses. In the long run, entry of new firms erodes abnormal profits, leading to only normal profits. This market is less efficient than perfect competition due to product differentiation costs.</p>
            </section>

            {/* Oligopoly */}
            <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-3">Oligopoly</h3>
                <p className="mb-4">
                    An oligopoly is characterized by a few large firms that dominate the industry. Products may be homogeneous (e.g., steel) or differentiated (e.g., smartphones).
                </p>
                <p className="mb-4"><strong>Characteristics:</strong> Few large firms, homogeneous or differentiated products, significant barriers to entry, interdependent firms.</p>
                <p className="mb-4"><strong>Behavior of Firms:</strong> The key feature is interdependence among firms. One firm's decisions (price, output, advertising) significantly influence others. Firms may engage in price wars or collusion.</p>
                <p className="mb-4"><strong>Implications:</strong> No single model fits all oligopolies. Two common models are:
                    <ul className="list-disc list-inside mt-2">
                        <li><strong>Kinked Demand Curve:</strong> Suggests price rigidity. Firms are hesitant to change prices due to expected reactions from competitors.</li>
                        <li><strong>Collusion/Cartel:</strong> Firms may cooperate to fix prices and output (e.g., OPEC). This leads to higher prices and reduced output.</li>
                    </ul>
                </p>
                <p className="mb-4"><strong>Firm Equilibrium:</strong> Varies depending on whether firms compete or collude. If they collude, they may earn supernormal profits.</p>
            </section>

            {/* Comparison Table */}
            <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-3">Comparison Table of Market Structures</h3>
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
            </section>

            {/* Conclusion */}
            <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-3">Conclusion</h3>
                <p className="mb-4">
                    Understanding market structures is crucial for firms and policymakers. It helps in making informed decisions regarding pricing, production, and regulations. Each market structure presents different challenges and opportunities for both firms and consumers.
                </p>
            </section>
        </div>
    );
};

export default Chapter2_MarketStructures;
