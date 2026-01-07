
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useRef } from 'react'; // Only ref needed for potential future use or standard dom access

export default function Button({
    children,
    variant = 'primary',
    className,
    href,
    onClick,
    ...props
}) {
    // No GSAP magnetic logic anymore

    const baseStyles = "relative overflow-hidden inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full transition-all duration-300 group hover:scale-105 active:scale-95";

    const variants = {
        primary: "bg-primary text-dark hover:bg-white hover:text-black shadow-[0_0_20px_rgba(0,255,163,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]",
        secondary: "bg-zinc-800 text-white hover:bg-zinc-700",
        outline: "border border-zinc-700 text-zinc-300 hover:border-primary hover:text-primary bg-transparent",
        ghost: "text-zinc-400 hover:text-primary hover:bg-zinc-900"
    };

    const combinedStyles = clsx(baseStyles, variants[variant], className);
    const content = <span className="relative z-10 flex items-center gap-2">{children}</span>;

    if (href) {
        return (
            <Link to={href} className={combinedStyles} {...props}>
                {content}
            </Link>
        );
    }

    return (
        <button className={combinedStyles} onClick={onClick} {...props}>
            {content}
        </button>
    );
}
