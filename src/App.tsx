function ArrowUpRight() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M5 15 15 5M7 5h8v8" />
    </svg>
  );
}

function LogoMark() {
  return (
    <svg viewBox="0 0 36 36" aria-hidden="true">
      <path d="M7 24.5 17.8 6 29 24.5" />
      <path d="M10.5 18.5h14.8" />
      <circle cx="28.5" cy="8" r="3.5" />
    </svg>
  );
}

export default function App() {
  return (
    <main>
      <nav aria-label="Primary navigation">
        <a className="brand" href="#" aria-label="Astera home">
          <span className="logo-mark"><LogoMark /></span>
          <span>Astera</span>
        </a>

        <div className="nav-links">
          <a href="#platform">Platform</a>
          <a href="#solutions">Solutions</a>
          <a href="#resources">Resources</a>
          <a href="#pricing">Pricing</a>
        </div>

        <div className="nav-actions">
          <a className="login" href="#login">Log in</a>
          <a className="nav-cta" href="#start">
            Start free
            <ArrowUpRight />
          </a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <div className="announcement">
            <span>New</span>
            The 2025 Startup Growth Report
            <ArrowUpRight />
          </div>

          <h1>
            Turn early traction
            <br />
            into <em>real momentum.</em>
          </h1>

          <p>
            One intelligent workspace to understand your customers, sharpen your
            strategy, and grow with confidence—without adding more complexity.
          </p>

          <div className="hero-actions">
            <a className="primary-cta" href="#start">
              Build your growth plan
              <ArrowUpRight />
            </a>
            <a className="secondary-cta" href="#demo">
              Watch 90-sec overview
            </a>
          </div>

          <div className="customer-proof">
            <div className="avatar-stack" aria-hidden="true">
              <span>AL</span><span>JM</span><span>SK</span><span>+</span>
            </div>
            <div>
              <div className="stars">★★★★★</div>
              <small>Loved by 2,000+ growing teams</small>
            </div>
          </div>
        </div>

        <div className="visual-wrap">
          <div className="visual-glow" />
          <div className="orbit orbit-one"><i /></div>
          <div className="orbit orbit-two"><i /></div>

          <div className="dashboard">
            <div className="dash-nav">
              <div className="mini-logo"><LogoMark /></div>
              <div className="dash-links">
                <span className="active" />
                <span />
                <span />
                <span />
              </div>
              <div className="profile">AK</div>
            </div>

            <div className="dash-content">
              <div className="dash-title">
                <div>
                  <small>Growth overview</small>
                  <strong>Good morning, Alex</strong>
                </div>
                <button aria-label="Change date range">Last 30 days⌄</button>
              </div>

              <div className="metrics">
                <div>
                  <small>Monthly revenue</small>
                  <strong>$148.2k</strong>
                  <span>↗ 24.8%</span>
                </div>
                <div>
                  <small>Active customers</small>
                  <strong>8,492</strong>
                  <span>↗ 18.1%</span>
                </div>
              </div>

              <div className="chart-card">
                <div className="chart-heading">
                  <span>Growth trajectory</span>
                  <div><i /> This year</div>
                </div>
                <div className="chart-area">
                  <div className="grid-lines"><i /><i /><i /><i /></div>
                  <svg viewBox="0 0 460 180" preserveAspectRatio="none" aria-hidden="true">
                    <defs>
                      <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#6855e8" stopOpacity=".25" />
                        <stop offset="1" stopColor="#6855e8" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path className="area" d="M0 154 C35 141,45 150,78 124 S130 134,164 104 S214 113,250 78 S310 92,350 49 S410 50,460 16 L460 180 L0 180Z" />
                    <path className="line" d="M0 154 C35 141,45 150,78 124 S130 134,164 104 S214 113,250 78 S310 92,350 49 S410 50,460 16" />
                    <circle cx="350" cy="49" r="6" />
                  </svg>
                  <div className="chart-tip"><small>Sep 18</small><strong>$132,840</strong></div>
                </div>
              </div>
            </div>
          </div>

          <div className="floating-card insight-card">
            <span className="spark">✦</span>
            <div><small>Astera insight</small><strong>Your activation is up 32%</strong></div>
          </div>

          <div className="floating-card goal-card">
            <div className="goal-ring"><span>78%</span></div>
            <div><small>Quarterly goal</small><strong>Right on track</strong></div>
          </div>
        </div>
      </section>

      <div className="logo-strip">
        <span>Trusted by teams at</span>
        <strong>Northstar</strong>
        <strong>loomly</strong>
        <strong>VANTAGE</strong>
        <strong>hearth</strong>
        <strong>Outline</strong>
      </div>
    </main>
  );
}
