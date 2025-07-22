import { Shield, TrendingUp, Lock, Clock, Globe, Award, CheckCircle } from "lucide-react";
import { Link } from "wouter";

export default function Features() {
  const features = [
    {
      icon: Shield,
      title: "Regulatory Compliance",
      description: "FIU-IND registered with full FEMA and IFSCA compliance for international operations."
    },
    {
      icon: TrendingUp,
      title: "Superior Returns",
      description: "Earn 15-18% annual yields through sophisticated arbitrage strategies across multiple exchanges."
    },
    {
      icon: Lock,
      title: "Self-Custody Security",
      description: "Your assets remain in your control with multi-signature wallet technology and smart contracts."
    },
    {
      icon: Clock,
      title: "Instant Liquidity",
      description: "Withdraw funds anytime with no lock-up periods and instant settlement to your wallet."
    },
    {
      icon: Globe,
      title: "Multi-Chain Support",
      description: "Diversify across Ethereum, BSC, and Base networks for optimal risk management."
    },
    {
      icon: Award,
      title: "Institutional Grade",
      description: "Professional infrastructure designed for NRIs, HNIs, and sophisticated investors."
    }
  ];

  const stats = [
    { label: "Total Value Locked", value: "₹2.5B+", change: "+45%" },
    { label: "Active Users", value: "12K+", change: "+120%" },
    { label: "Average APY", value: "16.8%", change: "+2.1%" },
    { label: "Uptime", value: "99.9%", change: "100%" }
  ];

  return (
    <section id="features" className="py-24 brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white border-2 border-[#6667AB] text-base font-semibold text-[#6667AB] mb-8 no-blur">
            <CheckCircle className="w-5 h-5 mr-3 text-[#6667AB]" />
            Trusted by 12,000+ Investors
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-8 text-balance no-blur">
            Built for the Future of Finance
          </h2>
          <p className="text-xl text-[#6667AB] max-w-3xl mx-auto leading-relaxed no-blur">
            Experience institutional-grade crypto yields with full regulatory compliance and maximum security.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="brand-card rounded-2xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-black mb-2 no-blur">{stat.value}</div>
              <div className="text-sm text-[#6667AB] mb-1 no-blur">{stat.label}</div>
              <div className="text-sm text-[#6667AB] font-semibold no-blur">{stat.change}</div>
            </div>
          ))}
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="brand-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
            >
              <div className="w-20 h-20 bg-white border-2 border-[#6667AB] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-10 h-10 text-[#6667AB]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4 no-blur">{feature.title}</h3>
              <p className="text-[#6667AB] leading-relaxed no-blur">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="brand-gradient rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-4xl font-bold mb-4 text-white no-blur">Ready to Start Earning?</h3>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto no-blur">
              Join thousands of investors earning institutional-grade yields with complete regulatory compliance.
            </p>
            <Link href="/dashboard">
              <button className="bg-white text-[#6667AB] px-8 py-4 rounded-xl font-bold hover:bg-[#FAF9F6] transition-colors duration-300 shadow-lg border-2 border-white no-blur">
                Get Started Today
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}