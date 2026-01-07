
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projectsData';
import { useEffect } from 'react';
import { ArrowLeft, Github, ExternalLink, Calendar, Layers, CheckCircle2 } from 'lucide-react';
import Button from '../components/ui/Button';

export default function ProjectDetail() {
    const { id } = useParams();
    const project = projects.find(p => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center pt-32">
                <h2 className="text-3xl font-bold text-white mb-4 font-heading">Project Not Found</h2>
                <Button href="/projects">Back to Projects</Button>
            </div>
        );
    }

    return (
        <article className="min-h-screen pt-32 pb-20 relative overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none -z-10" />

            <div className="container mx-auto px-6">

                {/* Header / Nav */}
                <div className="mb-12">
                    <Link to="/projects" className="inline-flex items-center text-zinc-400 hover:text-primary transition-colors mb-8 group">
                        <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Projects
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-heading tracking-tight">{project.title}</h1>
                    <div className="flex flex-wrap gap-3">
                        {project.techStack.map(tech => (
                            <span key={tech} className="bg-zinc-900/50 text-primary border border-primary/20 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase backdrop-blur-md">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Hero Image Showcase */}
                <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl mb-16 group">
                    <div className="absolute inset-0 bg-zinc-900/20 backdrop-blur-sm z-10 hidden" /> {/* Placeholder for loading state if needed */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60 z-10" />

                    {/* Glossy Reflection */}
                    <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-white/5 to-transparent skew-x-12 opacity-30 pointer-events-none z-20" />

                    <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Description Card */}
                        <section className="bg-zinc-900/30 backdrop-blur-xl border border-white/5 p-8 md:p-10 rounded-3xl hover:border-primary/20 transition-all duration-300">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-heading flex items-center gap-3">
                                <span className="w-2 h-8 bg-primary rounded-full"></span>
                                Overview
                            </h2>
                            <p className="text-zinc-300 leading-loose text-lg font-light">
                                {project.overview}
                            </p>
                        </section>

                        {/* Features Card */}
                        <section className="bg-zinc-900/30 backdrop-blur-xl border border-white/5 p-8 md:p-10 rounded-3xl hover:border-primary/20 transition-all duration-300">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 font-heading flex items-center gap-3">
                                <span className="w-2 h-8 bg-primary rounded-full"></span>
                                Key Features
                            </h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <li className="flex items-start gap-4 p-4 rounded-2xl bg-black/20 border border-white/5">
                                    <CheckCircle2 className="text-primary shrink-0 mt-1" size={24} />
                                    <span className="text-zinc-300">High-performance rendering with optimized assets</span>
                                </li>
                                <li className="flex items-start gap-4 p-4 rounded-2xl bg-black/20 border border-white/5">
                                    <CheckCircle2 className="text-primary shrink-0 mt-1" size={24} />
                                    <span className="text-zinc-300">Fully responsive layout for all devices</span>
                                </li>
                                <li className="flex items-start gap-4 p-4 rounded-2xl bg-black/20 border border-white/5">
                                    <CheckCircle2 className="text-primary shrink-0 mt-1" size={24} />
                                    <span className="text-zinc-300">Modern UI/UX with smooth transitions</span>
                                </li>
                                <li className="flex items-start gap-4 p-4 rounded-2xl bg-black/20 border border-white/5">
                                    <CheckCircle2 className="text-primary shrink-0 mt-1" size={24} />
                                    <span className="text-zinc-300">Secure and scalable architecture</span>
                                </li>
                            </ul>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <aside className="space-y-8">
                        <div className="bg-zinc-900/30 backdrop-blur-xl border border-white/5 rounded-3xl p-8 sticky top-32 hover:border-primary/20 transition-all duration-300">
                            <h3 className="text-xl font-bold text-white mb-8 font-heading">Project Info</h3>

                            <div className="space-y-6">
                                <div className="flex justify-between items-center py-4 border-b border-white/5">
                                    <span className="text-zinc-500 flex items-center gap-2 text-sm uppercase tracking-widest"><Layers size={16} /> Type</span>
                                    <span className="text-white font-medium">Web Application</span>
                                </div>
                                <div className="flex justify-between items-center py-4 border-b border-white/5">
                                    <span className="text-zinc-500 flex items-center gap-2 text-sm uppercase tracking-widest"><Calendar size={16} /> Year</span>
                                    <span className="text-white font-medium">2025</span>
                                </div>
                            </div>

                            <div className="mt-10 space-y-4">
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-full py-4 bg-primary hover:bg-white text-black rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(0,255,163,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                                >
                                    <ExternalLink size={20} className="mr-2" /> Live Demo
                                </a>
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-full py-4 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl font-bold transition-all border border-white/5"
                                >
                                    <Github size={20} className="mr-2" /> View Source
                                </a>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </article>
    );
}
