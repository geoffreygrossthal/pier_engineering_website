import './App.css'
import arizonaImage from './arizona.jpg'
import engineerProfile from './UGProfilePic.jpg'

const services = [
  {
    number: '01',
    title: 'Civil Site Design',
    description:
      'Civil engineering for new home construction and land development. From initial site evaluation and layout to identifying development challenges, we help property owners, builders, and developers make informed decisions and move projects toward construction.',
  },
  {
    number: '02',
    title: 'Grading & Drainage',
    description:
      'Grading and drainage plans that establish building pads, finished elevations, slopes, and stormwater flow to support construction and manage site runoff.',
  },
  {
    number: '03',
    title: 'Surveying',
    description:
      'Surveying services to document property boundaries and existing site conditions, providing essential information for planning, engineering, and development.',
  },
]

function Arrow({ direction = 'up-right', className = '' }: { direction?: 'up-right' | 'down'; className?: string }) {
  return (
    <svg
      className={`arrow-icon arrow-${direction} ${className}`}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      {direction === 'down' ? (
        <path d="M8 2v12m0 0-4-4m4 4 4-4" />
      ) : (
        <path d="M3 13 13 3m0 0H5m8 0v8" />
      )}
    </svg>
  )
}

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
            PIERENGINEERING
          </span>
        </a>
        <span className="header-specialty">ARIZONA GRADING &amp; DRAINAGE</span>
        <nav className="header-nav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section
        className="photo-banner"
        id="home"
        style={{ backgroundImage: `url(${arizonaImage})` }}
        aria-label="Pier Engineering civil site design and Arizona landscape"
      >
        <div className="photo-banner-overlay">
          <p className="photo-banner-kicker">Arizona Civil Engineering</p>
          <h1>PIER ENGINEERING, LLC</h1>
          <p className="photo-banner-services">
            Civil Site Design <span aria-hidden="true">•</span> Grading <span aria-hidden="true">•</span> Drainage <span aria-hidden="true"></span>
          </p>
        </div>
      </section>

      <section className="hero">
        <div className="hero-content">
          <h1>
            <span className="headline-accent">Who we are</span>
          </h1>

          <p className="hero-description">
            Established in 2012, Pier Engineering provides licensed professional civil engineering services throughout Arizona. 
            We specialize in civil site design, grading and drainage plans for new home construction 
            and land development, along with professional surveying services.

            Combining more than 21 years of professional engineering experience with industry leading engineering software and technology, 
            we deliver thoughtful, precise, and practical design solutions. 
            Our approach emphasizes technical excellence, attention to detail, and 
            dependable service from initial planning through project completion.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="mailto:ug@pierengineering.com?subject=Inquiry%20-%20Civil%20Site">
              Talk about your project <Arrow />
            </a>
            <a className="text-link" href="#services">
              What we do <Arrow direction="down" />
            </a>
            <a className="text-link" href="#about">
              Leadership <Arrow direction="down" />
            </a>
            <a className="text-link" href="#contact">
              Contact <Arrow direction="down" />
            </a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Illustration of Arizona terrain with grading contours and stormwater drainage" role="img">
          <div className="site-lines">
            <span></span><span></span><span></span><span></span><span></span>
          </div>
          <svg className="site-illustration" viewBox="0 0 700 460" fill="none" aria-hidden="true">
            <defs>
              <pattern id="earth-hatch" width="9" height="9" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
                <path d="M0 0v9" className="hatch-line" />
              </pattern>
            </defs>
            <path className="contour-line" d="M-12 128c62-46 139-44 188-4 34 28 33 69-4 89-40 23-101 8-119-22-18-31 10-57 45-59 32-2 53 14 53 34M-24 108c72-59 169-58 228-11 48 38 46 93-4 122-52 30-130 13-153-28-23-40 14-75 59-77 45-2 76 23 72 54M481 94c44-33 109-37 151-5 35 27 29 64-7 81-35 16-81 6-93-18-10-20 8-37 30-38 24-1 39 11 36 26M464 73c57-44 141-48 195-8 51 38 43 89-6 112-50 23-115 9-132-25-16-31 13-59 50-61 37-2 62 18 58 47" />
            <path className="ground-shadow" d="M0 246c48-4 66-41 111-34 34 5 47 24 83 14 39-11 54-51 100-51h110c47 0 68-24 115-24 48 0 79 28 181 7v180H0z" />
            <path className="ground-top" d="M0 239c48-4 66-41 111-34 34 5 47 24 83 14 39-11 54-51 100-51h110c47 0 68-24 115-24 48 0 79 28 181 7v67c-77 11-116-2-169 10-49 12-68 34-125 34H315c-45 0-66 31-110 41-44 10-72-13-105-13-37 0-57 30-100 34z" />
            <path className="ground-cut" d="M0 307c43-4 63-34 100-34 33 0 61 23 105 13 44-10 65-41 110-41h91c57 0 76-22 125-34 53-12 92 1 169-10v119H0z" />
            <path className="earth-hatch-fill" d="M0 307c43-4 63-34 100-34 33 0 61 23 105 13 44-10 65-41 110-41h91c57 0 76-22 125-34 53-12 92 1 169-10v119H0z" />
            <path className="existing-grade" d="M0 232c48-4 66-41 111-34 34 5 47 24 83 14 39-11 54-51 100-51h110c47 0 68-24 115-24 48 0 79 28 181 7" />
            <path className="proposed-grade" d="M0 239c48-4 66-41 111-34 34 5 47 24 83 14 39-11 54-51 100-51h110c47 0 68-24 115-24 48 0 79 28 181 7" />
            <path className="drain-pipe" d="m88 322 257-70 168 0 86-23" />
            <path className="pipe-joint" d="m327 257 7 25m177-29 3 23" />
            <path className="inlet" d="M503 137v91h29v-96m-34 0h39m-34 8h29" />
            <path className="outfall" d="M592 229h19v18h-19z" />
            <path className="leader" d="m244 118-26 30h-67m260 69 34-43h51m54 11 45-37h45" />
            <path className="dimension" d="M73 167v63m-5-58h10m-10 53h10m480-88v46m-5-41h10m-10 36h10" />
            <path className="contour-index" d="M30 87h48m409 9h42" />
            <path className="terrain-mark" d="M43 355h78m18 0h36m313 0h84m12 0h38" />
            <text className="drawing-label" x="88" y="110">EXISTING GRADE</text>
            <text className="drawing-note" x="88" y="124">NATURAL TERRAIN</text>
            <text className="drawing-label drawing-accent" x="352" y="207">PROPOSED GRADE</text>
            <text className="drawing-label" x="545" y="120">AREA DRAIN</text>
            <text className="drawing-note" x="545" y="133">GRATE INLET</text>
            <text className="drawing-label" x="346" y="302">STORM DRAIN</text>
            <text className="drawing-note" x="346" y="315">SLOPED PIPE</text>
            <text className="spot-elevation" x="62" y="224">+0.00</text>
            <text className="spot-elevation" x="422" y="154">+2.50</text>
            <text className="spot-elevation" x="615" y="128">+1.20</text>
            <path className="north-arrow" d="m642 61 0 28m-6-20 6-8 6 8m-11 9h10" />
            <text className="drawing-label" x="633" y="52">N</text>
            <path className="scale-bar" d="M44 385h80m-80-5v10m40-8v6m40-8v10" />
            <text className="drawing-note" x="43" y="403">SITE SECTION · NTS</text>
          </svg>
          <div className="visual-caption">
            <span>CONCEPTUAL SITE SECTION</span>
            <span>GRADING · DRAINAGE · CIVIL</span>
          </div>
        </div>
        <div className="hero-index" aria-hidden="true">AZ — 01</div>
      </section>



      <section className="services-section" id="services">
        <div className="section-wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">WHAT WE DO</p>
              <h2>Site work starts<br />with a solid plan.</h2>
            </div>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <span className="service-number">{service.number}</span>
                <span className="service-arrow"><Arrow /></span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>


      <section className="intro engineer-intro section-wrap" id="about">
        <p className="eyebrow">EGINEERING LEADERSHIP</p>
        <div className="engineer-profile">
          <div className="engineer-photo-wrap">
            <img
              className="engineer-photo"
              src={engineerProfile}
              alt="Urmas Grossthal, Professional Engineer"
            />
          </div>
          <div className="engineer-copy">
            <h2>Experience you can build on.</h2>
            <p className="engineer-name">URMAS GROSSTHAL, PE</p>
            <p>
              Established in 2012, Pier Engineering provides practical civil
              engineering services throughout Arizona, including civil site
              design, grading, drainage, and professional surveying.
            </p>
            <p>
              As the firm's lead civil engineer, Urmas Grossthal brings 25 years
              of civil engineering experience and 21 years of experience as a
              licensed Professional Engineer to every project.
            </p>
            <a className="text-link dark-link" href="#services">
              Explore our services <Arrow direction="down" />
            </a>
          </div>
        </div>
      </section>

      <section className="project-callout" id="contact">
        <div>
          <p className="eyebrow">PIER ENGINEERING · ARIZONA</p>
          <h2>Have a site in mind?<br />Let’s talk.</h2>
        </div>
        <div className="callout-contact" aria-label="Contact Pier Engineering">
          <a href="tel:+16027893360">602-789-3360</a>
          <a href="mailto:ug@pierengineering.com">ug@pierengineering.com</a>
        </div>
        <span className="callout-mark" aria-hidden="true">PE.</span>
      </section>

      <footer className="site-footer">
        <a className="footer-brand" href="#home">PIER ENGINEERING</a>
        <span>Arizona Civil Engineering</span>
        <a href="mailto:ug@pierengineering.com">ug@pierengineering.com</a>
        <a href="tel:+16027893360">602-789-3360</a>
        <span>© {new Date().getFullYear()} Pier Engineering, LLC</span>
      </footer>
    </main>
  )
}

export default App
