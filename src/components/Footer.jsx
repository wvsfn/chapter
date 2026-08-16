import React from 'react';
import { ExternalLink, Mail, Github, Shield, Mountain } from 'lucide-react';
import { getAssetUrl } from '../utils/assetHelper';

export default function Footer({ isLightMode, openContactModal }) {
  return (
    <footer style={{
      background: isLightMode ? 'var(--wvu-navy)' : '#040914',
      color: '#F8FAFC',
      padding: '4rem 0 2rem 0',
      borderTop: '2px solid var(--wvu-gold)',
      position: 'relative',
      zIndex: 2
    }}>
      <div className="container">
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>
          
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <img 
                src={getAssetUrl('Media/WVChapterLogo1_color.png')} 
                alt="WV SfN Chapter Logo" 
                style={{ height: '40px', objectFit: 'contain' }}
                onError={(e) => { e.target.onerror = null; e.target.src = getAssetUrl('Media/WVChapterLogo4_color.png'); }}
              />
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.15rem', color: '#FFFFFF' }}>
                WV Society for Neuroscience
              </span>
            </div>
            <p style={{ fontSize: '0.88rem', color: '#94A3B8', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Official State Chapter of the Society for Neuroscience (SfN). Advancing brain research, K-12 STEM education, and scientific collaboration across West Virginia.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--wvu-gold)', fontSize: '0.85rem', fontWeight: 600 }}>
              <Shield size={16} /> 501(c)(3) Registered Non-Profit Organization
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--wvu-gold)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
              <li><a href="#about" style={{ color: '#CBD5E1', textDecoration: 'none' }}>About Chapter</a></li>
              <li><a href="#activities" style={{ color: '#CBD5E1', textDecoration: 'none' }}>Outreach & Activities</a></li>
              <li><a href="#gallery" style={{ color: '#CBD5E1', textDecoration: 'none' }}>Media Gallery</a></li>
              <li><a href="#outreach" style={{ color: '#CBD5E1', textDecoration: 'none' }}>Science Corner & Brain Quiz</a></li>
              <li><a href="#donate" style={{ color: 'var(--wvu-gold)', fontWeight: 600, textDecoration: 'none' }}>Tax-Deductible Donation</a></li>
            </ul>
          </div>

          {/* Institutional Partners */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--wvu-gold)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Institutional Partners
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li>
                <a 
                  href="https://medicine.hsc.wvu.edu/neuroscience/outreach/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: '#F8FAFC', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600 }}
                >
                  WVU Neuroscience Outreach <ExternalLink size={14} color="var(--wvu-gold)" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.sfn.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: '#F8FAFC', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600 }}
                >
                  Society for Neuroscience Global <ExternalLink size={14} color="var(--wvu-gold)" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & GitHub */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--wvu-gold)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Connect & Source
            </h4>
            <button 
              onClick={openContactModal}
              className="btn-secondary"
              style={{ width: '100%', justifyContent: 'center', marginBottom: '0.85rem', padding: '0.65rem' }}
            >
              <Mail size={16} /> Contact Chapter Officers
            </button>

            <a 
              href="https://github.com/wvsfn/chapter" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                width: '100%',
                padding: '0.65rem',
                borderRadius: '0.75rem',
                background: 'rgba(255,255,255,0.08)',
                color: '#FFFFFF',
                textDecoration: 'none',
                fontSize: '0.88rem',
                fontWeight: 600
              }}
            >
              <Github size={16} /> GitHub Source Repository
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.82rem', color: '#94A3B8' }}>
          <div>
            © {new Date().getFullYear()} West Virginia Chapter of the Society for Neuroscience. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--wvu-gold)' }}>
            <Mountain size={14} /> Built for the Mountain State
          </div>
        </div>

      </div>
    </footer>
  );
}
