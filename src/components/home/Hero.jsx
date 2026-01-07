
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Download } from 'lucide-react';
import Button from '../ui/Button';

export default function Hero() {
    const heroRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.fromTo(".hero-text-reveal",
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.15,
                    ease: "power4.out",
                    delay: 0.5
                }
            )
                .fromTo(".hero-btn",
                    { y: 20, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.1,
                        ease: "power2.out"
                    },
                    "-=0.5"
                );

            // Blob animation
            gsap.to(".blob", {
                scale: 1.2,
                duration: 8,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center items-center text-center container mx-auto px-6 pt-28 pb-32 overflow-hidden max-w-[100vw]">

            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] pointer-events-none -z-10" />

            {/* Background Blobs */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full mix-blend-screen pointer-events-none blob -z-20 opacity-50" />
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-primary/10 blur-[180px] rounded-full mix-blend-screen pointer-events-none blob animation-delay-2000 -z-20 opacity-50" />

            <div className="max-w-6xl space-y-10 z-10">
                <h2 className="hero-text-reveal text-primary font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase border border-primary/20 inline-block px-3 py-1 rounded-full bg-primary/5 backdrop-blur-sm">
                    Available for Freelance & Hires
                </h2>

                <div className="overflow-hidden">
                    <h1 className="hero-text-reveal text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white leading-[0.9] font-heading">
                        CREATIVE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 via-white to-zinc-500 bg-[length:200%_auto] animate-gradient">DEVELOPER</span>
                    </h1>
                </div>

                <p className="hero-text-reveal text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed font-light">
                    I build pixel-perfect, engaging, and accessible digital experiences.
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-center pt-8">
                    <Button href="/projects" variant="primary" className="hero-btn  h-14 text-lg w-full md:w-auto">
                        View selected work <ArrowRight size={20} className="ml-2" />
                    </Button>
                    <Button variant="outline" className="hero-btn h-14 text-lg w-full md:w-auto border-zinc-700 hover:border-white">
                        Access Resume <Download size={20} className="ml-2" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
