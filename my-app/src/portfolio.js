import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Portfolio = () => {
  return (
    <div className="font-sans text-gray-800 bg-gradient-to-b from-white to-blue-100 min-h-screen">
      {/* Header */}
      <header className="bg-blue-700 text-white p-10 text-center shadow-lg">
        <motion.h1 className="text-4xl font-bold" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>Janjanam Sravanthi</motion.h1>
        <motion.p className="text-xl mt-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          Final-year B.Tech Student | Full-Stack Developer | React.js | Node.js
        </motion.p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="https://github.com/Sravanthi7818" target="_blank" rel="noopener noreferrer">
            <FaGithub size={28} />
          </a>
          <a href="https://www.linkedin.com/in/janjanam-sravanthi-04606425b/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={28} />
          </a>
        </div>
      </header>

      {/* About */}
      <section className="p-8">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">About Me</h2>
          <p className="text-lg">
            I am a passionate Computer Science student with strong skills in full-stack development and hands-on experience
            in Salesforce, cybersecurity, and AI-based projects. I'm driven to build scalable, user-friendly applications.
            Currently focused on leveraging AI for real-world problems and building intelligent systems.
          </p>
        </motion.div>
      </section>

      {/* Skills */}
      <section className="p-8 bg-white">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Skills</h2>
          <ul className="list-disc list-inside text-lg space-y-1">
            <li><strong>Languages:</strong> C, Python, Java</li>
            <li><strong>Frameworks/Tools:</strong> React, Node.js, PowerBI, Git</li>
            <li><strong>Databases:</strong> MySQL, MongoDB</li>
            <li><strong>Libraries:</strong> NumPy, Pandas, TensorFlow, scikit-learn</li>
            <li><strong>Soft Skills:</strong> Problem-Solving, Critical Thinking, Communication</li>
          </ul>
        </motion.div>
      </section>

      {/* Projects */}
      <section className="p-8 bg-gradient-to-r from-blue-100 to-white">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Projects</h2>

          <div className="mb-6">
            <h3 className="text-2xl font-bold">🔧 Computer Maintenance and Management System</h3>
            <p className="text-lg">Technologies: HTML, CSS, JavaScript, PHP, XAMPP</p>
            <p className="mt-2">
              This system allows lab in-charges or technicians to raise maintenance complaints, generating a token system for efficient tracking.
              A dashboard provides coordinators the ability to assign tasks to workers by ID, promoting streamlined communication and resolution.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-bold">🧠 Finding Missing Persons using AI</h3>
            <p className="text-lg">Technologies: Python, CNN, Flask, Face Recognition, TensorFlow</p>
            <p className="mt-2">
              This AI-powered project analyzes pre-recorded images and videos using facial recognition to find missing persons by comparing
              features with a known database. It supports case management, automatic matched-frame storage, and uses Twilio for real-time
              notifications to help investigation authorities act quickly.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Certifications */}
      <section className="p-8 bg-white">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Certifications</h2>
          <ul className="list-disc list-inside text-lg space-y-1">
            <li>Java Full Stack - Wipro TalentNext Program</li>
            <li>Python for Data Science - NPTEL</li>
            <li>Blockchain and its Applications - NPTEL</li>
            <li>JavaScript and PHP - Great Learning</li>
            <li>AI Fundamentals - IBM SkillBuild</li>
          </ul>
        </motion.div>
      </section>

      {/* Contact */}
      <section className="p-8 bg-blue-50">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Contact</h2>
          <p className="text-lg">Email: <a href="mailto:janjanamsravanthi@gmail.com" className="text-blue-600">janjanamsravanthi@gmail.com</a></p>
          <p className="text-lg">Phone: +91-9110599762</p>
        </motion.div>
      </section>

      <footer className="text-center text-sm p-4 bg-blue-700 text-white">
        © 2025 Janjanam Sravanthi. All rights reserved.
      </footer>
    </div>
  );
};

export default Portfolio;