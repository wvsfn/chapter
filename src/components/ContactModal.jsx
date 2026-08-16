import React, { useState } from 'react';
import { X, Send, Mail, CheckCircle2, MessageSquare, User } from 'lucide-react';

export default function ContactModal({ isOpen, onClose, isLightMode }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'General Inquiry', message: '' });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(0,0,0,0.85)',
      backdropFilter: 'blur(8px)',
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem'
    }}>
      <div className="glass-card" style={{ maxWidth: '520px', width: '100%', padding: '2rem', background: isLightMode ? '#FFFFFF' : '#0F172A', position: 'relative' }}>
        <button 
          onClick={onClose}
          style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: 'none', border: 'none', color: isLightMode ? 'var(--wvu-navy)' : '#FFFFFF', cursor: 'pointer' }}
        >
          <X size={24} />
        </button>

        {!submitted ? (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--wvu-gold)', marginBottom: '0.5rem' }}>
              <Mail size={22} />
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: isLightMode ? 'var(--wvu-navy)' : '#F8FAFC' }}>
                Contact WV SfN Chapter
              </h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: isLightMode ? 'var(--text-light-secondary)' : 'var(--text-dark-secondary)', marginBottom: '1.5rem' }}>
              Send a direct message to chapter officers. Responses will be sent to your email.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <input 
                  type="text" 
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.6rem', border: '1px solid var(--bg-dark-border)', background: isLightMode ? '#F8FAFC' : 'rgba(0,0,0,0.2)', color: isLightMode ? '#000' : '#FFF' }}
                />
              </div>
              <div>
                <input 
                  type="email" 
                  required
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.6rem', border: '1px solid var(--bg-dark-border)', background: isLightMode ? '#F8FAFC' : 'rgba(0,0,0,0.2)', color: isLightMode ? '#000' : '#FFF' }}
                />
              </div>
              <div>
                <select 
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.6rem', border: '1px solid var(--bg-dark-border)', background: isLightMode ? '#F8FAFC' : '#0F172A', color: isLightMode ? '#000' : '#FFF' }}
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Brain Awareness Week">Brain Awareness Week Outreach</option>
                  <option value="Membership & Trainees">Membership & Trainee Grants</option>
                  <option value="Donation / Non-Profit Inquiry">Donation / 501(c)(3) Inquiry</option>
                </select>
              </div>
              <div>
                <textarea 
                  required
                  rows="4"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.6rem', border: '1px solid var(--bg-dark-border)', background: isLightMode ? '#F8FAFC' : 'rgba(0,0,0,0.2)', color: isLightMode ? '#000' : '#FFF', resize: 'none' }}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ justifyContent: 'center', padding: '0.85rem' }}>
                <Send size={16} /> Send Message
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <CheckCircle2 size={48} color="var(--wvu-gold)" style={{ margin: '0 auto 1rem auto' }} />
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: isLightMode ? 'var(--wvu-navy)' : '#F8FAFC' }}>
              Message Sent Successfully!
            </h3>
            <p style={{ fontSize: '0.92rem', color: isLightMode ? 'var(--text-light-secondary)' : 'var(--text-dark-secondary)', margin: '0.5rem 0 1.5rem 0' }}>
              Thank you for contacting the West Virginia Chapter of the Society for Neuroscience. We will get back to you shortly.
            </p>
            <button onClick={() => { setSubmitted(false); onClose(); }} className="btn-secondary" style={{ margin: '0 auto' }}>
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
