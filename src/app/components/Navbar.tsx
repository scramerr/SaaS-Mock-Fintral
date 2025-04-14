"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const links = [
  { name: "Home", href: "#hero" },
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("");

  // Sections references
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({
    hero: null,
    features: null,
    pricing: null,
    contact: null,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id;
          if (entry.isIntersecting) {
            setActiveLink(`#${sectionId}`);
          }
        });
      },
      {
        rootMargin: "-50% 0px", // Trigger the observer when the section is 50% in the viewport
      }
    );

    // Observe each section
    Object.keys(sectionRefs.current).forEach((key) => {
      const section = sectionRefs.current[key];
      if (section) observer.observe(section);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const yOffset = -80; // adjust this to match your navbar height
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 px-6 md:px-12 py-4 transition-all ${
        scrolled ? "backdrop-blur-xl bg-white/5 border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" onClick={(e) => handleScrollTo(e, "#hero")}>
          <span className="text-xl font-bold text-white tracking-tight cursor-pointer">
            <span className="text-purple-500">Fintral</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className={`text-zinc-300 hover:text-white transition cursor-pointer ${
                activeLink === link.href ? "text-purple-500" : ""
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-4 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-4 space-y-4"
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className={`block text-zinc-200 hover:text-white transition cursor-pointer ${
                activeLink === link.href ? "text-purple-500" : ""
              }`}
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
