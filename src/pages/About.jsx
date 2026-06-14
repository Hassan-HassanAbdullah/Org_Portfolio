
import { aboutData } from '../data/aboutData';
import ScrollReveal from '../components/ui/ScrollReveal';

export default function About() {
    return (
        <div className="container mx-auto px-6 pt-28 md:pt-32 pb-20 overflow-hidden">

            {/* Hero / Intro */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start mb-24 md:mb-32">
                <div className="flex-1 space-y-8">
                    <ScrollReveal>
                        <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-primary">Profile</p>
                        <h1 className="text-5xl md:text-8xl font-bold text-white font-heading tracking-tighter">
                            About <span className="text-zinc-700">Me.</span>
                        </h1>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <div className="w-24 h-2 bg-primary rounded"></div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <p className="text-base md:text-xl text-zinc-300 leading-8 md:leading-relaxed font-light">
                            {aboutData.description}
                        </p>
                    </ScrollReveal>
                    <ScrollReveal delay={0.3}>
                        <p className="text-base md:text-xl text-zinc-300 leading-8 md:leading-relaxed font-light">
                            {aboutData.mission}
                        </p>
                    </ScrollReveal>
                </div>

                {/* Abstract "Image" Area */}
                <ScrollReveal delay={0.4} className="flex-1 w-full max-w-lg mx-auto relative group">
                    <div className="absolute inset-0 bg-primary blur-[100px] opacity-20 rounded-full group-hover:opacity-30 transition-opacity" />
                    <div className="aspect-square bg-zinc-900/40 backdrop-blur-xl rounded-lg relative overflow-hidden border border-white/10 flex items-center justify-center hover:border-primary/30 transition-colors group">
                        <img 
                            src="/hero-bg.png" 
                            alt="Hassan Abdullah" 
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                        <span className="absolute bottom-6 left-6 text-3xl font-bold text-white font-heading tracking-tighter">
                            HA
                        </span>
                    </div>
                </ScrollReveal>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 mb-24 md:mb-32">
                {aboutData.stats?.map((stat, idx) => (
                    <ScrollReveal key={idx} delay={idx * 0.1}>
                        <div className="bg-zinc-900/40 backdrop-blur-xl border border-white/10 p-7 md:p-10 rounded-lg text-center hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden h-full">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="text-5xl md:text-6xl font-bold text-white mb-4 font-heading group-hover:text-primary transition-colors relative z-10">{stat.value}</div>
                            <div className="text-zinc-500 font-medium tracking-widest uppercase text-sm relative z-10">{stat.label}</div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>

            {/* Journey / Timeline */}
            <section>
                <ScrollReveal>
                    <h2 className="text-4xl font-bold text-white mb-16 font-heading text-center md:text-left">My Journey</h2>
                </ScrollReveal>
                <div className="space-y-8 md:space-y-12 border-l border-zinc-800 pl-7 md:pl-12 relative max-w-3xl ml-2 md:ml-0">
                    {/* Timeline Items */}
                    {[
                        { title: "Started Coding", year: "2020", desc: "Began my journey with HTML & CSS, building small websites." },
                        { title: "Frontend Mastery", year: "2022", desc: "Deep dived into React, State Management, and Modern CSS." },
                        { title: "Full Stack Exploration", year: "Present", desc: "Currently expanding into Backend technologies and Advanced Animations." }
                    ].map((item, i) => (
                        <ScrollReveal key={i} delay={i * 0.1}>
                            <div className="relative group">
                                <div className="absolute -left-[36px] md:-left-[54px] top-1.5 w-4 h-4 bg-black border-2 border-zinc-700 rounded-full group-hover:border-primary group-hover:scale-125 transition-all duration-300 z-10"></div>
                                <div className="p-5 md:p-8 rounded-lg bg-zinc-900/20 border border-white/10 hover:bg-zinc-900/40 hover:border-primary/20 transition-all duration-300 backdrop-blur-sm">
                                    <h3 className="text-xl md:text-2xl font-bold text-white font-heading mb-1">{item.title}</h3>
                                    <span className="text-sm font-mono text-primary mb-4 display-block tracking-widest uppercase">{item.year}</span>
                                    <p className="text-zinc-400 text-base md:text-lg font-light leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

        </div>
    );
}
