
import { useState, useEffect, useRef } from 'react';
import { projects } from '../data/projectsData';
import ProjectCard from '../components/projects/ProjectCard';
import gsap from 'gsap';
import clsx from 'clsx';
import Button from '../components/ui/Button';

const FILTERS = ['All', 'React', 'Angular', 'TypeScript', 'ExpressJs'];

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState('All');
    const [filteredProjects, setFilteredProjects] = useState(projects);
    const containerRef = useRef(null);

    useEffect(() => {
        if (activeFilter === 'All') {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(projects.filter(p => p.techStack.includes(activeFilter)));
        }
    }, [activeFilter]);

    useEffect(() => {
        // Simple entry animation when filter changes
        const ctx = gsap.context(() => {
            gsap.from(".project-card-anim", {
                y: 20,
                opacity: 0,
                duration: 0.4,
                stagger: 0.1,
                ease: "power2.out",
                clearProps: "all"
            });
        }, containerRef);
        return () => ctx.revert();
    }, [filteredProjects]);

    return (
        <div className="container mx-auto px-6 pt-32 pb-20">
            <div className="mb-16">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-heading">Projects</h1>
                <div className="w-24 h-1.5 bg-primary rounded mb-8 shadow-[0_0_15px_#00ffa3]"></div>
                <p className="text-zinc-400 max-w-2xl text-lg font-light">
                    Showcasing a collection of my web development work, ranging from simple landing pages to complex web applications.
                </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-3 mb-16">
                {FILTERS.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={clsx(
                            "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border",
                            activeFilter === filter
                                ? "bg-primary text-black border-primary shadow-[0_0_20px_rgba(0,255,163,0.3)]"
                                : "bg-zinc-900 text-zinc-400 border-white/5 hover:border-primary/50 hover:text-white"
                        )}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            {/* Project Grid */}
            <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 min-h-[50vh]">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project) => (
                        <div key={project.id} className="project-card-anim">
                            <ProjectCard project={project} />
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center py-24 border border-dashed border-zinc-800 rounded-3xl">
                        <p className="text-zinc-500 text-lg mb-4">No projects found for {activeFilter}.</p>
                        <Button
                            variant="outline"
                            onClick={() => setActiveFilter('All')}
                        >
                            Reset Filters
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}
