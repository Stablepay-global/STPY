import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  DollarSign, 
  PieChart, 
  ArrowUpRight, 
  ArrowDownRight, 
  Wallet, 
  Shield, 
  Clock,
  Copy
} from "lucide-react";

export default function Dashboard() {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  const connectWallet = async () => {
    setIsConnected(true);
    setWalletAddress("0x742d35Cc6634C0532925a3b8D8E5c2F1A3E8A8B6");
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(walletAddress);
  };

  const vaultData = [
    {
      name: "USDC Arbitrage Vault",
      apy: "15.2%",
      balance: "₹85,000",
      earned: "+₹12,980",
      status: "Active",
      network: "Ethereum"
    },
    {
      name: "USDT Arbitrage Vault",
      apy: "16.8%",
      balance: "₹42,450",
      earned: "+₹5,770",
      status: "Active",
      network: "BSC"
    },
    {
      name: "BUSD Arbitrage Vault",
      apy: "14.5%",
      balance: "₹28,720",
      earned: "+₹3,420",
      status: "Active",
      network: "Base"
    }
  ];

  const recentTransactions = [
    {
      type: "Deposit",
      amount: "₹25,000",
      vault: "USDC Arbitrage",
      time: "2 hours ago",
      status: "Completed"
    },
    {
      type: "Yield",
      amount: "+₹1,250",
      vault: "USDT Arbitrage",
      time: "1 day ago",
      status: "Completed"
    },
    {
      type: "Withdraw",
      amount: "₹15,000",
      vault: "BUSD Arbitrage",
      time: "3 days ago",
      status: "Completed"
    }
  ];

  if (!isConnected) {
    return (
      <div className="min-h-screen brand-bg flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="brand-card rounded-3xl shadow-2xl p-8">
            <div className="text-center pb-8">
              <div className="w-20 h-20 brand-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                <Wallet className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-black mb-4 no-blur">Connect Your Wallet</h2>
              <p className="text-[#6667AB] mb-8 no-blur">
                Connect your wallet to start earning 15% yields on your crypto assets
              </p>
            </div>
            <div className="space-y-6">
              <Button 
                onClick={connectWallet}
                className="brand-button w-full py-4 text-lg rounded-xl no-blur"
              >
                Connect Wallet
              </Button>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-white border-2 border-[#6667AB] rounded-full flex items-center justify-center mb-2">
                    <Shield className="w-6 h-6 text-[#6667AB]" />
                  </div>
                  <span className="text-xs text-[#6667AB] font-semibold no-blur">Secure</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-white border-2 border-[#6667AB] rounded-full flex items-center justify-center mb-2">
                    <Clock className="w-6 h-6 text-[#6667AB]" />
                  </div>
                  <span className="text-xs text-[#6667AB] font-semibold no-blur">No Lock-up</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-white border-2 border-[#6667AB] rounded-full flex items-center justify-center mb-2">
                    <TrendingUp className="w-6 h-6 text-[#6667AB]" />
                  </div>
                  <span className="text-xs text-[#6667AB] font-semibold no-blur">15% APY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen brand-bg">
      {/* Header */}
      <div className="bg-white border-b-2 border-[#6667AB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 brand-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg no-blur">S</span>
              </div>
              <h1 className="text-2xl font-bold text-black no-blur">Stable Pay</h1>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white border-2 border-[#6667AB] rounded-lg px-4 py-2">
                <div className="w-3 h-3 bg-[#6667AB] rounded-full"></div>
                <span className="text-sm font-semibold text-black no-blur">
                  {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
                </span>
                <button onClick={copyAddress} className="text-[#6667AB] hover:text-black">
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Portfolio Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="brand-card md:col-span-2 rounded-2xl p-6 shadow-lg">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-black no-blur">Portfolio Balance</h3>
            </div>
            <div>
              <div className="text-5xl font-bold text-black mb-2 no-blur">₹1,56,170</div>
              <div className="flex items-center gap-2 text-sm">
                <ArrowUpRight className="w-4 h-4 text-[#6667AB]" />
                <span className="text-[#6667AB] font-semibold no-blur">+₹22,170 (16.5%)</span>
                <span className="text-[#6667AB] no-blur">this month</span>
              </div>
            </div>
          </div>
          
          <div className="brand-card rounded-2xl p-6 shadow-lg">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-black no-blur">Active Vaults</h3>
            </div>
            <div>
              <div className="text-4xl font-bold text-black mb-2 no-blur">3</div>
              <div className="text-sm text-[#6667AB] no-blur">Across 3 networks</div>
            </div>
          </div>
          
          <div className="brand-card rounded-2xl p-6 shadow-lg">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-black no-blur">Avg. APY</h3>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#6667AB] mb-2 no-blur">15.5%</div>
              <div className="text-sm text-[#6667AB] no-blur">Annual yield</div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="vaults" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-white border-2 border-[#6667AB] rounded-xl">
            <TabsTrigger value="vaults" className="rounded-lg font-semibold no-blur">Vaults</TabsTrigger>
            <TabsTrigger value="transactions" className="rounded-lg font-semibold no-blur">Transactions</TabsTrigger>
            <TabsTrigger value="analytics" className="rounded-lg font-semibold no-blur">Analytics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="vaults" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-black no-blur">Your Vaults</h2>
              <Button className="brand-button px-6 py-3 rounded-xl no-blur">
                <DollarSign className="w-4 h-4 mr-2" />
                Add Funds
              </Button>
            </div>
            
            <div className="grid gap-6">
              {vaultData.map((vault, index) => (
                <div key={index} className="brand-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-white border-2 border-[#6667AB] rounded-full flex items-center justify-center">
                        <PieChart className="w-8 h-8 text-[#6667AB]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-black no-blur">{vault.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="px-3 py-1 bg-white border-2 border-[#6667AB] rounded-full text-sm font-semibold text-[#6667AB] no-blur">
                            {vault.network}
                          </span>
                          <span className="px-3 py-1 bg-[#6667AB] border-2 border-[#6667AB] rounded-full text-sm font-semibold text-white no-blur">
                            {vault.apy} APY
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-black no-blur">{vault.balance}</div>
                      <div className="text-sm text-[#6667AB] font-semibold no-blur">{vault.earned}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="transactions" className="space-y-6">
            <h2 className="text-3xl font-bold text-black no-blur">Recent Transactions</h2>
            <div className="brand-card rounded-2xl shadow-lg">
              <div className="divide-y-2 divide-[#6667AB]">
                {recentTransactions.map((tx, index) => (
                  <div key={index} className="p-6 flex items-center justify-between hover:bg-[#FAF9F6]">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white border-2 border-[#6667AB] rounded-full flex items-center justify-center">
                        {tx.type === 'Deposit' ? (
                          <ArrowDownRight className="w-6 h-6 text-[#6667AB]" />
                        ) : tx.type === 'Yield' ? (
                          <TrendingUp className="w-6 h-6 text-[#6667AB]" />
                        ) : (
                          <ArrowUpRight className="w-6 h-6 text-[#6667AB]" />
                        )}
                      </div>
                      <div>
                        <div className="font-bold text-black no-blur">{tx.type}</div>
                        <div className="text-sm text-[#6667AB] no-blur">{tx.vault}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-black no-blur">{tx.amount}</div>
                      <div className="text-sm text-[#6667AB] no-blur">{tx.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="analytics" className="space-y-6">
            <h2 className="text-3xl font-bold text-black no-blur">Performance Analytics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="brand-card rounded-2xl p-6 shadow-lg">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-black no-blur">Monthly Performance</h3>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#6667AB] mb-2 no-blur">+16.5%</div>
                  <div className="text-sm text-[#6667AB] no-blur">Total return this month</div>
                </div>
              </div>
              <div className="brand-card rounded-2xl p-6 shadow-lg">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-black no-blur">Total Earned</h3>
                </div>
                <div>
                  <div className="text-4xl font-bold text-black mb-2 no-blur">₹22,170</div>
                  <div className="text-sm text-[#6667AB] no-blur">Since joining</div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}