
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Loader({ onComplete }) {
    const loaderRef = useRef(null);
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                onComplete: () => {
                    gsap.to(loaderRef.current, {
                        yPercent: -100,
                        duration: 1,
                        ease: "power4.inOut",
                        onComplete: onComplete
                    });
                }
            });

            // Counter Animation
            let counter = { val: 0 };
            tl.to(counter, {
                val: 100,
                duration: 2,
                ease: "power2.inOut",
                onUpdate: () => {
                    setPercent(Math.floor(counter.val));
                }
            });

        }, loaderRef);

        return () => ctx.revert();
    }, [onComplete]);

    return (
        <div ref={loaderRef} className="fixed inset-0 z-[100] bg-black flex items-end justify-start p-10 md:p-20">
            <div className="flex flex-col items-start">
                <div className="text-[10vw] md:text-[12vw] font-bold text-white font-heading leading-none tracking-tighter">
                    {percent}%
                </div>
                <p className="text-zinc-500 font-mono text-sm tracking-widest mt-4">
                    SYSTEM LOADING...
                </p>
            </div>
        </div>
    );
}
