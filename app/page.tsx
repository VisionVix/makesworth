import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Makesworth Accountants â Keep More. Grow Faster. Worry Less.",
  description: ""
};

export default function Home() {
  return (
    <div>
      {/* Navbar */}
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
              <Link href="/contact" className="nav-cta">Get Started</Link>
            </div>
            <button className="mob-toggle">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <canvas className="hero-particles"></canvas>
        <div className="hero-shapes">
          <div className="hero-shape s1"></div>
          <div className="hero-shape s2 circle"></div>
          <div className="hero-shape s3"></div>
          <div className="hero-shape s4"></div>
          <div className="hero-shape s5 circle"></div>
          <div className="hero-shape s6"></div>
        </div>
        
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-text-reveal">
              <span className="hero-text-line">Keep More.</span>
              <span className="hero-text-line">Grow <em>Faster</em>.</span>
              <span className="hero-text-line">Worry Less.</span>
            </h1>
            <p className="hero-fade d1">Expert accounting services designed for ambitious businesses who want to maximize profits, minimize taxes, and focus on what they do best.</p>
            <div className="hero-cta hero-fade d2">
              <Link href="/contact" className="btn-primary">Start Growing Today</Link>
              <Link href="/services" className="btn-secondary">Our Services</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}