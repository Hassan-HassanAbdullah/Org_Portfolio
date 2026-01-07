
import { Link } from 'react-router-dom';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import clsx from 'clsx';

export default function ProjectCard({ project, className }) {
    return (
        <Link
            to={`/projects/${project.id}`}
            className={clsx(
                "group relative bg-zinc-900/40 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,255,163,0.05)] flex flex-col h-full",
                className
            )}
        >
            {/* Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Image Container */}
            <div className="relative h-64 overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent z-10" />
                <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1"
                />

                {/* Floating Action Badge */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-zinc-950/50 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/10 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary hover:text-black z-20 hover:border-primary">
                    <ArrowUpRight size={20} />
                </div>
            </div>

            <div className="p-8 flex flex-col flex-grow relative z-10">
                <h3 className="text-2xl font-bold text-white mb-3 font-heading group-hover:text-primary transition-colors flex items-center gap-3">
                    {project.title}
                </h3>
                <p className="text-zinc-400 mb-6 line-clamp-3 text-base font-light flex-grow leading-relaxed">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {project.techStack.slice(0, 3).map((tech) => (
                        <span key={tech} className="text-[10px] font-bold tracking-wider text-zinc-300 bg-white/5 border border-white/5 px-3 py-1.5 rounded-lg uppercase group-hover:border-primary/20 transition-colors">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-6 border-t border-white/5 pt-6 mt-auto" onClick={(e) => e.stopPropagation()}>
                    <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-medium z-10 relative hover:underline"
                    >
                        <Github size={16} /> Code
                    </a>
                    <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-medium z-10 relative hover:underline"
                    >
                        <ExternalLink size={16} /> Live Demo
                    </a>
                </div>
            </div>
        </Link>
    );
}
