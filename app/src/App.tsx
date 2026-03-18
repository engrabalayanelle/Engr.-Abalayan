import { useEffect, useRef } from 'react';
import { useTheme } from './hooks/useTheme';
import { Sun, Moon } from 'lucide-react';

function App() {
  const { theme, toggleTheme } = useTheme();
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach((el) => {
      observerRef.current?.observe(el);
    });

    // Navbar effect
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (nav) {
        if (window.scrollY > 50) {
          (nav as HTMLElement).style.background = theme === 'dark' 
            ? 'rgba(12, 12, 12, 0.99)' 
            : 'rgba(248, 247, 244, 0.99)';
          (nav as HTMLElement).style.padding = '1rem 5%';
        } else {
          (nav as HTMLElement).style.background = theme === 'dark' 
            ? 'rgba(12, 12, 12, 0.98)' 
            : 'rgba(248, 247, 244, 0.98)';
          (nav as HTMLElement).style.padding = '1.5rem 5%';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observerRef.current?.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [theme]);

  // Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <>
      {/* Theme Toggle Button */}
      <button 
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Navigation */}
      <nav>
        <ul>
          <li><a href="#home" onClick={handleNavClick}>Home</a></li>
          <li><a href="#about" onClick={handleNavClick}>About</a></li>
          <li><a href="#experience" onClick={handleNavClick}>Experience</a></li>
          <li><a href="#skills" onClick={handleNavClick}>Skills</a></li>
          <li><a href="#education" onClick={handleNavClick}>Education</a></li>
          <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-badge">Licensed Civil Engineer</div>
          <h1><span className="name-bold">ROCHELLE F. ABALAYAN,</span> <span className="credential">RCE</span></h1>
          <p className="title">Building Smarter, Managing Better, Delivering Results</p>
          <p className="credentials">PRC Board Passer April 2025 • Civil Service Professional Eligible 2023</p>
          
          <div className="hero-contact">
            <a href="mailto:abalayanelle@gmail.com">
              <i className="fas fa-envelope"></i> abalayanelle@gmail.com
            </a>
            <a href="tel:+639317750765">
              <i className="fas fa-phone"></i> +63 931 775 0765
            </a>
            <a href="#">
              <i className="fas fa-map-marker-alt"></i> Tangalan, Aklan, Philippines
            </a>
          </div>
        </div>
        <div className="scroll-indicator">
          <i className="fas fa-chevron-down"></i>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <h2>Professional Summary</h2>
        <div className="about-content fade-in">
          <div className="about-image">
            <img 
              src="https://i.imgur.com/TsSSkh1.jpeg" 
              alt="Rochelle F. Abalayan" 
              className="profile-img" 
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop';
              }}
            />
          </div>
          <div className="about-text">
            <p>
              Results-driven and <span className="highlight">Licensed Civil Engineer</span> with specialized expertise in <span className="highlight">Structural Engineering</span> and hands-on experience in construction operations, labor cost management, and technical documentation. Known for delivering accurate quantity take-offs, cost estimations, and productivity monitoring that directly optimize project budgets and timelines.
            </p>
            <p>
              A highly organized and detail-oriented professional, I excel at coordinating workforce deployment, ensuring compliance with engineering standards, and supporting seamless project delivery from planning through execution. Currently serving as <span className="highlight">Office Engineer I & Labor In-Charge</span> at F. Gurrea Construction Inc., I lead labor cost monitoring and workforce coordination for major construction projects, consistently driving efficiency and compliance.
            </p>
            <p>
              Committed to continuous professional growth and engineering excellence, I bring both technical rigor and operational insight to every engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <h2>Professional Experience</h2>
        <div className="timeline">
          <div className="experience-card fade-in">
            <div className="exp-header">
              <div>
                <div className="exp-title">Office Engineer I & Labor In-Charge</div>
                <div className="exp-company">F. Gurrea Construction Inc. — Iloilo, Philippines</div>
              </div>
              <div className="exp-date">June 2025 — Present</div>
            </div>
            <ul className="exp-achievements">
              <li>Lead labor cost monitoring and payroll validation to ensure manpower expenses remain within approved project budgets</li>
              <li>Plan and coordinate daily deployment of skilled and general workers to align with construction schedules and deadlines</li>
              <li>Conduct comprehensive quantity take-offs and labor-to-material cost analysis to optimize resource allocation</li>
              <li>Interpret structural drawings, specifications, and technical plans to guide field execution accurately</li>
              <li>Maintain compliance documentation including worker certifications, timekeeping records, and site regulatory requirements</li>
              <li>Collaborate with project engineers, foremen, and subcontractors to resolve site issues and improve workflow efficiency</li>
            </ul>
          </div>

          <div className="experience-card fade-in">
            <div className="exp-header">
              <div>
                <div className="exp-title">Customer Service Representative</div>
                <div className="exp-company">Sagility — Pavia, Iloilo</div>
              </div>
              <div className="exp-date">June 2024 — November 2024</div>
            </div>
            <ul className="exp-achievements">
              <li>Handled high-volume inbound customer inquiries in a fast-paced BPO environment</li>
              <li>Maintained performance metrics while delivering professional and empathetic customer support</li>
              <li>Developed strong communication, conflict-resolution, and problem-solving skills under night-shift conditions</li>
              <li>Adapted quickly to complex systems and workflow procedures to ensure service efficiency</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <h2>Core Competencies</h2>
        <div className="skills-grid">
          <div className="skill-category fade-in">
            <h3><i className="fas fa-drafting-compass"></i> Engineering Expertise</h3>
            <ul className="skill-list">
              <li>Structural Drafting and Design Interpretation</li>
              <li>Quantity Take-Off and Detailed Cost Estimation</li>
              <li>Labor Cost Control and Productivity Analysis</li>
              <li>Construction Site Coordination</li>
              <li>Workforce Management</li>
              <li>Technical Report Writing</li>
            </ul>
          </div>
          
          <div className="skill-category fade-in">
            <h3><i className="fas fa-laptop-code"></i> Technical Software</h3>
            <ul className="skill-list">
              <li>STAAD.Pro — Structural Analysis & Design</li>
              <li>ETABS — Building Analysis</li>
              <li>RCDC — Reinforced Concrete Detailing</li>
              <li>IdeaStatica — Connection Design</li>
              <li>AutoCAD 2D — Technical Drafting</li>
              <li>SketchUp — 3D Modeling</li>
            </ul>
          </div>

          <div className="skill-category fade-in">
            <h3><i className="fas fa-tools"></i> Professional Skills</h3>
            <ul className="skill-list">
              <li>Microsoft Excel — Data Analysis</li>
              <li>Project Scheduling Support</li>
              <li>Construction Documentation Control</li>
              <li>Client Coordination</li>
              <li>Strong Analytical Skills</li>
              <li>Mathematical Proficiency</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education">
        <h2>Education</h2>
        
        <div className="education-card fade-in">
          <div className="edu-header">
            <div>
              <div className="edu-school">Aklan State University</div>
              <div className="edu-degree">Bachelor of Science in Civil Engineering, Major in Structural Engineering</div>
            </div>
            <div className="edu-year">2020 — 2024</div>
          </div>
          <div className="edu-details">
            Relevant Coursework: Structural Analysis, Reinforced Concrete Design, Steel Design, Geotechnical Engineering, Construction Management
          </div>
        </div>

        <div className="education-card fade-in">
          <div className="edu-header">
            <div>
              <div className="edu-school">Tamalagon Integrated School</div>
              <div className="edu-degree">Senior High School — Salutatorian</div>
            </div>
            <div className="edu-year">2020</div>
          </div>
          <span className="honors">Best in Mathematics</span>
        </div>

        <div className="education-card fade-in">
          <div className="edu-header">
            <div>
              <div className="edu-school">Tamalagon Integrated School</div>
              <div className="edu-degree">High School — With Honors</div>
            </div>
            <div className="edu-year">2018</div>
          </div>
          <span className="honors">Best in Mathematics</span>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2>Get In Touch</h2>
        <div className="contact-intro">
          <p>
            Available for engineering consultancy, project collaboration, and professional opportunities in structural design and construction management across the Philippines. I also welcome remote engagements and part‑time projects, offering flexible support tailored to client needs.
          </p>
          <p>
            With a proven track record in labor cost management, technical documentation, and compliance assurance, I bring both field expertise and analytical precision to every project. Whether it&apos;s optimizing workforce deployment, interpreting structural plans, or ensuring audit‑ready documentation, I deliver solutions that enhance efficiency and strengthen project outcomes.
          </p>
          <p className="contact-closing">
            Let&apos;s collaborate to build smarter, manage better, and achieve results that last.
          </p>
        </div>
        
        <div className="contact-grid">
          <div className="contact-item fade-in">
            <i className="fas fa-envelope"></i>
            <h3>Email</h3>
            <a href="mailto:abalayanelle@gmail.com">abalayanelle@gmail.com</a>
          </div>
          <div className="contact-item fade-in">
            <i className="fas fa-phone"></i>
            <h3>Phone</h3>
            <a href="tel:+639317750765">+63 931 775 0765</a>
          </div>
          <div className="contact-item fade-in">
            <i className="fas fa-map-marker-alt"></i>
            <h3>Location</h3>
            <span>Pudiot, Tangalan, Aklan<br />Philippines 5612</span>
          </div>
          <div className="contact-item fade-in">
            <i className="fas fa-certificate"></i>
            <h3>Credentials</h3>
            <span>Licensed RCE<br />Civil Service Eligible</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 <span className="footer-accent">Rochelle F. Abalayan, RCE</span> — Licensed Civil Engineer</p>
      </footer>
    </>
  );
}

export default App;
