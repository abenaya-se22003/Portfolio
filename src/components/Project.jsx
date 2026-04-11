import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import MERN from '../assets/MERN.jpeg';
import Ecom from '../assets/ecom.png';
import Coffee from '../assets/coffee.jpeg';

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
  title: 'Login_Signup_Page With MERN',
  description:
    'A full-stack authentication system built using the MERN stack (MongoDB, Express, React, Node.js). It supports secure user and admin login with JWT-based authentication, protected routes, and role-based access control. The application also integrates Google OAuth for seamless social login. All HTTP requests are handled through a RESTful API, ensuring efficient client-server communication and secure data handling.',
  tech: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT', 'Google OAuth'],
  image: MERN,
  github: 'https://github.com/abenaya-se22003/login_Registration',
  external: 'https://medium.com/@akilaabenayaka27/architecting-secure-identity-a-deep-dive-into-mern-stack-authentication-google-oauth-integration-79abd5136bba'
},
{
  title: 'E-Commerce Website using React',
  description:
    'A modern e-commerce web application built with React, featuring a responsive UI and dynamic product listings. Users can browse products, view detailed product pages, add items to the cart, and manage their shopping experience seamlessly. The application integrates RESTful APIs for handling product data and user interactions, ensuring smooth and efficient performance.',
  tech: ['React', 'JavaScript', 'REST API', 'CSS'],
  image: Ecom,
  github: 'https://github.com/abenaya-se22003/ecommerce-frontend',
  external: 'https://www.linkedin.com/posts/akila-abenayaka-2a2451355_this-project-helped-me-dive-deeper-into-front-end-activity-7386683163248336896-iSK2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFiFXVoBGkC2xbmBKA7whmFPq5g3sX0FRHk'
},
{
  title: 'Coffee Shop Website',
  description:
    'A responsive coffee shop website built using HTML, CSS, and JavaScript as my first web development project. It features a clean and modern UI with sections for menu, services, and contact information. The project focuses on fundamental front-end skills such as layout design, styling, and basic interactivity, providing a smooth and user-friendly browsing experience.',
  tech: ['HTML', 'CSS', 'JavaScript'],
  image: Coffee,
  github: 'https://github.com/abenaya-se22003/Coffee-Shop',
  external: 'https://www.linkedin.com/posts/akila-abenayaka-2a2451355_webdevelopment-firstproject-html-activity-7326650903757824000-MwMi?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFiFXVoBGkC2xbmBKA7whmFPq5g3sX0FRHk'
},{
  title: 'pending project',
  description:
    '',
  tech: [],
  image: '',
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