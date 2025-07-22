import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, Zap } from "lucide-react";

export default function Hero() {
  const scrollToCalculator = () => {
    const element = document.getElementById("finance-calculator");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden brand-bg min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-white border-2 border-[#6667AB] text-base font-semibold text-[#6667AB] no-blur">
                <Shield className="w-5 h-5 mr-3 text-[#6667AB]" />
                FIU-IND Registered & Regulated
              </div>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black mb-8 leading-tight text-balance no-blur">
              Institutional{" "}
              <span className="text-[#6667AB]">
                Yields
              </span>{" "}
              for Everyone
            </h1>
            
            <p className="text-xl text-[#6667AB] mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed no-blur">
              Earn up to 18% annual returns through sophisticated arbitrage strategies. 
              India's first regulated crypto yield platform with full regulatory compliance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16">
              <Link href="/dashboard">
                <Button className="brand-button px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group no-blur">
                  Start Earning Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button
                onClick={scrollToCalculator}
                className="brand-button-outline px-8 py-4 text-lg rounded-xl transition-all duration-300 no-blur"
              >
                Calculate Returns
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="w-16 h-16 bg-white border-2 border-[#6667AB] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-[#6667AB]" />
                </div>
                <div className="text-sm font-semibold text-black no-blur">FIU-IND</div>
                <div className="text-xs text-[#6667AB] no-blur">Registered</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white border-2 border-[#6667AB] rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-[#6667AB]" />
                </div>
                <div className="text-sm font-semibold text-black no-blur">18% APY</div>
                <div className="text-xs text-[#6667AB] no-blur">Max Returns</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white border-2 border-[#6667AB] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-[#6667AB]" />
                </div>
                <div className="text-sm font-semibold text-black no-blur">Instant</div>
                <div className="text-xs text-[#6667AB] no-blur">Liquidity</div>
              </div>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="relative">
            <div className="brand-card rounded-3xl shadow-2xl p-8">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-black no-blur">Portfolio Overview</h3>
                    <p className="text-sm text-[#6667AB] no-blur">Real-time performance</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-[#6667AB] rounded-full"></div>
                    <span className="text-sm font-semibold text-black no-blur">Live</span>
                  </div>
                </div>
                
                {/* Balance Display */}
                <div className="brand-gradient rounded-2xl p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-white/80 text-sm font-medium no-blur">Total Balance</p>
                      <p className="text-4xl font-bold text-white no-blur">₹2,45,170</p>
                    </div>
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-white font-semibold no-blur">+₹45,170 (22.6%)</span>
                    <span className="text-white/80 no-blur">since last month</span>
                  </div>
                </div>
                
                {/* Active Positions */}
                <div className="space-y-4">
                  <h4 className="font-bold text-black no-blur">Active Positions</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 brand-bg rounded-xl border-2 border-[#6667AB]">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white border-2 border-[#6667AB] rounded-full flex items-center justify-center">
                          <div className="w-6 h-6 bg-[#6667AB] rounded-full"></div>
                        </div>
                        <div>
                          <p className="font-semibold text-black no-blur">USDC Arbitrage</p>
                          <p className="text-sm text-[#6667AB] font-semibold no-blur">18.2% APY</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-black no-blur">₹1,25,000</p>
                        <p className="text-sm text-[#6667AB] font-semibold no-blur">+₹22,750</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 brand-bg rounded-xl border-2 border-[#6667AB]">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white border-2 border-[#6667AB] rounded-full flex items-center justify-center">
                          <div className="w-6 h-6 bg-[#6667AB] rounded-full"></div>
                        </div>
                        <div>
                          <p className="font-semibold text-black no-blur">USDT Arbitrage</p>
                          <p className="text-sm text-[#6667AB] font-semibold no-blur">16.8% APY</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-black no-blur">₹1,20,170</p>
                        <p className="text-sm text-[#6667AB] font-semibold no-blur">+₹20,170</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}