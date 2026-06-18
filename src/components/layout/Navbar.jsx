
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

const navLinks = [
    { name: 'Home',     path: '/',         num: '01', tag: 'Start here'  },
    { name: 'Projects', path: '/projects', num: '02', tag: 'My work'     },
    { name: 'About',    path: '/about',    num: '03', tag: 'Who I am'    },
    { name: 'Contact',  path: '/contact',  num: '04', tag: "Let's talk"  },
];

function MenuIcon({ isOpen }) {
    return (
        <span className="menu-icon-wrap" aria-hidden="true">
            <span className={clsx('bar bar-1', isOpen && 'bar-1-open')} />
            <span className={clsx('bar bar-2', isOpen && 'bar-2-open')} />
            <span className={clsx('bar bar-3', isOpen && 'bar-3-open')} />
        </span>
    );
}

export default function Navbar() {
    const [isOpen,    setIsOpen]    = useState(false);
    const [isScrolled,setIsScrolled]= useState(false);
    const [hovered,   setHovered]   = useState(null);
    const [ripple,    setRipple]    = useState(false);
    const location = useLocation();

    useEffect(() => {
        const fn = () => setIsScrolled(window.scrollY > 40);
        window.addEventListener('scroll', fn, { passive: true });
        return () => window.removeEventListener('scroll', fn);
    }, []);

    useEffect(() => setIsOpen(false), [location.pathname]);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    const toggle = () => {
        setRipple(true);
        setTimeout(() => setRipple(false), 600);
        setIsOpen(p => !p);
    };

    const pill = {
        borderRadius: '9999px',
        transition: 'all 0.45s cubic-bezier(0.34,1.56,0.64,1)',
        background: isScrolled
            ? 'linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))'
            : 'transparent',
        boxShadow: isScrolled
            ? '0 8px 32px rgba(0,0,0,0.45),inset 0 1px 0 rgba(255,255,255,0.08),0 0 0 1px rgba(255,255,255,0.07)'
            : 'none',
        backdropFilter:       isScrolled ? 'blur(20px) saturate(180%)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
    };

    return (
        <>
            {/* ─────────────────── NAVBAR ─────────────────── */}
            <nav className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
                <div className="w-full max-w-[1400px] mx-auto px-5 md:px-10 pt-5 flex items-center justify-between">

                    {/* Logo */}
                    <div style={{ pointerEvents:'all', ...pill }} className="flex items-center px-4 py-2 relative">
                        <span className="absolute inset-0 rounded-full pointer-events-none" style={{
                            background:'radial-gradient(ellipse at 20% 50%,rgb(199 255 0/0.06),transparent 65%)',
                            opacity: isScrolled ? 1 : 0, transition:'opacity 0.45s ease',
                        }}/>
                        <Link to="/" className="relative text-xl md:text-2xl font-bold tracking-tighter text-white font-heading">
                            HA<span className="text-primary">*</span>
                        </Link>
                    </div>

                    {/* Controls */}
                    <div style={{ pointerEvents:'all', ...pill }} className="flex items-center gap-2 px-3 py-2 relative">
                        <span className="absolute inset-0 rounded-full pointer-events-none" style={{
                            background:'radial-gradient(ellipse at 80% 50%,rgb(199 255 0/0.06),transparent 65%)',
                            opacity: isScrolled ? 1 : 0, transition:'opacity 0.45s ease',
                        }}/>

                        {/* Menu btn */}
                        <button className="menu-btn relative flex items-center justify-center w-10 h-10 rounded-xl overflow-hidden"
                            onClick={toggle} aria-label={isOpen ? 'Close' : 'Menu'}
                            style={{
                                background: isOpen ? 'rgba(199,255,0,0.12)' : 'rgba(255,255,255,0.05)',
                                border: isOpen ? '1px solid rgba(199,255,0,0.25)' : '1px solid rgba(255,255,255,0.1)',
                                transition:'background 0.4s,border 0.4s',
                            }}>
                            {ripple && <span className="ripple-ring" style={{ borderColor: isOpen ? 'rgba(255,255,255,0.3)':'rgba(199,255,0,0.4)' }}/>}
                            <MenuIcon isOpen={isOpen}/>
                        </button>

                        <span className="w-px h-5 rounded-full" style={{ background:'rgba(255,255,255,0.15)' }}/>

                        {/* Hire Me */}
                        <Link to="/contact"
                            className="relative px-5 py-2 rounded-xl text-xs font-bold tracking-widest overflow-hidden group"
                            style={{ background:'rgb(199 255 0)', color:'#050505', boxShadow:'0 0 20px rgb(199 255 0/0.3)', transition:'box-shadow 0.3s,transform 0.2s' }}
                            onMouseEnter={e => { e.currentTarget.style.boxShadow='0 0 32px rgb(199 255 0/0.6)'; e.currentTarget.style.transform='scale(1.05)'; }}
                            onMouseLeave={e => { e.currentTarget.style.boxShadow='0 0 20px rgb(199 255 0/0.3)'; e.currentTarget.style.transform='scale(1)'; }}>
                            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hire-shimmer"/>
                            HIRE ME
                        </Link>
                    </div>
                </div>
            </nav>

            {/* ─────────────────── FULLSCREEN OVERLAY ─────────────────── */}
            <div className="fixed inset-0 z-40 flex flex-col" style={{
                pointerEvents: isOpen ? 'all' : 'none',
                clipPath: isOpen
                    ? 'circle(170% at calc(100% - 52px) 52px)'
                    : 'circle(0%   at calc(100% - 52px) 52px)',
                transition: 'clip-path 0.85s cubic-bezier(0.77,0,0.175,1)',
                background: '#040407',
            }}>

                {/* dot-grid texture */}
                <div className="absolute inset-0 pointer-events-none" style={{
                    backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
                    backgroundSize: '36px 36px',
                }}/>

                {/* ambient glow */}
                <div className="absolute inset-0 pointer-events-none" style={{
                    background:'radial-gradient(ellipse at 90% 10%, rgba(199,255,0,0.09) 0%, transparent 45%)',
                    transform: isOpen ? 'scale(1)' : 'scale(0.6)',
                    transition:'transform 1.1s cubic-bezier(0.34,1.56,0.64,1) 0.15s',
                }}/>

                {/* ── NAV ROWS (fill remaining height) ── */}
                <div className="relative flex flex-col" style={{ marginTop: '82px', flex: 1 }}>

                    {navLinks.map((link, i) => {
                        const active = location.pathname === link.path;
                        const hov    = hovered === i;
                        return (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                onMouseEnter={() => setHovered(i)}
                                onMouseLeave={() => setHovered(null)}
                                className="relative flex items-center px-8 md:px-16 xl:px-24 overflow-hidden"
                                style={{
                                    flex: 1,
                                    borderTop: '1px solid rgba(255,255,255,0.05)',
                                    opacity: isOpen ? 1 : 0,
                                    transform: isOpen ? 'translateY(0)' : `translateY(${(i + 1) * 28}px)`,
                                    transition: `
                                        opacity   0.75s cubic-bezier(0.22,1,0.36,1) ${isOpen ? i * 0.1 + 0.35 : i * 0.05}s,
                                        transform 0.75s cubic-bezier(0.22,1,0.36,1) ${isOpen ? i * 0.1 + 0.35 : i * 0.05}s
                                    `,
                                }}
                            >
                                {/* Row hover background sweep */}
                                <span className="absolute inset-0 pointer-events-none" style={{
                                    background: 'linear-gradient(90deg, rgba(199,255,0,0.055) 0%, transparent 60%)',
                                    transform: hov ? 'scaleX(1)' : 'scaleX(0)',
                                    transformOrigin: 'left',
                                    transition: 'transform 0.5s cubic-bezier(0.22,1,0.36,1)',
                                }}/>

                                {/* Left accent bar */}
                                <span className="absolute left-0 top-0 bottom-0" style={{
                                    width: '3px',
                                    background: active ? 'rgb(199 255 0)' : hov ? 'rgba(199,255,0,0.5)' : 'transparent',
                                    boxShadow: hov || active ? '0 0 18px rgba(199,255,0,0.6)' : 'none',
                                    transition: 'background 0.3s, box-shadow 0.3s',
                                }}/>

                                {/* Number */}
                                <span className="relative text-[10px] font-mono tracking-[0.2em] mr-5 md:mr-8 w-5 shrink-0"
                                      style={{
                                          color: hov || active ? 'rgb(199 255 0)' : 'rgba(255,255,255,0.12)',
                                          transition: 'color 0.3s',
                                      }}>
                                    {link.num}
                                </span>

                                {/* ── BIG TEXT — stroke → fill ── */}
                                <span className="relative font-extrabold font-heading tracking-tight leading-none"
                                      style={{
                                          fontSize: 'clamp(2.8rem, 9vw, 9rem)',
                                          WebkitTextStroke: active
                                              ? '0'
                                              : hov
                                                  ? '0'
                                                  : '1.5px rgba(255,255,255,0.28)',
                                          color: active
                                              ? 'rgb(199 255 0)'
                                              : hov ? '#ffffff' : 'transparent',
                                          transform: hov ? 'translateX(16px)' : 'translateX(0)',
                                          transition: 'color 0.45s ease, -webkit-text-stroke 0.45s ease, transform 0.45s cubic-bezier(0.34,1.56,0.64,1)',
                                      }}>
                                    {link.name}
                                </span>

                                {/* Right tag + arrow (appears on hover) */}
                                <span className="relative ml-auto flex items-center gap-3 shrink-0"
                                      style={{
                                          opacity: hov ? 1 : 0,
                                          transform: hov ? 'translateX(0)' : 'translateX(24px)',
                                          transition: 'opacity 0.35s ease, transform 0.45s cubic-bezier(0.34,1.56,0.64,1)',
                                      }}>
                                    <span className="hidden md:inline text-xs font-mono tracking-widest px-3 py-1 rounded-full"
                                          style={{
                                              color: 'rgba(199,255,0,0.85)',
                                              background: 'rgba(199,255,0,0.09)',
                                              border: '1px solid rgba(199,255,0,0.2)',
                                          }}>
                                        {link.tag}
                                    </span>
                                    <span style={{ color: 'rgb(199 255 0)', fontSize: '1.4rem', lineHeight: 1 }}>↗</span>
                                </span>
                            </Link>
                        );
                    })}

                    {/* Bottom border of last row */}
                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}/>
                </div>

                {/* ── FOOTER STRIP ── */}
                <div className="relative flex items-center justify-between px-8 md:px-16 xl:px-24 py-4 shrink-0"
                     style={{
                         borderTop: '1px solid rgba(255,255,255,0.05)',
                         opacity: isOpen ? 1 : 0,
                         transition: 'opacity 0.6s ease 0.72s',
                     }}>

                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full" style={{
                            background: 'rgb(199 255 0)',
                            boxShadow: '0 0 8px rgba(199,255,0,0.7)',
                            animation: 'pulsedot 2s ease infinite',
                        }}/>
                        <span className="text-[10px] font-mono tracking-widest uppercase"
                              style={{ color: 'rgba(199,255,0,0.7)' }}>
                            Available for work
                        </span>
                    </div>

                    <span className="hidden md:block text-[10px] font-mono tracking-widest"
                          style={{ color: 'rgba(255,255,255,0.18)' }}>
                        hassan@email.com
                    </span>

                    <span className="text-[10px] font-mono tracking-widest"
                          style={{ color: 'rgba(255,255,255,0.18)' }}>
                        © 2025 Hassan Abdullah
                    </span>
                </div>
            </div>

            {/* ─────────────────── STYLES ─────────────────── */}
            <style>{`
                .hire-shimmer {
                    background: linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.45) 50%, transparent 65%);
                    background-size: 200% 100%;
                    animation: shimmer 0.75s ease forwards;
                }
                @keyframes shimmer {
                    from { background-position: -200% center; }
                    to   { background-position:  200% center; }
                }

                /* ── Hamburger ── */
                .menu-icon-wrap {
                    display: flex; flex-direction: column;
                    align-items: flex-end; justify-content: center;
                    gap: 5px; width: 22px; height: 22px;
                }
                .bar {
                    display: block; height: 2px; border-radius: 9999px;
                    background: rgba(255,255,255,0.88);
                    transform-origin: center;
                    transition:
                        transform  0.45s cubic-bezier(0.34,1.56,0.64,1),
                        width      0.35s cubic-bezier(0.34,1.56,0.64,1),
                        opacity    0.3s ease,
                        background 0.3s ease;
                }
                .bar-1 { width: 22px; }
                .bar-2 { width: 14px; }
                .bar-3 { width: 22px; }
                .menu-btn:hover .bar-1:not(.bar-1-open),
                .menu-btn:hover .bar-2:not(.bar-2-open),
                .menu-btn:hover .bar-3:not(.bar-3-open) { width: 22px; background: #fff; }
                .bar-1-open { width:22px; transform:translateY(7px) rotate(45deg);  background:rgb(199 255 0); }
                .bar-2-open { width:0;    opacity:0; }
                .bar-3-open { width:22px; transform:translateY(-7px) rotate(-45deg); background:rgb(199 255 0); }

                /* ── Ripple ── */
                .ripple-ring {
                    position:absolute; inset:0; border-radius:10px;
                    border:2px solid;
                    animation: ripple-expand 0.55s ease-out forwards;
                    pointer-events:none;
                }
                @keyframes ripple-expand {
                    0%   { transform:scale(1);   opacity:1; }
                    100% { transform:scale(1.9); opacity:0; }
                }

                /* ── Pulse dot ── */
                @keyframes pulsedot {
                    0%,100% { opacity:1;   transform:scale(1);   }
                    50%      { opacity:0.4; transform:scale(1.5); }
                }
            `}</style>
        </>
    );
}
