import { motion } from "framer-motion";
import { Code, Palette, Lightbulb } from "lucide-react";

const highlights = [
{ icon: Code, label: "Desenvolvimento", value: "50+ Projetos" },
{ icon: Palette, label: "Design", value: "30+ Interfaces" },
{ icon: Lightbulb, label: "Consultoria", value: "15+ Empresas" }];


const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>

          <p className="text-primary font-body uppercase tracking-widest text-sm mb-3">Sobre Mim</p>
          <h2 className="heading-lg mb-8">
            Um designer & desenvolvedor<br />
            que ama o que faz
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6 font-body text-justify">Sou um profissional apaixonado por tecnologia, inovação e design, com mais de 10 anos de experiência criando soluções digitais e projetos inovadores. Minha abordagem combina estética com funcionalidade para entregar resultados que superam expectativas.



            </p>
            <p className="text-muted-foreground text-lg leading-relaxed font-body">
              Acredito que o bom design resolve problemas. Trabalho de forma colaborativa,
              sempre buscando entender as necessidades do cliente para criar experiências
              memoráveis e impactantes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 gap-4">

            {highlights.map((item, i) =>
            <div
              key={i}
              className="flex items-center gap-5 bg-card rounded-2xl p-5 border border-border">

                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-body">{item.label}</p>
                  <p className="text-xl font-heading font-bold text-foreground">{item.value}</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>);

};

export default AboutSection;