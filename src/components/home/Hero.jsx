import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Download } from 'lucide-react';
import Button from '../ui/Button';

export default function Hero() {
    const heroRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.fromTo(".hero-bottom-element",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power4.out",
                    delay: 0.2
                }
            );

        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="relative isolate min-h-screen w-full flex flex-col justify-end overflow-hidden pb-12 px-6 md:px-12">
            {/* Background Image - The user should rename their provided image to hero-bg.jpg and place it in the public folder */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-20 scale-105 md:scale-105 origin-bottom"
                style={{ backgroundImage: "url('/hero-bg.png')" }}
            ></div>

            {/* Subtle Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent -z-10"></div>

            {/* Bottom Content Container */}
            <div className="w-full flex flex-col md:flex-row justify-between items-end z-10 gap-8 max-w-[1400px] mx-auto">
                
                {/* Bottom Left: Logo/Brand Name */}
                <div className="hero-bottom-element w-full md:w-auto">
                    <p className="text-zinc-300 text-sm md:text-base font-medium mb-2 tracking-wide uppercase">
                        Hassan Abdullah
                    </p>
                    <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-bold tracking-tighter text-white font-heading leading-[0.9]">
                        CREATIVE
                        <br />
                        DEVELOPER<span className="text-primary text-[0.5em] align-super ml-1 md:ml-2">*</span>
                    </h1>
                </div>

                {/* Bottom Right: Description */}
                <div className="hero-bottom-element w-full md:max-w-[450px] flex flex-col items-start md:items-end text-left md:text-right pb-2">
                    <div className="max-w-full px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-6 inline-flex items-center justify-center">
                        <span className="text-[10px] md:text-xs font-mono tracking-[0.12em] sm:tracking-[0.2em] uppercase text-primary whitespace-normal sm:whitespace-nowrap text-center">
                            Available for Freelance & Hires
                        </span>
                    </div>
                    
                    <p className="text-base md:text-xl text-zinc-300 leading-relaxed font-light text-left md:text-right mb-8">
                        I build pixel-perfect, engaging, and accessible digital experiences.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full justify-start md:justify-end">
                        <Button href="/projects" variant="primary" className="h-12 text-sm sm:w-auto">
                            View Work <ArrowRight size={16} className="ml-2" />
                        </Button>
                        <Button variant="outline" className="h-12 text-sm sm:w-auto border-zinc-700 hover:border-white">
                            Resume <Download size={16} className="ml-2" />
                        </Button>
                    </div>
                </div>
                
            </div>
        </section>
    );
}
