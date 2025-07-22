import { Building2, TrendingUp, Globe, DollarSign, ArrowRightLeft, Zap, Shield } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function IFSCABenefits() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "FDI Asset Yield",
      description: "Convert USD stablecoins into high-yield Indian assets through compliant arbitrage",
      features: [
        "12-18% annual returns on USD deposits",
        "Exposure to Indian market premiums",
        "Regulatory-compliant FDI structure"
      ],
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: ArrowRightLeft,
      title: "Fee-Free Remittance",
      description: "Eliminate traditional banking fees for cross-border fund transfers",
      features: [
        "Zero wire transfer fees",
        "No currency conversion spreads",
        "Instant settlement via stablecoins"
      ],
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Globe,
      title: "Multi-Chain Access",
      description: "Leverage global liquidity across multiple blockchain networks",
      features: [
        "Ethereum, BSC, Base, Polygon support",
        "USDC/USDT compatibility",
        "Cross-chain arbitrage opportunities"
      ],
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
  ];

  const comparison = [
    {
      method: "Traditional Banking",
      fees: "2-5%",
      time: "3-7 days",
      yield: "0-2%",
      compliance: "Complex",
    },
    {
      method: "Stable Pay Arbitrage",
      fees: "0%",
      time: "< 15 minutes",
      yield: "12-18%",
      compliance: "FIU-IND Ready",
    },
  ];

  return (
    <section id="ifsca-benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-amber-500/20 text-amber-700 px-4 py-2 text-sm font-medium mb-4">
            IFSCA Entity Benefits
          </Badge>
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">
            Stablecoin FDI Benefits for IFSCA Entities
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            How international financial service centers can leverage Stable Pay's arbitrage vaults 
            for superior FDI yields and fee-free remittance to India.
          </p>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-neutral-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className={`w-16 h-16 ${benefit.bgColor} rounded-full flex items-center justify-center mb-6`}>
                  <benefit.icon className={`h-8 w-8 ${benefit.color}`} />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{benefit.title}</h3>
                <p className="text-neutral-600 mb-6">{benefit.description}</p>
                <ul className="space-y-2">
                  {benefit.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-neutral-700">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-gradient-to-br from-neutral-50 to-blue-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-neutral-900 text-center mb-8">
            Traditional vs Stablecoin FDI Remittance
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="text-left py-4 px-6 font-semibold text-neutral-900">Method</th>
                  <th className="text-center py-4 px-6 font-semibold text-neutral-900">Transfer Fees</th>
                  <th className="text-center py-4 px-6 font-semibold text-neutral-900">Settlement Time</th>
                  <th className="text-center py-4 px-6 font-semibold text-neutral-900">Asset Yield</th>
                  <th className="text-center py-4 px-6 font-semibold text-neutral-900">Compliance</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => (
                  <tr key={index} className={index === 1 ? "bg-primary/5" : ""}>
                    <td className="py-4 px-6 font-medium text-neutral-900">{row.method}</td>
                    <td className="py-4 px-6 text-center">
                      <span className={row.fees === "0%" ? "text-secondary font-bold" : "text-neutral-600"}>
                        {row.fees}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className={row.time.includes("minutes") ? "text-secondary font-bold" : "text-neutral-600"}>
                        {row.time}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className={row.yield.includes("12-18") ? "text-secondary font-bold" : "text-neutral-600"}>
                        {row.yield}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center text-neutral-600">{row.compliance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Use Cases for IFSCA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-neutral-200">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building2 className="h-6 w-6 text-primary mr-3" />
                IFSCA Banks & Funds
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-600 mb-4">
                International banks and investment funds in GIFT City can utilize Stable Pay for:
              </p>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li className="flex items-start">
                  <DollarSign className="h-4 w-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                  Converting USD treasury holdings into high-yield Indian market exposure
                </li>
                <li className="flex items-start">
                  <Zap className="h-4 w-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                  Instant remittance services for clients without traditional banking delays
                </li>
                <li className="flex items-start">
                  <Globe className="h-4 w-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                  Multi-chain portfolio diversification across blockchain networks
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-neutral-200">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-6 w-6 text-accent mr-3" />
                Fintech & Trading Firms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-600 mb-4">
                IFSCA-registered fintech companies and trading firms can leverage:
              </p>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li className="flex items-start">
                  <ArrowRightLeft className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  Arbitrage opportunities between offshore USD and Indian INR markets
                </li>
                <li className="flex items-start">
                  <Shield className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  Regulatory-compliant FDI structure with full transparency
                </li>
                <li className="flex items-start">
                  <Building2 className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  Corporate treasury optimization for idle USD capital
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}