import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Makesworth Accountants â Keep More. Grow Faster. Worry Less.",
  description: "We don't just do your accounts â we help you build a more profitable business, pay less tax, and get your weekends back."
}

export default function Page() {
  return (
    <>
      <style jsx global>{`
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
:root{
  --navy:#0B1D3A;--navy-deep:#061325;--navy-light:#132D52;--navy-mid:#1A2E4C;
  --gold:#C8963E;--gold-light:#E8C88A;--gold-pale:#F5E6C8;
  --cream:#FAF7F2;--white:#FFFFFF;
  --grey-50:#FAFAFA;--grey-100:#F5F5F5;--grey-200:#E8E8E8;--grey-300:#D1D1D1;
  --grey-400:#999;--grey-600:#666;--grey-800:#333;
  --green:#2E7D5B;--green-light:#E8F5EE;--red:#C0392B;--red-light:#FDECEA;
  --blue:#2563EB;--blue-light:#EFF6FF;
  --font-display:'DM Serif Display',Georgia,serif;
  --font-body:'Outfit',sans-serif;
  --transition:0.4s cubic-bezier(.25,.46,.45,.94);
  --shadow-sm:0 2px 8px rgba(0,0,0,0.06);
  --shadow-md:0 8px 30px rgba(0,0,0,0.08);
  --shadow-lg:0 20px 50px rgba(0,0,0,0.12);
  --radius:12px;
}
html{scroll-behavior:smooth;font-size:16px}
body{font-family:var(--font-body);color:var(--grey-800);background:var(--white);overflow-x:hidden;-webkit-font-smoothing:antialiased}
a{text-decoration:none;color:inherit;transition:var(--transition)}
img{max-width:100%;display:block}
ul{list-style:none}
h1,h2,h3,h4{font-family:var(--font-display);font-weight:400}
.container{max-width:1240px;margin:0 auto;padding:0 24px}

/* Animations */
.reveal{opacity:0;transform:translateY(30px);transition:opacity .7s ease,transform .7s ease}
.reveal.vis{opacity:1;transform:translateY(0)}
.reveal-l{opacity:0;transform:translateX(-40px);transition:opacity .7s ease,transform .7s ease}
.reveal-l.vis{opacity:1;transform:translateX(0)}
.reveal-r{opacity:0;transform:translateX(40px);transition:opacity .7s ease,transform .7s ease}
.reveal-r.vis{opacity:1;transform:translateX(0)}

/* ===== NAVBAR ===== */
.nav{position:fixed;top:0;left:0;right:0;z-index:1000;transition:var(--transition)}
.nav.scrolled{background:rgba(11,29,58,.97);backdrop-filter:blur(20px);box-shadow:0 4px 30px rgba(0,0,0,.15)}
.nav-inner{display:flex;justify-content:space-between;align-items:center;padding:18px 0}
.nav-logo{display:flex;align-items:center;gap:10px;color:var(--white);font-family:var(--font-display);font-size:1.4rem}
.nav-logo .icon{width:40px;height:40px;background:var(--gold);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:1.1rem;font-weight:700}
.nav-links{display:flex;gap:28px;align-items:center}
.nav-links a{color:rgba(255,255,255,.75);font-size:.88rem;font-weight:400}
.nav-links a:hover{color:var(--white)}
.nav-cta{background:var(--gold)!important;color:var(--white)!important;padding:11px 26px!important;border-radius:6px;font-weight:600!important}
.nav-cta:hover{background:var(--gold-light)!important}
.mob-toggle{display:none;background:none;border:none;cursor:pointer;flex-direction:column;gap:5px}
.mob-toggle span{display:block;width:24px;height:2px;background:var(--white)}

/* ===== HERO ===== */
.hero{position:relative;min-height:100vh;display:flex;align-items:center;background:var(--navy-deep);overflow:hidden}
.hero-bg{position:absolute;inset:0;background:url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80') center/cover}
.hero-bg::after{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(6,19,37,.93),rgba(11,29,58,.82) 50%,rgba(6,19,37,.9))}

/* Particle canvas */
.hero-particles{position:absolute;inset:0;z-index:1;pointer-events:none}

/* Floating geometric shapes */
.hero-shapes{position:absolute;inset:0;z-index:1;pointer-events:none;overflow:hidden}
.hero-shape{position:absolute;border:1px solid rgba(200,150,62,.08);border-radius:4px;animation:shapeFloat 12s ease-in-out infinite}
.hero-shape.circle{border-radius:50%}
.hero-shape.s1{width:80px;height:80px;top:15%;left:8%;animation-delay:0s;border-color:rgba(200,150,62,.06)}
.hero-shape.s2{width:120px;height:120px;top:60%;right:5%;animation-delay:2s;border-color:rgba(46,125,91,.06)}
.hero-shape.s3{width:50px;height:50px;top:30%;right:15%;animation-delay:4s}
.hero-shape.s4{width:180px;height:180px;bottom:10%;left:15%;animation-delay:6s;border-color:rgba(46,125,91,.04)}
.hero-shape.s5{width:40px;height:40px;top:20%;right:30%;animation-delay:3s;border-color:rgba(200,150,62,.1)}
.hero-shape.s6{width:90px;height:90px;bottom:25%;right:25%;animation-delay:5s;border-color:rgba(200,150,62,.05)}
@keyframes shapeFloat{
  0%,100%{transform:rotate(0deg) translateY(0) scale(1);opacity:.4}
  25%{transform:rotate(45deg) translateY(-20px) scale(1.1);opacity:.6}
  50%{transform:rotate(90deg) translateY(10px) scale(.95);opacity:.5}
  75%{transform:rotate(135deg) translateY(-15px) scale(1.05);opacity:.7}
}

/* Animated text reveal */
.hero-text-reveal{overflow:hidden;display:block}
.hero-text-line{display:block;transform:translateY(110%);animation:textLineReveal .9s cubic-bezier(.16,1,.3,1) forwards}
.hero-text-line:nth-child(2){animation-delay:.15s}
.hero-text-line:nth-child(3){animation-delay:.3s}
@keyframes textLineReveal{0%{transform:translateY(110%) skewY(4deg);opacity:0}100%{transform:translateY(0) skewY(0);opacity:1}}

/* Shimmer on em text */
.hero h1 em{background:linear-gradient(90deg,var(--gold),var(--gold-light),var(--gold));background-size:200% 100%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:goldShimmer 3s ease-in-out infinite}
@keyframes goldShimmer{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}

/* Staggered fade-up for hero sub-elements */
.hero-fade{opacity:0;transform:translateY(20px);animation:heroFadeUp .7s ease forwards}
.hero-fade.d1{animation-delay:.5s}
.hero-fade.d2{animation-delay:.65s}
.hero-fade.d3{animation-delay:.8s}
.hero-fade.d4{animation-delay:.95s}
@keyframes heroFadeUp{to{opacity:1;transform:translateY(0)}}
.hero-content{position:relative;z-index:2;padding:140px 0 100px}
.hero-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:60px;align-items:center}
.hero-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(200,150,62,.12);border:1px solid rgba(200,150,62,.25);padding:8px 18px;border-radius:100px;color:var(--gold-light);font-size:.78rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;margin-bottom:24px}
.hero-badge .dot{width:6px;height:6px;background:var(--gold);border-radius:50%;animation:pulse 2s ease infinite}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.3}}
.hero h1{font-size:clamp(2.6rem,4.8vw,3.8rem);color:var(--white);line-height:1.1;margin-bottom:20px;letter-spacing:-.02em}
.hero h1 em{font-style:italic;color:var(--gold)}
.hero-sub{font-size:1.15rem;color:rgba(255,255,255,.55);line-height:1.7;max-width:520px;margin-bottom:16px;font-weight:300}
.hero-outcomes{display:flex;gap:24px;margin-bottom:36px;flex-wrap:wrap}
.hero-outcome{display:flex;align-items:center;gap:8px;color:var(--gold-light);font-size:.9rem;font-weight:500}
.hero-outcome svg{width:18px;height:18px;color:var(--gold);flex-shrink:0}
.hero-actions{display:flex;gap:14px;flex-wrap:wrap}
.btn{display:inline-flex;align-items:center;gap:10px;padding:15px 32px;border-radius:8px;font-weight:600;font-size:.92rem;font-family:var(--font-body);border:none;cursor:pointer;transition:var(--transition);letter-spacing:.01em}
.btn-gold{background:var(--gold);color:var(--white)}
.btn-gold:hover{background:var(--gold-light);transform:translateY(-2px);box-shadow:0 10px 30px rgba(200,150,62,.3)}
.btn-outline-w{background:transparent;color:var(--white);border:1px solid rgba(255,255,255,.2)}
.btn-outline-w:hover{border-color:var(--gold);color:var(--gold)}
.btn-navy{background:var(--navy);color:var(--white)}
.btn-navy:hover{background:var(--navy-light);transform:translateY(-2px)}
.btn svg{width:16px;height:16px;transition:var(--transition)}
.btn:hover svg{transform:translateX(3px)}

.hero-card{background:rgba(255,255,255,.05);backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,.08);border-radius:20px;padding:36px;position:relative;overflow:hidden}
.hero-card::before{content:'';position:absolute;top:-50%;right:-50%;width:200%;height:200%;background:radial-gradient(circle at 30% 30%,rgba(200,150,62,.06),transparent 60%)}
.hero-stats{display:grid;grid-template-columns:1fr 1fr;gap:28px;position:relative;z-index:1}
.hero-stat{text-align:center}
.hero-stat .num{font-family:var(--font-display);font-size:2.8rem;color:var(--gold);display:block;line-height:1;margin-bottom:6px}
.hero-stat .lbl{font-size:.82rem;color:rgba(255,255,255,.45);font-weight:400}
.hero-divider{grid-column:1/-1;height:1px;background:rgba(255,255,255,.07)}
.hero-trust{margin-top:28px;padding-top:20px;border-top:1px solid rgba(255,255,255,.07);text-align:center}
.hero-trust p{font-size:.72rem;color:rgba(255,255,255,.3);text-transform:uppercase;letter-spacing:.1em;margin-bottom:12px}
.hero-trust-logos{display:flex;gap:20px;justify-content:center;align-items:center;opacity:.35}
.hero-trust-logos span{font-family:var(--font-display);font-size:.95rem;color:var(--white)}

/* ===== SECTION HELPERS ===== */
.s-label{display:inline-flex;align-items:center;gap:8px;font-size:.76rem;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:var(--gold);margin-bottom:14px}
.s-label::before{content:'';width:20px;height:2px;background:var(--gold)}
.s-title{font-size:clamp(1.9rem,3.2vw,2.8rem);line-height:1.15;letter-spacing:-.02em;color:var(--navy)}
.s-title em{font-style:italic;color:var(--gold)}
.s-desc{font-size:1rem;color:var(--grey-600);line-height:1.7;font-weight:300;max-width:540px}

/* ===== OUTCOME STRIP ===== */
.outcome-strip{padding:0;background:var(--white);position:relative;z-index:2;margin-top:-50px}
.outcome-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:0;background:var(--white);border-radius:16px;box-shadow:var(--shadow-lg);overflow:hidden}
.outcome-card{padding:36px 32px;text-align:center;position:relative;transition:var(--transition)}
.outcome-card:not(:last-child)::after{content:'';position:absolute;right:0;top:20%;height:60%;width:1px;background:var(--grey-200)}
.outcome-card:hover{background:var(--navy)}
.outcome-card:hover .oc-num,.outcome-card:hover .oc-txt{color:var(--white)}
.outcome-card:hover .oc-icon{background:var(--gold)}
.outcome-card:hover .oc-icon svg{color:var(--white)}
.oc-icon{width:52px;height:52px;border-radius:12px;background:var(--gold-pale);display:flex;align-items:center;justify-content:center;margin:0 auto 16px;transition:var(--transition)}
.oc-icon svg{width:24px;height:24px;color:var(--gold);transition:var(--transition)}
.oc-num{font-family:var(--font-display);font-size:1.8rem;color:var(--navy);margin-bottom:4px;transition:var(--transition)}
.oc-txt{font-size:.88rem;color:var(--grey-600);font-weight:400;transition:var(--transition)}

/* ===== TOOLS SECTION ===== */
.tools{padding:100px 0;background:var(--cream);position:relative;overflow:hidden}
.tools::before{content:'';position:absolute;top:0;right:0;width:400px;height:400px;background:radial-gradient(circle,rgba(200,150,62,.05),transparent 70%)}
.tools-header{text-align:center;margin-bottom:50px}
.tools-header .s-desc{margin:14px auto 0}
.tools-tabs{display:flex;justify-content:center;gap:8px;margin-bottom:40px;flex-wrap:wrap}
.tool-tab{padding:10px 22px;border-radius:100px;background:var(--white);border:1px solid var(--grey-200);font-size:.88rem;font-weight:500;cursor:pointer;transition:var(--transition);font-family:var(--font-body);color:var(--grey-600)}
.tool-tab.active{background:var(--navy);color:var(--white);border-color:var(--navy)}
.tool-tab:hover:not(.active){border-color:var(--gold);color:var(--gold)}
.tool-panel{display:none;animation:fadeUp .4s ease}
.tool-panel.active{display:block}
@keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
.tool-layout{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:start}
.tool-form{background:var(--white);border-radius:16px;padding:36px;box-shadow:var(--shadow-md)}
.tool-form h3{font-size:1.4rem;color:var(--navy);margin-bottom:6px}
.tool-form>p{font-size:.88rem;color:var(--grey-400);margin-bottom:24px}
.tf-group{margin-bottom:18px}
.tf-group label{display:block;font-size:.82rem;font-weight:600;color:var(--grey-800);margin-bottom:6px;letter-spacing:.02em}
.tf-group input,.tf-group select{width:100%;padding:13px 16px;border:1px solid var(--grey-200);border-radius:8px;font-size:.95rem;font-family:var(--font-body);transition:var(--transition);outline:none;background:var(--white)}
.tf-group input:focus,.tf-group select:focus{border-color:var(--gold);box-shadow:0 0 0 3px rgba(200,150,62,.1)}
.tf-row{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.tf-btn{width:100%;padding:15px;background:var(--gold);color:var(--white);border:none;border-radius:8px;font-size:.95rem;font-weight:700;font-family:var(--font-body);cursor:pointer;transition:var(--transition);margin-top:8px}
.tf-btn:hover{background:var(--gold-light);transform:translateY(-1px)}

.tool-result{background:var(--white);border-radius:16px;padding:36px;box-shadow:var(--shadow-md);position:relative;overflow:hidden}
.tool-result::before{content:'';position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,var(--gold),var(--gold-light))}
.tool-result h3{font-size:1.3rem;color:var(--navy);margin-bottom:20px}
.result-row{display:flex;justify-content:space-between;align-items:center;padding:14px 0;border-bottom:1px solid var(--grey-100)}
.result-row:last-child{border-bottom:none}
.result-row .rr-label{font-size:.9rem;color:var(--grey-600)}
.result-row .rr-value{font-size:1rem;font-weight:700;color:var(--navy)}
.result-row.highlight{background:var(--green-light);margin:0 -36px;padding:14px 36px;border-bottom:none}
.result-row.highlight .rr-value{color:var(--green);font-size:1.15rem}
.result-row.total{margin-top:8px;padding-top:18px;border-top:2px solid var(--navy)}
.result-row.total .rr-value{font-size:1.3rem;color:var(--gold);font-family:var(--font-display)}
.result-cta{margin-top:24px;padding:20px;background:var(--navy);border-radius:12px;text-align:center}
.result-cta p{color:rgba(255,255,255,.7);font-size:.88rem;margin-bottom:12px}
.result-cta .btn{padding:12px 28px;font-size:.88rem}

/* Comparison tool */
.compare-grid{display:grid;grid-template-columns:1fr 1fr;gap:0;background:var(--white);border-radius:16px;overflow:hidden;box-shadow:var(--shadow-md)}
.compare-col{padding:36px}
.compare-col.sole{border-right:1px solid var(--grey-200)}
.compare-col h3{font-size:1.2rem;color:var(--navy);margin-bottom:6px;display:flex;align-items:center;gap:8px}
.compare-col h3 .badge{font-size:.65rem;padding:3px 8px;border-radius:4px;font-family:var(--font-body);font-weight:700;text-transform:uppercase;letter-spacing:.05em}
.badge-blue{background:var(--blue-light);color:var(--blue)}
.badge-gold{background:var(--gold-pale);color:var(--gold)}
.compare-col>p{font-size:.85rem;color:var(--grey-400);margin-bottom:20px}
.compare-item{display:flex;gap:10px;align-items:flex-start;margin-bottom:14px}
.compare-item svg{width:18px;height:18px;flex-shrink:0;margin-top:2px}
.compare-item.pro svg{color:var(--green)}
.compare-item.con svg{color:var(--red)}
.compare-item span{font-size:.88rem;color:var(--grey-600);line-height:1.5}
.compare-verdict{grid-column:1/-1;padding:28px 36px;background:var(--navy);text-align:center}
.compare-verdict p{color:rgba(255,255,255,.7);font-size:.95rem;margin-bottom:14px}
.compare-verdict strong{color:var(--gold)}

/* ===== ADVISORY SECTION ===== */
.advisory{padding:100px 0;background:var(--white)}
.advisory-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center}
.advisory-visual{position:relative}
.advisory-img{width:100%;height:480px;object-fit:cover;border-radius:16px;box-shadow:var(--shadow-lg)}
.advisory-float{position:absolute;bottom:-24px;right:-24px;background:var(--white);border-radius:14px;padding:24px;box-shadow:var(--shadow-lg);max-width:260px}
.advisory-float-stat{font-family:var(--font-display);font-size:2.4rem;color:var(--gold);line-height:1}
.advisory-float p{font-size:.85rem;color:var(--grey-600);margin-top:4px}
.advisory-text .s-title{margin-bottom:16px}
.advisory-text .s-desc{margin-bottom:32px}
.adv-cards{display:flex;flex-direction:column;gap:16px;margin-bottom:32px}
.adv-card{display:flex;gap:16px;align-items:flex-start;padding:20px;border-radius:12px;background:var(--grey-50);transition:var(--transition)}
.adv-card:hover{background:var(--cream)}
.adv-card-icon{width:44px;height:44px;min-width:44px;border-radius:10px;background:var(--gold-pale);display:flex;align-items:center;justify-content:center}
.adv-card-icon svg{width:20px;height:20px;color:var(--gold)}
.adv-card h4{font-size:1rem;color:var(--navy);margin-bottom:3px}
.adv-card p{font-size:.85rem;color:var(--grey-600);line-height:1.5;font-weight:300}

/* ===== CLIENT PORTAL ===== */
.portal{padding:100px 0;background:var(--navy-deep);position:relative;overflow:hidden}
.portal::before{content:'';position:absolute;top:-200px;right:-200px;width:600px;height:600px;background:radial-gradient(circle,rgba(200,150,62,.04),transparent 70%)}
.portal-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;position:relative;z-index:1}
.portal-text .s-label{color:var(--gold-light)}
.portal-text .s-title{color:var(--white)}
.portal-text .s-title em{color:var(--gold)}
.portal-text .s-desc{color:rgba(255,255,255,.5);margin:16px 0 32px}
.portal-features{display:flex;flex-direction:column;gap:14px;margin-bottom:36px}
.portal-feat{display:flex;align-items:center;gap:12px;color:rgba(255,255,255,.7);font-size:.92rem}
.portal-feat svg{width:20px;height:20px;color:var(--gold);flex-shrink:0}
.portal-mockup{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:24px;position:relative}
.portal-mock-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;padding-bottom:16px;border-bottom:1px solid rgba(255,255,255,.06)}
.portal-mock-header h4{color:var(--white);font-size:1rem}
.portal-mock-header .status{font-size:.75rem;padding:4px 12px;border-radius:100px;background:rgba(46,125,91,.15);color:#4ADE80;font-weight:600}
.portal-mock-items{display:flex;flex-direction:column;gap:10px}
.portal-mock-item{display:flex;align-items:center;justify-content:space-between;padding:14px 16px;background:rgba(255,255,255,.03);border-radius:10px;border:1px solid rgba(255,255,255,.05)}
.pmi-left{display:flex;align-items:center;gap:12px}
.pmi-icon{width:36px;height:36px;border-radius:8px;display:flex;align-items:center;justify-content:center}
.pmi-icon.doc{background:rgba(37,99,235,.15)}
.pmi-icon.doc svg{color:#60A5FA}
.pmi-icon.tax{background:rgba(200,150,62,.15)}
.pmi-icon.tax svg{color:var(--gold)}
.pmi-icon.pay{background:rgba(46,125,91,.15)}
.pmi-icon.pay svg{color:#4ADE80}
.pmi-icon svg{width:18px;height:18px}
.pmi-info h5{color:var(--white);font-size:.88rem;font-family:var(--font-body);font-weight:500}
.pmi-info span{font-size:.75rem;color:rgba(255,255,255,.35)}
.pmi-status{font-size:.72rem;padding:4px 10px;border-radius:100px;font-weight:600}
.pmi-status.done{background:rgba(46,125,91,.12);color:#4ADE80}
.pmi-status.pending{background:rgba(200,150,62,.12);color:var(--gold-light)}
.pmi-status.review{background:rgba(37,99,235,.12);color:#60A5FA}

/* ===== SERVICES ===== */
.services{padding:100px 0;background:var(--cream)}
.services-header{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:50px;gap:30px}
.services-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
.svc-card{background:var(--white);border-radius:14px;padding:32px 24px;position:relative;overflow:hidden;transition:var(--transition);border:1px solid transparent;cursor:pointer}
.svc-card:hover{transform:translateY(-6px);box-shadow:var(--shadow-md);border-color:rgba(200,150,62,.2)}
.svc-card-icon{width:50px;height:50px;border-radius:10px;background:linear-gradient(135deg,var(--gold),var(--gold-light));display:flex;align-items:center;justify-content:center;margin-bottom:20px;transition:var(--transition)}
.svc-card:hover .svc-card-icon{transform:scale(1.08) rotate(-3deg)}
.svc-card-icon svg{width:24px;height:24px;color:var(--white)}
.svc-card h3{font-size:1.1rem;color:var(--navy);margin-bottom:8px;line-height:1.3}
.svc-card p{font-size:.84rem;color:var(--grey-600);line-height:1.6;font-weight:300;margin-bottom:18px}
.svc-link{display:inline-flex;