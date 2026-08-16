import React, { useState } from 'react';
import { Image, X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

export default function MediaGallery({ isLightMode }) {
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const galleryItems = [
    {
      url: "./Annual meeting/photo 1.JPG",
      title: "WV SfN Annual Chapter Meeting Poster Session",
      caption: "Graduate and undergraduate researchers presenting their neuroscience discoveries."
    },
    {
      url: "./Annual meeting/photo 2.JPG",
      title: "Keynote Lecture & Scientific Symposium",
      caption: "Chapter members engaged in scientific discussion during the annual meeting."
    },
    {
      url: "./Media/GradStudentF1.png",
      title: "Brain Awareness Outreach Demonstrations",
      caption: "Interactive neuroanatomy learning modules for West Virginia school students."
    },
    {
      url: "./Media/GradStudentM1.png",
      title: "Sensory & Reflex Science Stations",
      caption: "Demonstrating how neural signals control movement and perception."
    },
    {
      url: "./Media/Site_illustr1.png",
      title: "Brain Bee & Science Bowl Competition",
      caption: "High school neuroscience competitors showcasing their knowledge."
    },
    {
      url: "./Media/Site_illustr2.png",
      title: "K-12 STEM Field Trips to Research Labs",
      caption: "Students visiting advanced neuroimaging and electrophysiology labs."
    }
  ];

  return (
    <section id="gallery" style={{ padding: '5rem 0', background: isLightMode ? 'rgba(0, 40, 85, 0.02)' : 'rgba(255, 255, 255, 0.01)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem auto' }}>
          <span style={{ color: 'var(--wvu-gold)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Chapter Archive
          </span>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800, marginTop: '0.4rem', marginBottom: '1rem' }}>
            Media & Event Photo Gallery
          </h2>
          <p style={{ color: isLightMode ? 'var(--text-light-secondary)' : 'var(--text-dark-secondary)', fontSize: '1.05rem' }}>
            Highlights from Brain Awareness Week, Annual Symposia, and Youth STEM Outreach in West Virginia.
          </p>
        </div>

        {/* Masonry / Grid Gallery */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {galleryItems.map((item, idx) => (
            <div 
              key={idx} 
              className="glass-card" 
              onClick={() => setActiveImageIndex(idx)}
              style={{
                cursor: 'pointer',
                overflow: 'hidden',
                position: 'relative',
                height: '240px'
              }}
            >
              <img 
                src={item.url} 
                alt={item.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                onMouseOver={(e) => e.target.style.transform = 'scale(1.08)'}
                onMouseOut={(e) => e.target.style.transform = 'scale(1.0)'}
                onError={(e) => { e.target.onerror = null; e.target.src = './Media/WVChapterLogo1_color.png'; }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)',
                padding: '1.25rem 1rem 0.85rem 1rem',
                color: '#FFFFFF'
              }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  {item.title} <ZoomIn size={16} color="var(--wvu-gold)" />
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.9)',
          backdropFilter: 'blur(10px)',
          zIndex: 100,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem'
        }}>
          <button 
            onClick={() => setActiveImageIndex(null)}
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              background: 'none',
              border: 'none',
              color: '#FFFFFF',
              cursor: 'pointer'
            }}
          >
            <X size={32} />
          </button>

          <div style={{ position: 'relative', maxWidth: '900px', width: '100%', textAlign: 'center' }}>
            <img 
              src={galleryItems[activeImageIndex].url} 
              alt={galleryItems[activeImageIndex].title}
              style={{ maxHeight: '70vh', maxWidth: '100%', objectFit: 'contain', borderRadius: '0.75rem', border: '1px solid var(--wvu-gold)' }}
            />
            <h3 style={{ color: '#FFFFFF', fontSize: '1.3rem', fontWeight: 700, marginTop: '1rem' }}>
              {galleryItems[activeImageIndex].title}
            </h3>
            <p style={{ color: 'var(--wvu-gold)', fontSize: '0.95rem', marginTop: '0.3rem' }}>
              {galleryItems[activeImageIndex].caption}
            </p>

            {/* Navigation Controls */}
            <button 
              onClick={() => setActiveImageIndex((activeImageIndex - 1 + galleryItems.length) % galleryItems.length)}
              style={{ position: 'absolute', left: '-3rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', border: 'none', color: '#FFF', cursor: 'pointer', padding: '0.5rem', borderRadius: '50%' }}
            >
              <ChevronLeft size={32} />
            </button>
            <button 
              onClick={() => setActiveImageIndex((activeImageIndex + 1) % galleryItems.length)}
              style={{ position: 'absolute', right: '-3rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', border: 'none', color: '#FFF', cursor: 'pointer', padding: '0.5rem', borderRadius: '50%' }}
            >
              <ChevronRight size={32} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
