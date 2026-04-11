import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, ClockIcon } from 'lucide-react';
const posts = [
{
  title: 'Architecting Secure Identity: A Deep Dive into MERN Stack Authentication & Google OAuth Integration',
  excerpt:
    'An in-depth exploration of building secure authentication systems using the MERN stack, covering JWT-based authentication, role-based access control, and seamless Google OAuth integration for modern web applications.',
  date: 'Apr 1, 2026',
  readTime: '6 min read',
  tags: ['MERN', 'Authentication', 'JWT', 'Google OAuth'],
  link: 'https://medium.com/@akilaabenayaka27/architecting-secure-identity-a-deep-dive-into-mern-stack-authentication-google-oauth-integration-79abd5136bba'
},
{
  title: 'Building Akila_OS — A Simple x86 Assembly Operating System',
  excerpt:
    'A beginner-friendly walkthrough of creating a simple operating system using x86 assembly, covering bootloader basics, low-level memory handling, and core OS concepts.',
  date: 'Jun 23, 2025',
  readTime: '3 min read',
  tags: ['Assembly', 'Operating System', 'x86', 'Low-Level Programming'],
  link: 'https://medium.com/@akilaabenayaka27/building-akila-os-a-simple-x86-assembly-operating-system-91d60d87f05c'
},
{
  title: 'Understanding Software Licenses: A Guide for Software Engineering Students',
  excerpt:
    'A clear and concise guide to understanding different types of software licenses, including open-source and proprietary models, and how they impact software development and distribution.',
  date: 'May 27, 2025',
  readTime: '3 min read',
  tags: ['Software Engineering', 'Licensing', 'Open Source', 'Legal Basics'],
  link: 'https://medium.com/@akilaabenayaka27/understanding-software-licenses-a-guide-for-software-engineering-students-e1d4db92be7a'
}];

export function Blog() {
  return (
    <section
      id="blog"
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
        className="flex items-center gap-4 mb-16">
        
        <h2
          className="text-2xl md:text-3xl font-bold flex items-center gap-4 whitespace-nowrap"
          style={{
            color: 'var(--text-heading)'
          }}>
          
          Blog
        </h2>
        <div
          className="h-[1px] w-full max-w-xs"
          style={{
            backgroundColor: 'var(--border)'
          }}>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, index) =>
        <motion.a
          key={post.title}
          href={post.link}
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
            margin: '-50px'
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.1
          }}
          className="group flex flex-col rounded-lg p-8 transition-all duration-300 hover:-translate-y-1"
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border)'
          }}
          onMouseEnter={(e) =>
          e.currentTarget.style.borderColor = 'var(--border-hover)'
          }
          onMouseLeave={(e) =>
          e.currentTarget.style.borderColor = 'var(--border)'
          }>
          
            <div
            className="flex items-center gap-4 text-sm mb-4"
            style={{
              color: 'var(--text-muted)'
            }}>
            
              <span className="font-mono">{post.date}</span>
              <span className="flex items-center gap-1">
                <ClockIcon size={14} />
                {post.readTime}
              </span>
            </div>

            <h3
            className="text-xl font-bold mb-3 leading-snug transition-colors"
            style={{
              color: 'var(--text-heading)'
            }}>
            
              {post.title}
            </h3>

            <p
            className="text-sm leading-relaxed mb-6 flex-grow"
            style={{
              color: 'var(--text-secondary)'
            }}>
            
              {post.excerpt}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) =>
            <span
              key={tag}
              className="px-3 py-1 text-xs font-mono rounded-full"
              style={{
                color: 'var(--accent)',
                backgroundColor: 'var(--accent-subtle)',
                border: '1px solid var(--accent-border)'
              }}>
              
                  {tag}
                </span>
            )}
            </div>

            <div
            className="flex items-center gap-2 font-mono text-sm transition-colors mt-auto"
            style={{
              color: 'var(--text-secondary)'
            }}>
            
              Read more
              <ArrowRightIcon
              size={14}
              className="transition-transform group-hover:translate-x-1" />
            
            </div>
          </motion.a>
        )}
      </div>
    </section>);

}