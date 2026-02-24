import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

const education = [
  {
    period: "2018 – 2020",
    title: "Mestrado em Ciência da Computação",
    institution: "Universidade de São Paulo (USP)",
    desc: "Foco em interfaces humano-computador e design de interação.",
  },
  {
    period: "2014 – 2018",
    title: "Bacharelado em Engenharia de Software",
    institution: "UNICAMP",
    desc: "Graduação com ênfase em arquitetura de sistemas e desenvolvimento web.",
  },
];

const experience = [
  {
    period: "2022 – Presente",
    title: "Lead Full Stack Developer",
    institution: "TechBrasil",
    desc: "Liderando equipe de 8 devs, entregando produtos SaaS para clientes globais.",
  },
  {
    period: "2020 – 2022",
    title: "Senior Frontend Developer",
    institution: "StartupX",
    desc: "Desenvolvimento de interfaces complexas com React e design system próprio.",
  },
  {
    period: "2017 – 2020",
    title: "UI/UX Designer & Developer",
    institution: "Agência Criativa",
    desc: "Criação de identidades visuais e sites responsivos para mais de 30 clientes.",
  },
];

const TimelineItem = ({
  item,
  index,
  icon: Icon,
}: {
  item: (typeof education)[0];
  index: number;
  icon: typeof GraduationCap;
}) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative pl-10 pb-10 last:pb-0"
  >
    <div className="absolute left-0 top-1 w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
      <Icon className="w-3.5 h-3.5 text-primary" />
    </div>
    <div className="absolute left-[13px] top-8 bottom-0 w-px bg-border last:hidden" />
    <span className="text-primary text-sm font-body font-medium">{item.period}</span>
    <h4 className="text-lg font-heading font-bold text-foreground mt-1">{item.title}</h4>
    <p className="text-sm font-body font-medium text-muted-foreground mb-1">{item.institution}</p>
    <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.desc}</p>
  </motion.div>
);

const TimelineSection = () => {
  return (
    <section id="experiencia" className="section-padding bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-primary font-body uppercase tracking-widest text-sm mb-3">Currículo</p>
          <h2 className="heading-lg">Educação & Experiência</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="heading-md mb-8 flex items-center gap-3 text-foreground">
              <GraduationCap className="w-6 h-6 text-primary" />
              Educação
            </h3>
            {education.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} icon={GraduationCap} />
            ))}
          </div>
          <div>
            <h3 className="heading-md mb-8 flex items-center gap-3 text-foreground">
              <Briefcase className="w-6 h-6 text-primary" />
              Experiência
            </h3>
            {experience.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} icon={Briefcase} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
