import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const SplitTextReveal = ({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) => {
  const chars = text.split("");
  return (
    <span className={className}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40, rotateX: -90, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.03,
            ease: [0.215, 0.61, 0.355, 1],
          }}
          className="inline-block"
          style={{ transformOrigin: "bottom" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

const GlowText = ({ children, className, delay = 0 }: { children: string; className?: string; delay?: number }) => {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: [0.215, 0.61, 0.355, 1] }}
    >
      <motion.span
        className="absolute inset-0 blur-2xl bg-primary/30 rounded-full"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: [0, 0.6, 0.3], scale: [0.5, 1.2, 1] }}
        transition={{ duration: 1.2, delay: delay + 0.2, ease: "easeOut" }}
      />
      <SplitTextReveal text={children} delay={delay} />
    </motion.span>
  );
};

const TypewriterLine = ({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) => {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
          setTimeout(() => setShowCursor(false), 1000);
        }
      }, 50);
      return () => clearInterval(interval);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      {displayed}
      {showCursor && (
        <motion.span
          className="inline-block w-[2px] h-[1em] bg-primary ml-0.5 align-middle"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        />
      )}
    </motion.span>
  );
};

const WordSlideUp = ({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) => {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: delay + i * 0.08,
              ease: [0.33, 1, 0.68, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="mb-4">
            <TypewriterLine
              text="Olá, eu sou"
              className="text-muted-foreground text-lg font-body tracking-wide uppercase"
              delay={0.3}
            />
          </div>

          <h1 className="heading-xl mb-6">
            <SplitTextReveal text="Gabriel" delay={1.2} />
            <br />
            <GlowText className="text-primary" delay={1.5}>
              Paturalski
            </GlowText>
          </h1>

          <div className="text-muted-foreground text-lg leading-relaxed max-w-lg mb-8 text-justify font-sans md:text-2xl">
            <WordSlideUp
              text="Analista, Desenvolvedor & Designer criativo baseado em São Paulo, apaixonado por criar experiências digitais excepcionais."
              delay={2.2}
            />
          </div>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.2, ease: "easeOut" }}
          >
            <a href="#contato" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-body font-medium hover:opacity-90 transition-opacity">
              Fale Comigo
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center gap-2 border border-foreground/20 text-foreground px-8 py-3.5 rounded-full font-body font-medium hover:bg-foreground/5 transition-colors"
            >
              Saiba Mais
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
              <img
                alt="Gabriel Paturalski - Analista & Desenvolvedor"
                className="w-full h-full object-cover"
                src="/lovable-uploads/4eb9046a-381a-4c56-96ab-e31ba7fd1594.webp"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-2xl px-5 py-3 shadow-lg">
              <p className="text-sm font-body text-muted-foreground">Experiência</p>
              <p className="text-2xl font-heading font-bold text-foreground">10+ anos</p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#sobre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowDown className="w-6 h-6 animate-bounce" />
      </motion.a>
    </section>
  );
};

export default HeroSection;
