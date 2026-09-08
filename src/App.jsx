import React, { useState } from 'react';

const App = () => {
  const [hovered, setHovered] = useState(null);

  const mahasiswa = [
    { id: 1, nama: "Gheanina", age: 19, emoji: "🌸", color: "#f093fb", quote: "Front-End is my passion" },
    { id: 2, nama: "Imanuela", age: 20, emoji: "🌻", color: "#fbc2eb", quote: "React makes me happy" },
    { id: 3, nama: "Umbas", age: 19, emoji: "🌊", color: "#a18cd1", quote: "Design + Code = ❤️" }
  ];

  return (
    <div style={styles.container}>
      {/* Background Gradient Animasi */}
      <div style={styles.bgGradient}></div>
      <div style={styles.orb1}></div>
      <div style={styles.orb2}></div>
      <div style={styles.orb3}></div>

      {/* Navbar Mewah */}
      <nav style={styles.navbar}>
        <div style={styles.logo}>
          <span style={styles.logoIcon}>✦</span>
          <span>KELAS <span style={styles.logoBold}>B</span></span>
        </div>
        <div style={styles.navLinks}>
          <a href="#" style={styles.navLink}>Home</a>
          <a href="#" style={styles.navLink}>Features</a>
          <a href="#" style={styles.navLink}>About</a>
          <a href="#" style={styles.navLink}>Contact</a>
        </div>
        <button style={styles.navBtn}>Get Started →</button>
      </nav>

      {/* Hero Section */}
      <header style={styles.hero}>
        <div style={styles.heroContent}>
          <div style={styles.badge}>
            <span style={styles.badgeDot}></span>
            React JS + Tailwind CSS
          </div>
          <h1 style={styles.title}>
            Build Something
            <br />
            <span style={styles.gradientText}>Awesome</span>
          </h1>
          <p style={styles.desc}>
            A simple React JS website created using reusable React components and Tailwind CSS.
          </p>
          <div style={styles.buttonGroup}>
            <button style={styles.btnPrimary}>
              🚀 Get Started
              <span style={styles.btnArrow}>→</span>
            </button>
            <button style={styles.btnSecondary}>Learn More</button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <span style={styles.sectionBadge}>✦ FEATURES</span>
          <h2 style={styles.sectionTitle}>Meet Our Team</h2>
          <p style={styles.sectionDesc}>3 talented developers learning React together</p>
        </div>

        <div style={styles.grid}>
          {mahasiswa.map((mhs, index) => (
            <div
              key={mhs.id}
              style={{
                ...styles.card,
                transform: hovered === index ? 'translateY(-20px) scale(1.04)' : 'translateY(0) scale(1)',
                boxShadow: hovered === index 
                  ? `0 40px 80px rgba(0,0,0,0.12), 0 0 60px ${mhs.color}30` 
                  : '0 10px 40px rgba(0,0,0,0.04)',
                borderColor: hovered === index ? mhs.color : 'rgba(255,255,255,0.2)'
              }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <div style={styles.cardGlow}></div>
              <div style={{...styles.avatar, background: `linear-gradient(135deg, ${mhs.color}, #a18cd1)`}}>
                {mhs.emoji}
              </div>
              <h3 style={styles.cardName}>{mhs.nama}</h3>
              <p style={styles.cardAge}>✨ {mhs.age} years old</p>
              <p style={styles.cardQuote}>"{mhs.quote}"</p>
              <div style={styles.cardBadge}>
                <span style={styles.cardBadgeDot}></span>
                Active Learner
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Mewah */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerLeft}>
            <span style={styles.footerLogo}>✦ KELAS B</span>
            <p style={styles.footerText}>
              crafted with ☕ & 💖 by <span style={styles.footerHighlight}>Gheanina Umbas</span>
            </p>
          </div>
          <div style={styles.footerRight}>
            <a href="#" style={styles.footerLink}>Twitter</a>
            <a href="#" style={styles.footerLink}>GitHub</a>
            <a href="#" style={styles.footerLink}>LinkedIn</a>
          </div>
        </div>
        <p style={styles.footerSub}>© 2026 • Kelas Front-End B</p>
      </footer>
    </div>
  );
};

// ========== STYLES SUPER PREMIUM ==========
const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px 30px 20px',
    fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
    backgroundColor: '#f5f0fa',
    minHeight: '100vh',
    position: 'relative',
    overflow: 'hidden'
  },
  bgGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(ellipse at 20% 50%, rgba(108, 92, 231, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(240, 147, 251, 0.06) 0%, transparent 50%)',
    zIndex: 0,
    pointerEvents: 'none'
  },
  orb1: {
    position: 'absolute',
    top: '-150px',
    right: '-80px',
    width: '450px',
    height: '450px',
    background: 'radial-gradient(circle, rgba(161, 140, 209, 0.25) 0%, transparent 70%)',
    borderRadius: '50%',
    zIndex: 0,
    pointerEvents: 'none',
    animation: 'float 8s ease-in-out infinite'
  },
  orb2: {
    position: 'absolute',
    bottom: '-100px',
    left: '-60px',
    width: '350px',
    height: '350px',
    background: 'radial-gradient(circle, rgba(251, 194, 235, 0.2) 0%, transparent 70%)',
    borderRadius: '50%',
    zIndex: 0,
    pointerEvents: 'none'
  },
  orb3: {
    position: 'absolute',
    top: '40%',
    right: '-40px',
    width: '200px',
    height: '200px',
    background: 'radial-gradient(circle, rgba(240, 147, 251, 0.15) 0%, transparent 70%)',
    borderRadius: '50%',
    zIndex: 0,
    pointerEvents: 'none'
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 28px',
    marginBottom: '20px',
    backgroundColor: 'rgba(255,255,255,0.5)',
    backdropFilter: 'blur(24px)',
    WebkitBackdropFilter: 'blur(24px)',
    borderRadius: '60px',
    border: '1px solid rgba(255,255,255,0.6)',
    boxShadow: '0 4px 30px rgba(0,0,0,0.03)',
    position: 'sticky',
    top: '16px',
    zIndex: 100
  },
  logo: {
    fontSize: '0.95rem',
    fontWeight: '400',
    color: '#2d2a3e',
    letterSpacing: '1.2px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  logoIcon: {
    background: 'linear-gradient(135deg, #6c5ce7, #f093fb)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  logoBold: {
    fontWeight: '700',
    color: '#6c5ce7'
  },
  navLinks: {
    display: 'flex',
    gap: '32px',
    fontSize: '0.85rem',
    color: '#6a6a7a',
    fontWeight: '500'
  },
  navLink: {
    color: '#6a6a7a',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'color 0.3s',
    ':hover': { color: '#6c5ce7' }
  },
  navBtn: {
    padding: '10px 28px',
    borderRadius: '40px',
    border: 'none',
    background: 'linear-gradient(135deg, #6c5ce7, #a29bfe)',
    color: '#fff',
    fontSize: '0.8rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 16px rgba(108, 92, 231, 0.25)'
  },
  hero: {
    textAlign: 'center',
    padding: '20px 20px 10px',
    position: 'relative',
    zIndex: 1
  },
  heroContent: {
    maxWidth: '800px',
    margin: '0 auto'
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: 'rgba(108, 92, 231, 0.06)',
    color: '#6c5ce7',
    padding: '6px 20px',
    borderRadius: '40px',
    fontSize: '0.75rem',
    fontWeight: '600',
    letterSpacing: '0.5px',
    marginBottom: '20px',
    border: '1px solid rgba(108, 92, 231, 0.06)'
  },
  badgeDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: '#6c5ce7',
    display: 'inline-block',
    animation: 'pulse 2s infinite'
  },
  title: {
    fontSize: '4.2rem',
    fontWeight: '700',
    color: '#1a1a2e',
    lineHeight: 1.1,
    marginBottom: '12px',
    letterSpacing: '-1.5px'
  },
  gradientText: {
    background: 'linear-gradient(135deg, #6c5ce7 0%, #f093fb 50%, #fbc2eb 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    backgroundSize: '200% 200%',
    animation: 'gradientShift 4s ease-in-out infinite'
  },
  desc: {
    fontSize: '1.1rem',
    color: '#7a7a8a',
    maxWidth: '520px',
    margin: '0 auto 30px',
    lineHeight: 1.7,
    fontWeight: '400'
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '14px',
    flexWrap: 'wrap'
  },
  btnPrimary: {
    padding: '16px 44px',
    borderRadius: '60px',
    border: 'none',
    background: 'linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%)',
    color: '#fff',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 8px 28px rgba(108, 92, 231, 0.30)',
    letterSpacing: '0.3px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px'
  },
  btnArrow: {
    transition: 'transform 0.3s ease',
    display: 'inline-block'
  },
  btnSecondary: {
    padding: '16px 44px',
    borderRadius: '60px',
    border: '1.5px solid #e0dce8',
    backgroundColor: 'rgba(255,255,255,0.4)',
    backdropFilter: 'blur(8px)',
    color: '#2d2a3e',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    letterSpacing: '0.3px'
  },
  section: {
    marginTop: '40px',
    padding: '20px 10px',
    position: 'relative',
    zIndex: 1
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '36px'
  },
  sectionBadge: {
    display: 'inline-block',
    fontSize: '0.7rem',
    fontWeight: '600',
    color: '#a09baf',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    marginBottom: '6px'
  },
  sectionTitle: {
    fontSize: '2.4rem',
    fontWeight: '600',
    color: '#1a1a2e',
    margin: '0 0 6px',
    letterSpacing: '-0.5px'
  },
  sectionDesc: {
    fontSize: '1rem',
    color: '#a09baf',
    margin: 0
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
    gap: '30px',
    maxWidth: '850px',
    margin: '0 auto'
  },
  card: {
    position: 'relative',
    backgroundColor: 'rgba(255,255,255,0.65)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderRadius: '32px',
    padding: '34px 20px 26px',
    textAlign: 'center',
    border: '1px solid rgba(255,255,255,0.4)',
    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    cursor: 'default',
    overflow: 'hidden'
  },
  cardGlow: {
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    width: '200%',
    height: '200%',
    background: 'radial-gradient(circle, rgba(108, 92, 231, 0.02) 0%, transparent 70%)',
    pointerEvents: 'none'
  },
  avatar: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '36px',
    margin: '0 auto 14px',
    boxShadow: '0 8px 32px rgba(108, 92, 231, 0.15)'
  },
  cardName: {
    fontSize: '1.35rem',
    fontWeight: '600',
    color: '#1a1a2e',
    margin: '0 0 2px',
    letterSpacing: '-0.3px'
  },
  cardAge: {
    fontSize: '0.85rem',
    color: '#a09baf',
    margin: '0 0 8px',
    fontWeight: '400'
  },
  cardQuote: {
    fontSize: '0.85rem',
    color: '#7a7a8a',
    fontStyle: 'italic',
    margin: '0 0 16px'
  },
  cardBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '0.65rem',
    fontWeight: '600',
    color: '#6c5ce7',
    backgroundColor: 'rgba(108, 92, 231, 0.08)',
    padding: '4px 16px',
    borderRadius: '30px',
    letterSpacing: '0.5px'
  },
  cardBadgeDot: {
    width: '5px',
    height: '5px',
    borderRadius: '50%',
    backgroundColor: '#6c5ce7',
    display: 'inline-block',
    animation: 'pulse 1.5s infinite'
  },
  footer: {
    marginTop: '50px',
    paddingTop: '28px',
    borderTop: '1px solid rgba(0,0,0,0.04)',
    position: 'relative',
    zIndex: 1
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '16px',
    maxWidth: '850px',
    margin: '0 auto'
  },
  footerLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  },
  footerLogo: {
    fontSize: '0.85rem',
    fontWeight: '700',
    color: '#2d2a3e',
    letterSpacing: '1px'
  },
  footerText: {
    color: '#b0aab8',
    fontSize: '0.85rem',
    fontWeight: '300',
    margin: 0,
    letterSpacing: '0.3px'
  },
  footerHighlight: {
    color: '#6c5ce7',
    fontWeight: '500'
  },
  footerRight: {
    display: 'flex',
    gap: '20px'
  },
  footerLink: {
    color: '#b0aab8',
    textDecoration: 'none',
    fontSize: '0.8rem',
    fontWeight: '400',
    transition: 'color 0.3s',
    ':hover': { color: '#6c5ce7' }
  },
  footerSub: {
    textAlign: 'center',
    color: '#d5cedb',
    fontSize: '0.7rem',
    fontWeight: '300',
    margin: '12px 0 0'
  }
};

export default App;