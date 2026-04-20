import { useState, useEffect, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Download, 
  ChevronRight, 
  Code2, 
  Cpu, 
  Globe, 
  Brain, 
  Camera, 
  Music, 
  Award, 
  BookOpen, 
  Briefcase, 
  ExternalLink,
  Menu,
  X,
  Microchip,
  Terminal,
  Layers,
  Zap
} from 'lucide-react';

// --- Types ---

interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  category: 'Embedded' | 'AI/ML' | 'Bio' | 'IoT' | 'All';
}

interface Skill {
  name: string;
  category: 'Programming' | 'Tools' | 'Domains' | 'Soft Skills' | 'Languages';
}

// --- Data ---

const PROJECTS: Project[] = [
  {
    title: "Bioactive Glass for Regenerative Therapy",
    description: "Research exploring Materials Science + Bioengineering applications for regenerative medicine.",
    tech: ["Materials Science", "Bioengineering", "Research"],
    category: "Bio"
  },
  {
    title: "Decimal to Binary Converter",
    description: "A hardware-based converter using Arduino Nano, LED indicators, and a 4×4 keypad for user input.",
    tech: ["Arduino Nano", "Embedded C", "Hardware Design"],
    category: "Embedded"
  },
  {
    title: "Kinetic Energy-Harvesting Backpacks",
    description: "Innovative power generation system using piezoelectric sensors to harvest energy from movement.",
    tech: ["Piezoelectric Sensors", "Embedded Systems", "Power Electronics"],
    category: "Embedded"
  },
  {
    title: "AI-Driven Food Waste Reduction",
    description: "A predictive analytics platform to optimize food usage and reduce waste in institutional settings.",
    tech: ["Python", "Machine Learning", "Data Analytics"],
    category: "AI/ML"
  }
];

const SKILLS: Skill[] = [
  { name: "Python", category: "Programming" },
  { name: "C", category: "Programming" },
  { name: "C++", category: "Programming" },
  { name: "MATLAB", category: "Tools" },
  { name: "Arduino", category: "Tools" },
  { name: "Proteus", category: "Tools" },
  { name: "LTSpice", category: "Tools" },
  { name: "IoT", category: "Domains" },
  { name: "DSA", category: "Domains" },
  { name: "COA", category: "Domains" },
  { name: "Embedded Systems", category: "Domains" },
  { name: "Microprocessors", category: "Domains" },
  { name: "AI", category: "Domains" },
  { name: "Image Processing", category: "Domains" },
  { name: "Problem Solving", category: "Soft Skills" },
  { name: "Teamwork", category: "Soft Skills" },
  { name: "English", category: "Languages" },
  { name: "Bengali", category: "Languages" },
  { name: "Hindi", category: "Languages" },
];

const TIMELINE = [
  {
    title: "Internship: CRCE",
    period: "June 2024 – July 2024",
    description: "Worked on Kinetic Energy-Harvesting Backpacks project. Developed embedded systems for power management.",
    type: "experience"
  },
  {
    title: "VAP: Signal Processing via MATLAB",
    period: "2024",
    description: "Intensive training on signal and image processing techniques.",
    type: "workshop"
  },
  {
    title: "Workshop: IoT Using TI Microcontroller",
    period: "2023",
    description: "Hands-on workshop using Texas Instruments hardware for IoT solutions.",
    type: "workshop"
  }
];

const EDUCATION = [
  {
    school: "JAIN University",
    degree: "BTech in Electronics & Communication Engineering",
    period: "2022 – 2026",
    details: "Focus on IoT, Embedded Systems, and Signal Processing."
  },
  {
    school: "AECS Magnolia Maaruti",
    degree: "Class XII (CBSE)",
    period: "2022",
    details: "Science major."
  },
  {
    school: "Assembly of God Church School",
    degree: "Class X (ICSE)",
    period: "2020",
    details: "Foundational academic excellence."
  }
];

// --- Components ---

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="font-display text-xl font-bold tracking-tighter text-accent">
          ADRIJA<span className="text-white">MITRA</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-text-muted hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#" 
            className="px-5 py-2 rounded-lg accent-gradient text-white text-xs font-bold hover:scale-105 active:scale-95 transition-all glow uppercase tracking-wider"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-text-muted hover:text-accent"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#" 
                className="w-full py-3 rounded-xl bg-accent text-primary text-center font-bold"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ children, subtitle }: { children: ReactNode, subtitle?: string }) => (
  <div className="mb-12">
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-3 mb-4"
    >
      <div className="h-1 w-12 accent-gradient rounded-full" />
      <span className="text-sky-400 text-[10px] font-bold uppercase tracking-[0.3em]">{subtitle}</span>
    </motion.div>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold"
    >
      {children}
    </motion.h2>
  </div>
);

export default function App() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Embedded' | 'AI/ML' | 'Bio' | 'IoT'>('All');

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen mesh-bg">
      <Nav />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-[10px] font-bold uppercase tracking-widest mb-8">
                <Zap size={14} />
                <span>Pre-Final Year ECE @ JAIN University</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold mb-8 tracking-tighter whitespace-nowrap">
                ADRIJA <span className="text-accent underline decoration-accent/30 underline-offset-12">MITRA</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-text-muted mb-10 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                Engineering intelligent systems at the intersection of Hardware and Code. Specializing in IoT, Embedded Systems, and AI.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <a 
                  href="#projects" 
                  className="px-8 py-4 accent-gradient text-white font-bold rounded-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 glow text-sm uppercase tracking-wider"
                >
                  View My Work <ChevronRight size={18} />
                </a>
                <a 
                  href="#contact" 
                  className="px-8 py-4 glass text-white font-bold rounded-xl hover:bg-white/5 active:scale-95 transition-all flex items-center gap-2 text-sm uppercase tracking-wider"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative shrink-0"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 xl:w-96 xl:h-96 mx-auto">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-[80px] animate-pulse" />
                <div className="relative w-full h-full rounded-full border-2 border-accent/20 p-4">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/10 ring-8 ring-accent/5 shadow-2xl">
                    <img 
                      src="https://picsum.photos/seed/adrija/800/800" 
                      alt="Adrija Mitra" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                
                {/* Tech Badges */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-4 -right-4 p-4 glass rounded-2xl glow shadow-accent/20 z-20"
                >
                  <Microchip className="text-accent" size={28} />
                </motion.div>
                <motion.div 
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -left-4 p-4 glass rounded-2xl glow shadow-accent/20 z-20"
                >
                  <Brain className="text-accent" size={28} />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-accent rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-24 relative overflow-hidden scroll-mt-24">
        <div className="absolute top-0 left-0 w-full h-full bg-white/5 backdrop-blur-3xl -z-10" />
        <div className="container mx-auto px-6">
          <SectionHeading subtitle="BIOGRAPHY">About Me</SectionHeading>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-text-muted leading-relaxed">
                I am a driven Electronics and Communication Engineering student at JAIN University, passionate about building projects that bridge the physical and digital worlds. My journey is fueled by a curiosity for how hardware transforms data into meaningful actions.
              </p>
              <p className="text-lg text-text-muted leading-relaxed">
                Beyond the circuit board, I find inspiration in the creative arts. Whether it's capturing moments through my lens or expressing emotions through singing, I believe that engineering and art both stem from the same root: the desire to create something beautiful and functional.
              </p>
              <div className="flex flex-col items-center gap-4">
                <div className="flex flex-col items-center gap-2">
                  <div className="p-4 bg-sky-500/20 rounded-2xl text-sky-400">
                    <Camera size={24} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Photography</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="p-4 bg-sky-500/20 rounded-2xl text-sky-400">
                    <Music size={24} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Singing</span>
                </div>
              </div>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="aspect-square rounded-3xl overflow-hidden glass p-2"
              >
                <img src="https://picsum.photos/seed/photo1/400/400" alt="Creative work" className="w-full h-full object-cover rounded-2xl" referrerPolicy="no-referrer" />
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="aspect-square rounded-3xl overflow-hidden glass p-2 translate-y-8"
              >
                <img src="https://picsum.photos/seed/photo2/400/400" alt="Creative work" className="w-full h-full object-cover rounded-2xl" referrerPolicy="no-referrer" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section id="skills" className="py-24 scroll-mt-24">
        <div className="container mx-auto px-6">
          <SectionHeading subtitle="EXPERTISE">Technical Arsenal</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(['Programming', 'Tools', 'Domains', 'Soft Skills', 'Languages'] as const).map((cat) => (
              <motion.div 
                key={cat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-3xl hover:border-accent/40 transition-colors group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-sky-500/20 rounded-xl text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-all">
                    {cat === 'Programming' && <Terminal size={24} />}
                    {cat === 'Tools' && <Layers size={24} />}
                    {(cat === 'Domains' || cat === 'Languages') && <Globe size={24} />}
                    {cat === 'Soft Skills' && <Brain size={24} />}
                  </div>
                  <h3 className="text-xl font-bold">{cat}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.filter(s => s.category === cat).map(skill => (
                    <span key={skill.name} className="px-3 py-1 bg-sky-500/10 border border-sky-500/20 rounded-lg text-xs font-bold text-sky-400 hover:text-white hover:bg-sky-500/20 transition-all">
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="py-24 bg-surface/30 scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
            <SectionHeading subtitle="SHOWCASE">Selected Works</SectionHeading>
            <div className="flex gap-2 bg-white/5 p-1 rounded-xl border border-white/10">
              {(['All', 'Embedded', 'AI/ML', 'Bio'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${activeCategory === cat ? 'bg-sky-500 text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            layout
            className="grid md:grid-cols-2 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className={`glass group rounded-3xl overflow-hidden hover:border-accent/40 transition-all flex flex-col border-l-4 ${
                    project.category === 'Bio' ? 'border-l-sky-500' : 
                    project.category === 'Embedded' ? 'border-l-indigo-500' : 
                    project.category === 'AI/ML' ? 'border-l-emerald-500' : 
                    'border-l-amber-500'
                  }`}
                >
                  <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-accent/20 group-hover:bg-accent/0 transition-colors z-10" />
                    <img 
                      src={`https://picsum.photos/seed/${project.title.slice(0, 5)}/800/400`} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4 z-20 px-3 py-1 glass rounded-lg text-[10px] uppercase font-mono tracking-wider">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                    <p className="text-text-muted mb-6 flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map(t => (
                        <span key={t} className="px-2 py-0.5 bg-accent/5 border border-accent/20 rounded text-[10px] text-accent uppercase font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <a href="#" className="flex items-center gap-2 text-sm font-bold text-white hover:text-accent transition-colors">
                        <Github size={18} /> View Repo
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* --- TIMELINE SECTION --- */}
      <section id="experience" className="py-24 scroll-mt-24">
        <div className="container mx-auto px-6">
          <SectionHeading subtitle="JOURNEY">Professional Timeline</SectionHeading>
          <div className="max-w-3xl mx-auto">
            {TIMELINE.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-8 pb-12 border-l border-white/10 last:pb-0"
              >
                <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-sky-500 shadow-[0_0_8px_#38BDF8]" />
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    {item.type === 'experience' ? <Briefcase size={18} className="text-accent" /> : <BookOpen size={18} className="text-accent" />}
                    {item.title}
                  </h3>
                  <span className="text-sm font-mono text-accent">{item.period}</span>
                </div>
                <p className="text-text-muted">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- EDUCATION & CERTS --- */}
      <section className="py-24 bg-surface/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <SectionHeading subtitle="ACADEMICS">Education</SectionHeading>
              <div className="space-y-6">
                {EDUCATION.map((edu, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass p-6 rounded-2xl"
                  >
                    <h3 className="text-lg font-bold">{edu.school}</h3>
                    <p className="text-accent text-sm mb-2">{edu.degree} | {edu.period}</p>
                    <p className="text-text-muted text-sm">{edu.details}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <SectionHeading subtitle="RECOGNITION">Achievements</SectionHeading>
              <div className="grid gap-4">
                {[
                  { title: "ELECTROTHON 2023", desc: "Participated in university-wide hackathon focusing on electronics innovation." },
                  { title: "UX-BLITZ", desc: "Design competition exploring intuitive user interfaces." },
                  { title: "Tata Crucible 2024", desc: "National level business quiz participation." }
                ].map((ach, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10"
                  >
                    <div className="p-3 bg-sky-500/20 rounded-xl text-sky-400 h-fit">
                      <Award size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold">{ach.title}</h4>
                      <p className="text-sm text-text-muted">{ach.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-24 scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="glass rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 blur-[120px] -translate-y-1/2 translate-x-1/2" />
            
            <div className="grid lg:grid-cols-2 gap-16 relative z-10">
              <div>
                <SectionHeading subtitle="GET IN TOUCH">Let's Build <br /> <span className="text-accent">Together</span></SectionHeading>
                <p className="text-lg text-text-muted mb-12 max-w-md">
                  Currently seeking internship opportunities and collaborative projects in IoT and Embedded Systems.
                </p>
                
                <div className="space-y-8">
                  <a href="mailto:adrijam88@gmail.com" className="flex items-center gap-4 group">
                    <div className="p-4 bg-accent/10 rounded-2xl text-accent group-hover:bg-accent group-hover:text-primary transition-all">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-text-muted uppercase">Email Me</p>
                      <p className="text-lg font-bold">adrijam88@gmail.com</p>
                    </div>
                  </a>
                  <a href="tel:+916364717722" className="flex items-center gap-4 group">
                    <div className="p-4 bg-accent/10 rounded-2xl text-accent group-hover:bg-accent group-hover:text-primary transition-all">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-text-muted uppercase">Call Me</p>
                      <p className="text-lg font-bold">+91 63647 17722</p>
                    </div>
                  </a>
                  <div className="flex gap-4 pt-4">
                    <a href="#" className="p-4 glass rounded-2xl text-text-muted hover:text-accent hover:border-accent transition-all">
                      <Linkedin size={24} />
                    </a>
                    <a href="#" className="p-4 glass rounded-2xl text-text-muted hover:text-accent hover:border-accent transition-all">
                      <Github size={24} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass p-8 rounded-[2rem]">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-text-muted uppercase">Name</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent/50 transition-colors" placeholder="Your Name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-text-muted uppercase">Email</label>
                      <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent/50 transition-colors" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-text-muted uppercase">Message</label>
                    <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent/50 transition-colors resize-none" placeholder="Let's talk about..." />
                  </div>
                  <button className="w-full py-4 accent-gradient text-white font-bold rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 glow">
                    Send Message <ExternalLink size={18} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-text-muted text-sm font-mono">
            &copy; {new Date().getFullYear()} ADRIJA MITRA. HANDCRAFTED WITH PRECISION.
          </p>
          <div className="flex gap-8 text-xs font-mono text-text-muted">
            <a href="#" className="hover:text-accent transition-colors uppercase tracking-widest">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors uppercase tracking-widest">Back to top</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
