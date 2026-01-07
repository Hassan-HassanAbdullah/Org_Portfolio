
import { skills } from '../../data/skillsData';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
        <section ref={sectionRef} className="py-32 relative overflow-hidden bg-[#050505]">

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div ref={triggerRef} className="container mx-auto px-6 relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-16 text-center font-heading">
                    Tech <span className="text-zinc-700">Stack.</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skills.map((category, idx) => (
                        <div
                            key={idx}
                            className="skill-card relative p-8 rounded-3xl bg-zinc-900/40 backdrop-blur-xl border border-white/5 hover:border-primary/30 transition-all duration-500 group"
                        >
                            {/* Card Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

                            <h3 className="text-2xl font-bold text-white mb-8 group-hover:text-primary transition-colors font-heading tracking-tight flex items-center">
                                <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                {category.category}
                            </h3>

                            <div className="grid grid-cols-2 gap-4">
                                {category.items.map((skill, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-3 p-3 bg-black/50 rounded-xl border border-white/5 group-hover:border-primary/20 transition-all hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(0,255,163,0.1)]"
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
                    ))}
                </div>
            </div>
        </section>
    );
}
