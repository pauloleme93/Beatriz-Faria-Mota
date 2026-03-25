import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  Check, 
  Instagram,
  ChevronDown,
  Brain,
  Users,
  HeartHandshake,
  GraduationCap,
  Compass,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Phone,
  Mail,
  Linkedin,
  Baby,
  User
} from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/5591992138526?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20conversa.";

const WhatsAppIcon = ({ size = 24, className = "", strokeWidth }: { size?: number, className?: string, strokeWidth?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans text-[var(--color-text-dark)] bg-[var(--color-surface)] selection:bg-[var(--color-brand-green)]/30 selection:text-[var(--color-brand-green-dark)]">
      
      {/* Sticky Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'py-4 bg-[var(--color-brand-white)] border-b border-[var(--color-border-light)] shadow-sm' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="px-6 md:px-12 max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="/logotipo-beatriz.webp" alt="Logotipo Beatriz Faria Mota" className="h-10 w-auto object-contain transition-transform duration-500 group-hover:scale-105" />
            <div>
              <h1 className="font-display text-xl tracking-wide text-[var(--color-text-dark)] leading-none">Beatriz Faria Mota</h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-light)] mt-1">Psicologia & Neuropsicologia</p>
            </div>
          </div>
          
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full font-sans tracking-[0.15em] text-xs uppercase transition-all duration-500 ${
              scrolled 
                ? 'bg-[var(--color-brand-green-dark)] text-[var(--color-brand-white)] hover:bg-[var(--color-brand-green)] hover:text-[var(--color-brand-green-dark)]' 
                : 'border border-[var(--color-brand-green-dark)] text-[var(--color-brand-green-dark)] hover:bg-[var(--color-brand-green-dark)] hover:text-[var(--color-brand-white)]'
            }`}
          >
            <WhatsAppIcon size={14} strokeWidth={1.5} />
            Agendar Consulta
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-[var(--color-surface)]">
        <div className="px-6 md:px-12 max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-2xl"
            >
              <motion.h2 variants={fadeUpVariants} className="text-3xl md:text-5xl lg:text-6xl font-display leading-[1.1] text-[var(--color-text-dark)] mb-8 font-light tracking-tight">
                Respostas que mudam vidas.<br/>
                <span className="italic text-[var(--color-brand-green-dark)]">Cuidado além do diagnóstico.</span>
              </motion.h2>
              <motion.p variants={fadeUpVariants} className="text-lg text-[var(--color-text-muted)] mb-8 font-light leading-relaxed max-w-xl">
                Sou Beatriz Faria Mota, psicóloga especializada em avaliação neuropsicológica e terapia cognitivo comportamental. Atendo crianças, adolescentes e adultos que buscam clareza, direcionamento e um cuidado de verdade.
              </motion.p>
              
              <motion.ul variants={staggerContainer} className="space-y-4 text-[15px] text-[var(--color-text-muted)] font-light mb-12">
                {[
                  { text: "Beatriz Faria Mota - CRP [inserir número]", icon: ShieldCheck },
                  { text: "Especialista em Avaliação Neuropsicológica", icon: Brain },
                  { text: "Especialista em Terapia Cognitivo-Comportamental", icon: Sparkles },
                  { text: "Atendimento online e presencial", icon: Compass }
                ].map((item, i) => (
                  <motion.li key={i} variants={fadeUpVariants} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-brand-green)]/20 flex items-center justify-center group-hover:bg-[var(--color-brand-green)]/40 transition-colors">
                      <item.icon size={16} strokeWidth={1.5} className="text-[var(--color-brand-green-dark)]" />
                    </div>
                    <span>{item.text}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.a 
                variants={fadeUpVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[var(--color-brand-green-dark)] text-[var(--color-brand-white)] px-8 py-4 rounded-full font-sans tracking-[0.15em] text-[11px] font-semibold uppercase hover:bg-[var(--color-brand-green)] hover:text-[var(--color-brand-green-dark)] transition-colors duration-300 shadow-xl shadow-[var(--color-brand-green-dark)]/20"
              >
                <WhatsAppIcon size={16} strokeWidth={1.5} /> Agende sua consulta
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="/foto-beatriz-v1.webp" 
                alt="Beatriz Faria - Psicóloga" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 border border-black/5 rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Sobre (Green Background) */}
      <section className="bg-[var(--color-brand-green-dark)] py-24 px-6 text-[var(--color-brand-white)] relative overflow-hidden">
        {/* Subtle background pattern/gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50"></div>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="absolute inset-0 border border-[var(--color-brand-yellow)]/30 rounded-2xl transform -translate-x-4 -translate-y-4"></div>
            <img 
              src="/foto-beatriz-v4.webp" 
              alt="Beatriz Faria em atendimento" 
              className="relative z-10 rounded-2xl shadow-2xl object-cover aspect-[4/5] w-full max-w-md mx-auto md:mx-0 object-top"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariants} className="flex items-center gap-3 mb-6">
              <HeartHandshake size={24} strokeWidth={1.5} className="text-[var(--color-brand-yellow)]" />
              <span className="text-xs font-sans tracking-[0.2em] uppercase text-[var(--color-brand-white)]/80">Sobre a profissional</span>
            </motion.div>
            <motion.h2 variants={fadeUpVariants} className="text-2xl md:text-4xl font-display mb-8 font-light">
              Quem vai cuidar de você
            </motion.h2>
            <motion.div variants={fadeUpVariants} className="space-y-6 font-light text-[var(--color-brand-white)]/90 text-lg leading-relaxed mb-10">
              <p>
                Sou Beatriz Faria Mota, psicóloga e neuropsicóloga, com atuação clínica desde 2016, dedicada à avaliação neuropsicológica e à psicoterapia na abordagem da Terapia Cognitivo-Comportamental.
              </p>
              <p>
                Minha trajetória profissional é marcada pela experiência em contextos clínicos e institucionais de alta complexidade, atendi crianças e adultos com condições neurológicas diversas e em equipes multiprofissionais. Esse percurso me deu algo que vai além da técnica: um olhar clínico amplo capaz de enxergar o paciente como um todo.
              </p>
              <p>
                Atuo no acompanhamento de diferentes condições neurológicas e psiquiátricas que impactam o funcionamento cognitivo, emocional e comportamental.
              </p>
              <p>
                Atendo crianças, adolescentes e adultos — presencialmente e online — com um compromisso de conduzir um processo terapêutico humanizado, voltado ao desenvolvimento de maior consciência sobre si, construção de estratégias mais funcionais e promoção de qualidade de vida.
              </p>
            </motion.div>
            <motion.a 
              variants={fadeUpVariants}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,1)", color: "var(--color-brand-green-dark)" }}
              whileTap={{ scale: 0.98 }}
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-[var(--color-brand-white)]/50 text-[var(--color-brand-white)] px-8 py-4 rounded-full font-sans tracking-[0.15em] text-sm uppercase transition-all duration-300"
            >
              <WhatsAppIcon size={16} strokeWidth={1.5} /> Conheça minha trajetória
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Identificação com a dor */}
      <section className="py-32 px-6 text-center relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-20"
          >
            <span className="text-[var(--color-brand-green-dark)] text-xs font-sans tracking-[0.2em] uppercase mb-4 block">Para quem é</span>
            <h2 className="text-2xl md:text-4xl font-display text-[var(--color-text-dark)] font-light max-w-2xl mx-auto">
              Você se identifica com alguma dessas situações?
            </h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6 text-left mb-20"
          >
            {[
              { text: "Seu filho tem dificuldade na escola, mas ninguém consegue explicar exatamente o porquê", icon: GraduationCap },
              { text: "Você passou por vários profissionais e ainda sente que falta uma resposta de verdade", icon: Compass },
              { text: "Cresceu sentindo que algo era diferente em você, mas nunca recebeu um diagnóstico claro", icon: Brain },
              { text: "Sua família está enfrentando um momento difícil e não sabe por onde começar", icon: Users },
              { text: "Você quer entender o que está acontecendo — e o que fazer a partir disso", icon: Sparkles, fullWidth: true }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeUpVariants}
                className={`group bg-[var(--color-brand-white)] p-8 rounded-2xl shadow-sm border border-transparent hover:border-[var(--color-brand-yellow)]/30 flex items-start gap-5 hover:-translate-y-1 hover:shadow-xl transition-all duration-500 ${item.fullWidth ? 'md:col-span-2 md:w-2/3 md:mx-auto' : ''}`}
              >
                <div className="w-12 h-12 rounded-full bg-[var(--color-surface)] flex items-center justify-center shrink-0 group-hover:bg-[var(--color-brand-green)] transition-colors duration-500">
                  <item.icon size={24} strokeWidth={1.2} className="text-[var(--color-brand-green-dark)] group-hover:text-[var(--color-brand-green-dark)] transition-colors duration-500" />
                </div>
                <p className="text-[var(--color-text-muted)] font-light leading-relaxed mt-1 text-lg">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-12 md:mt-16 relative inline-block"
          >
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-12 h-[1px] bg-[var(--color-brand-yellow)]"></div>
            <p className="text-xl md:text-3xl font-display italic text-[var(--color-text-dark)] font-light leading-relaxed">
              Se alguma dessas frases faz sentido para você, <span className="text-[var(--color-brand-green-dark)]">você está no lugar certo.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Serviços (Cards) */}
      <section className="py-32 px-6 bg-[var(--color-brand-white)] border-y border-[var(--color-brand-green)]/10">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <span className="text-[var(--color-brand-green-dark)] text-xs font-sans tracking-[0.2em] uppercase mb-4 block">Especialidades</span>
            <h2 className="text-2xl md:text-4xl font-display text-[var(--color-text-dark)] font-light">
              Como posso te ajudar
            </h2>
          </motion.div>

          <div className="space-y-16">
            {/* Serviço 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col md:flex-row rounded-[2rem] overflow-hidden shadow-xl shadow-[var(--color-brand-green-dark)]/10 bg-[var(--color-surface)]"
            >
              <div className="md:w-1/2 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop" 
                  alt="Avaliação Neuropsicológica" 
                  className="w-full h-full object-cover min-h-[300px] group-hover:scale-105 transition-transform duration-1000 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="md:w-1/2 bg-[var(--color-brand-green-dark)] text-[var(--color-brand-white)] p-10 md:p-16 flex flex-col justify-center relative overflow-hidden">
                {/* Decorative element */}
                <Brain size={120} strokeWidth={0.5} className="absolute -bottom-10 -right-10 text-[var(--color-brand-white)]/5 rotate-12" />
                
                <h3 className="text-xl md:text-3xl font-display mb-6 font-light relative z-10">Avaliação Neuropsicológica</h3>
                <div className="font-light text-[var(--color-brand-white)]/90 mb-10 leading-relaxed relative z-10 text-lg space-y-4">
                  <p>A avaliação neuropsicológica é um processo investigativo que busca compreender como o cérebro está funcionando em diferentes áreas, como memória, atenção, linguagem, funções executivas, aprendizagem e comportamento.</p>
                  <p>O processo acontece em etapas, incluindo entrevista inicial, sessões de avaliação e análise dos resultados. Ao final, é elaborado um laudo neuropsicológico completo e realizada uma devolutiva clara, com orientações direcionadas.</p>
                </div>
                <div className="mb-8 relative z-10 bg-[var(--color-brand-white)] p-8 rounded-2xl shadow-lg shadow-[var(--color-black)]/5">
                  <h4 className="font-sans tracking-[0.2em] text-xs uppercase text-[var(--color-brand-green)] mb-6 font-medium">Para quem é indicada</h4>
                  <ul className="space-y-5 font-light text-sm text-[var(--color-text-muted)]">
                    {[
                      "Crianças com dificuldades de aprendizado ou comportamento",
                      "Adultos em busca de diagnóstico tardio (TDAH, TEA, dislexia)",
                      "Apresenta atrasos ou dificuldades na fala",
                      "Possui sinais de altas habilidades/superdotação"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <Check size={18} strokeWidth={2} className="text-[var(--color-brand-yellow)] shrink-0 mt-0.5" />
                        <span className="leading-relaxed text-[15px]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Serviço 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col md:flex-row-reverse rounded-[2rem] overflow-hidden shadow-xl shadow-[var(--color-brand-green-dark)]/10 bg-[var(--color-surface)]"
            >
              <div className="md:w-1/2 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=800&auto=format&fit=crop" 
                  alt="Terapia Cognitivo-Comportamental" 
                  className="w-full h-full object-cover min-h-[300px] group-hover:scale-105 transition-transform duration-1000 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="md:w-1/2 bg-[var(--color-brand-green-dark)] text-[var(--color-brand-white)] p-10 md:p-16 flex flex-col justify-center relative overflow-hidden">
                {/* Decorative element */}
                <Sparkles size={120} strokeWidth={0.5} className="absolute -top-10 -left-10 text-[var(--color-brand-white)]/5 -rotate-12" />

                <h3 className="text-xl md:text-3xl font-display mb-6 font-light relative z-10">Terapia<br/>Cognitivo-Comportamental</h3>
                <div className="font-light text-[var(--color-brand-white)]/90 mb-10 leading-relaxed relative z-10 text-lg space-y-4">
                  <p>A Terapia Cognitivo-Comportamental (TCC) é uma abordagem psicoterapêutica baseada na compreensão de como pensamentos, emoções e comportamentos estão interligados.</p>
                  <p>O foco do tratamento é identificar padrões de pensamento disfuncionais e desenvolver estratégias mais saudáveis e funcionais para lidar com as dificuldades do dia a dia.</p>
                </div>
                <div className="mb-8 relative z-10 bg-[var(--color-brand-white)] p-8 rounded-2xl shadow-lg shadow-[var(--color-black)]/5">
                  <h4 className="font-sans tracking-[0.2em] text-xs uppercase text-[var(--color-brand-green)] mb-6 font-medium">Foco de tratamento</h4>
                  <ul className="space-y-5 font-light text-sm text-[var(--color-text-muted)]">
                    {[
                      "Transtornos de ansiedade e depressão",
                      "Dificuldades relacionais e conflitos familiares",
                      "Questões emocionais no trabalho ou nos estudos",
                      "Desenvolvimento de habilidades sociais e regulação emocional"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <Check size={18} strokeWidth={2} className="text-[var(--color-brand-yellow)] shrink-0 mt-0.5" />
                        <span className="leading-relaxed text-[15px]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section: Quando buscar ajuda */}
      <section className="py-32 px-6 bg-[var(--color-surface)] border-b border-[var(--color-brand-green)]/10">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <span className="text-[var(--color-brand-green-dark)] text-xs font-sans tracking-[0.2em] uppercase mb-4 block">Sinais de Alerta</span>
            <h2 className="text-2xl md:text-4xl font-display text-[var(--color-text-dark)] font-light">
              Quando buscar a Avaliação Neuropsicológica?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Infantil */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="bg-[var(--color-brand-white)] p-10 md:p-12 rounded-[2rem] shadow-xl shadow-[var(--color-brand-green-dark)]/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-brand-green)]/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[var(--color-brand-green)]/10 transition-colors duration-500"></div>
              
              <div className="flex items-center gap-4 mb-10 relative z-10">
                <div className="w-14 h-14 rounded-full bg-[var(--color-brand-green-dark)] flex items-center justify-center text-[var(--color-brand-white)] shrink-0">
                  <Baby size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl font-display text-[var(--color-text-dark)]">Infantil</h3>
              </div>
              
              <ul className="space-y-6 relative z-10">
                {[
                  "Se seu filho apresenta dificuldades na escola e você não sabe como ajudar",
                  "Se há dificuldades de atenção, memória ou aprendizagem",
                  "Se existem comportamentos impulsivos, irritabilidade ou dificuldade em lidar com emoções",
                  "Se você percebe atraso no desenvolvimento ou dificuldades na socialização",
                  "Se há suspeita de TDAH, autismo ou outros transtornos do neurodesenvolvimento",
                  "Se a criança apresenta dificuldade em seguir regras, rotina ou limites",
                  "Se já passou por diferentes profissionais e ainda não há clareza sobre o diagnóstico"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <Check size={20} strokeWidth={2} className="text-[var(--color-brand-green)] shrink-0 mt-0.5" />
                    <span className="font-light text-[var(--color-text-muted)] leading-relaxed text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Adulto */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-[var(--color-brand-white)] p-10 md:p-12 rounded-[2rem] shadow-xl shadow-[var(--color-brand-green-dark)]/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-brand-yellow)]/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[var(--color-brand-yellow)]/20 transition-colors duration-500"></div>
              
              <div className="flex items-center gap-4 mb-10 relative z-10">
                <div className="w-14 h-14 rounded-full bg-[var(--color-brand-yellow)] flex items-center justify-center text-[var(--color-brand-green-dark)] shrink-0">
                  <User size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl font-display text-[var(--color-text-dark)]">Adulto</h3>
              </div>
              
              <ul className="space-y-6 relative z-10">
                {[
                  "Se você sempre sentiu que era “diferente”, mas nunca teve um diagnóstico",
                  "Se teve dificuldades na escola que nunca foram compreendidas na infância",
                  "Se hoje enfrenta problemas com organização, atenção ou procrastinação",
                  "Se sente que precisa se esforçar mais que os outros para dar conta da rotina",
                  "Se apresenta ansiedade, sobrecarga ou sensação constante de desorganização",
                  "Se já buscou ajuda, mas ainda não encontrou respostas claras",
                  "Se desconfia de um diagnóstico tardio, como TDAH ou outras condições",
                  "Se deseja entender melhor seu funcionamento e sua história"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <Check size={20} strokeWidth={2} className="text-[var(--color-brand-yellow)] shrink-0 mt-0.5" />
                    <span className="font-light text-[var(--color-text-muted)] leading-relaxed text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5: Diferenciais */}
      <section className="bg-[var(--color-brand-green-dark)] py-32 px-6 text-[var(--color-brand-white)] relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-brand-white)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-brand-yellow)]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <span className="text-[var(--color-brand-yellow)] text-xs font-sans tracking-[0.2em] uppercase mb-4 block">Diferenciais</span>
            <h2 className="text-2xl md:text-4xl font-display font-light">
              Experiência clínica que faz diferença
            </h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              {
                icon: Brain,
                title: "Experiência em alta complexidade",
                desc: "Com sólida trajetória na APAE (Goiânia e Anápolis), desenvolvi expertise no atendimento a condições como Autismo, Síndrome de Down, Parkinson, AVC e Esclerose Múltipla. Uma atuação que exige precisão clínica e profunda sensibilidade humana."
              },
              {
                icon: Users,
                title: "Visão multiprofissional",
                desc: "Minha prática foi forjada na troca constante com médicos, fonoaudiólogos e terapeutas. Essa integração multidisciplinar permite uma compreensão global da sua história, tratando a pessoa em sua totalidade e não apenas o sintoma."
              },
              {
                icon: HeartHandshake,
                title: "Acolhimento além do laudo",
                desc: "Recebo famílias que muitas vezes chegam repletas de incertezas. Meu papel é traduzir a avaliação em acolhimento, oferecendo clareza e direcionamento para que a compreensão do diagnóstico seja o primeiro passo de uma transformação real."
              },
              {
                icon: GraduationCap,
                title: "Orientação e suporte familiar",
                desc: "O cuidado se estende a quem cuida. Conduzo intervenções e entrego ferramentas práticas que as famílias aplicam no dia a dia. Acredito que fortalecer e orientar a rede de apoio é fundamental para resultados duradouros."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeUpVariants}
                className="group bg-[var(--color-brand-white)] p-10 rounded-2xl shadow-lg shadow-[var(--color-black)]/5 hover:-translate-y-1 hover:shadow-xl transition-all duration-500 flex flex-col h-full relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-brand-yellow)] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="w-14 h-14 rounded-full bg-[var(--color-surface)] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[var(--color-brand-green)] transition-all duration-500">
                  <item.icon size={28} strokeWidth={1.2} className="text-[var(--color-brand-green-dark)] group-hover:text-[var(--color-brand-green-dark)] transition-colors" />
                </div>
                <h3 className="text-2xl font-display mb-4 font-light text-[var(--color-text-dark)]">{item.title}</h3>
                <p className="font-light text-[var(--color-text-muted)] leading-relaxed text-lg flex-grow">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 6: Final CTA */}
      <section className="py-32 px-6 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[var(--color-brand-white)] p-12 md:p-24 rounded-[3rem] shadow-2xl shadow-[var(--color-black)]/5 border border-[var(--color-border-light)] relative"
          >
            {/* Decorative Quote Mark */}
            <div className="absolute top-10 left-10 text-8xl font-display text-[var(--color-surface)] opacity-50 select-none leading-none">"</div>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display mb-8 text-[var(--color-text-dark)] font-light relative z-10 tracking-tight">
              Saúde mental é <span className="italic text-[var(--color-brand-green-dark)]">liberdade.</span>
            </h2>
            <p className="text-2xl md:text-3xl text-[var(--color-text-light)] font-light italic font-display mb-8 relative z-10">
              Imagine viver com mais tranquilidade, confiança e equilíbrio.
            </p>
            <p className="text-[var(--color-text-muted)] font-light mb-12 max-w-xl mx-auto text-lg relative z-10">
              Não adie o cuidado com você. Entre em contato e comece hoje mesmo sua jornada rumo ao bem-estar.
            </p>
            
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[var(--color-brand-green-dark)] text-[var(--color-brand-white)] px-10 py-5 rounded-full font-sans tracking-[0.15em] text-sm uppercase hover:bg-[var(--color-brand-green)] hover:text-[var(--color-brand-green-dark)] transition-all duration-300 mb-8 shadow-lg shadow-[var(--color-brand-green-dark)]/30"
            >
              <WhatsAppIcon size={18} strokeWidth={1.5} />
              Entre em contato agora
            </motion.a>
            
            <div className="flex items-center justify-center gap-2 text-[var(--color-text-light)] text-sm font-light">
              <ShieldCheck size={16} strokeWidth={1.5} className="text-[var(--color-brand-green-dark)]" />
              <p>Atendimento online e presencial • Sigilo garantido</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 group flex items-center gap-3"
        aria-label="Fale pelo WhatsApp"
      >
        {/* Tooltip */}
        <span className="hidden md:block opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 bg-[var(--color-brand-green-dark)] text-[var(--color-brand-white)] text-xs font-sans tracking-[0.1em] uppercase px-4 py-2 rounded-full shadow-lg whitespace-nowrap pointer-events-none">
          Fale pelo WhatsApp
        </span>

        {/* Button */}
        <div className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl shadow-[#25D366]/40">
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
          <WhatsAppIcon size={28} className="text-white relative z-10" />
        </div>
      </motion.a>

      {/* Footer */}
      <footer className="bg-[var(--color-brand-green-dark)] text-[var(--color-brand-white)] border-t-4 border-[var(--color-brand-yellow)]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            {/* Logo & Name */}
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <img src="/logotipo-beatriz-branco.webp" alt="Logotipo Beatriz Faria Mota" className="h-12 w-auto object-contain transition-transform duration-500 hover:scale-105" />
              <div className="text-left">
                <h3 className="font-display text-2xl tracking-wide text-[var(--color-brand-white)] leading-none">Beatriz Faria Mota</h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-brand-white)]/70 mt-1">Psicologia & Neuropsicologia</p>
              </div>
            </div>

            {/* Contato */}
            <div className="text-center">
              <h4 className="text-sm font-medium mb-5 text-[var(--color-brand-white)]/90">Contato</h4>
              <div className="flex flex-col items-center gap-3 text-sm font-light text-[var(--color-brand-white)]/80">
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-[var(--color-brand-yellow)]" />
                  <span>(91) 99213-8526</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-[var(--color-brand-yellow)]" />
                  <span>contato@beatrizfaria.com.br</span>
                </div>
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="text-center md:text-right flex flex-col items-center md:items-end">
              <h4 className="text-sm font-medium mb-5 text-[var(--color-brand-white)]/90">Redes Sociais</h4>
              <div className="flex items-center gap-3">
                <a href="#" className="w-10 h-10 rounded-lg bg-[var(--color-brand-white)]/5 border border-[var(--color-brand-white)]/10 flex items-center justify-center hover:bg-[var(--color-brand-yellow)] hover:text-[var(--color-brand-green-dark)] transition-colors">
                  <Instagram size={18} />
                </a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-[var(--color-brand-white)]/5 border border-[var(--color-brand-white)]/10 flex items-center justify-center hover:bg-[var(--color-brand-yellow)] hover:text-[var(--color-brand-green-dark)] transition-colors">
                  <WhatsAppIcon size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-[var(--color-brand-white)]/5 border border-[var(--color-brand-white)]/10 flex items-center justify-center hover:bg-[var(--color-brand-yellow)] hover:text-[var(--color-brand-green-dark)] transition-colors">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--color-brand-white)]/10">
          <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-light text-[var(--color-brand-white)]/60">
            <p>&copy; {new Date().getFullYear()} Beatriz Faria Mota. Todos os direitos reservados.</p>
            <p>Criado por <span className="font-semibold text-[var(--color-brand-white)]/90">Paulo Leme</span></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
