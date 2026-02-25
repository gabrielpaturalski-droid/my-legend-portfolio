import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}>

          <p className="text-muted-foreground text-lg mb-4 font-body tracking-wide uppercase">
            Olá, eu sou
          </p>
          <h1 className="heading-xl mb-6">Gabriel{" "}
            <span className="text-primary">Paturalski</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-lg mb-8 font-body">
            Desenvolvedor Full Stack & Designer criativo baseado em São Paulo,
            apaixonado por criar experiências digitais excepcionais.
          </p>
          <div className="flex gap-4">
            <a href="#contato" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-body font-medium hover:opacity-90 transition-opacity">

              Fale Comigo
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center gap-2 border border-foreground/20 text-foreground px-8 py-3.5 rounded-full font-body font-medium hover:bg-foreground/5 transition-colors">

              Saiba Mais
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center">

          <div className="relative">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
              <img

                alt="João Silva - Desenvolvedor Full Stack"
                className="w-full h-full object-cover" src="/lovable-uploads/4eb9046a-381a-4c56-96ab-e31ba7fd1594.webp" />

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
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors">

        <ArrowDown className="w-6 h-6 animate-bounce" />
      </motion.a>
    </section>);

};

export default HeroSection;