
export const skills = [
    {
        category: "Frontend",
        items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Tailwind", "GSAP"],
        // Simplified mapping for demo. In a real app, I'd map each item to a URL.
        // I will generate the URLs dynamically in the component to avoid massive JSON bloat here, 
        // or just assume a standard convention: `https://cdn.simpleicons.org/[Item]`
    },
    {
        category: "Backend",
        items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"]
    },
    {
        category: "Tools",
        items: ["Git", "GitHub", "VS Code", "Vite", "Figma", "Postman"]
    }
];
