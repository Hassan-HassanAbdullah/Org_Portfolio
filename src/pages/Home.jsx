import Hero from '../components/home/Hero';
import AboutSnippet from '../components/home/AboutSnippet';
import SkillsPreview from '../components/home/SkillsPreview';
import FeaturedProjects from '../components/home/FeaturedProjects';
import SkillsMarquee from '../components/home/SkillsMarquee';
import ScrollReveal from '../components/ui/ScrollReveal';

export default function Home() {
    return (
        <div className="overflow-clip">
            <Hero />
            <AboutSnippet />
            <ScrollReveal>
                <SkillsMarquee />
            </ScrollReveal>
            <ScrollReveal>
                <SkillsPreview />
            </ScrollReveal>
            <FeaturedProjects />

            {/* Simple CTA Section */}
            <ScrollReveal>
                <section className="py-20 text-center container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to start your next project?
                    </h2>
                    <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                    <a
                        href="mailto:hasan08abdullah@gmail.com"
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-dark bg-primary rounded-full hover:bg-white transition-all primary-glow-sm tracking-widest"
                    >
                        GET IN TOUCH
                    </a>
                </section>
            </ScrollReveal>
        </div>
    );
}
