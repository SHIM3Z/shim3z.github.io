import React, { useState, useEffect } from 'react';
import { 
  Search, ExternalLink, FileText, Github, Linkedin, Mail, 
  Code, Terminal, Cpu, Database, Briefcase, GraduationCap, 
  ChevronRight, Award, Menu, X, Download, User, Calendar, 
  ArrowLeft, BookOpen, Layers
} from 'lucide-react';

export default function App() {
  // Estado para controlar la "Navegación" (Simulando React Router)
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'docs' | 'pulseai-detail'
  
  // Función para navegar
  const navigateTo = (page) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 font-sans selection:bg-blue-500/30">
      
      {/* FONDO ANIMADO GLOBAL */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[20%] w-[30%] h-[30%] rounded-full bg-blue-900/20 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[20%] h-[20%] rounded-full bg-purple-900/20 blur-[100px] animate-pulse delay-1000"></div>
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      {/* RENDERIZADO CONDICIONAL DE PÁGINAS */}
      {currentPage === 'home' && <PortfolioHome navigateTo={navigateTo} />}
      {currentPage === 'docs' && <DocsHub navigateTo={navigateTo} />}
      {currentPage === 'pulseai-detail' && <PulseAIDocs navigateTo={navigateTo} />}

    </div>
  );
}

/* ==================================================================================
   PÁGINA 1: PORTFOLIO HOME (Tu página principal)
   ================================================================================== */
function PortfolioHome({ navigateTo }) {
  const [selectedTech, setSelectedTech] = useState('Todos');
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'education'];
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  // Datos
  const technologies = [
    { name: 'Angular', icon: <Code size={18} /> },
    { name: 'Python', icon: <Terminal size={18} /> },
    { name: 'AI/ML', icon: <Cpu size={18} /> },
    { name: 'React', icon: <Code size={18} /> },
    { name: 'TypeScript', icon: <Code size={18} /> },
  ];

  const experience = [
    {
      year: '2024 - Presente',
      role: 'Full Stack Developer & AI Engineer',
      company: 'Freelance / Proyectos Propios',
      desc: 'Desarrollo de arquitectura de software escalable. Implementación de modelos de Deep Learning para diagnóstico médico (PulseAI).',
      tech: ['Angular', 'Python', 'TensorFlow', 'Docker']
    },
    {
      year: '2023 - 2024',
      role: 'Desarrollador Frontend Junior',
      company: 'Tech Solutions Inc.',
      desc: 'Colaboración en el desarrollo de dashboards administrativos. Migración de componentes legacy a Angular 17.',
      tech: ['Angular', 'RxJS', 'SASS']
    }
  ];

  const education = [
    { degree: 'Ingeniería de Sistemas', school: 'UNI', year: '2020 - 2025', desc: 'Especialización en Ciencias de la Computación.' },
    { degree: 'Data Science', school: 'Platzi / Coursera', year: '2023', desc: 'Ruta de aprendizaje profunda en Python y ML.' }
  ];

  const certificates = [
    { name: 'Angular Expert', issuer: 'Udemy', date: '2024', icon: <Code size={20} /> },
    { name: 'Machine Learning A-Z', issuer: 'SuperDataScience', date: '2023', icon: <Cpu size={20} /> },
    { name: 'AWS Cloud Practitioner', issuer: 'AWS', date: '2023', icon: <Database size={20} /> },
    { name: 'Scrum Fundamentals', issuer: 'SCRUMstudy', date: '2022', icon: <Briefcase size={20} /> },
  ];

  const projects = [
    {
      id: 1,
      title: 'PulseAI',
      description: 'Sistema de diagnóstico médico asistido por IA. Detecta arritmias cardíacas (ECG) y clasifica células sanguíneas.',
      tags: ['Angular', 'Python', 'AI/ML', 'Docker'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      link: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Neural Scraper Bot',
      description: 'Bot automatizado para recolección masiva de datasets de imágenes para entrenamiento de redes neuronales.',
      tags: ['Python', 'AI/ML', 'Selenium'],
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80',
      link: '#',
      featured: false
    },
    {
      id: 3,
      title: 'Portafolio V1',
      description: 'Arquitectura web moderna utilizando Astro y Tailwind para máxima velocidad y SEO.',
      tags: ['React', 'Tailwind', 'TypeScript'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
      link: '#',
      featured: false
    }
  ];

  const filteredProjects = selectedTech === 'Todos' ? projects : projects.filter(p => p.tags.includes(selectedTech));

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <div className="bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-full px-2 py-2 shadow-2xl shadow-black/50 flex items-center gap-1 md:gap-2 max-w-fit">
          <button onClick={() => scrollToSection('about')} className="flex items-center gap-2 pl-4 pr-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 p-[2px] shadow-lg shadow-blue-500/20">
               <img src="https://github.com/SHIM3Z.png" alt="Logo" className="w-full h-full rounded-full object-cover" />
            </div>
            <span className="hidden md:block font-bold text-white text-sm tracking-tight">Paolo</span>
          </button>
          <div className="h-6 w-[1px] bg-white/10 mx-2 hidden md:block"></div>
          <div className="hidden md:flex items-center gap-1">
            {['experience', 'projects', 'education'].map((id) => (
              <button key={id} onClick={() => scrollToSection(id)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeSection === id ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white'}`}>
                {id === 'experience' ? 'Trayectoria' : id === 'projects' ? 'Proyectos' : 'Estudios'}
              </button>
            ))}
          </div>
          {/* BOTÓN DOCS QUE NAVEGA A OTRA PÁGINA */}
          <button onClick={() => navigateTo('docs')} className="ml-1 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-all duration-300 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-transparent hover:border-white/10">
            <FileText size={14} /> <span className="hidden sm:inline">Docs</span>
          </button>
          <button className="md:hidden p-3 rounded-full text-slate-300 hover:bg-white/10 ml-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 pt-40 pb-20">
        {/* HERO */}
        <header id="about" className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 mb-40">
           <div className="flex-1 space-y-8 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium backdrop-blur-sm">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span></span>
              Open to work
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none text-white">Paolo <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient">Siancas</span></h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed font-light">Ingeniero de Sistemas fusionando <strong className="text-white font-medium">Arquitectura de Software</strong> con <strong className="text-white font-medium">Inteligencia Artificial</strong>.</p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
              <button onClick={() => scrollToSection('projects')} className="group px-8 py-4 rounded-full bg-white text-slate-950 font-bold hover:bg-blue-50 transition-all flex items-center gap-2 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)] hover:-translate-y-1">Ver Proyectos <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" /></button>
              <div className="flex gap-2"><a href="#" className="p-4 rounded-full bg-slate-800/50 hover:bg-slate-700 hover:text-white transition-all border border-white/5 hover:border-white/20"><Github size={20} /></a><a href="#" className="p-4 rounded-full bg-slate-800/50 hover:bg-slate-700 hover:text-white transition-all border border-white/5 hover:border-white/20"><Linkedin size={20} /></a></div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 via-purple-600 to-pink-600 rounded-[2rem] blur-2xl opacity-40 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-900"><img src="https://github.com/SHIM3Z.png" alt="Paolo Siancas" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" /></div>
          </div>
        </header>

        {/* EXPERIENCIA */}
        <section id="experience" className="mb-40">
           <div className="flex items-center gap-4 mb-16"><div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div><h2 className="text-3xl font-bold text-white text-center">Trayectoria Profesional</h2><div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div></div>
           <div className="relative space-y-8 max-w-3xl mx-auto">
             <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-800 md:left-1/2 md:-ml-px"></div>
             {experience.map((exp, idx) => (
               <div key={idx} className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                 <div className="absolute left-8 -translate-x-1/2 md:left-1/2 w-4 h-4 rounded-full bg-slate-950 border-2 border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] z-10"></div>
                 <div className="ml-20 md:ml-0 md:w-1/2 md:px-12 w-full"><div className="group relative p-6 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-blue-500/30 hover:bg-slate-900/80 transition-all duration-300 hover:-translate-y-1 shadow-xl"><div className="absolute inset-0 bg-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div><div className="relative z-10"><span className="inline-block px-3 py-1 mb-3 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold border border-blue-500/20">{exp.year}</span><h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{exp.role}</h3><p className="text-sm font-medium text-slate-400 mb-4 flex items-center gap-2"><Briefcase size={14} /> {exp.company}</p><p className="text-slate-400 text-sm leading-relaxed mb-4">{exp.desc}</p><div className="flex flex-wrap gap-2">{exp.tech.map((t, i) => (<span key={i} className="text-[10px] uppercase tracking-wider font-semibold text-slate-500">#{t}</span>))}</div></div></div></div>
               </div>
             ))}
           </div>
        </section>

        {/* ESTUDIOS Y CERTIFICADOS */}
        <div id="education" className="grid lg:grid-cols-12 gap-12 mb-40">
          <section className="lg:col-span-7"><h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3"><GraduationCap className="text-purple-500" /> Educación</h2><div className="space-y-4">{education.map((edu, idx) => (<div key={idx} className="flex gap-6 p-6 rounded-2xl bg-slate-900/30 border border-white/5 hover:border-purple-500/30 transition-all group"><div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform"><GraduationCap size={24} /></div><div><h3 className="font-bold text-slate-200 text-lg group-hover:text-purple-400 transition-colors">{edu.degree}</h3><p className="text-slate-400 text-sm mb-2">{edu.school}</p><p className="text-slate-500 text-sm leading-relaxed">{edu.desc}</p></div><div className="ml-auto text-xs font-mono text-slate-500 bg-slate-950 px-2 py-1 rounded h-fit whitespace-nowrap border border-slate-800">{edu.year}</div></div>))}</div></section>
          <section className="lg:col-span-5"><h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3"><Award className="text-yellow-500" /> Certificados</h2><div className="grid grid-cols-1 gap-3">{certificates.map((cert, idx) => (<div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/30 border border-white/5 hover:border-yellow-500/30 transition-all hover:bg-slate-900/50 group"><div className="p-2 rounded-lg bg-yellow-500/10 text-yellow-500 group-hover:text-yellow-400 transition-colors">{cert.icon}</div><div><h4 className="font-bold text-slate-300 text-sm group-hover:text-white transition-colors">{cert.name}</h4><p className="text-xs text-slate-500">{cert.issuer} • {cert.date}</p></div></div>))}</div></section>
        </div>

        {/* PROYECTOS */}
        <section id="projects" className="mb-40 scroll-mt-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"><div><h2 className="text-4xl font-bold mb-4 text-white">Proyectos <span className="text-blue-500">.</span></h2><p className="text-slate-400 max-w-md">Selecciona una tecnología para filtrar mi portafolio de trabajos.</p></div><div className="flex flex-wrap gap-2"><button onClick={() => setSelectedTech('Todos')} className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${selectedTech === 'Todos' ? 'bg-white text-slate-900 shadow-lg shadow-white/10 scale-105' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>Todos</button>{technologies.map((tech) => (<button key={tech.name} onClick={() => setSelectedTech(tech.name)} className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${selectedTech === tech.name ? 'bg-slate-800 border-blue-500 text-blue-400 shadow-lg shadow-blue-500/20 scale-105' : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-600 hover:text-slate-200'}`}>{tech.name}</button>))}</div></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <article key={project.id} className="group relative rounded-3xl bg-slate-900 border border-white/5 overflow-hidden hover:shadow-2xl hover:shadow-blue-900/20 hover:-translate-y-2 transition-all duration-500 flex flex-col">
                <div className="h-56 overflow-hidden relative"><div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 opacity-60"></div><img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />{project.featured && (<div className="absolute top-4 left-4 z-20 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg uppercase tracking-wider">Destacado</div>)}<div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs font-bold text-white flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300"><ExternalLink size={12} /> Demo</div></div>
                <div className="p-8 relative z-20 flex-1 flex flex-col -mt-6 bg-slate-900 rounded-t-3xl border-t border-white/5"><div className="flex gap-2 mb-4 flex-wrap">{project.tags.map(tag => (<span key={tag} className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-slate-300 text-[10px] uppercase font-bold tracking-wider group-hover:border-blue-500/30 group-hover:text-blue-400 transition-colors">{tag}</span>))}</div><h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3><p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">{project.description}</p><button onClick={() => navigateTo('pulseai-detail')} className="w-full py-3 rounded-xl bg-slate-800 hover:bg-white hover:text-black text-white text-sm font-bold transition-all flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-blue-500/10">Ver Documentación <ArrowLeft size={14} className="rotate-180" /></button></div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA DOCS */}
        <section className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-slate-900 to-black border border-white/10 p-8 md:p-20 text-center">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
                <span className="inline-block p-4 rounded-2xl bg-blue-500/10 mb-6 border border-blue-500/20 text-blue-400"><FileText size={32} /></span>
                <h2 className="text-4xl font-bold text-white mb-6">Centro de Documentación</h2>
                <p className="text-slate-400 text-lg mb-8">¿Quieres ver cómo funciona todo esto por dentro? He preparado guías técnicas detalladas.</p>
                <button onClick={() => navigateTo('docs')} className="px-8 py-4 rounded-full bg-white text-slate-900 font-bold hover:bg-blue-50 transition-all shadow-xl hover:-translate-y-1">Ir al Hub de Documentación</button>
            </div>
        </section>
      </div>

      <footer className="border-t border-slate-900 bg-black py-12 text-center text-slate-600 text-sm"><p>© 2025 Paolo Siancas.</p></footer>
    </>
  );
}


/* ==================================================================================
   PÁGINA 2: DOCS HUB (Buscador central de documentación)
   ================================================================================== */
function DocsHub({ navigateTo }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('Todos');

  const filters = ['Todos', 'Angular', 'Python', 'AI/ML', 'Backend', 'DevOps'];

  const allDocs = [
    { title: 'PulseAI - Guía de Instalación', category: 'Medical', tags: ['Angular', 'AI/ML'], link: 'pulseai-detail' },
    { title: 'API Reference v2.0', category: 'Backend', tags: ['Backend', 'Python'], link: '#' },
    { title: 'Configuración de Docker Containers', category: 'DevOps', tags: ['DevOps'], link: '#' },
    { title: 'Estructura de Red Neuronal CNN', category: 'AI/ML', tags: ['AI/ML', 'Python'], link: '#' },
    { title: 'Autenticación con JWT en Angular', category: 'Frontend', tags: ['Angular'], link: '#' },
    { title: 'Despliegue en AWS EC2', category: 'DevOps', tags: ['DevOps'], link: '#' },
  ];

  const filteredDocs = allDocs.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'Todos' || doc.tags.includes(selectedFilter);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto min-h-screen">
      
      {/* HEADER NAV DE DOCS */}
      <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <div className="bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-full px-4 py-3 shadow-2xl flex items-center gap-4">
          <button onClick={() => navigateTo('home')} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium">
            <ArrowLeft size={16} /> Volver al Portafolio
          </button>
          <div className="w-[1px] h-4 bg-white/10"></div>
          <span className="text-white font-bold text-sm flex items-center gap-2"><BookOpen size={16} className="text-blue-500"/> Docs Hub</span>
        </div>
      </nav>

      {/* TITULO Y BUSCADOR */}
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-6">Documentación</h1>
        <p className="text-slate-400 text-lg mb-8">Explora guías técnicas, arquitecturas y manuales de mis proyectos.</p>
        
        <div className="relative group mb-8">
           <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none"><Search className="text-slate-500 group-focus-within:text-blue-400 transition-colors" /></div>
           <input 
             type="text" 
             placeholder="Buscar por nombre de proyecto o tema..." 
             value={searchTerm}
             onChange={(e) => setSearchTerm(e.target.value)}
             className="w-full pl-12 pr-4 py-4 bg-slate-900/50 border border-slate-700 rounded-2xl text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-xl text-lg"
           />
        </div>

        {/* FILTROS */}
        <div className="flex flex-wrap gap-2 justify-center">
          {filters.map(filter => (
            <button 
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${selectedFilter === filter ? 'bg-blue-600 border-blue-500 text-white' : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-600'}`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* GRID DE RESULTADOS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDocs.map((doc, idx) => (
          <div key={idx} onClick={() => doc.link === 'pulseai-detail' ? navigateTo('pulseai-detail') : null} className="cursor-pointer group p-6 rounded-2xl bg-slate-900/40 border border-white/5 hover:bg-slate-800 hover:border-blue-500/30 transition-all hover:-translate-y-1">
             <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform"><FileText size={24} /></div>
                <div className="px-2 py-1 rounded bg-slate-950 border border-slate-800 text-[10px] text-slate-500 uppercase font-bold tracking-wider">{doc.category}</div>
             </div>
             <h3 className="text-xl font-bold text-slate-200 group-hover:text-white mb-2">{doc.title}</h3>
             <div className="flex gap-2 mt-4">
                {doc.tags.map(tag => (
                   <span key={tag} className="text-xs text-slate-500 font-medium">#{tag}</span>
                ))}
             </div>
          </div>
        ))}
      </div>

      {filteredDocs.length === 0 && (
         <div className="text-center py-20 text-slate-500">No se encontraron documentos con ese criterio.</div>
      )}
    </div>
  );
}


/* ==================================================================================
   PÁGINA 3: DETALLE DE DOCUMENTACIÓN (PULSE AI)
   ================================================================================== */
function PulseAIDocs({ navigateTo }) {
  return (
    <div className="min-h-screen bg-[#050505] text-slate-300 font-sans pb-20">
       
       {/* NAV DE RETORNO */}
       <nav className="sticky top-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5 px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
             <button onClick={() => navigateTo('docs')} className="p-2 rounded-lg hover:bg-white/10 transition-colors"><ArrowLeft size={20} /></button>
             <span className="font-bold text-white text-lg">PulseAI Docs</span>
          </div>
          <div className="flex gap-4 text-sm font-medium">
             <a href="#" className="hidden md:block text-slate-400 hover:text-white">v1.2.0</a>
             <a href="#" className="flex items-center gap-2 text-blue-400 hover:text-blue-300"><Github size={16} /> Repo</a>
          </div>
       </nav>

       <div className="flex max-w-7xl mx-auto mt-8">
          
          {/* SIDEBAR (Índice) - Hidden on Mobile */}
          <aside className="hidden lg:block w-64 shrink-0 px-6 sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto border-r border-white/5">
             <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Contenido</h4>
             <ul className="space-y-3 text-sm border-l border-white/10">
                <li><a href="#" className="block pl-4 border-l border-blue-500 text-blue-400 font-medium">Introducción</a></li>
                <li><a href="#" className="block pl-4 border-l border-transparent text-slate-400 hover:text-white hover:border-slate-600 transition-all">Arquitectura</a></li>
                <li><a href="#" className="block pl-4 border-l border-transparent text-slate-400 hover:text-white hover:border-slate-600 transition-all">Instalación</a></li>
                <li><a href="#" className="block pl-4 border-l border-transparent text-slate-400 hover:text-white hover:border-slate-600 transition-all">Modelo de IA</a></li>
                <li><a href="#" className="block pl-4 border-l border-transparent text-slate-400 hover:text-white hover:border-slate-600 transition-all">API Endpoints</a></li>
             </ul>
          </aside>

          {/* CONTENIDO PRINCIPAL (MARKDOWN SIMULADO) */}
          <main className="flex-1 px-6 md:px-12 max-w-4xl">
             <div className="mb-10 pb-10 border-b border-white/5">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">PulseAI: Diagnóstico Asistido</h1>
                <p className="text-xl text-slate-400 leading-relaxed">
                   PulseAI es un sistema de soporte a la decisión clínica que utiliza redes neuronales convolucionales (CNN) para detectar anomalías en electrocardiogramas (ECG) y frotis sanguíneos.
                </p>
                <div className="flex gap-4 mt-6">
                   <span className="px-3 py-1 rounded bg-blue-500/10 text-blue-400 text-xs font-bold border border-blue-500/20">Angular 17</span>
                   <span className="px-3 py-1 rounded bg-yellow-500/10 text-yellow-400 text-xs font-bold border border-yellow-500/20">Python FastAPI</span>
                   <span className="px-3 py-1 rounded bg-purple-500/10 text-purple-400 text-xs font-bold border border-purple-500/20">TensorFlow</span>
                </div>
             </div>

             <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-white mb-4 mt-12">1. Arquitectura del Sistema</h2>
                <p className="mb-6 leading-relaxed">
                   El sistema sigue una arquitectura de microservicios contenerizados. El frontend en Angular se comunica con un API Gateway que distribuye la carga entre el servicio de autenticación y el servicio de inferencia de IA.
                </p>
                <div className="bg-slate-900 rounded-xl p-6 border border-white/10 mb-8 font-mono text-sm text-blue-300">
                   User Browser {'->'} Angular App {'->'} Nginx (Gateway) {'->'} FastAPI (Model Inference) {'->'} PostgreSQL
                </div>

                <h2 className="text-2xl font-bold text-white mb-4 mt-12">2. Instalación Local</h2>
                <p className="mb-4">Para levantar el entorno de desarrollo, asegúrate de tener Docker instalado.</p>
                <div className="bg-[#0d1117] rounded-xl p-4 border border-slate-800 overflow-x-auto mb-8">
                   <code className="text-sm font-mono">
                      <span className="text-slate-500"># Clonar el repositorio</span><br/>
                      <span className="text-purple-400">git clone</span> https://github.com/shim3z/pulse-ai.git<br/><br/>
                      <span className="text-slate-500"># Levantar servicios</span><br/>
                      <span className="text-purple-400">docker-compose</span> up --build
                   </code>
                </div>
             </div>
          </main>
          
          {/* TABLA DE CONTENIDOS DERECHA (On page) */}
          <div className="hidden xl:block w-64 shrink-0"></div>
       </div>
    </div>
  );
}