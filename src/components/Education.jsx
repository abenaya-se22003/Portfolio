import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCapIcon, CalendarIcon } from 'lucide-react';
const education = [
{
  degree: 'Bachelor of Science in Software Engineering',
  institution: 'University of Kelaniya',
  period: '2024 — 2028',
  description:
  'Focused on software engineering, data structures, and algorithms. Graduated with First Class Honours. Active member of the university coding club and hackathon organizer.',
  highlights: [
  'Second Upper class Honours','GPA - 3.68']

},
{
  degree: 'Diploma in Bachelor of IT (BIT)',
  institution: 'University of Colombo',
  period: '2022 — 2023',
  description:
  'Intensive program covering full-stack web development with modern JavaScript frameworks, databases, and deployment strategies.',
  highlights: [
  'Full-Stack Development',
  'Database Design',
  ]

},
{
  degree: 'GCE Advanced Level — Physical Science',
  institution: 'Kegalu Vidyalaya, Kegalle',
  period: '2007 — 2020',
  description:
  'Combined Mathematics, Physics, and Chemistry. Achieved district-level ranking in the national examination.',
  highlights: ['2A Passes', '1C Pass', 'District Rank Top 100','Z score - 1.59']
}];

export function Education() {
  return (
    <section
      id="education"
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
          
          Education
        </h2>
        <div
          className="h-[1px] w-full max-w-xs"
          style={{
            backgroundColor: 'var(--border)'
          }}>
        </div>
      </motion.div>

      <div className="relative">
        <div
          className="absolute left-0 md:left-8 top-0 bottom-0 w-[1px]"
          style={{
            backgroundColor: 'var(--border)'
          }}>
        </div>

        <div className="space-y-12">
          {education.map((item, index) =>
          <motion.div
            key={item.degree}
            initial={{
              opacity: 0,
              x: -20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              margin: '-50px'
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.15
            }}
            className="relative pl-8 md:pl-20">
            
              <div
              className="absolute left-0 md:left-8 top-1 w-2.5 h-2.5 -translate-x-1/2 rounded-full ring-4"
              style={{
                backgroundColor: 'var(--accent)',
                ringColor: 'var(--bg-primary)'
              }}>
            </div>

              <div
              className="rounded-lg p-6 md:p-8 transition-colors duration-300"
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
              
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                  <div className="flex items-center gap-3">
                    <GraduationCapIcon
                    size={20}
                    className="shrink-0"
                    style={{
                      color: 'var(--accent)'
                    }} />
                  
                    <h3
                    className="text-lg md:text-xl font-bold"
                    style={{
                      color: 'var(--text-heading)'
                    }}>
                    
                      {item.degree}
                    </h3>
                  </div>
                  <div
                  className="flex items-center gap-2 font-mono text-sm"
                  style={{
                    color: 'var(--text-muted)'
                  }}>
                  
                    <CalendarIcon size={14} />
                    {item.period}
                  </div>
                </div>

                <p
                className="font-mono text-sm mb-3"
                style={{
                  color: 'var(--accent-muted)'
                }}>
                
                  {item.institution}
                </p>
                <p
                className="leading-relaxed mb-4"
                style={{
                  color: 'var(--text-secondary)'
                }}>
                
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.highlights.map((highlight) =>
                <span
                  key={highlight}
                  className="px-3 py-1 text-xs font-mono rounded-full"
                  style={{
                    color: 'var(--accent)',
                    backgroundColor: 'var(--accent-subtle)',
                    border: '1px solid var(--accent-border)'
                  }}>
                  
                      {highlight}
                    </span>
                )}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}