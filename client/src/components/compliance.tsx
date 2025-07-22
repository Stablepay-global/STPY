import { Award, Scale, Shield, Lock } from "lucide-react";

export default function Compliance() {
  const complianceItems = [
    {
      icon: Award,
      title: "FIU-IND Registered",
      description: "Registered with Financial Intelligence Unit of India",
      color: "text-secondary",
      bgColor: "bg-secondary/20",
    },
    {
      icon: Scale,
      title: "IFSCA Benefits",
      description: "Ideal for FDI asset yield & fee-free remittance",
      color: "text-primary",
      bgColor: "bg-primary/20",
    },
    {
      icon: Shield,
      title: "FEMA Reporting",
      description: "Foreign Exchange Management Act compliant",
      color: "text-accent",
      bgColor: "bg-accent/20",
    },
    {
      icon: Lock,
      title: "Self-Custody",
      description: "Your keys, your funds, your control",
      color: "text-purple-400",
      bgColor: "bg-purple-500/20",
    },
  ];

  const chains = [
    {
      name: "Ethereum",
      currency: "USDC/USDT",
      iconColor: "text-blue-400",
      bgColor: "bg-blue-500/20",
    },
    {
      name: "BSC",
      currency: "USDC/USDT",
      iconColor: "text-yellow-400",
      bgColor: "bg-yellow-500/20",
    },
    {
      name: "Base",
      currency: "USDC",
      iconColor: "text-blue-600",
      bgColor: "bg-blue-600/20",
    },
    {
      name: "Polygon",
      currency: "USDC/USDT",
      iconColor: "text-purple-400",
      bgColor: "bg-purple-500/20",
    },
  ];

  return (
    <section id="compliance" className="py-20 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Regulatory Compliance & Security
          </h2>
          <p className="text-xl text-neutral-300">
            Built with institutional-grade compliance and security standards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {complianceItems.map((item, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/5 rounded-xl border border-white/10"
            >
              <div
                className={`w-16 h-16 ${item.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
              >
                <item.icon className={`h-8 w-8 ${item.color}`} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-neutral-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Multi-Chain Gateway Support
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {chains.map((chain, index) => (
              <div key={index} className="p-4">
                <div
                  className={`w-12 h-12 ${chain.bgColor} rounded-full flex items-center justify-center mx-auto mb-2`}
                >
                  <div className={`w-6 h-6 ${chain.iconColor} rounded-full`}>
                    <svg viewBox="0 0 24 24" className="w-full h-full">
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        fill="currentColor"
                        opacity="0.5"
                      />
                      <circle cx="12" cy="12" r="6" fill="currentColor" />
                    </svg>
                  </div>
                </div>
                <div className="font-medium">{chain.name}</div>
                <div className="text-sm text-neutral-400">{chain.currency}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
