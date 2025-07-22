import { TrendingUp, RefreshCw, DollarSign, Clock, Shield, Eye } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ArbitrageVault() {
  const vaultStats = [
    {
      label: "Average Premium",
      value: "1.5%",
      description: "per 15-day cycle",
      icon: TrendingUp,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      label: "Annualized Yield",
      value: "~18%",
      description: "from arbitrage cycles",
      icon: DollarSign,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      label: "Cycle Duration",
      value: "15 Days",
      description: "automatic payouts",
      icon: Clock,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      label: "Lock-in Period",
      value: "None",
      description: "full liquidity",
      icon: RefreshCw,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ];

  const flowSteps = [
    {
      step: "1",
      title: "Deposit Stablecoins",
      description: "Deposit USDC/USDT on supported chains (ETH, BSC, Base)",
      color: "bg-blue-500",
    },
    {
      step: "2",
      title: "Vault Routing",
      description: "Funds routed to onchain vaults visible on Vault Explorer",
      color: "bg-purple-500",
    },
    {
      step: "3",
      title: "Arbitrage Execution",
      description: "Capture premium between USD stablecoins and INR market",
      color: "bg-green-500",
    },
    {
      step: "4",
      title: "Yield Distribution",
      description: "Receive returns every 15 days based on performance",
      color: "bg-orange-500",
    },
  ];

  const complianceFeatures = [
    {
      title: "FIU-IND Registered",
      description: "Fully compliant arbitrage execution",
      icon: Shield,
    },
    {
      title: "Onchain Transparency",
      description: "Live explorer & RPC visibility",
      icon: Eye,
    },
    {
      title: "Self-Custody Control",
      description: "Your funds, your control",
      icon: RefreshCw,
    },
  ];

  return (
    <section id="arbitrage-vault" className="py-20 bg-gradient-to-br from-neutral-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-primary/20 text-primary px-4 py-2 text-sm font-medium mb-4">
            Arbitrage Vault Strategy
          </Badge>
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">
            How Onchain Deposits Generate Superior Returns
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Stable Pay's Arbitrage Vault captures stablecoin premiums between offshore and Indian markets, 
            delivering 12-18% annual yields through compliant, low-risk arbitrage execution.
          </p>
        </div>

        {/* Vault Performance Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {vaultStats.map((stat, index) => (
            <Card key={index} className="text-center border-neutral-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className={`w-16 h-16 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-neutral-900 mb-1">{stat.value}</div>
                <div className="text-lg font-semibold text-neutral-700 mb-1">{stat.label}</div>
                <div className="text-sm text-neutral-500">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How It Works Flow */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-neutral-900 text-center mb-12">
            How the Arbitrage Vault Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {flowSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 border border-neutral-200 h-full">
                  <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg mb-4`}>
                    {step.step}
                  </div>
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2">{step.title}</h4>
                  <p className="text-neutral-600 text-sm">{step.description}</p>
                </div>
                {index < flowSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-neutral-300 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Real Example */}
        <div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-lg mb-16">
          <h3 className="text-2xl font-bold text-neutral-900 mb-6 text-center">
            Real Vault Performance Example
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-primary">$10,000</div>
              <div className="text-sm text-neutral-600">Initial USDC Deposit</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-secondary">$150</div>
              <div className="text-sm text-neutral-600">Yield per 15 Days</div>
            </div>
            <div className="text-center p-4 bg-amber-50 rounded-lg">
              <div className="text-2xl font-bold text-accent">~18%</div>
              <div className="text-sm text-neutral-600">Annualized Return</div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-neutral-50 rounded-lg">
            <div className="flex items-center justify-between text-sm">
              <span className="text-neutral-600">Lock-in Period:</span>
              <span className="font-semibold text-neutral-900">None - Full Liquidity</span>
            </div>
            <div className="flex items-center justify-between text-sm mt-2">
              <span className="text-neutral-600">Onchain Visibility:</span>
              <span className="font-semibold text-secondary">Live Explorer & RPC</span>
            </div>
          </div>
        </div>

        {/* Why Low Risk */}
        <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-2xl p-8 text-white mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Why This Strategy Is Low-Risk</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-secondary" />
              </div>
              <h4 className="font-semibold mb-2">No Volatile Tokens</h4>
              <p className="text-neutral-300 text-sm">Only stable assets like USDC/USDT</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">No Leveraged Trades</h4>
              <p className="text-neutral-300 text-sm">Yield from market spread, not speculation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <h4 className="font-semibold mb-2">No Custody Risk</h4>
              <p className="text-neutral-300 text-sm">Funds in smart contracts, not wallets</p>
            </div>
          </div>
        </div>

        {/* Compliance Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {complianceFeatures.map((feature, index) => (
            <Card key={index} className="text-center border-neutral-200">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">{feature.title}</h4>
                <p className="text-neutral-600 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}