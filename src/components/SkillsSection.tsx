import { motion } from "framer-motion";

const skills = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "UI/UX Design", level: 88 },
  { name: "Node.js", level: 85 },
  { name: "Figma / Design Tools", level: 92 },
  { name: "DevOps / CI/CD", level: 75 },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="mb-6"
  >
    <div className="flex justify-between mb-2">
      <span className="font-body font-medium text-foreground">{name}</span>
      <span className="font-body text-primary font-semibold">{level}%</span>
    </div>
    <div className="w-full h-2.5 bg-secondary rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: delay + 0.2, ease: "easeOut" }}
        className="h-full bg-primary rounded-full"
      />
    </div>
  </motion.div>
);

const SkillsSection = () => {
  return (
    <section id="habilidades" className="section-padding bg-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-primary font-body uppercase tracking-widest text-sm mb-3">Habilidades</p>
          <h2 className="heading-lg">Minhas Competências</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-12">
          {skills.map((skill, i) => (
            <SkillBar key={skill.name} {...skill} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
