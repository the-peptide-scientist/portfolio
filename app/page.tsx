"use client";

import { useState, useEffect } from "react";

// --- PROFESSIONAL DATA ---
const skills = [
  "Peptide Formulation", "Lyophilization Optimization", "HPLC & LC-MS/Q-TOF",
  "Endotoxin & Sterility Testing", "SOP Development", "Drug Delivery Systems",
  "ELP Nanoparticles", "Molecular Docking", "AlphaFold2", "Process Scale-Up",
  "DLS & Biophysical Characterization", "PEGylation", "MATLAB & Python",
];

const experience = [
  {
    title: "R&D Scientist – Peptide & Protein Engineer",
    company: "RTD Biosciences",
    period: "Jan 2025 – Present",
    points: [
      "Lead formulation development for 20+ peptide therapeutics, optimizing stability, solubility, and shelf-life under pre-GMP conditions.",
      "Design lyophilization cycles and implement rigorous QC workflows (HPLC, LC-MS, LAL, sterility) to ensure batch consistency.",
      "Authored 50+ SOPs and helped establish laboratory infrastructure, standardizing analytical and formulation workflows.",
      "Perform molecular docking and computational analysis to guide peptide modification strategies and binding affinity optimization.",
    ],
  },
  {
    title: "Graduate Research Assistant",
    company: "Iowa State University",
    period: "Aug 2022 – Dec 2024",
    points: [
      "Engineered elastin-like polypeptide (ELP) nanoparticle systems for targeted anti-EGFR therapeutics.",
      "Utilized AlphaFold2 and molecular docking to evaluate receptor-specific binding profiles for tyrosine kinases.",
      "Mastered protein purification via Inverse Transition Cycling (ITC) and characterized particle size using DLS.",
      "Mentored undergraduate researchers and optimized SDS-PAGE protocols for higher throughput and reproducibility.",
    ],
  },
];

const education = [
  { degree: "M.S. Chemical Engineering", school: "Iowa State University", year: "2024" },
  { degree: "B.S. Chemistry", school: "Wayne State College", year: "2022" },
];

const awards = [
  "Frederick Martinson Scholarship (ISU)",
  "Physical Science Scholarship (Wayne State)",
  "Dannals Endowed Scholarship (Wayne State)",
];

// --- EDUCATIONAL / TRAFFIC DATA ---
const peptideProfiles = [
  { name: "BPC-157", category: "Research Peptide", desc: "Explore mechanism of action, stability profiles, and current research landscape." },
  { name: "TB-500 (Thymosin β4)", category: "Wound Healing", desc: "Understand its role in tissue regeneration, actin binding, and cellular migration." },
  { name: "GHK-Cu", category: "Cosmetic & Regenerative", desc: "Copper peptide complex known for collagen synthesis and antioxidant properties." },
  { name: "Melanotan II", category: "Melanocortin Agonist", desc: "Review receptor binding affinity, metabolic pathways, and safety research." },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight">A. Tofik</span>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
            <a href="#about" className="hover:text-teal-700 transition">About</a>
            <a href="#research" className="hover:text-teal-700 transition">Research</a>
            <a href="#peptides" className="hover:text-teal-700 transition">Peptide Library</a>
            <a href="#projects" className="hover:text-teal-700 transition">Projects</a>
          </div>
          <a href="mailto:abdulmtofik@gmail.com" className="px-4 py-2 bg-teal-700 text-white text-sm font-medium rounded-lg hover:bg-teal-800 transition">
            Contact
          </a>
        </div>
      </nav>

      <main className="pt-24 pb-20 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero */}
        <section className="mb-20 fade-in">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-widest uppercase text-teal-700 mb-4">Peptide Scientist & Educator</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Bridging Peptide Science, Formulation, and Education
            </h1>
            <p className="text-lg text-stone-600 leading-relaxed mb-8 max-w-2xl">
              R&D Scientist specializing in peptide therapeutics, lyophilization, and analytical QC. 
              Building an open educational resource to help researchers, students, and professionals 
              navigate peptide science with clarity and accuracy.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#peptides" className="px-6 py-3 bg-stone-900 text-white font-medium rounded-xl hover:bg-stone-800 transition">
                Explore Peptide Profiles
              </a>
              <a href="#research" className="px-6 py-3 border border-stone-300 bg-white text-stone-800 font-medium rounded-xl hover:bg-stone-50 transition">
                View Research & Experience
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mb-20">
          <div className="rounded-3xl bg-white p-8 md:p-10 shadow-sm border border-stone-200">
            <h2 className="text-2xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-stone-700 leading-relaxed">
              <p>
                I'm a peptide scientist and protein engineer with a Master's in Chemical Engineering, 
                focused on formulation development, lyophilization optimization, and analytical quality control. 
                My work spans from computational docking and ELP nanoparticle engineering to hands-on QC testing 
                (HPLC, LC-MS, DLS) in pre-GMP environments.
              </p>
              <p>
                Beyond the lab, I'm passionate about scientific communication. This platform serves as both a 
                professional portfolio and an educational hub, designed to make peptide science accessible, 
                research-backed, and easy to navigate for students, researchers, and industry professionals.
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Core Competencies</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="px-4 py-2 bg-white border border-stone-200 rounded-full text-sm font-medium text-stone-700 hover:border-teal-500 hover:bg-teal-50 transition cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Research & Experience */}
        <section id="research" className="mb-20">
          <h2 className="text-3xl font-bold mb-10">Professional Experience</h2>
          <div className="space-y-8">
            {experience.map((job, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 shadow-sm border border-stone-200 hover:shadow-md transition">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold">{job.title}</h3>
                    <p className="text-teal-700 font-medium">{job.company}</p>
                  </div>
                  <span className="inline-block px-3 py-1 bg-stone-100 text-stone-600 text-xs font-semibold rounded-full">{job.period}</span>
                </div>
                <ul className="space-y-3 mt-6">
                  {job.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-stone-700 text-sm leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-600 flex-shrink-0"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education & Awards */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Education</h3>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <div key={i} className="border-l-4 border-teal-600 pl-6 py-1">
                    <p className="font-semibold text-stone-900">{edu.degree}</p>
                    <p className="text-teal-700 text-sm">{edu.school} • {edu.year}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Honors</h3>
              <ul className="space-y-3">
                {awards.map((award, i) => (
                  <li key={i} className="flex items-start gap-3 text-stone-700 text-sm">
                    <span className="text-yellow-500 mt-0.5">★</span> {award}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* PEPTIDE LIBRARY (Traffic & Educational Focus) */}
        <section id="peptides" className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 gap-4">
            <div>
              <h2 className="text-3xl font-bold mb-2">Peptide Profiles & Research Hub</h2>
              <p className="text-stone-600 max-w-2xl">
                An educational resource breaking down peptide mechanisms, stability, and current research. 
                Profiles are regularly updated with peer-reviewed references.
              </p>
            </div>
            {/* Placeholder for future search/filter */}
            <div className="flex gap-2">
              <input type="text" placeholder="Search peptides..." className="px-4 py-2 border border-stone-300 rounded-lg text-sm bg-white focus:outline-none focus:border-teal-500" disabled />
              <button className="px-4 py-2 bg-teal-700 text-white text-sm rounded-lg hover:bg-teal-800 transition" disabled>Search</button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {peptideProfiles.map((pep) => (
              <div key={pep.name} className="group rounded-3xl border border-stone-200 bg-white p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-stone-900 group-hover:text-teal-700 transition">{pep.name}</h3>
                  <span className="text-xs font-semibold text-teal-700 bg-teal-50 px-2 py-1 rounded">{pep.category}</span>
                </div>
                <p className="text-sm text-stone-600 mb-4">{pep.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-stone-400">References & Mechanism Data →</span>
                  <button className="text-sm font-medium text-teal-700 hover:underline" disabled>View Profile (Coming Soon)</button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-800">
            <strong>Disclaimer:</strong> All profiles are for educational and research purposes only. 
            Not intended for medical advice, diagnosis, or human/animal use. Always consult peer-reviewed literature and regulatory guidelines.
          </div>
        </section>

        {/* Future Projects */}
        <section id="projects" className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Future Projects & Roadmap</h2>
          <p className="text-stone-600 mb-10 max-w-2xl">
            Building interactive tools to help visualize peptide-receptor interactions, computational docking results, 
            and formulation stability data in an accessible, visual format.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Peptide–Receptor Interaction Explorer", desc: "Interactive 3D visualization of binding affinities, signaling pathways, and structural mapping." },
              { title: "Computational Peptide Design Showcase", desc: "Docking study archives, AlphaFold2 structure galleries, and SAR optimization breakdowns." },
              { title: "Scientific Notes & Learning Hub", desc: "Deep-dive write-ups on lyophilization, HPLC troubleshooting, ELP engineering, and translational workflows." }
            ].map((proj, i) => (
              <div key={i} className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-lg font-semibold text-stone-900 mb-3">{proj.title}</h3>
                <p className="text-sm leading-relaxed text-stone-600">{proj.desc}</p>
                <div className="mt-4 pt-4 border-t border-stone-100">
                  <span className="text-xs font-semibold text-teal-700 uppercase tracking-wide">In Development</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter / Traffic Capture */}
        <section className="rounded-3xl bg-stone-900 p-8 md:p-12 text-white shadow-lg mb-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Stay Updated on New Research & Tools</h2>
            <p className="text-stone-300 mb-6 leading-relaxed">
              Get notified when new peptide profiles, interactive modules, and lab workflow guides are published. 
              No spam, just science.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-xl bg-stone-800 border border-stone-700 text-white placeholder-stone-400 focus:outline-none focus:border-teal-500" disabled />
              <button className="px-6 py-3 bg-teal-600 font-medium rounded-xl hover:bg-teal-700 transition" disabled>Join Newsletter</button>
            </div>
            <p className="text-xs text-stone-500 mt-3">Built for researchers, students, and peptide science enthusiasts.</p>
          </div>
        </section>

        {/* Publications */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-10">Selected Publications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-stone-200 flex flex-col h-full">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-wide mb-2">Master's Thesis • 2024</span>
              <h3 className="text-xl font-bold text-stone-900 mb-2">Elastin-like polypeptide nanoparticles as carriers for anti-EGFR peptide therapeutics</h3>
              <p className="text-sm text-stone-600 mb-4 flex-grow">Focused on rational design and characterization of ELP micelle nanoparticles for targeted delivery.</p>
              <a href="https://www.proquest.com/openview/7a3a1068f9084094a694c5573b668e93/1?pq-origsite=gscholar&cbl=18750&diss=y" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-medium text-sm hover:underline">Read Thesis →</a>
            </div>
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-stone-200 flex flex-col h-full">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-wide mb-2">Journal Publication • 2026</span>
              <h3 className="text-xl font-bold text-stone-900 mb-2">Rational design and preclinical evaluation of elastin-like polypeptide micelle nanoparticles</h3>
              <p className="text-sm text-stone-600 mb-4 flex-grow">Published in Frontiers in Bioengineering and Biotechnology. Covers preclinical evaluation and rational design.</p>
              <a href="https://www.frontiersin.org/journals/bioengineering-and-biotechnology/articles/10.3389/fbioe.2026.1736210/abstract" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-medium text-sm hover:underline">View Paper →</a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-white font-semibold text-lg">Abdulhakim Tofik</p>
            <p className="text-sm">Peptide Scientist & Science Educator</p>
          </div>
          <div className="flex gap-6 text-sm font-medium flex-wrap justify-center">
            <a href="https://www.linkedin.com/in/abdulhakim-tofik/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn</a>
            <a href="https://scholar.google.com/citations?user=aGzHDL0AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Google Scholar</a>
            <a href="mailto:thepeptidescientist@gmail.com" className="hover:text-white transition">Email</a>
          </div>
          <p className="text-xs">© {new Date().getFullYear()} Abdulhakim Tofik. Educational purposes only.</p>
        </div>
      </footer>
    </div>
  );
}