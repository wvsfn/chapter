import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import NeuralBackground from './components/NeuralBackground.jsx';
import NeuralHero from './components/NeuralHero.jsx';
import DonationSection from './components/DonationSection.jsx';
import DonorWall from './components/DonorWall.jsx';
import ActivitiesShowcase from './components/ActivitiesShowcase.jsx';
import MediaGallery from './components/MediaGallery.jsx';
import ScienceCorner from './components/ScienceCorner.jsx';
import Governance from './components/Governance.jsx';
import Footer from './components/Footer.jsx';
import ContactModal from './components/ContactModal.jsx';

export default function App() {
  const [isLightMode, setIsLightMode] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Initial Donor Wall Supporters
  const [donors, setDonors] = useState([
    {
      name: "West Virginia Neuroscience Alumni",
      amount: 250,
      message: "Proud to support student travel grants and K-12 STEM outreach across the Mountain State!",
      date: "August 2026"
    },
    {
      name: "Dr. A. Smith",
      amount: 100,
      message: "In honor of Brain Awareness Week and our dedicated graduate student researchers.",
      date: "August 2026"
    },
    {
      name: "WV STEM Advocate",
      amount: 50,
      message: "Keep inspiring young minds through school laboratory visits!",
      date: "July 2026"
    }
  ]);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
    if (!isLightMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  };

  const handleAddDonor = (newDonor) => {
    setDonors([newDonor, ...donors]);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      {/* Full Page Moving Neural Network Background */}
      <NeuralBackground isLightMode={isLightMode} />

      <Navbar 
        isLightMode={isLightMode} 
        toggleTheme={toggleTheme} 
        openContactModal={() => setIsContactModalOpen(true)} 
      />

      <main style={{ flex: 1, position: 'relative', zIndex: 2 }}>
        <NeuralHero isLightMode={isLightMode} />
        
        {/* About Section */}
        <section id="about" style={{ padding: '4rem 0 2rem 0', position: 'relative', zIndex: 2 }}>
          <div className="container">
            <div className="glass-card" style={{ padding: '2.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'center' }}>
              <div>
                <span style={{ color: 'var(--wvu-gold)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Statewide Excellence
                </span>
                <h2 style={{ fontSize: '2rem', fontWeight: 800, marginTop: '0.3rem', marginBottom: '1rem', color: isLightMode ? 'var(--wvu-navy)' : '#F8FAFC' }}>
                  Connecting Brain Researchers Across West Virginia
                </h2>
                <p style={{ color: isLightMode ? 'var(--text-light-secondary)' : 'var(--text-dark-secondary)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                  The West Virginia Chapter of the Society for Neuroscience brings together faculty, trainees, clinical researchers, and educators from institutions across the state to foster scientific discovery and public brain awareness.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ background: isLightMode ? '#FFFFFF' : 'rgba(0,0,0,0.3)', padding: '1.25rem', borderRadius: '0.75rem', border: '1px solid var(--wvu-gold)', textAlign: 'center' }}>
                  <span style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--wvu-gold)', display: 'block' }}>100+</span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: isLightMode ? 'var(--wvu-navy)' : '#F8FAFC' }}>Active Members</span>
                </div>
                <div style={{ background: isLightMode ? '#FFFFFF' : 'rgba(0,0,0,0.3)', padding: '1.25rem', borderRadius: '0.75rem', border: '1px solid var(--wvu-gold)', textAlign: 'center' }}>
                  <span style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--wvu-gold)', display: 'block' }}>10+</span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: isLightMode ? 'var(--wvu-navy)' : '#F8FAFC' }}>Years Outreach</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ActivitiesShowcase isLightMode={isLightMode} />
        
        <DonationSection 
          isLightMode={isLightMode} 
          onAddDonor={handleAddDonor} 
        />
        
        <DonorWall 
          donors={donors} 
          isLightMode={isLightMode} 
        />
        
        <MediaGallery isLightMode={isLightMode} />
        
        <ScienceCorner isLightMode={isLightMode} />
        
        <Governance isLightMode={isLightMode} />
      </main>

      <Footer 
        isLightMode={isLightMode} 
        openContactModal={() => setIsContactModalOpen(true)} 
      />

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
        isLightMode={isLightMode} 
      />
    </div>
  );
}
