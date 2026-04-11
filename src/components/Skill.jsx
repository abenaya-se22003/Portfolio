import React from 'react';
import { motion } from 'framer-motion';
const skillCategories = [
{
  title: 'Languages',
  skills: [
  'JavaScript (ES6+)',
  'TypeScript',
  'HTML',
  'CSS/Sass',
  'Python',
  'SQL']

},
{
  title: 'Frameworks',
  skills: [
  'React',
  'Next.js',
  'Node.js',
  'Express',
  'Tailwind CSS',
  'Framer Motion']

},
{
  title: 'Tools & Design',
  skills: ['Git & GitHub', 'Figma', 'Postman', 'Vercel', 'Firebase', 'Jest']
}];

export function Skills() {
  return (
    <section
      id="skills"
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
          
          Skills
        </h2>
        <div
          className="h-[1px] w-full max-w-xs"
          style={{
            backgroundColor: 'var(--border)'
          }}>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {skillCategories.map((category, index) =>
        <motion.div
          key={category.title}
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
          }}>
          
            <h3
            className="text-xl font-semibold mb-6 font-mono"
            style={{
              color: 'var(--text-heading)'
            }}>
            
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) =>
            <span
              key={skill}
              className="px-4 py-2 text-sm rounded-full transition-colors cursor-default"
              style={{
                color: 'var(--text-primary)',
                backgroundColor: 'var(--accent-subtle)',
                border: '1px solid var(--border)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-muted)';
                e.currentTarget.style.color = 'var(--accent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.color = 'var(--text-primary)';
              }}>
              
                  {skill}
                </span>
            )}
            </div>
          </motion.div>
        )}
      </div>
    </section>);

}