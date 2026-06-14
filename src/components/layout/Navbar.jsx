
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
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                isScrolled ? "py-4 bg-dark/80 backdrop-blur-md border-b border-white/5" : "py-6 bg-transparent"
            )}
        >
            <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
                
                {/* Logo */}
                <Link to="/" className="text-xl md:text-2xl font-bold tracking-tighter text-white font-heading">
                    HA<span className="text-primary">*</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-12">
                    <div className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={clsx(
                                    "text-sm font-medium transition-colors hover:text-white",
                                    location.pathname === link.path ? "text-white" : "text-zinc-400"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    
                    {/* Hire Me Button */}
                    <Link
                        to="/contact"
                        className="px-5 py-2 text-xs font-bold text-dark bg-primary rounded-full hover:bg-white transition-colors primary-glow-sm tracking-widest"
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
                    <div className="absolute top-full left-0 right-0 bg-dark/95 backdrop-blur-xl border-b border-white/10 p-8 md:hidden flex flex-col gap-6 shadow-2xl">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={clsx(
                                    "text-xl font-medium transition-colors font-heading",
                                    location.pathname === link.path ? "text-primary" : "text-zinc-400"
                                )}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        {/* Hire Me Button for Mobile */}
                        <Link
                            to="/contact"
                            className="w-fit px-6 py-3 mt-4 text-sm font-bold text-dark bg-primary rounded-full hover:bg-white transition-colors tracking-widest text-center"
                            onClick={() => setIsOpen(false)}
                        >
                            HIRE ME
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}
