import { motion } from "framer-motion";
import { Monitor, Smartphone, PenTool, TrendingUp, Database, Layers } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Desenvolvimento Web",
    desc: "Sites e aplicações web modernas com React, Next.js e as melhores tecnologias do mercado.",
  },
  {
    icon: Smartphone,
    title: "Design Responsivo",
    desc: "Interfaces adaptáveis para qualquer dispositivo, garantindo a melhor experiência ao usuário.",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    desc: "Design centrado no usuário com foco em usabilidade, estética e conversão.",
  },
  {
    icon: Database,
    title: "Back-End & APIs",
    desc: "Arquiteturas robustas e APIs escaláveis com Node.js, PostgreSQL e serviços cloud.",
  },
  {
    icon: TrendingUp,
    title: "SEO & Performance",
    desc: "Otimização para mecanismos de busca e performance web de alta velocidade.",
  },
  {
    icon: Layers,
    title: "Consultoria Digital",
    desc: "Estratégia digital, análise de produto e planejamento de soluções tecnológicas.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-primary font-body uppercase tracking-widest text-sm mb-3">Serviços</p>
          <h2 className="heading-lg">O que eu faço</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-card border border-border rounded-2xl p-7 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="heading-md mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
