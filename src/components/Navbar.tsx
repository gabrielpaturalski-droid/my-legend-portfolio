import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import profileImg from "@/assets/profile.jpg";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#servicos", label: "Serviços" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#contato", label: "Contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating pill navbar */}
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-3 bg-background/95 backdrop-blur-lg border border-border rounded-full px-3 py-2 shadow-lg shadow-foreground/5">
          <div className="w-9 h-9 rounded-full overflow-hidden shrink-0">
            <img
              src={profileImg}
              alt="João Silva"
              className="w-full h-full object-cover"
            />
          </div>

          <span className="font-heading text-base font-semibold text-foreground pr-2">
            João Silva
          </span>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1 border-l border-border pl-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-body text-muted-foreground hover:text-foreground px-3 py-1.5 rounded-full hover:bg-secondary transition-all"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-9 h-9 rounded-full bg-foreground flex items-center justify-center text-background shrink-0"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-3 bg-background/95 backdrop-blur-lg border border-border rounded-2xl shadow-lg shadow-foreground/5 overflow-hidden"
            >
              <div className="flex flex-col py-3">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-base font-body text-muted-foreground hover:text-foreground hover:bg-secondary px-6 py-3 transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
