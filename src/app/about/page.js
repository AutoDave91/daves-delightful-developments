"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShieldCheck, Eye, MessageCircle, Globe, Code, Layout } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-400 text-slate-800">

            {/* Hero Section */}
            <section className="flex flex-col items-center text-center px-6 pt-36 pb-20">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight"
                >
                    More than just code. <br />
                    <span className="text-teal-600">A commitment to care.</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl max-w-2xl text-slate-800/80 leading-relaxed"
                >
                    Building digital homes with the same integrity and heart we bring to our own.
                </motion.p>
            </section>

            {/* Section 1: The Delightful Difference */}
            <section className="px-6 py-20 bg-white shadow-inner">
                <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12 items-center">
                    <div className="md:col-span-1">
                        <h2 className="text-teal-600 font-bold tracking-widest uppercase text-sm mb-2">01. Perspective</h2>
                        <h3 className="text-3xl font-bold text-slate-800">The "Delightful" Difference</h3>
                    </div>
                    <div className="md:col-span-2 text-lg text-slate-700 leading-relaxed space-y-4">
                        <p>
                            Most people think of web development as a world of cold logic and confusing jargon.
                            I started Dave’s Delightful Developments because I believe it should be the opposite.
                        </p>
                        <p>
                            A website isn't just a collection of assets—it’s your business’s home on the internet.
                            It’s where your customers meet you for the first time, and it should feel as welcoming
                            and reliable as a front porch.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 2: Built on Family Values */}
            <section className="px-6 py-20 bg-amber-50 border-y border-amber-400/40">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <Heart className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                        <h2 className="text-3xl font-bold text-slate-800">Built on Family Values</h2>
                        <p className="text-slate-700 mt-2">I don’t just build for "clients"; I build for people.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="rounded-2xl shadow-md bg-white border-amber-400/20">
                            <CardContent className="p-8">
                                <ShieldCheck className="w-8 h-8 text-teal-600 mb-4" />
                                <h4 className="text-xl font-bold text-slate-800 mb-2">Integrity</h4>
                                <p className="text-slate-600">No cutting corners on the backend. Your site is built to be fast, secure, and scalable.</p>
                            </CardContent>
                        </Card>

                        <Card className="rounded-2xl shadow-md bg-white border-amber-400/20">
                            <CardContent className="p-8">
                                <Eye className="w-8 h-8 text-teal-600 mb-4" />
                                <h4 className="text-xl font-bold text-slate-800 mb-2">Transparency</h4>
                                <p className="text-slate-600">No technical gatekeeping—just clear, honest communication throughout the process.</p>
                            </CardContent>
                        </Card>

                        <Card className="rounded-2xl shadow-md bg-white border-amber-400/20">
                            <CardContent className="p-8">
                                <MessageCircle className="w-8 h-8 text-teal-600 mb-4" />
                                <h4 className="text-xl font-bold text-slate-800 mb-2">Long-term Care</h4>
                                <p className="text-slate-600">I’m here to help your digital home grow as your business does. I won't just disappear.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Section 3: The Toolkit */}
            <section className="px-6 py-24 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-teal-600 font-bold tracking-widest uppercase text-sm mb-4">03. Expertise</h2>
                    <h3 className="text-3xl font-bold text-slate-800 mb-6">Craftsmanship meets Technology</h3>
                    <p className="text-lg text-slate-700 mb-12">
                        While my approach is rooted in warmth, my toolkit is modern and robust. I specialize in selecting the right "building materials" for your specific needs:
                    </p>

                    <div className="grid gap-6">
                        <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-amber-50 transition-colors">
                            <Globe className="w-6 h-6 text-teal-600 mt-1" />
                            <div>
                                <h4 className="font-bold text-slate-800">Webflow</h4>
                                <p className="text-slate-600 text-sm">For elegant, design-forward sites that you can manage with ease.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-amber-50 transition-colors">
                            <Code className="w-6 h-6 text-teal-600 mt-1" />
                            <div>
                                <h4 className="font-bold text-slate-800">Next.js & React</h4>
                                <p className="text-slate-600 text-sm">For high-performance, custom-coded applications that need lightning speed.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-amber-50 transition-colors">
                            <Layout className="w-6 h-6 text-teal-600 mt-1" />
                            <div>
                                <h4 className="font-bold text-slate-800">WordPress</h4>
                                <p className="text-slate-600 text-sm">For versatile, time-tested solutions that grow with your eCommerce goals.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="flex flex-col items-center text-center px-6 py-24 bg-gradient-to-t from-amber-400 to-amber-300 shadow-2xl">
                <h2 className="text-4xl font-bold text-slate-800 mb-6">Let’s Build Something Great</h2>
                <p className="text-lg max-w-2xl text-slate-800/80 mb-10">
                    If you’re looking for a partner who cares as much about your vision as you do, you’ve found a home here.
                </p>
                <div className="flex flex-col items-center gap-4">
                    <Button className="bg-teal-600 hover:bg-orange-500 text-amber-50 px-8 py-6 rounded-xl shadow-lg text-lg transition-all transform hover:scale-105">
                        <a href="mailto:david@davesdelightful.dev">Let’s Chat</a>
                    </Button>
                    {/* <p className="text-slate-800 font-medium mt-4">
                        Email directly: <span className="underline decoration-teal-600">david@davesdelightful.dev</span>
                    </p> */}
                </div>
            </section>
        </main>
    );
}