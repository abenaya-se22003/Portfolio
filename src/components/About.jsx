import React from 'react';
import { motion } from 'framer-motion';
export function About() {
    return (
        <section
            id="about"
            className="py-24 md:py-32 px-6 md:px-12 max-w-6xl mx-auto">

            <motion.div
                initial={{
                    opacity: 0,
                    y: 20
                }}
                whileInView={{
                    opacity: 1,
                    y: 0
                }}
                viewport={{
                    once: true,
                    margin: '-100px'
                }}
                transition={{
                    duration: 0.6
                }}
                className="flex items-center gap-4 mb-12">

                <h2
                    className="text-2xl md:text-3xl font-bold flex items-center gap-4 whitespace-nowrap"
                    style={{
                        color: 'var(--text-heading)'
                    }}>

                    About Me
                </h2>
                <div
                    className="h-[1px] w-full max-w-xs"
                    style={{
                        backgroundColor: 'var(--border)'
                    }}>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    viewport={{
                        once: true,
                        margin: '-100px'
                    }}
                    transition={{
                        duration: 0.6,
                        delay: 0.2
                    }}
                    className="md:col-span-3 space-y-6 text-lg leading-relaxed"
                    style={{
                        color: 'var(--text-secondary)'
                    }}>

                    <p>
                        Hello! My name is Akila, and I’m a Software Engineer who enjoys building
                        meaningful digital experiences on the web. I specialize in the MERN stack
                        (MongoDB, Express, React, Node.js) and have a growing passion for Generative AI,
                        where I create smart, AI-powered solutions that enhance user interaction and
                        solve real-world problems.
                    </p>
                    <p>
                        Over time, I’ve developed strong skills in designing and developing scalable,
                        user-friendly applications with a focus on performance and clean architecture.
                        My goal is to build products that are not only functional but also intuitive,
                        accessible, and impactful.
                    </p>
                    <p>
                        Beyond coding, I’m also a passionate cricketer. Playing cricket has helped me
                        build discipline, teamwork, and strategic thinking—qualities that I bring into
                        my work as a developer.
                    </p>
                </motion.div>

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    viewport={{
                        once: true,
                        margin: '-100px'
                    }}
                    transition={{
                        duration: 0.6,
                        delay: 0.4
                    }}
                    className="md:col-span-2 relative group">

                    <div
                        className="relative z-10 rounded overflow-hidden transition-all duration-300 group-hover:-translate-y-2 group-hover:-translate-x-2"
                        style={{
                            borderWidth: '1px',
                            borderColor: 'var(--border)'
                        }}>

                        <div
                            className="absolute inset-0 mix-blend-multiply group-hover:bg-transparent transition-all duration-300 z-10"
                            style={{
                                backgroundColor: 'var(--accent-subtle)'
                            }}>
                        </div>
                        <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop"
                            alt="Akila Abenayaka portrait"
                            className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />

                    </div>
                    <div
                        className="absolute inset-0 rounded translate-y-4 translate-x-4 -z-10 transition-all duration-300 group-hover:translate-y-6 group-hover:translate-x-6"
                        style={{
                            border: '2px solid var(--accent)'
                        }}>
                    </div>
                </motion.div>
            </div>
        </section>);

}