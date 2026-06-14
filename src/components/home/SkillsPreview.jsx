
import { skills } from '../../data/skillsData';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Database, Wrench } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Helper to get Icon URL
const getIconUrl = (name) => {
    // Handling special cases
    const slug = name.toLowerCase()
        .replace(/\.js/g, 'dotjs')
        .replace(/\s+/g, '')
        .replace(/\+/g, 'plus');

    // SimpleIcons doesn't support all quirks perfectly, checking common overrides
    if (name === 'REST APIs') return 'https://cdn.simpleicons.org/json/white';
    if (name === 'HTML5') return 'https://cdn.simpleicons.org/html5/white';
    if (name === 'CSS3') return 'https://cdn.simpleicons.org/css3/white';

    return `https://cdn.simpleicons.org/${slug}/white`;
};

export default function SkillsPreview() {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);
    const categoryIcons = [Code2, Database, Wrench];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".skill-card",
                {
                    y: 50,
                    opacity: 0,
                    scale: 0.9
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: triggerRef.current,
                        start: "top 85%",
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden bg-dark">

            {/* Background Glow */}
            <div className="absolute left-1/2 top-16 h-64 w-[min(760px,90vw)] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

            <div ref={triggerRef} className="container mx-auto px-6 relative z-10">
                <div className="mx-auto mb-14 max-w-3xl text-center">
                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-primary">Capabilities</p>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-5 font-heading">
                        Tech <span className="text-zinc-700">Stack.</span>
                    </h2>
                    <p className="text-zinc-400 text-base md:text-lg leading-8">
                        A lean frontend-first toolkit with enough backend depth to ship polished, responsive products end to end.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-6 lg:gap-8 items-stretch">
                    <div className="skill-card rounded-lg border border-white/10 bg-white/[0.03] p-6 sm:p-8 relative overflow-hidden">
                        <div className="absolute inset-x-0 top-0 h-1 bg-primary" />
                        <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-6">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.24em] text-zinc-500">Current Focus</p>
                                <h3 className="mt-2 text-3xl font-bold text-white font-heading">Interactive UI</h3>
                            </div>
                            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary text-dark primary-glow-sm">
                                <Code2 size={26} />
                            </div>
                        </div>

                        <div className="mt-8 grid grid-cols-2 gap-3">
                            {['Motion', 'Responsive', 'REST APIs', 'Design Systems'].map((item) => (
                                <div key={item} className="rounded-lg border border-white/10 bg-black/25 p-4">
                                    <div className="mb-3 h-1 w-8 rounded-full bg-primary" />
                                    <p className="text-sm font-semibold text-zinc-200">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {skills.map((category, idx) => {
                        const Icon = categoryIcons[idx] || Code2;
                        return (
                        <div
                            key={idx}
                            className="skill-card relative p-5 rounded-lg bg-zinc-900/50 backdrop-blur-xl border border-white/10 hover:border-primary/40 transition-all duration-500 group min-h-[360px]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none" />

                            <div className="relative z-10 mb-6 flex items-center justify-between">
                                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors font-heading tracking-tight">
                                    {category.category}
                                </h3>
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-black/30 text-primary">
                                    <Icon size={20} />
                                </div>
                            </div>

                            <div className="relative z-10 grid grid-cols-1 gap-3">
                                {category.items.map((skill, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-3 rounded-lg border border-white/5 bg-black/35 p-3 transition-all hover:border-primary/30 hover:bg-primary/10"
                                    >
                                        <img
                                            src={getIconUrl(skill)}
                                            alt={skill}
                                            className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity"
                                            onError={(e) => { e.target.style.display = 'none'; }}
                                        />
                                        <span className="text-zinc-400 text-sm font-medium group-hover:text-white transition-colors">
                                            {skill}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        );
                    })}
                    </div>
                </div>
            </div>
        </section>
    );
}
