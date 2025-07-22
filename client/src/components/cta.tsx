import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  const handleMainCTA = () => {
    // TODO: Implement main CTA functionality
    console.log("Main CTA clicked");
  };

  const handleScheduleDemo = () => {
    // TODO: Implement schedule demo functionality
    console.log("Schedule demo clicked");
  };

  const stats = [
    {
      value: "$50M+",
      label: "Total Value Locked",
    },
    {
      value: "15,000+",
      label: "Active Investors",
    },
    {
      value: "99.9%",
      label: "Uptime",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-blue-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Start Earning Higher Returns?
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Join thousands of investors already earning 12-18% annual returns with
          Stable Pay
        </p>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-secondary">
                  {stat.value}
                </div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={handleMainCTA}
            className="bg-secondary hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold shadow-lg"
          >
            Start Investing Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            onClick={handleScheduleDemo}
            className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold"
          >
            Schedule Demo
            <Calendar className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
