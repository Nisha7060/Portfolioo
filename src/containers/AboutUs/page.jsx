import React from 'react';
import "./Style.scss";
import { ReactTyped } from 'react-typed';

const AboutUs = () => {
  return (
    <div className="about">
      <section className="about__intro">
        <h1 className="about__heading">
          <ReactTyped strings={["WHO AM I?"]} typeSpeed={60} backSpeed={30} loop={false} />
        </h1>
        <h1 className="about__description">
          Hello! I’m <span className="highlight">Nisha Yadav</span>, a highly motivated and detail-oriented software developer with experience in full-stack development, problem-solving, and software engineering principles. Passionate about building scalable and efficient applications.
        </h1>
      </section>

      <section className="about__education">
        <h2>Education</h2>
        <h1><strong>Bachelor of Technology (CSE)</strong> - ABES Engineering College, Ghaziabad (2023 - Present)</h1>
        <h1><strong>Diploma (CSE)</strong> - Km. Mayawati Govt. Girls Polytechnic, Noida (2020 - 2023)</h1>
      </section>

      <section className="about__details">
        <div className="about__card">
          <h2>My Mission</h2>
          <p>To continuously learn and innovate, creating impactful software solutions that enhance user experiences.</p>
        </div>
        <div className="about__card">
          <h2>My Skills</h2>
          <p>Proficient in JavaScript, React, Node.js, Python, Django, Next.js, MySQL, and MongoDB.</p>
        </div>
        <div className="about__card">
          <h2>My Goals</h2>
          <p>To contribute to cutting-edge projects, push technological boundaries, and make a lasting impact in the industry.</p>
        </div>
      </section>

      <section className="about__projects">
        <h2>Projects</h2>
        <h1><strong>College Web Application</strong> - Built with Python, Django, and MySQL for efficient college management.</h1>
        <h1><strong>World Tourism Project</strong> - A MERN stack application for exploring global destinations.</h1>
      </section>
    </div>
  );
};

export default AboutUs;
