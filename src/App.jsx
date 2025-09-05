import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Download, ArrowRight, Wrench, Shield, Server, Network, Cpu, HardDrive, TerminalSquare, Github, Linkedin, Link, FileDown } from "lucide-react";

// === QUICK START ===
// 1) Replace CV_URL with your hosted PDF path (e.g., /cv/Toni-Maluleka.pdf)
// 2) Replace the placeholder images (placehold.co URLs) with your own
// 3) Update contact links (LinkedIn/GitHub) and any text you want to tweak
// 4) Deploy: GitHub Pages / Netlify / Vercel (instructions in chat)

const CV_URL = "/cv/Toni-Maluleka.pdf"; // put your actual file here

const profile = {
  name: "Toni Maluleka",
  role: "Technical Support Engineer",
  tagline:
    "Hands-on support technician focused on reliable systems, clear communication, and secure, scalable workplace IT.",
  location: "Cape Town, South Africa",
  email: "toni.maluleka.tm@gmail.com",
  phone: "+27 68 047 8156",
  links: {
    linkedin: "https://www.linkedin.com/in/your-link",
    github: "https://github.com/your-handle",
    portfolio: "https://your-portfolio-link" // optional
  }
};

const skills = {
  core: [
    "Troubleshooting & Diagnostics",
    "Customer Support & Comms",
    "Technical Documentation",
    "Adaptability & Learning Agility"
  ],
  platforms: ["Windows", "Linux", "macOS"],
  workplace: ["Microsoft 365", "Entra ID (Azure AD)", "Intune", "SharePoint", "OneDrive"],
  infra: ["Networking (TCP/IP, DNS, DHCP)", "VPNs", "Firewalls", "pfSense", "MikroTik"],
  security: ["ESET", "Least Privilege", "Patch & Update Hygiene", "Basic Hardening"],
  tooling: ["PowerShell", "Bash", "Python (basics)", "Odoo", "Jira / Ticketing"],
};

const projects = [
  {
    title: "pfSense High Availability",
    image: "https://placehold.co/640x360/png",
    bullets: [
      "Deployed/assisted a pfSense HA pair for gateway redundancy.",
      "Validated failover and documented testing & rollback steps.",
      "Improved resilience for on‑prem users and services."
    ]
  },
  {
    title: "MikroTik Firewall Hardening",
    image: "https://placehold.co/640x360/png",
    bullets: [
      "Set up address-lists, NAT, and basic filter rules aligned to business needs.",
      "Backup & export configs, with change notes for auditability." 
    ]
  },
  {
    title: "Intune Pilot / Device Onboarding",
    image: "https://placehold.co/640x360/png",
    bullets: [
      "Tested Windows enrollment flows and policy assignments.",
      "Drafted a move from personal devices to corporate-owned for better control.",
      "Standardized baselines: BitLocker, updates, USB restrictions where required."
    ]
  },
  {
    title: "Migrations & User Onboarding",
    image: "https://placehold.co/640x360/png",
    bullets: [
      "Assisted in email/identity moves (e.g., Google Admin → Microsoft 365).",
      "User cutover planning, mailbox checks, and post‑migration support."
    ]
  }
];

const experience = [
  {
    role: "Junior Support Technician (Onsite)",
    company: "S‑PLANE Automation (via Gravit8)",
    period: "2024 — Present",
    points: [
      "Frontline troubleshooting of user endpoints, accounts, and connectivity.",
      "Endpoint hygiene: updates, AV checks (ESET), BitLocker status, backups.",
      "Intune/Entra: testing policies, device compliance, documentation.",
      "Network basics: IP, DNS/DHCP checks, VPN setup and verification.",
      "Clear comms with stakeholders; ticket notes and handover quality."
    ]
  }
];

const education = [
  {
    school: "Kgadime Matsepe Secondary School",
    detail: "Completed secondary education"
  }
];

const references = [
  {
    name: "Available on request",
    title: "—",
    contact: "—"
  }
  // You can publicly list references here if they have consent, or keep “on request”.
];

const Section = ({ id, title, children }) => (
  <section id={id} className="py-16 scroll-mt-24">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">{title}</h2>
      {children}
    </div>
  </section>
);

const Badge = ({ children }) => (
  <span className="inline-block rounded-full border px-3 py-1 text-sm leading-6 mr-2 mb-2">
    {children}
  </span>
);

const Card = ({ children }) => (
  <div className="rounded-2xl border p-5 shadow-sm bg-white/60 backdrop-blur-sm">
    {children}
  </div>
);

export default function Portfolio() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    email: profile.email,
    telephone: profile.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.location
    },
    url: profile.links.portfolio,
    sameAs: [profile.links.linkedin, profile.links.github].filter(Boolean),
    knowsAbout: [
      ...skills.core,
      ...skills.platforms,
      ...skills.workplace,
      ...skills.infra,
      ...skills.security,
      ...skills.tooling
    ]
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      {/* SEO / Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="font-semibold">{profile.name}</div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:opacity-70">About</a>
            <a href="#skills" className="hover:opacity-70">Skills</a>
            <a href="#projects" className="hover:opacity-70">Projects</a>
            <a href="#experience" className="hover:opacity-70">Experience</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </div>
          <div className="flex items-center gap-2">
            <a href={CV_URL} className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm hover:bg-slate-50" download>
              <FileDown className="w-4 h-4" /> Download CV
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.1),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(14,165,233,0.12),transparent_55%)]" />
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">{profile.name}</h1>
            <p className="mt-2 text-lg md:text-xl text-slate-700">{profile.role}</p>
            <p className="mt-4 text-slate-700 leading-relaxed">{profile.tagline}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-4 py-2 text-sm">
                Contact Me <ArrowRight className="w-4 h-4" />
              </a>
              <a href={CV_URL} download className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm">
                <Download className="w-4 h-4" /> Download CV
              </a>
              <button onClick={() => window.print()} className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm">
                <Wrench className="w-4 h-4" /> Print Resume
              </button>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-600">
              <span className="inline-flex items-center gap-1"><MapPin className="w-4 h-4" /> {profile.location}</span>
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1 hover:underline"><Mail className="w-4 h-4" /> {profile.email}</a>
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-1 hover:underline"><Phone className="w-4 h-4" /> {profile.phone}</a>
            </div>
            <div className="mt-3 flex gap-3 text-slate-600">
              {profile.links.linkedin && (
                <a className="inline-flex items-center gap-2 hover:opacity-70" href={profile.links.linkedin}>
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              )}
              {profile.links.github && (
                <a className="inline-flex items-center gap-2 hover:opacity-70" href={profile.links.github}>
                  <Github className="w-4 h-4" /> GitHub
                </a>
              )}
              {profile.links.portfolio && (
                <a className="inline-flex items-center gap-2 hover:opacity-70" href={profile.links.portfolio}>
                  <Link className="w-4 h-4" /> Portfolio
                </a>
              )}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-lg border bg-white">
              <img src="https://placehold.co/1200x800/png" alt="Toni hero" className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-3 gap-3 mt-3">
              <img src="https://placehold.co/400x260/png" alt="placeholder 1" className="rounded-xl border" />
              <img src="https://placehold.co/400x260/png" alt="placeholder 2" className="rounded-xl border" />
              <img src="https://placehold.co/400x260/png" alt="placeholder 3" className="rounded-xl border" />
            </div>
          </motion.div>
        </div>
      </header>

      {/* ABOUT */}
      <Section id="about" title="About">
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <p className="leading-relaxed">
              I provide calm, methodical support for users and systems: diagnosing issues, documenting fixes,
              and keeping endpoints secure and up to date. I enjoy improving the basics—standard images, clear
              baselines, and tidy network settings—so teams can focus on their work.
            </p>
          </Card>
          <Card>
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 mt-0.5" />
              <p className="leading-relaxed">
                Currently building depth in Intune and modern management. Comfortable with firewalls (pfSense,
                MikroTik) and endpoint protection (ESET). I value least‑privilege and strong patch hygiene.
              </p>
            </div>
          </Card>
          <Card>
            <div className="flex items-start gap-3">
              <Server className="w-5 h-5 mt-0.5" />
              <p className="leading-relaxed">
                I document what I set up: quick runbooks, rollback notes, and handovers so anyone can pick up the work.
                Clear notes make incidents faster to resolve and prevent repeat issues.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" title="Skills">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <h3 className="font-semibold mb-2">Core</h3>
            {skills.core.map((s) => (
              <Badge key={s}>{s}</Badge>
            ))}
            <h3 className="font-semibold mt-4 mb-2">Platforms</h3>
            {skills.platforms.map((s) => (
              <Badge key={s}>{s}</Badge>
            ))}
            <h3 className="font-semibold mt-4 mb-2">Workplace</h3>
            {skills.workplace.map((s) => (
              <Badge key={s}>{s}</Badge>
            ))}
          </Card>
          <Card>
            <h3 className="font-semibold mb-2">Infrastructure</h3>
            {skills.infra.map((s) => (
              <Badge key={s}>{s}</Badge>
            ))}
            <h3 className="font-semibold mt-4 mb-2">Security</h3>
            {skills.security.map((s) => (
              <Badge key={s}>{s}</Badge>
            ))}
            <h3 className="font-semibold mt-4 mb-2">Tooling</h3>
            {skills.tooling.map((s) => (
              <Badge key={s}>{s}</Badge>
            ))}
          </Card>
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title="Recent Work / Projects">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <Card key={p.title}>
              <div className="aspect-video rounded-xl overflow-hidden border mb-4">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-700">
                {p.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" title="Experience">
        <div className="space-y-4">
          {experience.map((e) => (
            <Card key={e.role}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-lg">{e.role}</h3>
                  <p className="text-slate-700">{e.company}</p>
                </div>
                <div className="text-sm text-slate-600">{e.period}</div>
              </div>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-700">
                {e.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </Card>
          ))}
          <Card>
            <h3 className="font-semibold">Education</h3>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-700">
              {education.map((ed) => (
                <li key={ed.school}>
                  <span className="font-medium">{ed.school}</span> — {ed.detail}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* DOWNLOAD CV (small dedicated space) */}
      <Section id="resume" title="Resume / CV">
        <Card>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <h3 className="font-semibold">Download my CV</h3>
              <p className="text-slate-700 text-sm">PDF format. Updated regularly.</p>
            </div>
            <a href={CV_URL} download className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-4 py-2 text-sm">
              <Download className="w-4 h-4" /> Download CV
            </a>
          </div>
        </Card>
      </Section>

      {/* REFERENCES */}
      <Section id="references" title="References">
        <Card>
          <ul className="list-disc pl-5 space-y-1 text-slate-700">
            {references.map((r, i) => (
              <li key={i}>
                <span className="font-medium">{r.name}</span> — {r.title} {r.contact !== "—" && (<span className="text-slate-600">({r.contact})</span>)}
              </li>
            ))}
          </ul>
          <p className="text-slate-600 text-sm mt-2">Full reference details available upon request.</p>
        </Card>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Contact">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <form action={`mailto:${profile.email}`} method="post" encType="text/plain" className="space-y-3">
              <div>
                <label className="block text-sm font-medium">Your Name</label>
                <input className="mt-1 w-full rounded-xl border px-3 py-2" name="name" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium">Your Email</label>
                <input className="mt-1 w-full rounded-xl border px-3 py-2" type="email" name="email" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium">Message</label>
                <textarea className="mt-1 w-full rounded-xl border px-3 py-2 h-28" name="message" placeholder="How can I help?" />
              </div>
              <button className="inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white px-4 py-2 text-sm" type="submit">
                <Mail className="w-4 h-4" /> Send Message
              </button>
              <p className="text-xs text-slate-500">Tip: On production, replace this <code>mailto:</code> form with a real endpoint (Netlify/Vercel/Formspark, etc.).</p>
            </form>
          </Card>
          <Card>
            <div className="space-y-2">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:underline"><Mail className="w-4 h-4" /> {profile.email}</a>
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:underline"><Phone className="w-4 h-4" /> {profile.phone}</a>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {profile.location}</div>
              <div className="flex gap-4 pt-2">
                {profile.links.linkedin && <a className="inline-flex items-center gap-2 hover:opacity-70" href={profile.links.linkedin}><Linkedin className="w-4 h-4" /> LinkedIn</a>}
                {profile.links.github && <a className="inline-flex items-center gap-2 hover:opacity-70" href={profile.links.github}><Github className="w-4 h-4" /> GitHub</a>}
              </div>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Availability</h4>
              <ul className="list-disc pl-5 text-slate-700 text-sm">
                <li>Open to onsite roles in Cape Town; remote/hybrid considered.</li>
                <li>After-hours maintenance windows as needed.</li>
              </ul>
            </div>
          </Card>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t py-10">
        <div className="max-w-6xl mx-auto px-4 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} {profile.name}. All rights reserved.</div>
          <div className="flex items-center gap-3">
            <a href={CV_URL} download className="inline-flex items-center gap-2 rounded-full border px-3 py-1 hover:bg-slate-50">
              <Download className="w-4 h-4" /> CV
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
