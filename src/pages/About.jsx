
import { aboutData } from '../data/aboutData';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate Stats
            // Animate Stats
            gsap.fromTo(".stat-item",
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".stats-container",
                        start: "top 85%",
                    }
                }
            );

            // Animate Text
            gsap.fromTo(".about-text",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    delay: 0.2
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="container mx-auto px-6 pt-32 pb-20">

            {/* Hero / Intro */}
            <div className="flex flex-col md:flex-row gap-16 items-start mb-32">
                <div className="flex-1 space-y-8">
                    <h1 className="about-text text-6xl md:text-8xl font-bold text-white font-heading tracking-tighter">
                        About <span className="text-zinc-700">Me.</span>
                    </h1>
                    <div className="w-24 h-2 bg-primary rounded about-text"></div>
                    <p className="about-text text-xl text-zinc-300 leading-relaxed font-light">
                        {aboutData.description}
                    </p>
                    <p className="about-text text-xl text-zinc-300 leading-relaxed font-light">
                        {aboutData.mission}
                    </p>
                </div>

                {/* Abstract "Image" Area */}
                <div className="flex-1 w-full max-w-lg mx-auto relative group">
                    <div className="absolute inset-0 bg-primary blur-[100px] opacity-20 rounded-full group-hover:opacity-30 transition-opacity" />
                    <div className="aspect-square bg-zinc-900/40 backdrop-blur-xl rounded-[2rem] relative overflow-hidden about-text border border-white/5 flex items-center justify-center hover:border-primary/30 transition-colors">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
                        <span className="relative text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-zinc-700 to-zinc-900 font-heading">
                            HA
                        </span>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="stats-container grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                {aboutData.stats?.map((stat, idx) => (
                    <div key={idx} className="stat-item bg-zinc-900/40 backdrop-blur-xl border border-white/5 p-10 rounded-3xl text-center hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="text-5xl md:text-6xl font-bold text-white mb-4 font-heading group-hover:text-primary transition-colors relative z-10">{stat.value}</div>
                        <div className="text-zinc-500 font-medium tracking-widest uppercase text-sm relative z-10">{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* Journey / Timeline */}
            <section>
                <h2 className="text-4xl font-bold text-white mb-16 font-heading text-center md:text-left">My Journey</h2>
                <div className="space-y-12 border-l border-zinc-800 pl-12 relative max-w-3xl ml-4 md:ml-0">
                    {/* Timeline Items */}
                    {[
                        { title: "Started Coding", year: "2020", desc: "Began my journey with HTML & CSS, building small websites." },
                        { title: "Frontend Mastery", year: "2022", desc: "Deep dived into React, State Management, and Modern CSS." },
                        { title: "Full Stack Exploration", year: "Present", desc: "Currently expanding into Backend technologies and Advanced Animations." }
                    ].map((item, i) => (
                        <div key={i} className="relative group">
                            <div className="absolute -left-[54px] top-1.5 w-4 h-4 bg-black border-2 border-zinc-700 rounded-full group-hover:border-primary group-hover:scale-125 transition-all duration-300 z-10"></div>
                            <div className="p-8 rounded-3xl bg-zinc-900/20 border border-white/5 hover:bg-zinc-900/40 hover:border-primary/20 transition-all duration-300 backdrop-blur-sm">
                                <h3 className="text-2xl font-bold text-white font-heading mb-1">{item.title}</h3>
                                <span className="text-sm font-mono text-primary mb-4 display-block tracking-widest uppercase">{item.year}</span>
                                <p className="text-zinc-400 text-lg font-light leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}
