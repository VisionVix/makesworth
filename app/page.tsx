import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Makesworth Accountants â Keep More. Grow Faster. Worry Less.',
  description: 'Professional accounting services to help you keep more of what you earn, grow your business faster, and worry less about finances.'
}

export default function HomePage() {
  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav className="nav">
        <div className="container">
          <div className="nav-inner">
            <Link href="/" className="nav-logo">
              <div className="icon">M</div>
              Makesworth
            </Link>
            <div className="nav-links">
              <Link href="/services">Services</Link>
              <Link href="/about">About</Link>
              <Link href="/resources">Resources</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/get-started" className="nav-cta">Get Started</Link>
            </div>
            <button className="mob-toggle">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-bg"></div>
        <canvas className="hero-particles"></canvas>
        
        {/* Floating shapes */}
        <div className="hero-shapes">
          <div className="hero-shape s1"></div>
          <div className="hero-shape s2 circle"></div>
          <div className="hero-shape s3"></div>
          <div className="hero-shape s4 circle"></div>
          <div className="hero-shape s5"></div>
          <div className="hero-shape s6"></div>
        </div>

        <div className="container">
          <div className="hero-content">
            <h1 className="hero-text-reveal">
              <span className="hero-text-line">Keep More.</span>
              <span className="hero-text-line">Grow <em>Faster</em>.</span>
              <span className="hero-text-line">Worry Less.</span>
            </h1>
            <p className="hero-fade d1">Professional accounting services designed for ambitious businesses. We handle the numbers so you can focus on what matters most â growing your empire.</p>
            <div className="hero-fade d2">
              <Link href="/get-started" className="btn-primary">Start Growing Today</Link>
              <Link href="/services" className="btn-outline">Our Services</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}