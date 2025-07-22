import { useState } from "react";

export default function FinanceCalculator() {
  const [amount, setAmount] = useState(100000);
  const [period, setPeriod] = useState("12");
  const [apy, setApy] = useState(15.5);

  const calculateReturns = () => {
    const monthlyRate = apy / 100 / 12;
    const months = parseInt(period);
    const compoundInterest = amount * Math.pow(1 + monthlyRate, months);
    return compoundInterest - amount;
  };

  const yieldAmount = calculateReturns();
  const total = amount + yieldAmount;

  return (
    <section id="finance-calculator" className="py-20 brand-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4 no-blur">
            Calculate Your Returns
          </h2>
          <p className="text-xl text-[#6667AB] no-blur">
            See how much you could earn with our arbitrage vaults
          </p>
        </div>

        <div className="brand-card rounded-2xl shadow-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-black mb-3 no-blur">
                  Investment Amount (₹)
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full px-6 py-4 border-2 border-[#6667AB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6667AB] no-blur text-black font-semibold"
                  placeholder="Enter amount"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-3 no-blur">
                  Investment Period
                </label>
                <select
                  value={period}
                  onChange={(e) => setPeriod(e.target.value)}
                  className="w-full px-6 py-4 border-2 border-[#6667AB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6667AB] no-blur text-black font-semibold"
                >
                  <option value="1">1 Month</option>
                  <option value="3">3 Months</option>
                  <option value="6">6 Months</option>
                  <option value="12">1 Year</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-3 no-blur">
                  Expected APY
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="12"
                    max="18"
                    step="0.1"
                    value={apy}
                    onChange={(e) => setApy(Number(e.target.value))}
                    className="w-full h-3 bg-[#FAF9F6] rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #6667AB 0%, #6667AB ${((apy - 12) / 6) * 100}%, #FAF9F6 ${((apy - 12) / 6) * 100}%, #FAF9F6 100%)`
                    }}
                  />
                  <div className="flex justify-between text-sm text-[#6667AB] mt-2 font-semibold">
                    <span>12%</span>
                    <span className="font-bold text-black">{apy}%</span>
                    <span>18%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="brand-bg rounded-xl p-6 border-2 border-[#6667AB]">
              <h3 className="text-2xl font-bold text-black mb-6 no-blur">
                Projected Returns
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[#6667AB] font-semibold no-blur">Initial Investment</span>
                  <span className="font-bold text-black no-blur">₹{amount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#6667AB] font-semibold no-blur">Expected Yield</span>
                  <span className="font-bold text-[#6667AB] no-blur">₹{yieldAmount.toLocaleString()}</span>
                </div>
                <div className="border-t-2 border-[#6667AB] pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[#6667AB] font-semibold no-blur">Total Value</span>
                    <span className="text-3xl font-bold text-black no-blur">₹{total.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t-2 border-[#6667AB]">
                <div className="text-sm text-[#6667AB] mb-4 no-blur">
                  *Returns are projected based on historical performance and are not guaranteed
                </div>
                <button className="brand-button w-full py-4 px-6 rounded-xl font-bold no-blur">
                  Start Investing
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}