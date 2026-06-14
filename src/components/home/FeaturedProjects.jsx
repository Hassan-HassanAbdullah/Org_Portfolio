import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../../data/projectsData';
import Button from '../ui/Button';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

import { useNavigate } from 'react-router-dom';

function StackedProjectCard({ project, index, total }) {
    const navigate = useNavigate();
    
    return (
        <article 
            className="project-stack-card group absolute inset-0 cursor-pointer"
            onClick={() => navigate(`/projects/${project.id}`)}
        >
            <div className="relative h-full overflow-hidden rounded-lg border border-primary/30 bg-primary text-dark shadow-[0_30px_80px_rgb(var(--color-primary-rgb)/0.16)]">
                <div className="grid h-full min-h-[560px] grid-cols-1 md:min-h-0 md:grid-cols-[1.05fr_0.95fr]">
                    <div className="relative min-h-[250px] overflow-hidden bg-dark md:min-h-0">
                        <img
                            src={project.img}
                            alt={project.title}
                            className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/10 to-transparent md:bg-gradient-to-r" />
                        <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-dark/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white backdrop-blur">
                            0{index + 1} / 0{total}
                        </div>
                    </div>

                    <div className="flex min-h-0 flex-col justify-between gap-7 p-6 sm:p-8 lg:p-10 xl:p-12">
                        <div>
                            <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-dark/55">
                                Featured Case
                            </p>
                            <h3 className="max-w-xl text-4xl font-black leading-none tracking-tight text-dark lg:text-5xl xl:text-6xl font-heading group-hover:text-white transition-colors duration-300">
                                {project.title}
                            </h3>
                            <p className="mt-5 max-w-xl text-base leading-7 text-dark/70 lg:text-lg">
                                {project.description}
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.slice(0, 5).map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full border border-dark/15 bg-dark/10 px-3 py-1.5 text-[11px] font-black uppercase tracking-wider text-dark"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-col gap-3 sm:flex-row">
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-dark px-6 py-3 text-sm font-black uppercase tracking-widest text-white transition hover:bg-white hover:text-dark"
                                >
                                    Live Demo <ExternalLink size={16} />
                                </a>
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="inline-flex items-center justify-center gap-2 rounded-full border border-dark/20 px-6 py-3 text-sm font-black uppercase tracking-widest text-dark transition hover:border-dark hover:bg-dark/10"
                                >
                                    Code <Github size={16} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default function FeaturedProjects() {
    const sectionRef = useRef(null);
    const stackRef = useRef(null);
    const featured = projects.slice(0, 3);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.project-stack-card');

            gsap.set(cards, {
                transformOrigin: 'center top',
                force3D: true,
                filter: 'brightness(1)',
            });
            gsap.set(cards.slice(1), {
                yPercent: 115,
                scale: 1,
            });
            gsap.set(cards, {
                zIndex: (i) => cards.length + i,
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: stackRef.current,
                    start: 'top 12%',
                    end: 'bottom bottom',
                    scrub: 0.8,
                    invalidateOnRefresh: true,
                },
            });

            cards.slice(0, -1).forEach((card, index) => {
                const nextCard = cards[index + 1];

                tl.to(card, {
                    scale: 0.88 - index * 0.03,
                    yPercent: -10 - index * 4,
                    filter: 'brightness(0.5)',
                    duration: 1,
                    ease: 'none',
                }, index);

                tl.fromTo(nextCard,
                    {
                        yPercent: 115,
                        scale: 1,
                        filter: 'brightness(1)',
                    },
                    {
                        yPercent: 0,
                        scale: 1,
                        filter: 'brightness(1)',
                        duration: 1,
                        ease: 'none',
                    },
                    index
                );
            });

            return () => {
                tl.scrollTrigger?.kill();
                tl.kill();
            };
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative py-24 md:py-32">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-8">
                    <div>
                        <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-primary">Selected Work</p>
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-heading">Stacked Projects</h2>
                        <div className="w-24 h-1.5 bg-primary rounded mb-6 primary-glow-line"></div>
                        <p className="text-zinc-400 max-w-xl text-lg leading-8">
                            Scroll through each project as the current card scales back and the next one rises into focus.
                        </p>
                    </div>
                    <Button href="/projects" variant="outline" className="gap-3 group">
                        View All Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>

                <div ref={stackRef} className="relative h-[260vh]">
                    <div className="sticky top-20 md:top-24 h-[calc(100vh-6rem)] md:h-[calc(100vh-7rem)] min-h-[480px] md:min-h-[520px]">
                        {featured.map((project, index) => (
                            <StackedProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                                total={featured.length}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
