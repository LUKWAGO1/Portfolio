import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowUpRight, Mail, MapPin, Code2, Layers3, Database, Terminal, Menu, X, MessageCircle } from 'lucide-react';
import profilePhoto from '../hhb.jpeg';
import './styles.css';
import './project-previews.css';

const projects = [
  {
    number: '01',
    name: 'SkyBooker',
    type: 'Airline reservation platform',
    description: 'A reservation experience focused on flight discovery, seat selection, and secure booking flows. Includes a responsive seat map and a timed seat-hold concept.',
    stack: ['Next.js', 'Authentication', 'React', 'Seat selection'],
    mark: 'SB',
    liveUrl: 'https://sky-booker-nine.vercel.app/'
  },
  {
    number: '02',
    name: 'MovieGallery',
    type: 'Movie & TV discovery app',
    description: 'A dark, minimal discovery experience designed to make finding movies and television recommendations easier, with movie-data API integrations.',
    stack: ['JavaScript', 'Vite', 'TMDb API', 'OMDb API'],
    mark: 'MG',
    liveUrl: 'https://moviegallery-app.netlify.app/'
  },
  {
    number: '03',
    name: 'Library Database API',
    type: 'Backend API',
    description: 'A REST API project for managing library data, with documented endpoints and authentication workflow practice.',
    stack: ['Node.js', 'Express', 'Database', 'Swagger'],
    mark: 'API',
    liveUrl: 'https://bookflow-api-osy4.onrender.com/api-docs/'
  },
  {
    number: '04',
    name: 'Elite Complex',
    type: 'Live website',
    description: 'A live homepage project.',
    stack: ['Website'],
    mark: 'EC',
    liveUrl: 'https://elitecomplex.netlify.app/'
  },
  {
    number: '05',
    name: 'GLEstate',
    type: 'Live website',
    description: 'A live homepage project.',
    stack: ['Website'],
    mark: 'GL',
    liveUrl: 'https://glestate.netlify.app/'
  },
  {
    number: '06',
    name: 'AriOrg',
    type: 'Live website',
    description: 'A live homepage project.',
    stack: ['Website'],
    mark: 'AO',
    liveUrl: 'https://ariorg.netlify.app/'
  }
];

const skills = [
  { icon: Code2, title: 'Frontend', items: 'JavaScript · React · Angular · HTML · CSS' },
  { icon: Layers3, title: 'Backend', items: 'Node.js · Express · REST APIs' },
  { icon: Database, title: 'Data & integration', items: 'SQL · CouchDB · API integration' },
  { icon: Terminal, title: 'Tools & workflow', items: 'Git · GitHub · Swagger · VS Code' }
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">PL</span><span>PAUL LUKWAGO<span className="brand-dot">.</span></span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map(item => <a key={item} href={'#' + item.toLowerCase()} onClick={closeMenu}>{item}</a>)}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot"></span> AVAILABLE FOR OPPORTUNITIES</div>
            <p className="hero-kicker">HELLO, I'M PAUL LUKWAGO</p>
            <h1>Building useful<br/><span>digital experiences.</span></h1>
            <p className="hero-intro">I'm a software developer focused on creating reliable, practical web applications through thoughtful frontend experiences and dependable backend systems.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
              <a className="button button-quiet" href="#contact">Get in touch <ArrowDown size={16}/></a>
            </div>
            <div className="hero-meta"><span><MapPin size={15}/> Uganda</span><span className="meta-line"></span><span>Software Developer</span></div>
          </div>
          <div className="hero-art" aria-label="Abstract software development illustration">
            <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
            <div className="code-window">
              <div className="window-bar"><i></i><i></i><i></i><span>paul.dev</span></div>
              <div className="code-content">
                <p><b>01</b> <span className="code-purple">const</span> developer = {'{'}</p>
                <p><b>02</b> &nbsp; name: <span className="code-green">'Paul Lukwago'</span>,</p>
                <p><b>03</b> &nbsp; role: <span className="code-green">'Software Developer'</span>,</p>
                <p><b>04</b> &nbsp; focus: [</p>
                <p><b>05</b> &nbsp;&nbsp; <span className="code-green">'Web apps'</span>,</p>
                <p><b>06</b> &nbsp;&nbsp; <span className="code-green">'APIs'</span>,</p>
                <p><b>07</b> &nbsp;&nbsp; <span className="code-green">'Problem solving'</span></p>
                <p><b>08</b> &nbsp; ]</p>
                <p><b>09</b> {'}'}</p>
                <p className="code-comment">// Always learning. Always building.</p>
              </div>
            </div>
            <div className="floating-chip chip-top">{"<"} code /&gt;</div>
            <div className="floating-chip chip-bottom"><span className="status-dot"></span> Building what's next</div>
          </div>
          <a className="scroll-cue" href="#about"><span></span> SCROLL TO EXPLORE</a>
        </section>

        <section className="section about-section" id="about">
          <div className="section-label">01 / ABOUT ME</div>
          <div className="about-grid">
            <div className="about-profile"><img className="about-photo" src={profilePhoto} alt="Paul Lukwago" /></div>
            <div className="about-text">
              <h2>Curious by nature.<br/><span>Developer by craft.</span></h2>
              <p className="lead">I enjoy turning ideas and real-world needs into software that people can use with confidence.</p>
              <p>My experience spans web development, backend APIs, databases, and collaborative software projects. I value clean, reusable code, continuous learning, and building solutions that are both useful and maintainable.</p>
              <p>I'm currently pursuing my education at Brigham Young University–Idaho while continuing to strengthen my skills through hands-on projects.</p>
              <a className="text-link" href="https://github.com/LUKWAGO1" target="_blank" rel="noreferrer">Explore my GitHub <ArrowUpRight size={16}/></a>
            </div>
          </div>
          <div className="stats-row">
            <div><strong>Web</strong><span>Application development</span></div>
            <div><strong>API</strong><span>Backend integrations</span></div>
            <div><strong>Learn</strong><span>Continuous improvement</span></div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-heading"><div><div className="section-label">02 / WHAT I WORK WITH</div><h2>Tools of the trade<span>.</span></h2></div><p>Technologies and practices I use to bring ideas to life.</p></div>
          <div className="skills-grid">
            {skills.map(({icon: Icon, title, items}, i) => <article className="skill-card" key={title}><div className="skill-top"><span className="skill-icon"><Icon size={21}/></span><span className="skill-number">0{i+1}</span></div><h3>{title}</h3><p>{items}</p></article>)}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading"><div><div className="section-label">03 / SELECTED WORK</div><h2>Projects in focus<span>.</span></h2></div><p>A selection of projects that reflect my interests in product development, APIs, and problem solving.</p></div>
          <div className="projects-list">
            {projects.map(project => <article className="project-card" key={project.number}>
              {project.liveUrl ? <div className="project-preview">
                <div className="preview-bar"><span>{new URL(project.liveUrl).hostname}</span><a href={project.liveUrl} target="_blank" rel="noreferrer">Open site <ArrowUpRight size={14}/></a></div>
                <iframe src={project.liveUrl} title={project.name + ' homepage preview'} loading="lazy" referrerPolicy="no-referrer" sandbox="allow-scripts allow-same-origin allow-forms allow-popups" />
              </div> : <div className="project-mark">{project.mark}</div>}
              <div className="project-main"><div className="project-type">{project.type}</div><h3>{project.name}</h3><p>{project.description}</p><div className="tag-list">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div></div>
              <a className="project-link" href={project.liveUrl || project.link} target="_blank" rel="noreferrer" aria-label={'Open ' + project.name + (project.liveUrl ? ' live site' : ' on GitHub')}><ArrowUpRight size={20}/></a>
            </article>)}
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="section-label">04 / EXPERIENCE & EDUCATION</div>
          <h2>Learning, building<br/><span>and moving forward.</span></h2>
          <div className="timeline">
            <article className="timeline-item"><div className="timeline-date">MAR 2020 — MAR 2025</div><div className="timeline-content"><span className="timeline-type">PROFESSIONAL EXPERIENCE</span><h3>Web Developer <span>@ Pivotal Software</span></h3><p>Worked with JavaScript, Node.js, Angular, and CouchDB to develop and improve web solutions. Contributed to SQL and API improvements, reusable code, code reviews, and mentoring.</p><ul><li>Contributed to SQL and API work that improved performance by 20%.</li><li>Helped reduce bugs found during code reviews by 50%.</li><li>Built reusable code that reduced future development time by 40%.</li></ul></div></article>
            <article className="timeline-item"><div className="timeline-date">CURRENT STUDIES</div><div className="timeline-content"><span className="timeline-type">EDUCATION</span><h3>Brigham Young University–Idaho</h3><p>Building a strong foundation in software development through coursework, practical assignments, and collaborative projects.</p></div></article>
          </div>
        </section>

        <section className="contact-section section" id="contact">
          <div className="section-label">05 / GET IN TOUCH</div>
          <div className="contact-grid"><div><h2>Have a project<br/>in mind<span>?</span></h2><p>I'm always interested in connecting, learning about new opportunities, and discussing ideas that make a difference.</p></div>
            <div className="contact-links">
              <a href="https://www.linkedin.com/in/paullukwago" target="_blank" rel="noreferrer"><span className="contact-icon"><ArrowUpRight size={20}/></span><span><small>CONNECT ON LINKEDIN</small><strong>paullukwago</strong></span><ArrowUpRight size={18}/></a>
              <a href="https://github.com/LUKWAGO1" target="_blank" rel="noreferrer"><span className="contact-icon"><Code2 size={20}/></span><span><small>CHECK OUT MY CODE</small><strong>LUKWAGO1</strong></span><ArrowUpRight size={18}/></a>
              <a href="mailto:paullukwago111@gmail.com"><span className="contact-icon"><Mail size={20}/></span><span><small>SEND ME AN EMAIL</small><strong>paullukwago111@gmail.com</strong></span><ArrowUpRight size={18}/></a>
              <a href="https://wa.me/256742947109?text=Hello%20Paul%2C%20I%20found%20your%20portfolio." target="_blank" rel="noreferrer"><span className="contact-icon"><MessageCircle size={20}/></span><span><small>MESSAGE ME ON WHATSAPP</small><strong>+256 742 947 109</strong></span><ArrowUpRight size={18}/></a>
            </div>
          </div>
        </section>
      </main>
      <footer><a className="brand" href="#home"><span className="brand-mark">PL</span><span>PAUL LUKWAGO<span className="brand-dot">.</span></span></a><span>Designed & built with purpose.</span><span>© {new Date().getFullYear()} Paul Lukwago</span></footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
