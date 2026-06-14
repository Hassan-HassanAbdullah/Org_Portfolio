import { motion as Motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const copy = [
    "I'm",
    "Hassan",
    "Abdullah,",
    "a",
    "digital",
    "designer",
    "and",
    "highly",
    "talented",
    "3D",
    "renderer",
    "with",
    "over",
    "a",
    "decade",
    "of",
    "experience",
    "in",
    "the",
    "field.",
    "I",
    "specialize",
    "in",
    "building",
    "pixel-perfect,",
    "engaging,",
    "and",
    "accessible",
    "digital",
    "experiences.",
];

function AnimatedWord({ word, index, total, progress }) {
    const start = index / total;
    const end = Math.min(start + 0.18, 1);
    const opacity = useTransform(progress, [start, end], [0, 1]);
    const activeColor = index === 1 || index === 2 ? "text-primary" : "text-white";

    return (
        <span className="about-word relative inline-block">
            {word}
            <Motion.span
                aria-hidden="true"
                style={{ opacity }}
                className={`absolute inset-0 ${activeColor}`}
            >
                {word}
            </Motion.span>
        </span>
    );
}

export default function AboutSnippet() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start 82%", "end 42%"],
    });

    return (
        <section ref={sectionRef} className="py-32 bg-dark relative z-10 border-t border-white/5">
            <div className="container mx-auto px-6 max-w-5xl text-center">
                <p className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight font-heading">
                    {copy.map((word, index) => (
                        <span key={`${word}-${index}`} className="inline">
                            <AnimatedWord word={word} index={index} total={copy.length} progress={scrollYProgress} />{" "}
                        </span>
                    ))}
                </p>
            </div>
        </section>
    );
}
