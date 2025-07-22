import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Features from "@/components/features";
import FinanceCalculator from "@/components/finance-calculator";
import ArbitrageVault from "@/components/arbitrage-vault";
import IFSCABenefits from "@/components/ifsca-benefits";
import ComparisonTable from "@/components/comparison-table";
import TargetAudiences from "@/components/target-audiences";
import Compliance from "@/components/compliance";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import { WalletConnection } from "@/components/wallet-connection-new";

export default function Home() {
  return (
    <div className="min-h-screen brand-bg">
      <Navigation />
      <Hero />
      <Features />
      <FinanceCalculator />
      <ArbitrageVault />
      <IFSCABenefits />
      <ComparisonTable />
      <TargetAudiences />
      <Compliance />
      <CTA />
      <Footer />
    </div>
  );
}
