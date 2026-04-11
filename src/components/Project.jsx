import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

const GithubIcon = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);


const projects = [
{
  title: 'Halcyon Theme',
  description:
  'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace.',
  tech: ['VS Code', 'Sublime Text', 'Atom'],
  image:
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
  github: '#',
  external: '#'
},
{
  title: 'Spotify Profile',
  description:
  'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information.',
  tech: ['React', 'Express', 'Spotify API', 'Styled Components'],
  image:
  'https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=800&q=80',
  github: '#',
  external: '#'
},
{
  title: 'Build a Spotify Connected App',
  description:
  'Video course that teaches how to build a web app with the Spotify Web API. Topics include REST APIs, auth flows, Node, Express, React, and more.',
  tech: ['React', 'Express', 'Spotify API'],
  image:
  'https://images.unsplash.com/photo-1516280440502-a2989cb51bf1?w=800&q=80',
  github: '#',
  external: '#'
},
{
  title: 'Time to Have More Fun',
  description:
  'A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS.',
  tech: ['Next.js', 'Tailwind CSS', 'Firebase'],
  image:
  'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
  github: '#',
  external: '#'
}];

export function Projects() {
  return (
    <section
      id="work"
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
          
          Projects
        </h2>
        <div
          className="h-[1px] w-full max-w-xs"
          style={{
            backgroundColor: 'var(--border)'
          }}>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) =>
        <motion.div
          key={project.title}
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
          className="group relative flex flex-col rounded-lg overflow-hidden transition-colors duration-300"
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
          
            <div className="relative h-64 overflow-hidden">
              <div
              className="absolute inset-0 group-hover:bg-transparent transition-colors duration-500 z-10"
              style={{
                backgroundColor: 'var(--overlay)'
              }}>
            </div>
              <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                <h3
                className="text-2xl font-bold transition-colors"
                style={{
                  color: 'var(--text-heading)'
                }}>
                
                  {project.title}
                </h3>
                <div
                className="flex gap-3"
                style={{
                  color: 'var(--text-muted)'
                }}>
                
                  <a
                  href={project.github}
                  className="transition-colors"
                  style={{
                    color: 'var(--text-muted)'
                  }}
                  onMouseEnter={(e) =>
                  e.currentTarget.style.color = 'var(--accent)'
                  }
                  onMouseLeave={(e) =>
                  e.currentTarget.style.color = 'var(--text-muted)'
                  }>
                  
                    <GithubIcon size={20} />
                  </a>
                  <a
                  href={project.external}
                  className="transition-colors"
                  style={{
                    color: 'var(--text-muted)'
                  }}
                  onMouseEnter={(e) =>
                  e.currentTarget.style.color = 'var(--accent)'
                  }
                  onMouseLeave={(e) =>
                  e.currentTarget.style.color = 'var(--text-muted)'
                  }>
                  
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <p
              className="mb-6 flex-grow"
              style={{
                color: 'var(--text-secondary)'
              }}>
              
                {project.description}
              </p>

              <div
              className="flex flex-wrap gap-3 mt-auto pt-4"
              style={{
                borderTop: '1px solid var(--border)'
              }}>
              
                {project.tech.map((tech) =>
              <span
                key={tech}
                className="font-mono text-xs"
                style={{
                  color: 'var(--accent)'
                }}>
                
                    {tech}
                  </span>
              )}
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <div className="mt-16 text-center">
        <a
          href="#"
          className="inline-flex items-center gap-2 font-mono text-sm transition-colors group"
          style={{
            color: 'var(--text-heading)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
          onMouseLeave={(e) =>
          e.currentTarget.style.color = 'var(--text-heading)'
          }>
          
          View Full Archive
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1" />
          
        </a>
      </div>
    </section>);

}