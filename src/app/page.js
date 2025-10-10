"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Globe, Home, Heart, Mail } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  const services = [
    {
      icon: <Globe className="w-10 h-10 text-teal-600" />,
      title: "Webflow Design",
      desc: "Elegant, responsive, and easy-to-manage sites for small businesses and creators.",
    },
    {
      icon: <Code className="w-10 h-10 text-teal-600" />,
      title: "Next.js Development",
      desc: "High-performance React apps and marketing sites with modern tooling.",
    },
    {
      icon: <Home className="w-10 h-10 text-teal-600" />,
      title: "WordPress Solutions",
      desc: "Sites that grow with your business — from blogs to eCommerce.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-400 text-slate-800">
      {/* Navigation */}
      {/* <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-white/70 backdrop-blur-md border-b border-amber-50">
        <a href="#" className="text-slate-800 font-bold text-xl">
          Dave’s Delightful Developments
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-slate-800/80 hover:text-orange-500 transition">
            Services
          </a>
          <a href="#values" className="text-slate-800/80 hover:text-orange-500 transition">
            Values
          </a>
          <a href="#contact" className="text-slate-800/80 hover:text-orange-500 transition">
            Contact
          </a>
          <Button className="bg-teal-600 hover:bg-orange-500 text-amber-50 px-5 py-2 rounded-xl shadow">
            Get a Quote
          </Button>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-6 pt-36 pb-32">
        <Image
          src="/DDD_Logo.png"
          alt="DDD Logo"
          width={300}
          height={300}
          className="object-contain mb-4"
        />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-bold text-slate-800 mb-4"
        >
          Dave’s Delightful Developments
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg max-w-2xl text-slate-800/80"
        >
          Crafting modern websites with warmth, care, and technical excellence.
          Built for businesses and families who believe thoughtful design makes a difference.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex gap-4"
        >
          {/* <Button className="bg-teal-600 hover:bg-orange-500 text-amber-50 px-6 py-3 rounded-xl shadow-lg">
            Contact Me
          </Button> */}
          {/* <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-amber-50 px-6 py-3 rounded-xl">
            View Projects
          </Button> */}
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 py-20 bg-white">
        <h2 className="text-3xl font-semibold text-center text-slate-800 mb-12">
          What We Build
        </h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <Card className="rounded-2xl shadow-md hover:shadow-lg transition bg-amber-50 border-amber-400/40">
                <CardContent className="flex flex-col items-center text-center p-8">
                  {service.icon}
                  <h3 className="text-xl font-semibold mt-4 text-slate-800">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-slate-800/80">{service.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Family Values Section */}
      <section id="values" className="px-6 py-20 bg-amber-50 border-t border-amber-400/40">
        <div className="max-w-5xl mx-auto text-center">
          <Heart className="w-12 h-12 text-teal-600 mx-auto mb-6" />
          <h2 className="text-3xl font-semibold text-slate-800 mb-4">
            Built on Family Values
          </h2>
          <p className="text-lg text-slate-800/80 max-w-2xl mx-auto">
            Every project is crafted with the same care and attention we’d give our own.
            We believe in building long-term relationships, not just websites —
            creating digital homes where your business and community can thrive.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section id="contact" className="px-6 py-24 bg-white border-t border-amber-400/40">
        <div className="max-w-xl mx-auto text-center">
          <Mail className="w-12 h-12 text-teal-600 mx-auto mb-4" />
          <h2 className="text-3xl font-semibold text-slate-800 mb-6">
            Get in Touch
          </h2>
          <p className="text-slate-800/80 mb-8">
            Whether you’re starting something new or improving what you already have,
            let’s build something delightful together.
          </p>

          <form className="flex flex-col gap-4 text-left">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg border border-amber-400/40 focus:outline-none focus:ring-2 focus:ring-amber-400"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg border border-amber-400/40 focus:outline-none focus:ring-2 focus:ring-amber-400"
              required
            />
            <textarea
              placeholder="Tell me a bit about your project..."
              rows="5"
              className="p-3 rounded-lg border border-amber-400/40 focus:outline-none focus:ring-2 focus:ring-amber-400"
              required
            />
            <Button type="submit" className="bg-teal-600 hover:bg-orange-500 text-amber-50 px-6 py-3 rounded-xl shadow-lg">
              Send Message
            </Button>
          </form>
        </div>
      </section> */}
    </main>
  );
}
