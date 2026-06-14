import { motion as Motion } from 'framer-motion';

export default function ScrollReveal({ children, className = "", delay = 0 }) {
    return (
        <Motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay }}
            className={className}
        >
            {children}
        </Motion.div>
    );
}
