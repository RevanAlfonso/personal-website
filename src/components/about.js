import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../AboutTabs.css";
import { FaUserAlt, FaCode } from "react-icons/fa";
import { GiToolbox } from "react-icons/gi";
import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Gambar Tools
import iconVscode from "../assets/img/visual-studio.png";
import iconGit from "../assets/img/social.png";
import iconGithub from "../assets/img/github.png";
import iconJs from "../assets/img/js.png";
import iconPhp from "../assets/img/php.png";
import iconReact from "../assets/img/react.png";
import iconXampp from "../assets/img/xampp.png";
import iconSql from "../assets/img/sql-server.png";
import iconLaravel from "../assets/img/laravel.png";
import iconCanva from "../assets/img/canva.png";
import iconFigma from "../assets/img/figma.png";

const AboutTabs = () => {
  return (
    <div className="main-wrapper">
      <section className="about-container">
        <div className="about-tabs" id="about">
          <Tabs>
            <TabList>
              <Tab><FaUserAlt className="tab-icon" /> About Me</Tab>
              <Tab><FaCode className="tab-icon" /> Skills</Tab>
              <Tab><GiToolbox className="tab-icon" /> Tools</Tab>
            </TabList>

            <TabPanel>
              <div className="tab-content">
                <h3>Hi, I'm Revan Junior 👋</h3>
                <p>
                  I'm a fullstack developer and UI/UX designer with a love for clean code and clean design. I build responsive web apps using React, PHP, and more. Always learning, always creating!
                </p>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="tab-content">
                <div className="skill-bars">
                  {[
                    { value: 80, label: "Web Developer" },
                    { value: 65, label: "UI/UX Designer" },
                    { value: 40, label: "Graphic Design" },
                  ].map((skill, i) => (
                    <div className="skill-item" key={i}>
                      <CircularProgressbar
                        value={skill.value}
                        text={`${skill.value}%`}
                        styles={buildStyles({
                          textColor: "#1F1F1F",
                          pathColor: "#5c7aea",
                          trailColor: "#D4DAE9",
                        })}
                      />
                      <p>{skill.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="tab-content">
                <h3>Tools & Technologies</h3>
                <div className="tools-grid">
                  {[{
                    icon: iconVscode, label: "VS Code"
                  }, {
                    icon: iconGit, label: "Git"
                  }, {
                    icon: iconGithub, label: "GitHub"
                  }, {
                    icon: iconJs, label: "JavaScript"
                  }, {
                    icon: iconPhp, label: "PHP"
                  }, {
                    icon: iconReact, label: "React"
                  }, {
                    icon: iconLaravel, label: "Laravel"
                  }, {
                    icon: iconXampp, label: "XAMPP"
                  }, {
                    icon: iconSql, label: "SQL Server"
                  }, {
                    icon: iconFigma, label: "Figma"
                  }, {
                    icon: iconCanva, label: "Canva"
                  }].map((tool, i) => (
                    <div className="tool-card" key={i}>
                      <img src={tool.icon} alt={tool.label} />
                      <p>{tool.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </section>
      </div>
  );
};

export default AboutTabs;
