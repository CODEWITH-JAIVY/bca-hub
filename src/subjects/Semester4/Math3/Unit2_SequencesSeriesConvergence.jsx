const Unit2_SequencesSeriesConvergence = () => {
  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-bold">Unit II: Sequences, Series, and Convergence</h2>

      {/* Section 1: Sequence */}
      <h3 className="text-xl font-semibold">1. Sequence</h3>
      <p>
        <strong>Definition:</strong> A sequence is an ordered list of numbers. Each number in the sequence is called a term. We denote a sequence as a<sub>n</sub>, where a<sub>n</sub> represents the nth term.
      </p>

      <h4 className="font-semibold">1.1 Finite and Infinite Sequences</h4>
      <p>
        <strong>Finite Sequence:</strong> A sequence with a limited number of terms. Example: [2, 4, 6, 8].
      </p>
      <p>
        <strong>Infinite Sequence:</strong> A sequence with an unlimited number of terms. Example: [2, 4, 6, 8, ...].
      </p>

      <h4 className="font-semibold">1.2 Monotonic Sequences</h4>
      <p>
        <strong>Definition:</strong> A sequence a<sub>n</sub> is monotonic if it is either entirely non-increasing or non-decreasing.
      </p>
      <ul className="list-disc ml-6">
        <li><strong>Non-decreasing:</strong> a<sub>n</sub> ≤ a<sub>n+1</sub>. Example: [1, 2, 2, 3, 4, ...]</li>
        <li><strong>Non-increasing:</strong> a<sub>n</sub> ≥ a<sub>n+1</sub>. Example: [5, 4, 4, 3, 2, ...]</li>
      </ul>

      <h4 className="font-semibold">1.3 Bounded Sequences</h4>
      <p>
        <strong>Definition:</strong> A sequence a<sub>n</sub> is bounded if there exist real numbers M and N such that M ≤ a<sub>n</sub> ≤ N for all n.
      </p>
      <ul className="list-disc ml-6">
        <li><strong>Bounded Above:</strong> There exists N such that a<sub>n</sub> ≤ N.</li>
        <li><strong>Bounded Below:</strong> There exists M such that M ≤ a<sub>n</sub>.</li>
      </ul>

      {/* Section 2: Limit of a Sequence */}
      <h3 className="text-xl font-semibold">2. Limit of a Sequence</h3>
      <p>
        <strong>Definition:</strong> The limit of a sequence a<sub>n</sub> is L, written as lim<sub>n→∞</sub> a<sub>n</sub> = L, if for every ε &gt; 0, there exists a positive integer N such that |a<sub>n</sub> - L| &lt; ε for all n &gt; N.
      </p>

      <h4 className="font-semibold">2.1 Convergence of a Sequence</h4>
      <p>
        A sequence a<sub>n</sub> is said to converge to L if lim<sub>n→∞</sub> a<sub>n</sub> = L. Otherwise, it is divergent.
      </p>
      <p><strong>Example:</strong> The sequence a<sub>n</sub> = 1/n converges to 0.</p>

      {/* Section 3: Series */}
      <h3 className="text-xl font-semibold">3. Series</h3>
      <p>
        <strong>Definition:</strong> A series is the sum of the terms of a sequence: a<sub>1</sub> + a<sub>2</sub> + a<sub>3</sub> + ... or Σ<sub>n=1</sub><sup>∞</sup> a<sub>n</sub>.
      </p>

      <h4 className="font-semibold">3.1 Partial Sums</h4>
      <p>
        The nth partial sum is S<sub>n</sub> = a<sub>1</sub> + a<sub>2</sub> + ... + a<sub>n</sub>.
      </p>

      <h4 className="font-semibold">3.2 Convergent Series</h4>
      <p>
        If the sequence of partial sums S<sub>n</sub> converges to S, then the series converges; otherwise, it diverges.
      </p>

      {/* Section 4: Theorems on Convergence of Series */}
      <h3 className="text-xl font-semibold">4. Theorems on Convergence of Series</h3>

      <h4 className="font-semibold">4.1 Alternating Series</h4>
      <p>An alternating series has terms that change signs, e.g., Σ<sub>n=1</sub><sup>∞</sup> (-1)<sup>n-1</sup> b<sub>n</sub>, where b<sub>n</sub> &gt; 0.</p>

      <h4 className="font-semibold">4.2 Conditional Convergence</h4>
      <p>A series converges conditionally if it converges, but the series of absolute values diverges.</p>

      <h4 className="font-semibold">4.3 Leibniz Test</h4>
      <p>If b<sub>n</sub> is positive, decreasing, and lim<sub>n→∞</sub> b<sub>n</sub> = 0, then the alternating series converges.</p>

      <h4 className="font-semibold">4.4 Limit Comparison Test</h4>
      <p>If a<sub>n</sub> and b<sub>n</sub> are positive and lim<sub>n→∞</sub> (a<sub>n</sub>/b<sub>n</sub>) = c (0 &lt; c &lt; ∞), then both series either converge or diverge.</p>

      <h4 className="font-semibold">4.5 Ratio Test</h4>
      <ul className="list-disc ml-6">
        <li>If lim<sub>n→∞</sub> (a<sub>n+1</sub>/a<sub>n</sub>) = L &lt; 1, series converges.</li>
        <li>If L &gt; 1, it diverges.</li>
        <li>If L = 1, test is inconclusive.</li>
      </ul>

      <h4 className="font-semibold">4.6 Cauchy’s Root Test</h4>
      <ul className="list-disc ml-6">
        <li>If lim<sub>n→∞</sub> (a<sub>n</sub>)<sup>1/n</sup> = L &lt; 1, series converges.</li>
        <li>If L &gt; 1, it diverges.</li>
        <li>If L = 1, test is inconclusive.</li>
      </ul>

      <h4 className="font-semibold">4.7 Binomial and Logarithmic Series</h4>
      <p><strong>Binomial:</strong> (1 + x)<sup>k</sup> = Σ<sub>n=0</sub><sup>∞</sup> C(k, n)x<sup>n</sup>, for |x| &lt; 1</p>
      <p><strong>Logarithmic:</strong> ln(1 + x) = Σ<sub>n=1</sub><sup>∞</sup> ((-1)<sup>n+1</sup> x<sup>n</sup>)/n, for |x| &lt; 1</p>

      <h4 className="font-semibold">4.8 Raabe’s Test</h4>
      <p>If lim<sub>n→∞</sub> n((a<sub>n</sub>/a<sub>n+1</sub>) - 1) = L:</p>
      <ul className="list-disc ml-6">
        <li>L &gt; 1 → converges</li>
        <li>L &lt; 1 → diverges</li>
        <li>L = 1 → inconclusive</li>
      </ul>

      <h4 className="font-semibold">4.9 Logarithmic Test</h4>
      <p>If lim<sub>n→∞</sub> ln(n)·n((a<sub>n</sub>/a<sub>n+1</sub>) - 1) = L:</p>
      <ul className="list-disc ml-6">
        <li>L &gt; 1 → converges</li>
        <li>L &lt; 1 → diverges</li>
        <li>L = 1 → inconclusive</li>
      </ul>

      <h4 className="font-semibold">4.10 Cauchy’s Integral Test</h4>
      <p>
        If f(x) is continuous, positive, decreasing on [1, ∞), and a<sub>n</sub> = f(n), then Σ<sub>n=1</sub><sup>∞</sup> a<sub>n</sub> converges if and only if ∫<sub>1</sub><sup>∞</sup> f(x) dx converges.
      </p>
    </div>
  );
};

export default Unit2_SequencesSeriesConvergence;
