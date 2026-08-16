import React, { useState } from 'react';
import { Sun, Moon, Heart, ExternalLink, Menu, X } from 'lucide-react';
import { getAssetUrl } from '../utils/assetHelper';

export default function Navbar({ isLightMode, toggleTheme, openContactModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 transition-all duration-300" style={{
      background: isLightMode ? 'rgba(248, 250, 252, 0.92)' : 'rgba(7, 13, 24, 0.92)',
      backdropFilter: 'blur(12px)',
      borderBottom: isLightMode ? '1px solid rgba(0, 40, 85, 0.1)' : '1px solid rgba(255, 255, 255, 0.08)',
      position: 'relative',
      zIndex: 50
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.85rem 1.5rem' }}>
        
        {/* Brand Logos */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <img 
            src={getAssetUrl('Media/WVChapterLogo1_color.png')} 
            alt="WV SfN Chapter Logo" 
            style={{ height: '44px', objectFit: 'contain' }}
            onError={(e) => { e.target.onerror = null; e.target.src = getAssetUrl('Media/WVChapterLogo4_color.png'); }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ 
              fontFamily: 'var(--font-heading)', 
              fontWeight: 800, 
              fontSize: '1.25rem', 
              lineHeight: 1.1,
              color: isLightMode ? 'var(--wvu-navy)' : '#FFFFFF'
            }}>
              WV Chapter
            </span>
            <span style={{ fontSize: '0.78rem', color: 'var(--wvu-gold)', fontWeight: 600, letterSpacing: '0.05em' }}>
              Society for Neuroscience
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '1.75rem' }} className="desktop-nav">
          <a href="#about" className="nav-link">About</a>
          <a href="#activities" className="nav-link">Activities</a>
          <a href="#gallery" className="nav-link">Gallery</a>
          <a href="#outreach" className="nav-link">Science Corner</a>
          <a href="#governance" className="nav-link">Governance</a>
          <a 
            href="https://medicine.hsc.wvu.edu/neuroscience/outreach/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-link partner-link"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', color: 'var(--wvu-gold)', fontWeight: 600 }}
          >
            WVU Outreach <ExternalLink size={14} />
          </a>
        </nav>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <button 
            onClick={toggleTheme} 
            title="Toggle light/dark theme"
            style={{
              background: 'transparent',
              border: isLightMode ? '1px solid var(--wvu-navy)' : '1px solid var(--bg-dark-border)',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: isLightMode ? 'var(--wvu-navy)' : 'var(--wvu-gold)'
            }}
          >
            {isLightMode ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <a href="#donate" className="btn-primary" style={{ padding: '0.6rem 1.1rem', fontSize: '0.9rem' }}>
            <Heart size={16} fill="currentColor" /> Donate
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: isLightMode ? 'var(--wvu-navy)' : '#FFFFFF',
              cursor: 'pointer',
              padding: '0.25rem'
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div style={{
          padding: '1rem 1.5rem 1.5rem 1.5rem',
          background: isLightMode ? 'var(--bg-light-card)' : 'var(--bg-dark-card)',
          borderBottom: '1px solid var(--wvu-gold)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#activities" onClick={() => setMobileMenuOpen(false)}>Activities</a>
          <a href="#gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</a>
          <a href="#outreach" onClick={() => setMobileMenuOpen(false)}>Science Corner</a>
          <a href="#governance" onClick={() => setMobileMenuOpen(false)}>Governance</a>
          <a 
            href="https://medicine.hsc.wvu.edu/neuroscience/outreach/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: 'var(--wvu-gold)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.3rem' }}
          >
            WVU Outreach <ExternalLink size={14} />
          </a>
          <button 
            onClick={() => { setMobileMenuOpen(false); openContactModal(); }} 
            className="btn-secondary" 
            style={{ justifyContent: 'center' }}
          >
            Contact Chapter
          </button>
        </div>
      )}

      <style>{`
        .nav-link {
          text-decoration: none;
          color: ${isLightMode ? 'var(--text-light-primary)' : 'var(--text-dark-primary)'};
          font-weight: 500;
          font-size: 0.95rem;
          transition: color 0.2s ease;
        }
        .nav-link:hover {
          color: var(--wvu-gold);
        }
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
}
