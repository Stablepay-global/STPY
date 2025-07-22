import { Check, X } from "lucide-react";

export default function ComparisonTable() {
  const comparisonData = [
    {
      feature: "Annual Yield",
      bankFD: "5.5%–7.5%",
      realEstate: "2.5%–8.5%",
      mutualFunds: "7%–10%",
      stablePay: "12%–18%",
      highlight: true,
    },
    {
      feature: "Liquidity",
      bankFD: "Low (1–5 year lock)",
      realEstate: "Very low",
      mutualFunds: "Moderate",
      stablePay: "High (anytime)",
      highlight: true,
    },
    {
      feature: "Min Investment",
      bankFD: "₹10,000",
      realEstate: "₹25-50 lakh",
      mutualFunds: "₹5,000",
      stablePay: "$500 USD",
      highlight: true,
    },
    {
      feature: "Time to Start",
      bankFD: "3–5 days",
      realEstate: "Weeks/months",
      mutualFunds: "2–3 days",
      stablePay: "< 15 minutes",
      highlight: true,
    },
    {
      feature: "Transparency",
      bankFD: "Medium",
      realEstate: "Low",
      mutualFunds: "Medium",
      stablePay: "Full onchain",
      highlight: true,
    },
  ];

  return (
    <section id="comparison" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">
            Traditional vs Stable Pay
          </h2>
          <p className="text-xl text-neutral-600">
            See how we outperform traditional investment options
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-neutral-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">
                    Bank FD/NRI
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">
                    Real Estate
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">
                    Mutual Funds
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold bg-primary">
                    Stable Pay Vault
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {comparisonData.map((row, index) => (
                  <tr key={index} className="hover:bg-neutral-50">
                    <td className="px-6 py-4 font-medium text-neutral-900">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-center text-neutral-600">
                      {row.bankFD}
                    </td>
                    <td className="px-6 py-4 text-center text-neutral-600">
                      {row.realEstate}
                    </td>
                    <td className="px-6 py-4 text-center text-neutral-600">
                      {row.mutualFunds}
                    </td>
                    <td className="px-6 py-4 text-center text-secondary font-bold">
                      {row.stablePay}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
