
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { skills } from '../../data/skillsData';

export default function SkillsMarquee() {
    const sliderRef = useRef(null);

    // Flatten all skills into a single array and repeat 4 times for smoothness
    const allSkills = skills.flatMap(cat => cat.items);
    const marqueeItems = [...allSkills, ...allSkills, ...allSkills, ...allSkills];

    useEffect(() => {
        const slider = sliderRef.current;

        const ctx = gsap.context(() => {
            // Constant smooth flow left to right (or right to left if preferred)
            // User complained about previous animation "not looking right", so simplify to constant flow
            gsap.to(slider, {
                xPercent: -50,
                repeat: -1,
                duration: 40, // Slower, smoother
                ease: "linear",
            });
        }, sliderRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="py-8 bg-primary overflow-hidden border-y border-black/10 relative z-20">
            <div className="relative w-full overflow-hidden">
                <div ref={sliderRef} className="flex whitespace-nowrap gap-16 w-fit">
                    {marqueeItems.map((skill, index) => (
                        <div key={index} className="flex items-center gap-4 text-2xl md:text-4xl font-black text-black font-heading uppercase tracking-tighter">
                            {/* Optional separator or dot? User didn't ask, but looks clean without or with simple dot */}
                            <span className="w-3 h-3 bg-black rounded-full opacity-30"></span>
                            {skill}
                        </div>
                    ))}
                </div>
            </div>

            {/* Fade Edges for depth? Maybe not needed on solid green bg, keeps it punchy. */}
        </section>
    );
}
