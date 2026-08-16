import React, { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, Heart, Brain, Mountain } from 'lucide-react';

export default function NeuralHero({ isLightMode }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Neural Synapse Nodes
    const numNodes = Math.min(50, Math.floor(width / 25));
    const nodes = [];
    const colors = isLightMode 
      ? ['#002855', '#EAAA00', '#0EA5E9'] 
      : ['#EAAA00', '#38BDF8', '#60A5FA', '#F59E0B'];

    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height * 0.85,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2.5 + 1.5,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw Connections (Synaptic Firing)
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            const alpha = (1 - dist / 130) * (isLightMode ? 0.25 : 0.4);
            ctx.strokeStyle = nodes[i].color;
            ctx.globalAlpha = alpha;
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }

      // Draw Nodes
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height * 0.85) node.vy *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isLightMode]);

  return (
    <section id="home" style={{ position: 'relative', overflow: 'hidden', paddingTop: '4rem', paddingBottom: '6rem' }}>
      {/* Interactive Neural Canvas */}
      <canvas 
        ref={canvasRef} 
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2, textContent: 'center' }}>
        
        {/* Badges */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.4rem 0.9rem',
            borderRadius: '2rem',
            background: 'rgba(234, 170, 0, 0.15)',
            border: '1px solid var(--wvu-gold)',
            color: 'var(--wvu-gold)',
            fontSize: '0.85rem',
            fontWeight: 700
          }}>
            <Mountain size={15} /> West Virginia Chapter
          </span>

          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.4rem 0.9rem',
            borderRadius: '2rem',
            background: isLightMode ? 'rgba(0, 40, 85, 0.08)' : 'rgba(255, 255, 255, 0.08)',
            border: isLightMode ? '1px solid var(--wvu-navy)' : '1px solid rgba(255, 255, 255, 0.2)',
            color: isLightMode ? 'var(--wvu-navy)' : '#F8FAFC',
            fontSize: '0.85rem',
            fontWeight: 600
          }}>
            <Brain size={15} /> Society for Neuroscience
          </span>

          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.4rem 0.9rem',
            borderRadius: '2rem',
            background: 'rgba(14, 165, 233, 0.15)',
            border: '1px solid var(--synapse-cyan)',
            color: 'var(--synapse-cyan)',
            fontSize: '0.85rem',
            fontWeight: 600
          }}>
            <Sparkles size={15} /> 501(c)(3) Non-Profit
          </span>
        </div>

        {/* Headline */}
        <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ 
            fontSize: 'clamp(2.3rem, 5vw, 3.8rem)', 
            fontWeight: 800, 
            lineHeight: 1.15,
            marginBottom: '1.25rem',
            background: isLightMode 
              ? 'linear-gradient(135deg, #002855 0%, #001938 100%)' 
              : 'linear-gradient(135deg, #FFFFFF 0%, #E2E8F0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Advancing Neuroscience Research & STEM Education Across <span style={{ 
              background: 'linear-gradient(135deg, var(--wvu-gold) 0%, #F59E0B 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>West Virginia</span>
          </h1>

          <p style={{ 
            fontSize: '1.15rem', 
            color: isLightMode ? 'var(--text-light-secondary)' : 'var(--text-dark-secondary)',
            marginBottom: '2.5rem',
            lineHeight: 1.7
          }}>
            Empowering scientists, educating youth, and fostering brain awareness across the Mountain State. Joined in partnership with academic institutions, community leaders, and the global Society for Neuroscience.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <a href="#activities" className="btn-primary" style={{ padding: '0.85rem 1.75rem', fontSize: '1rem' }}>
              Explore Our Activities <ArrowRight size={18} />
            </a>
            <a href="#donate" className="btn-secondary" style={{ padding: '0.85rem 1.75rem', fontSize: '1rem' }}>
              <Heart size={18} fill="currentColor" style={{ color: 'var(--wvu-gold)' }} /> Support Our Mission
            </a>
          </div>
        </div>

      </div>

      {/* West Virginia Mountain Ridge Silhouette Overlay */}
      <svg className="mountain-bg-svg" viewBox="0 0 1440 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 240L120 180L240 210L360 140L480 195L600 130L720 170L840 110L960 180L1080 120L1200 160L1320 100L1440 150V240H0Z" 
          fill={isLightMode ? "#002855" : "#EAAA00"} 
          fillOpacity={isLightMode ? "0.08" : "0.05"} 
        />
        <path d="M0 240L160 160L320 190L480 120L640 170L800 100L960 150L1120 90L1280 140L1440 110V240H0Z" 
          fill={isLightMode ? "#002855" : "#38BDF8"} 
          fillOpacity={isLightMode ? "0.05" : "0.08"} 
        />
      </svg>
    </section>
  );
}
