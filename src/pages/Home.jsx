
import Hero from '../components/home/Hero';
import SkillsPreview from '../components/home/SkillsPreview';
import FeaturedProjects from '../components/home/FeaturedProjects';
import SkillsMarquee from '../components/home/SkillsMarquee';

export default function Home() {
    return (
        <div className="overflow-hidden">
            <Hero />
            <SkillsMarquee />
            <SkillsPreview />
            <FeaturedProjects />

            {/* Simple CTA Section */}
            <section className="py-20 text-center container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Ready to start your next project?
                </h2>
                <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                {/* Is link par click karne se user ka default email client open ho jayega aur recipient address pehle se fill hoga */}
                <a
                    href="mailto:hasan08abdullah@gmail.com"
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-black bg-primary rounded-full hover:bg-white transition-all shadow-lg shadow-primary/25"
                >
                    Get in Touch
                </a>
            </section>
        </div>
    );
}
