import { Link } from 'react-router-dom';
import { socialLinks } from '../../data/socialLinks';

const navLinks = [
    { label: 'Home', to: '/', type: 'internal' },
    { label: 'Projects', to: '/projects', type: 'internal' },
    { label: 'About', to: '/about', type: 'internal' },
    { label: 'Contact', to: '/contact', type: 'internal' },
];

const externalLinks = [
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'LinkedIn', href: 'https://linkedin.com/' },
    { label: 'Twitter', href: 'https://twitter.com/' },
    { label: 'Email', href: 'mailto:hasan08abdullah@gmail.com' },
];

export default function Footer() {
    return (
        <footer className="bg-zinc-950 border-t border-white/5 pt-16 overflow-hidden relative">

            {/* Top Section */}
            <div className="container mx-auto px-6 max-w-[1400px]">
                <div className="flex flex-col md:flex-row gap-12 justify-between pb-12">

                    {/* Left: Brand + Tagline + Socials */}
                    <div className="flex flex-col gap-8">
                        <div>
                            <Link to="/" className="text-white font-bold text-xl font-heading tracking-tight flex items-center gap-2">
                                <span className="text-primary">HA</span>
                                <span>Hassan Abdullah</span>
                            </Link>
                            <p className="text-zinc-500 text-sm mt-2 font-light">
                                Building pixel-perfect digital experiences.
                            </p>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.id}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.name}
                                    className="w-9 h-9 rounded-md border border-white/10 flex items-center justify-center text-zinc-400 hover:text-primary hover:border-primary/40 transition-all duration-200"
                                >
                                    <link.icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right: Navigation Links — two clean columns */}
                    <div className="flex gap-16 md:gap-24">
                        {/* Pages */}
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600 mb-3">Pages</span>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    to={link.to}
                                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 py-1 relative group flex items-center gap-2"
                                >
                                    <span className="w-0 group-hover:w-3 h-px bg-primary transition-all duration-300 inline-block" />
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Connect */}
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600 mb-3">Connect</span>
                            {externalLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 py-1 relative group flex items-center gap-2"
                                >
                                    <span className="w-0 group-hover:w-3 h-px bg-primary transition-all duration-300 inline-block" />
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/5 pb-6 pt-4 flex justify-between items-center text-[11px] font-mono text-zinc-600">
                    <span>© {new Date().getFullYear()} Hassan Abdullah</span>
                    <span>Lahore, Pakistan · GMT+5</span>
                </div>
            </div>

            {/* Bottom: Giant Name — centered, tall, partially clipped */}
            <div className="w-full overflow-hidden leading-none select-none -mb-[5vw]">
                <p
                    className="font-black font-heading tracking-tighter text-primary uppercase text-center leading-[0.82]"
                    style={{ fontSize: '26vw', transform: 'scaleY(1.15)', transformOrigin: 'top' }}
                >
                    Hassan
                </p>
            </div>
        </footer>
    );
}
