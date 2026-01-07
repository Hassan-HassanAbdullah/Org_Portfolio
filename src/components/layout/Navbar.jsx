
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            className={clsx(
                "fixed top-4 left-0 right-0 z-50 transition-all duration-300 flex justify-center",
                isScrolled ? "py-0" : "py-2"
            )}
        >
            <div
                className={clsx(
                    "container max-w-5xl mx-auto px-6 py-3 rounded-full transition-all duration-300 flex items-center justify-between",
                    isScrolled ? "bg-zinc-900/80 backdrop-blur-md border border-white/5 shadow-lg" : "bg-transparent border-transparent"
                )}
            >
                <Link to="/" className="text-2xl font-bold tracking-tighter text-white font-heading">
                    HA<span className="text-primary">.</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={clsx(
                                "text-sm font-medium transition-all hover:text-primary relative group",
                                location.pathname === link.path ? "text-primary" : "text-zinc-400"
                            )}
                        >
                            {link.name}
                            <span className={clsx(
                                "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
                                location.pathname === link.path ? "w-full" : "w-0"
                            )}></span>
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        className="px-5 py-2 text-xs font-bold text-black bg-primary rounded-full hover:bg-white transition-colors shadow-[0_0_15px_rgba(0,255,163,0.3)] tracking-widest"
                    >
                        HIRE ME
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white hover:text-primary transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="absolute top-full left-4 right-4 mt-4 bg-zinc-900/95 backdrop-blur-xl border border-white/10 p-8 rounded-3xl md:hidden flex flex-col gap-6 shadow-2xl">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={clsx(
                                    "text-xl font-medium transition-colors font-heading",
                                    location.pathname === link.path ? "text-primary" : "text-white"
                                )}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}
