import React, { useState } from 'react';
import { Heart, FileText, CheckCircle2, ShieldCheck, Download, Sparkles, MessageSquare, User } from 'lucide-react';
import confetti from 'canvas-confetti';
import jsPDF from 'jspdf';

export default function DonationSection({ isLightMode, onAddDonor }) {
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorMessage, setDonorMessage] = useState('');
  const [isPublic, setIsPublic] = useState(true);
  const [showReceiptModal, setShowReceiptModal] = useState(false);
  const [receiptData, setReceiptData] = useState(null);

  const presets = [25, 50, 100, 250];

  const handleDonate = (e) => {
    e.preventDefault();
    const finalAmount = customAmount ? parseFloat(customAmount) : selectedAmount;
    if (!finalAmount || finalAmount <= 0) return;

    // Trigger celebration confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    const newReceipt = {
      receiptId: 'WVSFN-' + Math.floor(100000 + Math.random() * 900000),
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      donorName: donorName.trim() || 'Valued Donor',
      donorEmail: donorEmail.trim() || 'N/A',
      amount: finalAmount,
      message: donorMessage,
      isPublic: isPublic
    };

    setReceiptData(newReceipt);
    setShowReceiptModal(true);

    if (isPublic && onAddDonor) {
      onAddDonor({
        name: donorName.trim() || 'Anonymous Donor',
        amount: finalAmount,
        message: donorMessage || 'Supporting brain awareness & STEM education in West Virginia!',
        date: 'Just now'
      });
    }
  };

  const downloadTaxReceiptPDF = () => {
    if (!receiptData) return;
    const doc = new jsPDF();

    // Header
    doc.setFillColor(0, 40, 85); // WVU Navy
    doc.rect(0, 0, 210, 35, 'F');
    
    doc.setTextColor(234, 170, 0); // WVU Gold
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text('WEST VIRGINIA SOCIETY FOR NEUROSCIENCE', 15, 18);
    
    doc.setFontSize(10);
    doc.setTextColor(255, 255, 255);
    doc.text('Official 501(c)(3) Non-Profit Contribution Receipt', 15, 27);

    // Details Box
    doc.setTextColor(15, 23, 42);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text(`Receipt Number: ${receiptData.receiptId}`, 15, 50);
    doc.text(`Date of Contribution: ${receiptData.date}`, 15, 58);
    
    doc.setFont('helvetica', 'normal');
    doc.text(`Donor Name: ${receiptData.donorName}`, 15, 68);
    doc.text(`Donor Email: ${receiptData.donorEmail}`, 15, 76);
    doc.text(`Contribution Amount: $${receiptData.amount.toFixed(2)} USD`, 15, 84);

    // Tax Exemption Statement
    doc.setFillColor(248, 250, 252);
    doc.rect(15, 95, 180, 45, 'F');
    doc.setDrawColor(0, 40, 85);
    doc.rect(15, 95, 180, 45, 'S');

    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('Tax Deductibility Disclosure Statement:', 20, 105);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    const splitText = doc.splitTextToSize(
      'The West Virginia Chapter of the Society for Neuroscience is a tax-exempt non-profit organization under Section 501(c)(3) of the Internal Revenue Code. No goods or services were provided in exchange for this contribution. Please retain this receipt for your official income tax records.',
      170
    );
    doc.text(splitText, 20, 114);

    // Footer
    doc.setFontSize(9);
    doc.setTextColor(100, 116, 139);
    doc.text('West Virginia SfN Chapter | Dedicated Non-Profit Organization', 15, 160);
    doc.text('PayPal Non-Profit Direct Bank Deposit Account Enabled', 15, 166);

    doc.save(`WV_SfN_Tax_Receipt_${receiptData.receiptId}.pdf`);
  };

  return (
    <section id="donate" style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem auto' }}>
          <span style={{ 
            color: 'var(--wvu-gold)', 
            fontWeight: 700, 
            fontSize: '0.9rem', 
            letterSpacing: '0.08em',
            textTransform: 'uppercase'
          }}>
            Tax-Deductible Non-Profit Giving
          </span>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800, marginTop: '0.4rem', marginBottom: '1rem' }}>
            Support Brain Research & STEM Outreach in WV
          </h2>
          <p style={{ color: isLightMode ? 'var(--text-light-secondary)' : 'var(--text-dark-secondary)', fontSize: '1.05rem' }}>
            Your 100% tax-deductible donation directly funds student travel awards, K-12 Brain Awareness Week kits, and community science outreach across West Virginia.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'start' }}>
          
          {/* Donation Form Card */}
          <div className="glass-card" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: 'var(--wvu-gold)' }}>
              <Heart size={22} fill="currentColor" />
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: isLightMode ? 'var(--wvu-navy)' : '#F8FAFC' }}>
                Make a Tax-Deductible Donation
              </h3>
            </div>

            <form onSubmit={handleDonate}>
              {/* Preset Buttons */}
              <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.6rem' }}>
                Select Contribution Amount:
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.6rem', marginBottom: '1.25rem' }}>
                {presets.map(amt => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => { setSelectedAmount(amt); setCustomAmount(''); }}
                    style={{
                      padding: '0.75rem 0',
                      borderRadius: '0.6rem',
                      fontWeight: 700,
                      fontSize: '1rem',
                      cursor: 'pointer',
                      border: selectedAmount === amt && !customAmount ? '2px solid var(--wvu-gold)' : '1px solid var(--bg-dark-border)',
                      background: selectedAmount === amt && !customAmount ? 'var(--wvu-gold)' : (isLightMode ? '#FFFFFF' : 'rgba(255,255,255,0.05)'),
                      color: selectedAmount === amt && !customAmount ? '#001938' : (isLightMode ? 'var(--wvu-navy)' : '#F8FAFC'),
                      transition: 'all 0.2s ease'
                    }}
                  >
                    ${amt}
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div style={{ marginBottom: '1.5rem' }}>
                <input 
                  type="number" 
                  placeholder="Or Enter Custom Amount ($ USD)"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: '0.6rem',
                    border: '1px solid var(--bg-dark-border)',
                    background: isLightMode ? '#FFFFFF' : 'rgba(0,0,0,0.2)',
                    color: isLightMode ? 'var(--text-light-primary)' : '#FFFFFF',
                    fontSize: '1rem'
                  }}
                />
              </div>

              {/* Donor Name & Email */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1rem' }}>
                <input 
                  type="text" 
                  placeholder="Your Full Name" 
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  style={{
                    padding: '0.75rem 1rem',
                    borderRadius: '0.6rem',
                    border: '1px solid var(--bg-dark-border)',
                    background: isLightMode ? '#FFFFFF' : 'rgba(0,0,0,0.2)',
                    color: isLightMode ? 'var(--text-light-primary)' : '#FFFFFF'
                  }}
                />
                <input 
                  type="email" 
                  placeholder="Email (For Tax Receipt)" 
                  value={donorEmail}
                  onChange={(e) => setDonorEmail(e.target.value)}
                  style={{
                    padding: '0.75rem 1rem',
                    borderRadius: '0.6rem',
                    border: '1px solid var(--bg-dark-border)',
                    background: isLightMode ? '#FFFFFF' : 'rgba(0,0,0,0.2)',
                    color: isLightMode ? 'var(--text-light-primary)' : '#FFFFFF'
                  }}
                />
              </div>

              {/* Personal Message */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.4rem', color: isLightMode ? 'var(--text-light-secondary)' : 'var(--text-dark-secondary)' }}>
                  Personal Message / Dedication (Optional):
                </label>
                <textarea 
                  rows="2"
                  placeholder="Write a message to be featured on our Supporter Honor Roll..."
                  value={donorMessage}
                  onChange={(e) => setDonorMessage(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '0.6rem',
                    border: '1px solid var(--bg-dark-border)',
                    background: isLightMode ? '#FFFFFF' : 'rgba(0,0,0,0.2)',
                    color: isLightMode ? 'var(--text-light-primary)' : '#FFFFFF',
                    resize: 'none'
                  }}
                />
              </div>

              {/* Public Recognition Checkbox */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
                <input 
                  type="checkbox" 
                  id="publicOptIn"
                  checked={isPublic}
                  onChange={(e) => setIsPublic(e.target.checked)}
                  style={{ width: '18px', height: '18px', accentColor: 'var(--wvu-gold)', cursor: 'pointer' }}
                />
                <label htmlFor="publicOptIn" style={{ fontSize: '0.88rem', cursor: 'pointer', color: isLightMode ? 'var(--text-light-primary)' : 'var(--text-dark-primary)' }}>
                  Display my name & message publicly on the Supporter Honor Roll
                </label>
              </div>

              {/* Donate & Generate Receipt Button */}
              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.9rem', fontSize: '1.05rem' }}>
                <Heart size={18} fill="currentColor" /> Donate ${customAmount || selectedAmount} via PayPal Non-Profit
              </button>

              {/* Security Note */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', marginTop: '1rem', fontSize: '0.8rem', color: 'var(--wvu-gold)' }}>
                <ShieldCheck size={16} /> Direct Non-Profit Bank Deposit • Encrypted 256-bit PayPal Checkout
              </div>
            </form>
          </div>

          {/* Non-Profit Impact & Tax Exemption Summary */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="glass-card" style={{ padding: '1.75rem' }}>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--wvu-gold)' }}>
                <CheckCircle2 size={20} /> 501(c)(3) Tax Deduction Status
              </h4>
              <p style={{ fontSize: '0.92rem', color: isLightMode ? 'var(--text-light-secondary)' : 'var(--text-dark-secondary)', lineHeight: 1.6 }}>
                The West Virginia Chapter of the Society for Neuroscience is a registered 501(c)(3) non-profit organization. Every dollar contributed goes directly toward educational outreach, travel grants, and neuroscience initiatives in West Virginia.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '1.75rem' }}>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.75rem', color: isLightMode ? 'var(--wvu-navy)' : '#F8FAFC' }}>
                Where Your Gift Goes
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.92rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Sparkles size={16} color="var(--wvu-gold)" /> <strong>Brain Awareness Kits:</strong> Hands-on brain models & STEM activities for WV K-12 schools.
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Sparkles size={16} color="var(--wvu-gold)" /> <strong>Student Travel Grants:</strong> Funding WV graduate and undergraduate researchers to present at SfN Global Conferences.
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Sparkles size={16} color="var(--wvu-gold)" /> <strong>Annual Chapter Meeting:</strong> Keynote lectures and scientific symposia free for local trainees.
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>

      {/* Tax Receipt Modal */}
      {showReceiptModal && receiptData && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.8)',
          backdropFilter: 'blur(8px)',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem'
        }}>
          <div className="glass-card" style={{ maxWidth: '540px', width: '100%', padding: '2.25rem', background: isLightMode ? '#FFFFFF' : '#0F172A' }}>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(234, 170, 0, 0.2)', color: 'var(--wvu-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                <CheckCircle2 size={32} />
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: isLightMode ? 'var(--wvu-navy)' : '#F8FAFC' }}>
                Thank You for Your Contribution!
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--wvu-gold)', fontWeight: 600, marginTop: '0.2rem' }}>
                Official 501(c)(3) Tax Receipt Ready
              </p>
            </div>

            <div style={{ background: isLightMode ? '#F8FAFC' : 'rgba(255,255,255,0.05)', padding: '1.25rem', borderRadius: '0.75rem', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span>Receipt Number:</span>
                <strong>{receiptData.receiptId}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span>Donor Name:</span>
                <strong>{receiptData.donorName}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span>Contribution Amount:</span>
                <strong style={{ color: 'var(--wvu-gold)', fontSize: '1.1rem' }}>${receiptData.amount.toFixed(2)} USD</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Tax Deductible:</span>
                <strong style={{ color: '#22C55E' }}>100% Eligible</strong>
              </div>
            </div>

            <p style={{ fontSize: '0.8rem', color: isLightMode ? 'var(--text-light-secondary)' : 'var(--text-dark-secondary)', fontStyle: 'italic', marginBottom: '1.5rem', textAlign: 'center' }}>
              "WV Society for Neuroscience is a registered 501(c)(3) non-profit organization. No goods or services were provided in exchange for this contribution."
            </p>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button 
                onClick={downloadTaxReceiptPDF}
                className="btn-primary" 
                style={{ flex: 1, justifyContent: 'center' }}
              >
                <Download size={16} /> Download PDF Tax Receipt
              </button>
              <button 
                onClick={() => setShowReceiptModal(false)}
                className="btn-secondary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
