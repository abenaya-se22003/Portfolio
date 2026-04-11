import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

// Inline SVG social icons (no react-icons dependency needed)
const GithubIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail size={22} />,
      label: 'Email',
      value: 'akilaabenayaka27@gmail.com',
      href: 'mailto:akilaabenayaka27@gmail.com'
    },
    {
      icon: <Phone size={22} />,
      label: 'Phone',
      value: '+94 71 480 9039',
      href: 'tel:+94714809039'
    },
    {
      icon: <MapPin size={22} />,
      label: 'Location',
      value: 'Walasmulla, Sri Lanka',
      href: null
    }
  ];

  const socials = [
    {
      icon: <GithubIcon />,
      href: 'https://github.com/abenaya-se22003',
      label: 'GitHub'
    },
    {
      icon: <LinkedinIcon />,
      href: 'https://www.linkedin.com/in/akila-abenayaka-2a2451355',
      label: 'LinkedIn'
    },
    {
      icon: <InstagramIcon />,
      href: 'https://www.instagram.com/akila_abenayaka',
      label: 'Instagram'
    }
  ];

  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6 md:px-12 max-w-6xl mx-auto"
    >
      {/* Section Heading — same pattern as About, Projects, Blog */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-16"
      >
        <h2
          className="text-2xl md:text-3xl font-bold flex items-center gap-4 whitespace-nowrap"
          style={{ color: 'var(--text-heading)' }}
        >
          Get In Touch
        </h2>
        <div
          className="h-[1px] w-full max-w-xs"
          style={{ backgroundColor: 'var(--border)' }}
        />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Left — Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2 space-y-8"
        >
          <p
            className="text-base leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            Currently looking for new opportunities. Whether you have a question
            or just want to say hi, I'll try my best to get back to you!
          </p>

          {/* Contact Items */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    color: 'var(--accent)'
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <h3
                    className="font-semibold mb-1 text-sm"
                    style={{ color: 'var(--text-heading)' }}
                  >
                    {item.label}
                  </h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm transition-colors"
                      style={{ color: 'var(--text-secondary)' }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = 'var(--accent)')
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = 'var(--text-secondary)')
                      }
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p
                      className="text-sm"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {item.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="pt-8"
            style={{ borderTop: '1px solid var(--border)' }}
          >
            <h3
              className="font-semibold mb-4 text-sm"
              style={{ color: 'var(--text-heading)' }}
            >
              Social Profiles
            </h3>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-muted)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--accent)';
                    e.currentTarget.style.borderColor = 'var(--accent-border)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-muted)';
                    e.currentTarget.style.borderColor = 'var(--border)';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right — Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:col-span-3"
        >
          <form
            onSubmit={handleSubmit}
            autoComplete="on"
            className="space-y-6 p-8 rounded-lg"
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border)'
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium"
                  style={{ color: 'var(--text-heading)' }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none transition-colors"
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-heading)'
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = 'var(--accent)')
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = 'var(--border)')
                  }
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium"
                  style={{ color: 'var(--text-heading)' }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none transition-colors"
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-heading)'
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = 'var(--accent)')
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = 'var(--border)')
                  }
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="subject"
                className="text-sm font-medium"
                style={{ color: 'var(--text-heading)' }}
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                autoComplete="off"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none transition-colors"
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-heading)'
                }}
                onFocus={(e) =>
                  (e.currentTarget.style.borderColor = 'var(--accent)')
                }
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor = 'var(--border)')
                }
                placeholder="Project Inquiry"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium"
                style={{ color: 'var(--text-heading)' }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                autoComplete="off"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none transition-colors resize-none"
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-heading)'
                }}
                onFocus={(e) =>
                  (e.currentTarget.style.borderColor = 'var(--accent)')
                }
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor = 'var(--border)')
                }
                placeholder="Hello, I'd like to talk about..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full font-semibold py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              style={{
                backgroundColor: 'var(--accent)',
                color: '#fff'
              }}
              onMouseEnter={(e) => {
                if (!isSubmitting)
                  e.currentTarget.style.backgroundColor = 'var(--accent-hover)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--accent)';
              }}
            >
              {isSubmitting ? (
                <span
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                />
              ) : isSubmitted ? (
                '✓ Message Sent!'
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>

      {/* Footer text */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-24 text-center"
      >
        <p
          className="font-mono text-xs"
          style={{ color: 'var(--text-muted)' }}
        >
          Designed & Built by Akila Abenayaka
        </p>
      </motion.div>
    </section>
  );
}