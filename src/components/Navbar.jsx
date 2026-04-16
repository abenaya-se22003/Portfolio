import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon, SunIcon, MoonIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeContext';
import resumePdf from '../assets/certificate 1.pdf';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const { theme, toggleTheme } = useTheme();

  const handleDownload = (e) => {
    e.preventDefault();
    if (isDownloading) return;

    setIsDownloading(true);
    setDownloadProgress(0);

    const xhr = new XMLHttpRequest();
    xhr.open('GET', resumePdf, true);
    xhr.responseType = 'blob';

    xhr.onprogress = (event) => {
      if (event.lengthComputable) {
        const progress = Math.round((event.loaded / event.total) * 100);
        setDownloadProgress(progress);
      }
    };

    xhr.onload = () => {
      if (xhr.status === 200) {
        const blob = xhr.response;
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Resume.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
        
        setDownloadProgress(100);
      }
      setTimeout(() => {
        setIsDownloading(false);
        setDownloadProgress(0);
      }, 1500);
    };

    xhr.onerror = () => {
      console.error('Download failed');
      setIsDownloading(false);
      setDownloadProgress(0);
    };

    xhr.send();
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#work' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md py-4 border-b' : 'bg-transparent py-6'
      }`}
      style={{
        backgroundColor: isScrolled ? 'var(--nav-bg)' : 'transparent',
        borderColor: isScrolled ? 'var(--border)' : 'transparent',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold tracking-tighter transition-colors"
          style={{ color: 'var(--text-heading)' }}
        >
          AA
          <span style={{ color: 'var(--accent)' }}>.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-mono transition-colors hover:opacity-100"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = 'var(--text-heading)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = 'var(--text-secondary)')
              }
            >
              {link.name}
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="ml-2 p-2.5 rounded-full border transition-all duration-300 hover:scale-110 cursor-pointer"
            style={{
              borderColor: 'var(--accent-border)',
              color: 'var(--accent)',
              backgroundColor: 'var(--accent-subtle)',
            }}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <AnimatePresence mode="wait">
              {theme === 'dark' ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <SunIcon size={16} />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <MoonIcon size={16} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className="ml-2 px-5 py-2.5 text-sm font-mono rounded transition-colors relative overflow-hidden"
            style={{
              color: 'var(--accent)',
              borderWidth: '1px',
              borderColor: 'var(--accent-border)',
            }}
            onMouseEnter={(e) => {
              if (!isDownloading) e.currentTarget.style.backgroundColor = 'var(--accent-subtle)';
            }}
            onMouseLeave={(e) => {
              if (!isDownloading) e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            {isDownloading && (
              <div 
                className="absolute left-0 top-0 bottom-0 transition-all duration-200" 
                style={{ width: `${downloadProgress}%`, backgroundColor: 'var(--accent-subtle)' }}
              />
            )}
            <span className="relative z-10">
              {isDownloading ? `Downloading ${downloadProgress}%` : 'Resume'}
            </span>
          </button>
        </nav>

        {/* Mobile Right */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full border transition-all duration-300 cursor-pointer"
            style={{
              borderColor: 'var(--accent-border)',
              color: 'var(--accent)',
              backgroundColor: 'var(--accent-subtle)',
            }}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <SunIcon size={16} /> : <MoonIcon size={16} />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            className="cursor-pointer"
            style={{ color: 'var(--text-secondary)' }}
          >
            {isMobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 shadow-2xl md:hidden border-b"
            style={{
              backgroundColor: 'var(--bg-primary)',
              borderColor: 'var(--border)',
            }}
          >
            <nav className="flex flex-col px-6 py-8 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-mono transition-colors"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={(e) => {
                  handleDownload(e);
                  // We don't automatically close the menu here, 
                  // or else we'd hide the progress indication, 
                  // but we can close it after 100% implicitly when it resets.
                }}
                disabled={isDownloading}
                className="mt-4 px-6 py-3 text-center font-mono rounded border transition-colors relative overflow-hidden"
                style={{
                  color: 'var(--accent)',
                  borderColor: 'var(--accent-border)',
                }}
              >
                {isDownloading && (
                  <div 
                    className="absolute left-0 top-0 bottom-0 transition-all duration-200" 
                    style={{ width: `${downloadProgress}%`, backgroundColor: 'var(--accent-subtle)' }}
                  />
                )}
                <span className="relative z-10">
                  {isDownloading ? `Downloading ${downloadProgress}%` : 'Resume'}
                </span>
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
