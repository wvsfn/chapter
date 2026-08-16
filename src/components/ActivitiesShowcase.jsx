import React, { useState } from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { getAssetUrl } from '../utils/assetHelper';

export default function ActivitiesShowcase({ isLightMode }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const activities = [
    {
      id: 1,
      title: "Brain Awareness Week (BAW) 2025",
      category: "Brain Awareness Week",
      date: "Spring 2025",
      location: "Morgantown & Statewide WV",
      description: "Interactive neuroanatomy demonstrations, sheep brain dissections, and memory games for K-12 students across West Virginia schools.",
      tag: "Community Outreach",
      image: getAssetUrl('Media/GradStudentF1.png')
    },
    {
      id: 2,
      title: "4-H Cloverbuds Science Outreach 2026",
      category: "Youth STEM",
      date: "Spring 2026",
      location: "WVU Extension & Local County Clubs",
      description: "Hands-on neuro-sensory discovery labs introducing young children to how senses work, reflex pathways, and brain health.",
      tag: "Youth Engagement",
      image: getAssetUrl('Media/GradStudentM1.png')
    },
    {
      id: 3,
      title: "WVU Science Bowl & Brain Bee 2026",
      category: "Outreach & Youth",
      date: "Winter 2026",
      location: "West Virginia University",
      description: "Statewide high school competition challenging top students on neurobiology, brain anatomy, and clinical neuroscience.",
      tag: "Competition",
      image: getAssetUrl('Media/Site_illustr1.png')
    },
    {
      id: 4,
      title: "School Field Trips to Neuroscience Labs",
      category: "School Field Trips",
      date: "Fall 2025",
      location: "WVU Neuroscience Laboratories",
      description: "Middle and high school student visits to advanced research labs, featuring live microscopy, electrophysiology demos, and career Q&As.",
      tag: "Lab Tour",
      image: getAssetUrl('Media/Site_illustr2.png')
    },
    {
      id: 5,
      title: "Annual WV SfN Chapter Meeting & Symposium",
      category: "Annual Meeting",
      date: "Annual Event",
      location: "West Virginia University Health Sciences Center",
      description: "Keynote addresses from leading neuroscientists, trainee poster presentations, travel grant awards, and executive election meetings.",
      tag: "Scientific Conference",
      image: getAssetUrl('Media/WVChapterLogo1_color.png')
    }
  ];

  const categories = ['All', 'Brain Awareness Week', 'Youth STEM', 'Outreach & Youth', 'School Field Trips', 'Annual Meeting'];

  const filteredActivities = activeFilter === 'All'
    ? activities
    : activities.filter(a => a.category === activeFilter);

  return (
    <section id="activities" style={{ padding: '5rem 0', position: 'relative', zIndex: 2 }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem auto' }}>
          <span style={{ color: 'var(--wvu-gold)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Promoting Science & Community
          </span>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800, marginTop: '0.4rem', marginBottom: '1rem', color: isLightMode ? 'var(--wvu-navy)' : '#F8FAFC' }}>
            Chapter Activities & Outreach Initiatives
          </h2>
          <p style={{ color: isLightMode ? 'var(--text-light-secondary)' : 'var(--text-dark-secondary)', fontSize: '1.05rem' }}>
            Explore how our chapter brings neuroscience directly to students, researchers, and the West Virginia public.
          </p>
        </div>

        {/* Category Filters */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', justifyContent: 'center', marginBottom: '2.5rem' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                padding: '0.6rem 1.25rem',
                borderRadius: '2rem',
                fontWeight: 600,
                fontSize: '0.9rem',
                border: activeFilter === cat ? '1px solid var(--wvu-gold)' : '1px solid var(--bg-dark-border)',
                background: activeFilter === cat ? 'var(--wvu-gold)' : (isLightMode ? '#FFFFFF' : 'rgba(255,255,255,0.05)'),
                color: activeFilter === cat ? '#001938' : (isLightMode ? 'var(--wvu-navy)' : '#F8FAFC'),
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Activity Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {filteredActivities.map(act => (
            <div key={act.id} className="glass-card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '200px', width: '100%', overflow: 'hidden', position: 'relative', background: 'rgba(0, 40, 85, 0.2)' }}>
                <img 
                  src={act.image} 
                  alt={act.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => { e.target.onerror = null; e.target.src = getAssetUrl('Media/WVChapterLogo1_color.png'); }}
                />
                <span style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'var(--wvu-navy)',
                  color: 'var(--wvu-gold)',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  padding: '0.3rem 0.75rem',
                  borderRadius: '1rem',
                  border: '1px solid var(--wvu-gold)'
                }}>
                  {act.tag}
                </span>
              </div>

              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.6rem', color: isLightMode ? 'var(--wvu-navy)' : '#F8FAFC' }}>
                    {act.title}
                  </h3>
                  
                  <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: 'var(--wvu-gold)', fontWeight: 600, marginBottom: '0.85rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Calendar size={14} /> {act.date}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><MapPin size={14} /> {act.location}</span>
                  </div>

                  <p style={{ fontSize: '0.92rem', color: isLightMode ? 'var(--text-light-secondary)' : 'var(--text-dark-secondary)', lineHeight: 1.6 }}>
                    {act.description}
                  </p>
                </div>

                <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--bg-dark-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <a 
                    href="https://medicine.hsc.wvu.edu/neuroscience/outreach/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.85rem', color: 'var(--wvu-gold)', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                  >
                    WVU Outreach Partner <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
