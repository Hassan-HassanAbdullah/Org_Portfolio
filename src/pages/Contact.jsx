
import { useState } from 'react';
import { socialLinks } from '../data/socialLinks';
import Button from '../components/ui/Button';
import { Send, Mail, MapPin, CheckCircle, Loader2, X } from 'lucide-react';

const SuccessModal = ({ onClose }) => (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
        {/* Backdrop */}
        <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={onClose}
        />

        {/* Modal Content */}
        <div className="relative bg-zinc-900 border border-white/10 rounded-3xl p-8 md:p-12 max-w-md w-full text-center shadow-2xl transform transition-all scale-100 animate-in fade-in zoom-in duration-300">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-primary w-10 h-10" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-4 font-heading">Message Sent!</h3>
            <p className="text-zinc-400 mb-8 leading-relaxed">
                Thanks for reaching out! I've received your message and will get back to you as soon as possible.
            </p>

            <button
                onClick={onClose}
                className="w-full py-4 bg-primary text-black font-bold rounded-xl hover:bg-white transition-colors"
            >
                Close
            </button>

            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
            >
                <X size={24} />
            </button>
        </div>
    </div>
);

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("https://formsubmit.co/iqasir575@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setIsSuccess(true);
                e.target.reset(); // Clear form
            } else {
                alert("Something went wrong. Please try again or email me directly.");
            }
        } catch (error) {
            console.error("Form error:", error);
            alert("Error sending message. Please check your connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container mx-auto px-6 pt-32 pb-20 min-h-[80vh] flex items-center relative">
            {isSuccess && <SuccessModal onClose={() => setIsSuccess(false)} />}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 w-full">

                {/* Contact Info */}
                <div className="space-y-12">
                    <div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 font-heading">Let's <br />Connect.</h1>
                        <p className="text-zinc-400 text-xl font-light leading-relaxed">
                            Have a project in mind or just want to chat? I'm always open to discussing new projects, creative ideas or opportunities.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div className="flex items-center space-x-6 text-zinc-300 group">
                            <div className="w-14 h-14 bg-zinc-900/40 backdrop-blur-md rounded-full flex items-center justify-center text-primary border border-white/5 group-hover:border-primary/30 transition-colors">
                                <Mail size={24} />
                            </div>
                            <div>
                                <div className="text-sm text-zinc-500 uppercase tracking-widest mb-1">Email</div>
                                <div className="text-xl font-medium text-white hover:text-primary transition-colors cursor-pointer">hasan08abdullah@gmail.com</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-6 text-zinc-300 group">
                            <div className="w-14 h-14 bg-zinc-900/40 backdrop-blur-md rounded-full flex items-center justify-center text-primary border border-white/5 group-hover:border-primary/30 transition-colors">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <div className="text-sm text-zinc-500 uppercase tracking-widest mb-1">Location</div>
                                <div className="text-xl font-medium text-white">Pakistan</div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8">
                        <div className="flex gap-4">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.id}
                                    href={link.url}
                                    className="w-12 h-12 bg-zinc-900/40 backdrop-blur-md rounded-full flex items-center justify-center text-zinc-400 hover:bg-primary hover:text-black transition-all duration-300 border border-white/5 hover:scale-110"
                                >
                                    <link.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="bg-zinc-900/40 backdrop-blur-xl p-10 rounded-[2rem] border border-white/5 shadow-2xl relative overflow-hidden group hover:border-primary/20 transition-colors duration-500">
                    {/* Honeypot for spam */}
                    <input type="text" name="_honey" style={{ display: 'none' }} />
                    <input type="hidden" name="_captcha" value="false" />

                    {/* Glow Effect */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                    <div className="space-y-6 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary focus:bg-black/60 transition-all font-medium"
                                    placeholder="Ali Khan"
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary focus:bg-black/60 transition-all font-medium"
                                    placeholder="ali.khan@example.com"
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                rows="4"
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary focus:bg-black/60 transition-all font-medium resize-none"
                                placeholder="Tell me about your project..."
                                required
                                disabled={isSubmitting}
                            ></textarea>
                        </div>

                        <Button type="submit" className="w-full py-5 text-lg shadow-none hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed" disabled={isSubmitting}>
                            {isSubmitting ? (
                                <span className="flex items-center"><Loader2 className="animate-spin mr-2" size={20} /> Sending...</span>
                            ) : (
                                <span className="flex items-center">Send Message <Send size={20} className="ml-2" /></span>
                            )}
                        </Button>
                    </div>
                </form>

            </div>
        </div>
    );
}
