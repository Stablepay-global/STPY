import { Globe, Crown, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function TargetAudiences() {
  const handleNRISignup = () => {
    // TODO: Implement NRI signup functionality
    console.log("NRI signup clicked");
  };

  const handleHNISignup = () => {
    // TODO: Implement HNI signup functionality
    console.log("HNI signup clicked");
  };

  const handleCorporateSignup = () => {
    // TODO: Implement corporate signup functionality
    console.log("Corporate signup clicked");
  };

  const audiences = [
    {
      icon: Globe,
      title: "Non-Resident Indians (NRIs)",
      description:
        "Access high-yield India assets with self-custody vault delivering 1–1.5% monthly returns",
      features: [
        "No physical presence required",
        "Full repatriation rights",
        "FEMA compliant reporting",
      ],
      buttonText: "Get Started as NRI",
      buttonAction: handleNRISignup,
      bgGradient: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      iconBg: "bg-primary/20",
      iconColor: "text-primary",
      buttonColor: "bg-primary hover:bg-blue-700",
    },
    {
      icon: Crown,
      title: "High Net Worth Individuals",
      description:
        "Short-term liquidity with superior returns through 15-day cycles and no lock-in",
      features: [
        "15-day payout cycles",
        "Auto-reporting dashboard",
        "Portfolio diversification",
      ],
      buttonText: "Get Started as HNI",
      buttonAction: handleHNISignup,
      bgGradient: "from-green-50 to-green-100",
      borderColor: "border-green-200",
      iconBg: "bg-secondary/20",
      iconColor: "text-secondary",
      buttonColor: "bg-secondary hover:bg-green-700",
    },
    {
      icon: Building,
      title: "Corporate Treasuries",
      description:
        "FDI into India with treasury controls, KYB onboarding, and compliance panel",
      features: [
        "KYB corporate onboarding",
        "FIU compliance panel",
        "Multi-signature controls",
      ],
      buttonText: "Get Started as Corporate",
      buttonAction: handleCorporateSignup,
      bgGradient: "from-amber-50 to-amber-100",
      borderColor: "border-amber-200",
      iconBg: "bg-accent/20",
      iconColor: "text-accent",
      buttonColor: "bg-accent hover:bg-amber-600",
    },
  ];

  return (
    <section id="audience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">
            Built for Sophisticated Investors
          </h2>
          <p className="text-xl text-neutral-600">
            Tailored solutions for different investor segments
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${audience.bgGradient} rounded-2xl p-8 border ${audience.borderColor}`}
            >
              <div
                className={`w-16 h-16 ${audience.iconBg} rounded-full flex items-center justify-center mb-6`}
              >
                <audience.icon className={`h-8 w-8 ${audience.iconColor}`} />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                {audience.title}
              </h3>
              <p className="text-neutral-700 mb-6">{audience.description}</p>
              <ul className="space-y-3 mb-8">
                {audience.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-neutral-700"
                  >
                    <Check className="h-5 w-5 text-secondary mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                onClick={audience.buttonAction}
                className={`w-full ${audience.buttonColor} text-white py-3 font-semibold`}
              >
                {audience.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
