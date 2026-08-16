import React, { useState } from 'react';
import { Brain, HelpCircle, CheckCircle, XCircle, RefreshCw, Sparkles, BookOpen } from 'lucide-react';

export default function ScienceCorner({ isLightMode }) {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "Which organelle in a neuron is responsible for receiving synaptic signals from other neurons?",
      options: ["Axon Terminal", "Dendrite", "Myelin Sheath", "Node of Ranvier"],
      answer: 1,
      fact: "Dendrites are tree-like extensions at the beginning of a neuron that help increase the surface area for receiving signals from other neurons."
    },
    {
      question: "What primary neurotransmitter is involved in muscle activation and memory pathways?",
      options: ["Dopamine", "GABA", "Acetylcholine", "Serotonin"],
      answer: 2,
      fact: "Acetylcholine (ACh) plays a key role in motor movement and cognitive processes like learning and memory."
    },
    {
      question: "Which lobe of the brain is primarily responsible for visual processing?",
      options: ["Frontal Lobe", "Temporal Lobe", "Parietal Lobe", "Occipital Lobe"],
      answer: 3,
      fact: "The occipital lobe at the back of the brain contains the primary visual cortex."
    }
  ];

  const handleOptionClick = (index) => {
    if (selectedOption !== null) return;
    setSelectedOption(index);
    if (index === questions[currentQuiz].answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuiz + 1 < questions.length) {
      setCurrentQuiz(currentQuiz + 1);
      setSelectedOption(null);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuiz(0);
    setSelectedOption(null);
    setScore(0);
    setShowResult(false);
  };

  return (
    <section id="outreach" style={{ padding: '5rem 0' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem auto' }}>
          <span style={{ color: 'var(--wvu-gold)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Interactive STEM Learning
          </span>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800, marginTop: '0.4rem', marginBottom: '1rem' }}>
            Science Corner & Brain Quiz
          </h2>
          <p style={{ color: isLightMode ? 'var(--text-light-secondary)' : 'var(--text-dark-secondary)', fontSize: '1.05rem' }}>
            Test your neuroscience knowledge with our interactive Brain Bee prep quiz designed for school field trips and Brain Awareness Week.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
          
          {/* Interactive Quiz Module */}
          <div className="glass-card" style={{ padding: '2rem' }}>
            {!showResult ? (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', borderBottom: '1px solid var(--bg-dark-border)', paddingBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--wvu-gold)', textTransform: 'uppercase' }}>
                    Brain Bee Quiz • Question {currentQuiz + 1} of {questions.length}
                  </span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: isLightMode ? 'var(--wvu-navy)' : '#FFFFFF' }}>
                    Score: {score}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '1.25rem', lineHeight: 1.5, color: isLightMode ? 'var(--wvu-navy)' : '#F8FAFC' }}>
                  {questions[currentQuiz].question}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
                  {questions[currentQuiz].options.map((opt, idx) => {
                    let btnBg = isLightMode ? '#FFFFFF' : 'rgba(255,255,255,0.05)';
                    let btnBorder = '1px solid var(--bg-dark-border)';
                    let btnColor = isLightMode ? 'var(--text-light-primary)' : '#F8FAFC';

                    if (selectedOption !== null) {
                      if (idx === questions[currentQuiz].answer) {
                        btnBg = 'rgba(34, 197, 94, 0.2)';
                        btnBorder = '1px solid #22C55E';
                        btnColor = '#22C55E';
                      } else if (idx === selectedOption) {
                        btnBg = 'rgba(239, 68, 68, 0.2)';
                        btnBorder = '1px solid #EF4444';
                        btnColor = '#EF4444';
                      }
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleOptionClick(idx)}
                        style={{
                          padding: '0.85rem 1rem',
                          borderRadius: '0.6rem',
                          textAlign: 'left',
                          fontWeight: 600,
                          fontSize: '0.95rem',
                          cursor: selectedOption === null ? 'pointer' : 'default',
                          background: btnBg,
                          border: btnBorder,
                          color: btnColor,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        <span>{opt}</span>
                        {selectedOption !== null && idx === questions[currentQuiz].answer && <CheckCircle size={18} />}
                        {selectedOption !== null && idx === selectedOption && idx !== questions[currentQuiz].answer && <XCircle size={18} />}
                      </button>
                    );
                  })}
                </div>

                {selectedOption !== null && (
                  <div style={{ background: 'rgba(234, 170, 0, 0.12)', padding: '1rem', borderRadius: '0.6rem', border: '1px solid var(--wvu-gold)', marginBottom: '1.25rem', fontSize: '0.88rem' }}>
                    <strong style={{ color: 'var(--wvu-gold)', display: 'block', marginBottom: '0.2rem' }}>Did You Know?</strong>
                    {questions[currentQuiz].fact}
                  </div>
                )}

                {selectedOption !== null && (
                  <button onClick={handleNext} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    {currentQuiz + 1 === questions.length ? 'See Final Score' : 'Next Question'}
                  </button>
                )}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                <Brain size={48} color="var(--wvu-gold)" style={{ margin: '0 auto 1rem auto' }} />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: isLightMode ? 'var(--wvu-navy)' : '#F8FAFC' }}>
                  Quiz Complete!
                </h3>
                <p style={{ fontSize: '1.1rem', margin: '0.5rem 0 1.5rem 0', color: 'var(--wvu-gold)', fontWeight: 700 }}>
                  You scored {score} out of {questions.length}
                </p>
                <button onClick={resetQuiz} className="btn-primary" style={{ margin: '0 auto' }}>
                  <RefreshCw size={16} /> Try Again
                </button>
              </div>
            )}
          </div>

          {/* Educational Facts & 3D Brain Highlight */}
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--wvu-gold)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <BookOpen size={22} /> Neuroscience Resource Kits
            </h3>
            <p style={{ fontSize: '0.95rem', color: isLightMode ? 'var(--text-light-secondary)' : 'var(--text-dark-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              Our chapter provides downloadable 3D printable brain anatomy models, lesson plans, and sheep brain dissection guides free for West Virginia educators.
            </p>
            <div style={{ background: isLightMode ? '#FFFFFF' : 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '0.6rem', border: '1px solid var(--bg-dark-border)' }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: isLightMode ? 'var(--wvu-navy)' : '#FFFFFF', marginBottom: '0.4rem' }}>
                Brain Awareness Week Kits Include:
              </h4>
              <ul style={{ fontSize: '0.88rem', paddingLeft: '1.2rem', lineHeight: 1.6, color: isLightMode ? 'var(--text-light-secondary)' : 'var(--text-dark-secondary)' }}>
                <li>Anatomical brain region color maps</li>
                <li>Reflex testing kits & sensory puzzle boards</li>
                <li>Brain health, concussions & memory guides</li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
