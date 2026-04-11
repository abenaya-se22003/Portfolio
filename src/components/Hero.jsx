import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';
export function Hero() {
    const containerVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };
    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 md:px-12 max-w-6xl mx-auto">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="w-full">

                <motion.p
                    variants={itemVariants}
                    className="font-mono mb-5"
                    style={{
                        color: 'var(--accent)'
                    }}>

                    Hi, my name is
                </motion.p>

                <motion.h1
                    variants={itemVariants}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
                    style={{
                        color: 'var(--text-heading)'
                    }}>

                    Akila Abenayaka.
                </motion.h1>

                <motion.h2
                    variants={itemVariants}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
                    style={{
                        color: 'var(--text-muted)'
                    }}>

                    I build things for the web.
                </motion.h2>

                <motion.p
                    variants={itemVariants}
                    className="max-w-2xl text-lg md:text-xl leading-relaxed mb-12"
                    style={{
                        color: 'var(--text-secondary)'
                    }}>

                    I'm a full-stack developer and designer specializing in building
                    exceptional digital experiences. Currently, I'm focused on building
                    accessible, human-centered products at{' '}
                    <span
                        style={{
                            color: 'var(--accent)'
                        }}>

                        DesignStudio
                    </span>
                    .
                </motion.p>

                <motion.div variants={itemVariants}>
                    <a
                        href="#work"
                        className="inline-flex items-center justify-center px-8 py-4 text-sm font-mono rounded transition-colors duration-300"
                        style={{
                            color: 'var(--accent)',
                            borderWidth: '1px',
                            borderColor: 'var(--accent-muted)'
                        }}
                        onMouseEnter={(e) =>
                            e.currentTarget.style.backgroundColor = 'var(--accent-subtle)'
                        }
                        onMouseLeave={(e) =>
                            e.currentTarget.style.backgroundColor = 'transparent'
                        }>

                        Check out my work
                    </a>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1
                }}
                transition={{
                    delay: 1.5,
                    duration: 1
                }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                style={{
                    color: 'var(--text-muted)'
                }}>

                <span className="font-mono text-xs tracking-widest uppercase">
                    Scroll
                </span>
                <motion.div
                    animate={{
                        y: [0, 8, 0]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: 'easeInOut'
                    }}>

                    <ChevronDownIcon size={20} />
                </motion.div>
            </motion.div>
        </section>);

}