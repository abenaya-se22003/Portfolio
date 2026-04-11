import React from 'react';
import { motion } from 'framer-motion';
import myImg from '../assets/myimg.jpeg';

export function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 px-6 md:px-12 max-w-6xl mx-auto"
    >
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-16"
      >
        <h2
          className="text-2xl md:text-3xl font-bold flex items-center gap-3 whitespace-nowrap"
          style={{ color: 'var(--text-heading)' }}
        >
          <span
            className="font-mono text-base font-normal"
            style={{ color: 'var(--accent)' }}
          >
            01.
          </span>
          About Me
        </h2>
        <div
          className="h-px w-full max-w-xs"
          style={{ backgroundColor: 'var(--border)' }}
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 items-start">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-3 space-y-5 text-base md:text-lg leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          <p>
            Hello! My name is{' '}
            <span style={{ color: 'var(--accent)' }}>Akila</span>, and I'm a
            Software Engineer who enjoys building meaningful digital experiences
            on the web. I specialize in the MERN stack (MongoDB, Express, React,
            Node.js) and have a growing passion for{' '}
            <span style={{ color: 'var(--accent)' }}>Generative AI</span>,
            where I create smart, AI-powered solutions that enhance user
            interaction and solve real-world problems.
          </p>
          <p>
            Over time, I've developed strong skills in designing and developing
            scalable, user-friendly applications with a focus on performance and
            clean architecture. My goal is to build products that are not only
            functional but also intuitive, accessible, and impactful.
          </p>
          <p>
            Beyond coding, I'm also a passionate cricketer. Playing cricket has
            helped me build discipline, teamwork, and strategic thinking—qualities
            that I bring into my work as a developer.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="md:col-span-2 relative group mx-auto md:mx-0"
        >
          <div
            className="relative z-10 rounded-md overflow-hidden transition-all duration-300 group-hover:-translate-y-1.5 group-hover:-translate-x-1.5"
            style={{
              borderWidth: '1px',
              borderColor: 'var(--border)',
            }}
          >
            {/* Accent overlay */}
            <div
              className="absolute inset-0 mix-blend-multiply group-hover:bg-transparent transition-all duration-300 z-10"
              style={{ backgroundColor: 'var(--accent-subtle)' }}
            />
            <img
              src={myImg}
              alt="Akila Abenayaka"
              className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* Decorative border */}
          <div
            className="absolute inset-0 rounded-md translate-y-4 translate-x-4 -z-10 transition-all duration-300 group-hover:translate-y-5 group-hover:translate-x-5"
            style={{ border: '2px solid var(--accent)' }}
          />
        </motion.div>
      </div>
    </section>
  );
}