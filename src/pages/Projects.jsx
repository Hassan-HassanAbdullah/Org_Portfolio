import { useState, useEffect, useMemo, useRef } from 'react';
import { projects } from '../data/projectsData';
import ProjectCard from '../components/projects/ProjectCard';
import gsap from 'gsap';
import clsx from 'clsx';
import Button from '../components/ui/Button';
import ScrollReveal from '../components/ui/ScrollReveal';

const FILTERS = ['All', 'React', 'Angular', 'TypeScript', 'ExpressJs'];

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState('All');
    const containerRef = useRef(null);
    const filteredProjects = useMemo(() => {
        if (activeFilter === 'All') return projects;
        return projects.filter(p => p.techStack.includes(activeFilter));
    }, [activeFilter]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".project-card-anim", {
                y: 40,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "power3.out",
                clearProps: "all"
            });
        }, containerRef);
        return () => ctx.revert();
    }, [filteredProjects]);

    return (
        <div className="container mx-auto px-6 pt-28 md:pt-32 pb-20">
            <ScrollReveal>
                <div className="mb-16">
                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-primary">Archive</p>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-heading">Projects</h1>
                    <div className="w-24 h-1.5 bg-primary rounded mb-8 primary-glow-line"></div>
                    <p className="text-zinc-400 max-w-2xl text-base md:text-lg leading-8 font-light">
                        A curated collection of my web development work, showcasing modern interfaces, complex applications, and award-winning designs.
                    </p>
                </div>
            </ScrollReveal>

            {/* Filter Tabs */}
            <ScrollReveal delay={0.1}>
                <div className="flex gap-3 mb-12 md:mb-16 overflow-x-auto pb-4 hide-scrollbar">
                    {FILTERS.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={clsx(
                                "shrink-0 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border backdrop-blur-md",
                                activeFilter === filter
                                    ? "bg-primary text-dark border-primary primary-glow-md"
                                    : "bg-white/5 text-zinc-400 border-white/10 hover:border-primary/50 hover:text-white hover:bg-white/10"
                            )}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </ScrollReveal>

            {/* Project Grid */}
            <ScrollReveal delay={0.2}>
                <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 min-h-[50vh]">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project) => (
                            <div key={project.id} className="project-card-anim h-full">
                                <ProjectCard project={project} />
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full flex flex-col items-center justify-center text-center py-32 border border-dashed border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
                            <p className="text-zinc-400 text-lg mb-6">No projects found for <span className="text-primary font-bold">{activeFilter}</span>.</p>
                            <Button
                                variant="outline"
                                onClick={() => setActiveFilter('All')}
                            >
                                Reset Filters
                            </Button>
                        </div>
                    )}
                </div>
            </ScrollReveal>
        </div>
    );
}
