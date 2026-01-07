
import { projects } from '../../data/projectsData';
import ProjectCard from '../projects/ProjectCard';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

export default function FeaturedProjects() {
    const featured = projects.slice(0, 2);

    return (
        <section className="py-32 container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-heading">Selected Work</h2>
                    <div className="w-24 h-1.5 bg-primary rounded mb-6 shadow-[0_0_15px_#00ffa3]"></div>
                    <p className="text-zinc-400 max-w-lg text-lg">
                        A selection of my recent projects, showcasing technical depth and creative design.
                    </p>
                </div>
                <Button href="/projects" variant="outline" className="gap-3 group">
                    View All Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {featured.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}
