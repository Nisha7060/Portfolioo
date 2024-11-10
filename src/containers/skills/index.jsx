import React, { useState, useEffect } from "react";
import { Animate } from "react-simple-animate";
import PageHeaderContent from "../../components/pageHeaderContent";
import { skillsData } from "./utils";
import "./styles.scss";
import { Line } from "rc-progress";
const Skills = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "My Skills";
  const typingSpeed = 100;

  useEffect(() => {
    let currentIndex = 0;
    const typeText = () => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.slice(0, currentIndex + 1)); // Type one character at a time
        currentIndex++;
        setTimeout(typeText, typingSpeed);
      }
    };
    typeText();
  }, []);

  return (
    <section id="skills" className="skills">
      <div className="matrix-background"></div>
      <div className="hacker-header-wrapper">
        <h1 className="hacker-header">
          {typedText}
          <span className="cursor">|</span> {/* Blinking cursor */}
        </h1>
      </div>
      <div className="skills__content-wrapper">
        {skillsData.map((item, i) => (
          <div key={i} className="skills__content-wrapper__card royal-card">
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{ transform: "scale(0)" }}
              end={{ transform: "scale(1)" }}
            >
              <h3 className="skills__content-wrapper__card__category-text">
                {item.label}
              </h3>
              <div className="skills__content-wrapper__card__progressbar-container">
                {item.data.map((skillItem, j) => (
                  <div className="progressbar-wrapper" key={j}>
                    <p className="skill-name">{skillItem.skillName}</p>
                    <Line
                      percent={skillItem.percentage}
                      strokeWidth="2"
                      strokeColor="var(--neon-green)"
                      trailWidth="2"
                      strokeLinecap="square"
                    />
                  </div>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
