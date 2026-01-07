
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

export default function PageTransition({ children }) {
    const location = useLocation();
    const overlayRef = useRef(null);
    const wipeRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            // Page Entry Animation
            tl.set(overlayRef.current, { scaleY: 1, transformOrigin: 'bottom' })
                .set(wipeRef.current, { scaleY: 1, transformOrigin: 'bottom' })
                .to(overlayRef.current, {
                    scaleY: 0,
                    duration: 0.8,
                    ease: "power4.inOut",
                    transformOrigin: 'top'
                })
                .to(wipeRef.current, {
                    scaleY: 0,
                    duration: 0.8,
                    ease: "power4.inOut",
                    transformOrigin: 'top',
                    delay: -0.6
                });

        }, overlayRef);

        return () => ctx.revert();
    }, [location.pathname]);

    return (
        <>
            <div ref={overlayRef} className="fixed inset-0 bg-black z-[100] pointer-events-none" />
            <div ref={wipeRef} className="fixed inset-0 bg-primary z-[99] pointer-events-none" />
            {children}
        </>
    );
}
