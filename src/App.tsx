import './App.css'

const services = [
  {
    number: '01',
    title: 'Grading',
    description:
      'Shape the site for building, access, and positive drainage with grading plans tailored to the project.',
  },
  {
    number: '02',
    title: 'Drainage',
    description:
      'Plan how stormwater moves across and away from your property with practical site drainage solutions.',
  },
  {
    number: '03',
    title: 'Site development',
    description:
      'Coordinate grading and drainage needs as part of a clear path from early planning toward construction.',
  },
]

function App() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Pier Engineering home">
          <span className="wordmark-icon" aria-hidden="true">
            <svg viewBox="0 0 40 40" fill="none">
              <path d="M4 30h32M7 25h8l5-8h8l5-7" />
              <path d="M26 10h7v7M7 34h26M12 25v5m16-8v8" />
            </svg>
          </span>
          <span className="wordmark-name">
            PIER<span>ENGINEERING</span>
          </span>
        </a>
        <span className="header-specialty">ARIZONA GRADING &amp; DRAINAGE</span>
        <a className="header-contact" href="#contact">
          Contact <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow"><span></span> ARIZONA CIVIL SITE WORK</p>
          <h1>Grading and drainage, planned for the ground beneath you.</h1>
          <p className="hero-description">
            Practical site solutions for Arizona projects, from shaping the
            land to managing stormwater.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              Talk about your project <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#services">
              See what we do <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero-note">
            <span className="note-line"></span>
            <span>Consult · Design · Construct</span>
          </div>
        </div>
        <div className="hero-visual" aria-label="Illustration of Arizona terrain with grading contours and stormwater drainage" role="img">
          <div className="visual-sun"></div>
          <div className="site-lines">
            <span></span><span></span><span></span><span></span><span></span>
          </div>
          <svg className="site-illustration" viewBox="0 0 700 460" fill="none" aria-hidden="true">
            <path className="ground-shadow" d="M0 278 145 250l78 27 102-77 95 26 93-70 187-37v281H0z" />
            <path className="ground-top" d="m0 267 145-28 78 27 102-77 95 26 93-70 187-37v74l-188 39-91 69-97-26-101 77-80-27L0 340z" />
            <path className="ground-cut" d="m0 340 143-28 80 27 101-77 97 26 91-69 188-39v186H0z" />
            <path className="grade-line" d="m33 259 114-22m-88 70 86-17m73-22 72-54m-43 107 68-51m62-55 76 21m-44 63 67-50m41-47 68-51" />
            <path className="drain-trench" d="m276 294 49-37 67 18-48 37z" />
            <path className="drain-pipe" d="m281 291 43-32 57 15-42 33z" />
            <path className="pipe-end" d="M339 307v25m20-30v25m-39-20v24" />
            <path className="swale" d="m471 220 28-20 42 10-29 22-24 4z" />
            <path className="contour-line" d="m28 287 119-23m79 28 94-71m100 24 93-70m-490 154 122-24m82 26 89-68m98 22 91-68m-402 142 123-24m82 25 82-63m102 21 94-69" />
            <path className="site-mark" d="M77 180v51m-13-38h26m-13-13-7 13m7-13 7 13M562 121v38m-10-28h20m-10-10-6 10m6-10 6 10" />
            <path className="terrain-mark" d="M50 378h93m-44 22h128m-74 21h111m187-34h105m-44 27h133" />
          </svg>
          <div className="visual-caption">
            <span>PIER ENGINEERING</span>
            <span>Land shaped with purpose</span>
          </div>
        </div>
        <div className="hero-index" aria-hidden="true">AZ — 01</div>
      </section>

      <section className="intro section-wrap" id="about">
        <p className="eyebrow">ABOUT PIER ENGINEERING</p>
        <div className="intro-copy">
          <h2>Start with the land. Get the details right.</h2>
          <div>
            <p>
              Every site has its own grades, drainage patterns, and challenges.
              Pier Engineering helps bring those pieces together with practical
              civil engineering focused on grading and drainage in Arizona.
            </p>
            <a className="text-link dark-link" href="#services">
              Explore our services <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <div className="stats">
          <div><strong>Consult</strong><span>Understand the site and the project goals</span></div>
          <div><strong>Design</strong><span>Plan grading and drainage together</span></div>
          <div><strong>Construct</strong><span>Move forward with clear project plans</span></div>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="section-wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">HOW WE CAN HELP</p>
              <h2>Site work starts<br />with a solid plan.</h2>
            </div>
            <p>
              A straightforward approach to the ground, water, and details
              that help a site work as intended.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <span className="service-number">{service.number}</span>
                <span className="service-arrow" aria-hidden="true">↗</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="project-callout" id="contact">
        <div>
          <p className="eyebrow">PIER ENGINEERING · ARIZONA</p>
          <h2>Have a site in mind?<br />Let’s talk.</h2>
        </div>
        <a className="button button-light" href="#contact-details">
          Get in touch <span aria-hidden="true">↗</span>
        </a>
        <span className="callout-mark" aria-hidden="true">PE.</span>
      </section>

      <footer className="site-footer">
        <a className="footer-brand" href="#home">PIER ENGINEERING</a>
        <span>Arizona grading &amp; drainage</span>
        <span id="contact-details">Add your business email or phone here</span>
        <span>© {new Date().getFullYear()} Pier Engineering</span>
      </footer>
    </main>
  )
}

export default App
