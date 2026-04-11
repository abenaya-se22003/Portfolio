import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';
import heroi from '../assets/heroi.png';

export function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <section className="relative min-h-screen flex items-center pt-20 px-6 md:px-12 max-w-6xl mx-auto overflow-hidden">
            <div className="w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                {/* Left — Text Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex-1 w-full lg:w-1/2"
                >
                    <motion.p
                        variants={itemVariants}
                        className="font-mono mb-5 text-sm tracking-wide"
                        style={{ color: 'var(--accent)' }}
                    >
                        Hi, my name is
                    </motion.p>

                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
                        style={{ color: 'var(--text-heading)' }}
                    >
                        Akila Abenayaka.
                    </motion.h1>

                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8"
                        style={{ color: 'var(--text-muted)' }}
                    >
                        I build things for the web.
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="max-w-lg text-base md:text-lg leading-relaxed mb-10"
                        style={{ color: 'var(--text-secondary)' }}
                    >
                        I'm a full-stack developer and designer specializing in building
                        exceptional digital experiences. I also focus on Generative AI,
                        creating intelligent and innovative solutions that enhance user
                        interaction and automation.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex gap-4">
                        <a
                            href="#work"
                            className="inline-flex items-center justify-center px-8 py-4 text-sm font-mono rounded transition-all duration-300 cursor-pointer"
                            style={{
                                color: 'var(--accent)',
                                borderWidth: '1px',
                                borderColor: 'var(--accent-muted)',
                            }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.backgroundColor = 'var(--accent-subtle)')
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.backgroundColor = 'transparent')
                            }
                        >
                            Check out my work
                        </a>
                    </motion.div>
                </motion.div>

                {/* Right — Floating Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="flex-1 w-full lg:w-1/2 flex items-center justify-center relative"
                >
                    {/* Glow behind image */}
                    <div
                        className="absolute inset-0 rounded-full blur-3xl opacity-20"
                        style={{
                            background:
                                'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
                        }}
                    />

                    <motion.img
                        src={heroi}
                        alt="Hero illustration"
                        className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl object-contain drop-shadow-2xl"
                        animate={{
                            x: [0, -8, 0],
                            y: [0, -8, 0],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 2,
                            ease: 'easeInOut',
                        }}
                        style={{
                            filter: 'drop-shadow(0 20px 40px rgba(139, 92, 246, 0.15))',
                        }}
                    />
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                style={{ color: 'var(--text-muted)' }}
            >
                <span className="font-mono text-xs tracking-widest uppercase">
                    Scroll
                </span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: 'easeInOut',
                    }}
                >
                    <ChevronDownIcon size={20} />
                </motion.div>
            </motion.div>
        </section>
    );
}