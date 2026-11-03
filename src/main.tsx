import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../style/main.css";

type Project = {
    category: string;
    name: string;
    description: string;
} & (
    | { technologies: string; link?: never }
    | { link: string; technologies?: never }
);

const skills = [
    "Java",
    "Python",
    "Microservices",
    "Spring",
    "Hibernate",
    "REST & SOAP services",
    "Docker",
    "Kubernetes",
    "MySQL",
    "Oracle",
    "Jenkins",
];

const projects: Project[] = [
    {
        category: "Local government · Service-oriented architecture",
        name: "e-LG",
        description:
            "A multi-tenant, service-oriented solution to re-engineer processes across local government councils in Sri Lanka.",
        technologies: "Java · Spring · Hibernate · JAX-WS · MySQL · WSO2",
    },
    {
        category: "Payments · Microservices",
        name: "Direct2Internet",
        description:
            "An online payment gateway designed as a scalable, high-performance web-services solution using a microservices architecture.",
        technologies: "Python · Docker · CoreOS · Kubernetes",
    },
    {
        category: "Healthcare · Web application",
        name: "Medical Billing Technologies",
        description:
            "A web-based solution for medical claim reimbursements and participant time surveys, with electronic claims, reporting, bulk imports, and a training portal.",
        technologies: "Claims and time-survey workflows",
    },
    {
        category: "Enterprise tools · Backend",
        name: "Third Party Interoperability",
        description:
            "Designed and developed an email component service and contributed backend and database work to a Tool Profile Automation system.",
        technologies: "Java · JavaMail · Spring · Hibernate · Oracle",
    },
    {
        category: "Testing · GitHub",
        name: "playwright-test",
        description: "A public project listed on my profile.",
        link: "https://github.com/dulipchandana/kafka-playwright",
    },
];

const linkedInUrl = "https://www.linkedin.com/in/dulip-chandana-91286297/";

function Header() {
    return (
        <header className="container site-header">
            <a className="wordmark" href="#home" aria-label="Dulip Chandana home">
                DULIP<span>.</span>
            </a>
            <nav aria-label="Main navigation">
                <a href="#about">About</a>
                <a href="#work">Selected work</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
}

function Hero() {
    return (
        <section className="container hero" id="home" aria-labelledby="hero-title">
            <div>
                <p className="eyebrow">Software engineer · Melbourne, Australia</p>
                <h1 id="hero-title">
                    Dulip
                    <br />
                    <span>Chandana</span>
                </h1>
                <p className="intro">
                    Java and Python microservices developer with 17 years of
                    experience building backend systems and service-oriented
                    applications.
                </p>
                <div className="actions">
                    <a className="button button-primary" href="#work">
                        Explore selected work
                    </a>
                    <a
                        className="button button-secondary"
                        href={linkedInUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn profile
                    </a>
                </div>
            </div>
            <aside className="hero-card" aria-label="Professional summary">
                <span className="stat">
                    17<span aria-hidden="true">+</span>
                </span>
                <p>years of software development experience</p>
                <hr />
                <p>Focused on Java, Python, microservices, and backend engineering.</p>
            </aside>
        </section>
    );
}

function About() {
    return (
        <section className="container" id="about" aria-labelledby="about-title">
            <p className="section-label">A little about me</p>
            <h2 className="section-heading" id="about-title">
                Building useful software, from services to systems.
            </h2>
            <p className="about-copy">
                I’m a software developer based in Melbourne, Australia. My
                experience spans Java and Python development, microservices,
                service-oriented architecture, backend and database development,
                and building software for public services and business workflows.
            </p>
            <div className="skills" aria-label="Technologies and areas of experience">
                {skills.map((skill) => (
                    <span className="skill" key={skill}>
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
}

function ProjectCard({ project }: { project: Project }) {
    return (
        <article className="project">
            <p className="project-meta">{project.category}</p>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p className="tech">
                {project.link ? (
                    <a
                        className="text-link"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View project on GitHub
                    </a>
                ) : (
                    project.technologies
                )}
            </p>
        </article>
    );
}

function Projects() {
    return (
        <section className="container" id="work" aria-labelledby="work-title">
            <p className="section-label">Selected work</p>
            <h2 className="section-heading" id="work-title">
                Projects and systems
            </h2>
            <div className="project-grid">
                {projects.map((project) => (
                    <ProjectCard key={project.name} project={project} />
                ))}
            </div>
        </section>
    );
}

function Contact() {
    return (
        <section
            className="container contact"
            id="contact"
            aria-labelledby="contact-title"
        >
            <div>
                <p className="section-label">Get in touch</p>
                <h2 className="section-heading" id="contact-title">
                    Let’s connect.
                </h2>
                <p>
                    For professional details and ways to reach me, visit my
                    LinkedIn profile.
                </p>
            </div>
            <a
                className="button button-primary"
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
            >
                Connect on LinkedIn
            </a>
        </section>
    );
}

function Footer() {
    return (
        <footer className="container site-footer">
            <span>Dulip Chandana</span>
            <span>Melbourne, Australia</span>
        </footer>
    );
}

function App() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

const rootElement = document.getElementById("root");

if (!rootElement) {
    throw new Error('Required React root element "#root" was not found.');
}

createRoot(rootElement).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
