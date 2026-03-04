import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Makesworth Accountants – Keep More. Grow Faster. Worry Less.",
  description: "We don't just do your accounts – we help you build a more profitable business, pay less tax, and get your weekends back."
}

export default function HomePage() {
  return (
    <>
      {/* NAV */}
      <nav className="nav" id="navbar">
        <div className="container">
          <div className="nav-inner">
            <Link href="/" className="nav-logo"><div className="icon">M</div><span>Makesworth</span></Link>
            <div className="nav-links">
              <a href="#about">About</a>
              <a href="#tools">Free Tools</a>
              <a href="#services">Services</a>
              <a href="#portal">Client Portal</a>
              <a href="#team">Team</a>
              <a href="#contact" className="nav-cta">Free Consultation</a>
            </div>
            <button className="mob-toggle" onClick={() => document.body.classList.toggle('menu-open')} aria-label="Menu"><span></span><span></span><span></span></button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-bg"></div>
        {/* Particle canvas */}
        <canvas className="hero-particles" id="heroParticles"></canvas>
        {/* Floating geometric shapes */}
        <div className="hero-shapes">
          <div className="hero-shape circle s1"></div>
          <div className="hero-shape s2"></div>
          <div className="hero-shape circle s3"></div>
          <div className="hero-shape s4"></div>
          <div className="hero-shape circle s5"></div>
          <div className="hero-shape s6"></div>
        </div>
        <div className="hero-content container">
          <div className="hero-grid">
            <div>
              <div className="hero-badge hero-fade d1"><span className="dot"></span>Chartered Accountants – Harrow & Milton Keynes</div>
              <h1>
                <span className="hero-text-reveal"><span className="hero-text-line">Keep More Money.</span></span>
                <span className="hero-text-reveal"><span className="hero-text-line">Grow <em>Faster.</em></span></span>
                <span className="hero-text-reveal"><span className="hero-text-line">Worry Less.</span></span>
              </h1>
              <p className="hero-sub hero-fade d2">We don't just do your accounts – we help you build a more profitable business, pay less tax, and get your weekends back.</p>
              <div className="hero-outcomes hero-fade d3">
                <div className="hero-outcome">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  Save avg. £4,200 in tax
                </div>
                <div className="hero-outcome">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  10+ hrs saved monthly
                </div>
                <div className="hero-outcome">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  100% MTD compliant
                </div>
              </div>
              <div className="hero-actions hero-fade d4">
                <a href="#contact" className="btn btn-gold">Book Free Consultation <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
                <a href="#tools" className="btn btn-outline-w">Try Free Tax Tools</a>
              </div>
            </div>
            <div className="hero-visual hero-fade d4">
              <div className="hero-card">
                <div className="hero-stats">
                  <div className="hero-stat"><span className="num" data-count="13">0</span><span className="lbl">Years of Excellence</span></div>
                  <div className="hero-stat"><span className="num" data-count="2500">0</span><span className="lbl">Clients Worldwide</span></div>
                  <div className="hero-divider"></div>
                  <div className="hero-stat"><span className="num" data-count="40">0</span><span className="lbl">Awards Earned</span></div>
                  <div className="hero-stat"><span className="num" data-count="98">0</span><span className="lbl">% Client Retention</span></div>
                </div>
                <div className="hero-trust"><p>Trusted Partners</p><div className="hero-trust-logos"><span>Xero</span><span>Dext</span><span>Barclays</span><span>Stripe</span></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOME STRIP */}
      <section className="outcome-strip">
        <div className="container">
          <div className="outcome-cards">
            <div className="outcome-card reveal">
              <div className="oc-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div>
              <div className="oc-num">£4,200+</div>
              <div className="oc-txt">Average annual tax savings per client</div>
            </div>
            <div className="outcome-card reveal" style={{transitionDelay:'.1s'}}>
              <div className="oc-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div>
              <div className="oc-num">10+ hrs</div>
              <div className="oc-txt">Monthly time saved on financial admin</div>
            </div>
            <div className="outcome-card reveal" style={{transitionDelay:'.2s'}}>
              <div className="oc-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg></div>
              <div className="oc-num">100%</div>
              <div className="oc-txt">HMRC compliant with zero penalties</div>
            </div>
          </div>
        </div>
      </section>

      {/* FREE TOOLS */}
      <section className="tools" id="tools">
        <div className="container">
          <div className="tools-header">
            <div className="s-label reveal">Free Financial Tools</div>
            <h2 className="s-title reveal" style={{transitionDelay:'.1s'}}>Calculate Your <em>Savings</em> Instantly</h2>
            <p className="s-desc reveal" style={{transitionDelay:'.15s'}}>Use our free tools to estimate your take-home pay, compare business structures, and check your VAT obligations – no signup needed.</p>
          </div>
          <div className="tools-tabs reveal" style={{transitionDelay:'.2s'}}>
            <button className="tool-tab active" onClick={() => switchTool('takehome',this)}>💰 Take-Home Pay</button>
            <button className="tool-tab" onClick={() => switchTool('compare',this)}>⚖️ Sole Trader vs Ltd</button>
            <button className="tool-tab" onClick={() => switchTool('vat',this)}>📋 VAT Checker</button>
            <button className="tool-tab" onClick={() => switchTool('dividend',this)}>💼 Dividend vs Salary</button>
          </div>

          {/* TAKE HOME PAY CALCULATOR */}
          <div className="tool-panel active" id="tool-takehome">
            <div className="tool-layout">
              <div className="tool-form">
                <h3>Take-Home Pay Calculator</h3>
                <p>Find out exactly how much you'll keep after tax and NI.</p>
                <div className="tf-group"><label>Annual Gross Salary (£)</label><input type="number" id="th-salary" defaultValue="45000" min="0" /></div>
                <div className="tf-row">
                  <div className="tf-group"><label>Tax Code</label><input type="text" id="th-taxcode" defaultValue="1257L" /></div>
                  <div className="tf-group"><label>Pension Contribution (%)</label><input type="number" id="th-pension" defaultValue="5" min="0" max="100" /></div>
                </div>
                <div className="tf-group"><label>Student Loan</label><select id="th-student"><option value="0">None</option><option value="1">Plan 1</option><option value="2">Plan 2</option><option value="4">Plan 4</option></select></div>
                <button className="tf-btn" onClick={() => calcTakeHome()}>Calculate Take-Home Pay</button>
              </div>
              <div className="tool-result" id="th-result">
                <h3>Your Results</h3>
                <div id="th-results-body">
                  <p style={{color:'var(--grey-400)',fontSize:'.9rem',textAlign:'center',padding:'30px 0'}}>Enter your details and click calculate to see your results.</p>
                </div>
              </div>
            </div>
          </div>

          {/* SOLE TRADER VS LTD COMPARISON */}
          <div className="tool-panel" id="tool-compare">
            <div className="compare-grid">
              <div className="compare-col sole">
                <h3>Sole Trader <span className="badge badge-blue">Simple</span></h3>
                <p>Best for freelancers earning under £50k</p>
                <div className="compare-item pro"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7"/></svg><span>Simple setup – register with HMRC for free</span></div>
                <div className="compare-item pro"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7"/></svg><span>Less paperwork and reporting requirements</span></div>
                <div className="compare-item pro"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7"/></svg><span>Keep all profits after tax</span></div>
                <div className="compare-item pro"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7"/></svg><span>Full privacy – no public accounts filing</span></div>
                <div className="compare-item con"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 18L18 6M6 6l12 12"/></svg><span>Unlimited personal liability for debts</span></div>
                <div className="compare-item con"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 18L18 6M6 6l12 12"/></svg><span>Higher tax rates above £50,270 (40%)</span></div>
                <div className="compare-item con"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 18L18 6M6 6l12 12"/></svg><span>Less tax-efficient for higher earnings</span></div>
              </div>
              <div className="compare-col ltd">
                <h3>Limited Company <span className="badge badge-gold">Tax Efficient</span></h3>
                <p>Best for contractors & businesses earning £50k+</p>
                <div className="compare-item pro"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7"/></svg><span>Limited liability – personal assets protected</span></div>
                <div className="compare-item pro"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7"/></svg><span>Corporation Tax at 19-25% (lower than income tax)</span></div>
                <div className="compare-item pro"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7"/></svg><span>Tax-efficient salary + dividend strategy</span></div>
                <div className="compare-item pro"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7"/></svg><span>More credible to larger clients & contracts</span></div>
                <div className="compare-item con"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 18L18 6M6 6l12 12"/></svg><span>More admin – annual accounts & confirmation statement</span></div>
                <div className="compare-item con"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 18L18 6M6 6l12 12"/></svg><span>Public filing – accounts visible on Companies House</span></div>
                <div className="compare-item con"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 18L18 6M6 6l12 12"/></svg><span>Director responsibilities under company law</span></div>
              </div>
              <div className="compare-verdict">
                <p>Not sure which is right for you? <strong>Most contractors earning over £50k save £3,000–£8,000/year</strong> with a limited company. Let us run the numbers for your specific situation.</p>
                <a href="#contact" className="btn btn-gold" style={{marginTop:'8px'}}>Get Free Personalised Advice <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
              </div>
            </div>
          </div>

          {/* VAT CHECKER */}
          <div className="tool-panel" id="tool-vat">
            <div className="tool-layout">
              <div className="tool-form">
                <h3>VAT Registration Checker</h3>
                <p>Check if you need to register for VAT and which scheme suits you.</p>
                <div className="tf-group"><label>Annual Turnover (£)</label><input type="number" id="vat-turnover" defaultValue="75000" min="0" /></div>
                <div className="tf-group"><label>Annual Expenses (£)</label><input type="number" id="vat-expenses" defaultValue="15000" min="0" /></div>
                <div className="tf-group"><label>Business Type</label><select id="vat-type"><option value="services">Services</option><option value="goods">Goods / Retail</option><option value="mixed">Mixed</option></select></div>
                <button className="tf-btn" onClick={() => calcVAT()}>Check VAT Status</button>
              </div>
              <div className="tool-result" id="vat-result">
                <h3>Your VAT Status</h3>
                <div id="vat-results-body"><p style={{color:'var(--grey-400)',fontSize:'.9rem',textAlign:'center',padding:'30px 0'}}>Enter your turnover to check your VAT obligations.</p></div>
              </div>
            </div>
          </div>

          {/* DIVIDEND VS SALARY */}
          <div className="tool-panel" id="tool-dividend">
            <div className="tool-layout">
              <div className="tool-form">
                <h3>Dividend vs Salary Optimiser</h3>
                <p>Find the most tax-efficient way to pay yourself from your limited company.</p>
                <div className="tf-group"><label>Company Profit Before Salary (£)</label><input type="number" id="div-profit" defaultValue="80000" min="0" /></div>
                <div className="tf-group"><label>Other Income (£)</label><input type="number" id="div-other" defaultValue="0" min="0" /></div>
                <button className="tf-btn" onClick={() => calcDividend()}>Optimise My Pay</button>
              </div>
              <div className="tool-result" id="div-result">
                <h3>Optimal Strategy</h3>
                <div id="div-results-body"><p style={{color:'var(--grey-400)',fontSize:'.9rem',textAlign:'center',padding:'30px 0'}}>Enter your company profit to see the most tax-efficient strategy.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADVISORY */}
      <section className="advisory" id="about">
        <div className="container">
          <div className="advisory-grid">
            <div className="advisory-visual reveal-l">
              <Image src="/images/advisory.jpg" alt="Advisory" className="advisory-img" width={800} height={600} />
              <div className="advisory-float">
                <div className="advisory-float-stat">80%</div>
                <p>of clients now demand advisory services beyond compliance</p>
              </div>
            </div>
            <div className="advisory-text reveal-r">
              <div className="s-label">More Than Accountants</div>
              <h2 className="s-title">We Don't Just Do Your Books.<br />We Help You <em>Grow.</em></h2>
              <p className="s-desc">The accounting industry has changed. You don't need someone who just files your returns – you need a strategic partner who proactively finds savings, spots opportunities, and helps your business scale.</p>
              <div className="adv-cards">
                <div className="adv-card">
                  <div className="adv-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg></div>
                  <div><h4>Proactive Tax Planning</h4><p>We don't wait until year-end. Quarterly reviews to minimise your tax bill legally.</p></div>
                </div>
                <div className="adv-card">
                  <div className="adv-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg></div>
                  <div><h4>Business Growth Strategy</h4><p>Cash flow forecasting, funding support, and actionable insights to scale.</p></div>
                </div>
                <div className="adv-card">
                  <div className="adv-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg></div>
                  <div><h4>Cloud-First Technology</h4><p>Real-time dashboards via Xero, Dext & automated workflows. See your numbers anytime.</p></div>
                </div>
              </div>
              <a href="#contact" className="btn btn-navy">Let's Talk Strategy <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT PORTAL */}
      <section className="portal" id="portal">
        <div className="container">
          <div className="portal-grid">
            <div className="portal-text reveal-l">
              <div className="s-label">Client Portal</div>
              <h2 className="s-title">Your Finances, <em>At Your Fingertips</em></h2>
              <p className="s-desc">No more email chains, lost documents, or wondering where things stand. Your own secure, branded portal to manage everything in one place.</p>
              <div className="portal-features">
                <div className="portal-feat"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>Upload documents securely – no more email attachments</div>
                <div className="portal-feat"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>Track your tax return status in real time</div>
                <div className="portal-feat"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>See all deadlines and never miss a filing date</div>
                <div className="portal-feat"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>Message your accountant directly – responses within 4 hrs</div>
                <div className="portal-feat"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>E-sign documents without printing a single page</div>
              </div>
              <a href="#contact" className="btn btn-gold">Get Portal Access <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            </div>
            <div className="portal-mockup reveal-r">
              <div className="portal-mock-header">
                <h4>📊 Makesworth Portal</h4>
                <div className="status">✅ All systems live</div>
              </div>
              <div className="portal-mock-items">
                <div className="portal-mock-item">
                  <div className="pmi-left">
                    <div className="pmi-icon doc"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg></div>
                    <div className="pmi-info"><h5>Year-End Accounts 2024/25</h5><span>Updated 2 days ago</span></div>
                  </div>
                  <div className="pmi-status done">✓ Complete</div>
                </div>
                <div className="portal-mock-item">
                  <div className="pmi-left">
                    <div className="pmi-icon tax"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg></div>
                    <div className="pmi-info"><h5>Self Assessment Tax Return</h5><span>Due: 31 Jan 2026</span></div>
                  </div>
                  <div className="pmi-status pending">⏳ In Progress</div>
                </div>
                <div className="portal-mock-item">
                  <div className="pmi-left">
                    <div className="pmi-icon pay"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1"/></svg></div>
                    <div className="pmi-info"><h5>VAT Return Q3</h5><span>Submitted 12 Feb 2026</span></div>
                  </div>
                  <div className="pmi-status done">✓ Filed</div>
                </div>
                <div className="portal-mock-item">
                  <div className="pmi-left">
                    <div className="pmi-icon doc"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg></div>
                    <div className="pmi-info"><h5>Engagement Letter</h5><span>Awaiting your signature</span></div>
                  </div>
                  <div className="pmi-status review">✍️ Sign Now</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="container">
          <div className="services-header">
            <div><div className="s-label reveal">What We Do</div><h2 className="s-title reveal" style={{transitionDelay:'.1s'}}>Expert Solutions for<br /><em>Every Financial Need</em></h2></div>
            <a href="https://mw.makesworth.uk/services/" className="btn btn-navy reveal" style={{transitionDelay:'.2s'}}>All Services <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
          </div>
          <div className="services-grid">
            <div className="svc-card reveal"><div className="svc-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2