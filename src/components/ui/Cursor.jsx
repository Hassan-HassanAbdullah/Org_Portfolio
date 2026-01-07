
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Cursor() {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        // Hide default cursor
        document.body.style.cursor = 'none';

        const onMouseMove = (e) => {
            gsap.to(cursorRef.current, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "power2.out"
            });
            gsap.to(followerRef.current, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.8, // Slower/smoother lag
                ease: "power3.out"
            });
        };

        const onMouseEnter = () => setIsHovering(true);
        const onMouseLeave = () => setIsHovering(false);

        // Add listeners to clickable elements
        const addListeners = () => {
            const clickables = document.querySelectorAll('a, button, .hover-trigger, input, textarea');
            clickables.forEach(el => {
                el.addEventListener('mouseenter', onMouseEnter);
                el.addEventListener('mouseleave', onMouseLeave);
            });
        }

        addListeners();
        // Re-run on DOM changes (simple MutationObserver alternative for this scope)
        const observer = new MutationObserver(addListeners);
        observer.observe(document.body, { childList: true, subtree: true });

        window.addEventListener('mousemove', onMouseMove);

        return () => {
            document.body.style.cursor = 'auto';
            window.removeEventListener('mousemove', onMouseMove);
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-4 h-4 bg-primary rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block"
            />
            <div
                ref={followerRef}
                className={`fixed top-0 left-0 border border-primary/50 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hidden md:block mix-blend-screen ${isHovering ? 'w-16 h-16 bg-primary/10 border-transparent backdrop-blur-sm' : 'w-8 h-8'
                    }`}
            />
        </>
    );
}
