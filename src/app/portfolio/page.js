"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Shield, Droplets, Truck, Code2, Layout, Zap, Lock } from "lucide-react";
import Image from "next/image";

export default function PortfolioPage() {
    const projects = [
        {
            title: "The Warrior Chicken",
            url: "https://www.thewarriorchicken.com/",
            description: "A comprehensive digital home for a personal defense company. Designed to make safety training feel empowering and accessible rather than intimidating.",
            longDesc: "Managed on a long-term retainer, this site features easy client access, resource guides, and a link to an external Square store site, all while maintaining a 'friendly protector' brand voice.",
            tech: ["Webflow", "E-commerce", "Retainer Management"],
            icon: <Shield className="w-8 h-8 text-teal-600" />,
            category: "Small Business"
        },
        {
            title: "Genesis Water Co.",
            url: "https://www.genesiswaterco.com/",
            description: "A high-performance startup site focused on industrial water process innovation and resource conservation.",
            longDesc: "Built for speed and clarity, this Next.js application serves as a professional gateway for a company with 20+ years of technical expertise in sustainable water solutions.",
            tech: ["Next.js", "React", "Tailwind CSS"],
            icon: <Droplets className="w-8 h-8 text-teal-600" />,
            category: "Startup / Industrial"
        },
        {
            title: "Sumerian Transportation",
            url: "https://www.sumeriantransportation.org/",
            description: "(MADE FOR A FICTIONAL COMPANY) A modern logistics and transportation hub with a focus on heavy-duty reliability and fleet management.",
            longDesc: "A personal project created for a fictional company, exploring some creative choices in code. It features a clean, robust UI.",
            tech: ["Next.js", "Modern UI", "Logistics Focus"],
            icon: <Truck className="w-8 h-8 text-teal-600" />,
            category: "Personal Project"
        },
        {
            title: "Confidential FinTech Solution",
            // No URL provided to protect the NDA
            description: "Enterprise-level Webflow management for a high-security financial services platform serving thousands of customers.",
            longDesc: "Under a technical retainer, I provide architectural monitoring and custom JavaScript solutions to extend Webflow's native capabilities, ensuring the platform meets strict security and performance standards.",
            tech: ["Webflow", "Custom JavaScript", "Enterprise Retainer"],
            icon: <Lock className="w-8 h-8 text-teal-600" />, // You'll need to import 'Lock' from lucide-react
            category: "FinTech / Enterprise"
        },
    ];

    return (
        <main className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-400 text-slate-800">

            {/* Hero Section */}
            <section className="flex flex-col items-center text-center px-6 pt-36 pb-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-teal-600 text-amber-50 px-4 py-1 rounded-full text-sm font-bold mb-6"
                >
                    OUR NEIGHBORHOOD
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight"
                >
                    Digital homes built <br />
                    <span className="text-teal-600">with purpose.</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl max-w-2xl text-slate-800/80 leading-relaxed"
                >
                    From local small businesses to high-tech startups, explore the projects
                    where craftsmanship meets genuine care.
                </motion.p>
            </section>

            {/* Projects Grid */}
            <section className="px-6 pb-32">
                <div className="max-w-6xl mx-auto grid gap-12">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Card className="overflow-hidden rounded-3xl border-amber-400/20 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all group">
                                <CardContent className="p-0 flex flex-col md:flex-row">
                                    {/* Left Side: Visual/Icon */}
                                    <div className="md:w-1/3 bg-slate-800 p-12 flex flex-col justify-center items-center text-center space-y-4">
                                        <div className="bg-amber-50 p-6 rounded-2xl shadow-inner">
                                            {project.icon}
                                        </div>
                                        <div className="text-amber-50/50 font-mono text-xs uppercase tracking-widest">
                                            {project.category}
                                        </div>
                                    </div>

                                    {/* Right Side: Content */}
                                    <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-3xl font-bold text-slate-800 mb-4">{project.title}</h3>
                                            <p className="text-lg text-slate-700 font-medium mb-4">{project.description}</p>
                                            <p className="text-slate-600 mb-8 leading-relaxed italic border-l-4 border-teal-600/30 pl-4">
                                                "{project.longDesc}"
                                            </p>

                                            {/* Tech Badges */}
                                            <div className="flex flex-wrap gap-2 mb-8">
                                                {project.tech.map((t, i) => (
                                                    <span key={i} className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-xs font-bold border border-teal-100 flex items-center gap-1">
                                                        <Zap className="w-3 h-3" /> {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            {project.url ? (
                                                <Button className="bg-teal-600 hover:bg-orange-500 text-amber-50 px-6 py-4 rounded-xl shadow-lg transition-all group">
                                                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-bold">
                                                        Visit Digital Home <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                    </a>
                                                </Button>
                                            ) : (
                                                <div className="flex items-center gap-2 text-slate-500 font-medium italic border border-slate-200 px-4 py-2 rounded-lg">
                                                    <Lock className="w-4 h-4" /> Confidential Project (NDA)
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-white py-24 px-6 border-t border-amber-400/40">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-slate-800 mb-6">Ready to build your digital home?</h2>
                    <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                        Whether you need the flexibility of Webflow or the custom power of Next.js,
                        I'm here to ensure your project is built with integrity.
                    </p>
                    <Button className="bg-slate-800 hover:bg-teal-600 text-amber-50 px-10 py-6 rounded-2xl shadow-xl transition-all text-lg">
                        <a href="mailto:david@davesdelightful.dev">Start Your Project</a>
                    </Button>
                </div>
            </section>
        </main>
    );
}