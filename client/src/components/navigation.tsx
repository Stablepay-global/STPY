import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#arbitrage" },
    { name: "Compliance", href: "#compliance" },
    { name: "Pricing", href: "#comparison" },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b-2 border-[#6667AB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 brand-gradient rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-2xl no-blur">S</span>
                </div>
                <div>
                  <span className="text-3xl font-bold text-black no-blur">Stable Pay</span>
                  <p className="text-sm text-[#6667AB] -mt-1 no-blur">Institutional Yields</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-[#6667AB] hover:text-black transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-[#FAF9F6] font-semibold no-blur"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button className="brand-button-outline px-6 py-3 rounded-xl font-semibold no-blur">
              Sign In
            </Button>
            <Link href="/dashboard">
              <Button className="brand-button px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 no-blur">
                Launch App
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#6667AB] hover:text-black transition-colors duration-200 p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t-2 border-[#6667AB]">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-3 text-[#6667AB] hover:text-black hover:bg-[#FAF9F6] rounded-lg transition-colors duration-200 font-semibold no-blur"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 space-y-3">
                <Button className="brand-button-outline w-full px-6 py-3 rounded-xl font-semibold no-blur">
                  Sign In
                </Button>
                <Link href="/dashboard">
                  <Button className="brand-button w-full px-6 py-3 rounded-xl font-semibold no-blur">
                    Launch App
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}