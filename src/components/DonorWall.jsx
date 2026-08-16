import React from 'react';
import { Award, Heart, MessageSquare, Sparkles } from 'lucide-react';

export default function DonorWall({ donors, isLightMode }) {
  return (
    <section style={{ padding: '3rem 0 5rem 0', background: isLightMode ? 'rgba(0, 40, 85, 0.03)' : 'rgba(255, 255, 255, 0.02)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span style={{ color: 'var(--wvu-gold)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Chapter Gratitude
          </span>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginTop: '0.3rem' }}>
            Supporter Honor Roll & Public Wall of Thanks
          </h2>
          <p style={{ color: isLightMode ? 'var(--text-light-secondary)' : 'var(--text-dark-secondary)', fontSize: '0.95rem', maxWidth: '600px', margin: '0.5rem auto 0 auto' }}>
            We express our deepest appreciation to the community members, faculty, alumni, and advocates whose generosity fuels neuroscience in West Virginia.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {donors.map((donor, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, var(--wvu-gold) 0%, #D09600 100%)',
                      color: '#001938',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '0.9rem'
                    }}>
                      {donor.name ? donor.name.charAt(0).toUpperCase() : 'A'}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700, color: isLightMode ? 'var(--wvu-navy)' : '#F8FAFC' }}>
                        {donor.name}
                      </h4>
                      <span style={{ fontSize: '0.75rem', color: 'var(--wvu-gold)', fontWeight: 600 }}>
                        Donor Supporter
                      </span>
                    </div>
                  </div>
                  
                  <span style={{
                    padding: '0.2rem 0.6rem',
                    borderRadius: '1rem',
                    background: 'rgba(234, 170, 0, 0.15)',
                    color: 'var(--wvu-gold)',
                    fontWeight: 700,
                    fontSize: '0.85rem'
                  }}>
                    ${donor.amount}
                  </span>
                </div>

                <p style={{
                  fontSize: '0.9rem',
                  color: isLightMode ? 'var(--text-light-secondary)' : 'var(--text-dark-secondary)',
                  fontStyle: 'italic',
                  lineHeight: 1.5,
                  margin: '0.5rem 0'
                }}>
                  "{donor.message}"
                </p>
              </div>

              <div style={{ borderTop: '1px solid var(--bg-dark-border)', paddingTop: '0.6rem', marginTop: '0.75rem', display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: isLightMode ? 'var(--text-light-secondary)' : 'var(--text-dark-secondary)' }}>
                <span>Verified 501(c)(3) Donor</span>
                <span>{donor.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
