
import { socialLinks } from '../../data/socialLinks';

export default function Footer() {
    return (
        <footer className="bg-zinc-950 border-t border-white/5 py-12">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <p className="text-zinc-500 text-sm font-light">
                        © {new Date().getFullYear()} Hassan Abdullah. Crafted with code & creativity.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    {socialLinks.map((link) => (
                        <a
                            key={link.id}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-500 hover:text-primary transition-colors transform hover:scale-110 duration-200"
                            aria-label={link.name}
                        >
                            <link.icon size={20} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
