import React from 'react';
import { Shield, FileText, ExternalLink, Award, Users, CheckCircle } from 'lucide-react';

export default function Governance({ isLightMode }) {
  return (
    <section id="governance" style={{ padding: '5rem 0', background: isLightMode ? 'rgba(0, 40, 85, 0.02)' : 'rgba(255, 255, 255, 0.01)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem auto' }}>
          <span style={{ color: 'var(--wvu-gold)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Chapter Leadership & Purpose
          </span>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800, marginTop: '0.4rem', marginBottom: '1rem' }}>
            Governance & Mission
          </h2>
          <p style={{ color: isLightMode ? 'var(--text-light-secondary)' : 'var(--text-dark-secondary)', fontSize: '1.05rem' }}>
            The West Virginia Chapter operates as a non-profit affiliate of the Society for Neuroscience dedicated to advancing research, education, and public engagement.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>
          
          {/* Mission & Purpose */}
          <div className="glass-card" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--wvu-gold)', marginBottom: '1rem' }}>
              <Shield size={24} />
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: isLightMode ? 'var(--wvu-navy)' : '#F8FAFC' }}>
                Statement of Purpose
              </h3>
            </div>
            <p style={{ fontSize: '0.95rem', color: isLightMode ? 'var(--text-light-secondary)' : 'var(--text-dark-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              The purpose of the West Virginia Chapter of the Society for Neuroscience is to advance the understanding of the brain and nervous system, bring together scientists and educators across West Virginia, promote K-12 STEM outreach, and provide career development for trainees.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle size={16} color="var(--wvu-gold)" /> Affiliated with the International Society for Neuroscience (SfN)
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle size={16} color="var(--wvu-gold)" /> Registered 501(c)(3) Non-Profit Organization
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle size={16} color="var(--wvu-gold)" /> Governed by Official Chapter Bylaws & Executive Committee
              </div>
            </div>
          </div>

          {/* Institutional Partner Feature */}
          <div className="glass-card" style={{ padding: '2rem', border: '1px solid var(--wvu-gold)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--wvu-gold)', marginBottom: '1rem' }}>
              <Award size={24} />
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: isLightMode ? 'var(--wvu-navy)' : '#F8FAFC' }}>
                Key Institutional Partner
              </h3>
            </div>
            <p style={{ fontSize: '0.95rem', color: isLightMode ? 'var(--text-light-secondary)' : 'var(--text-dark-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              Our chapter collaborates closely with the <strong>West Virginia University Department of Neuroscience</strong> to organize joint symposia, research workshops, and statewide outreach programs.
            </p>
            <a 
              href="https://medicine.hsc.wvu.edu/neuroscience/outreach/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: '0.75rem 1.25rem', fontSize: '0.92rem' }}
            >
              Visit WVU Neuroscience Outreach <ExternalLink size={15} />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
