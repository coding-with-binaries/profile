import React from 'react';
import './Skills.css';
import data from './data';

export default function () {
  return (
    <>
      <div className="skills-heading">
        <span>Skills</span>
      </div>
      <div className="skills-grid">
        {data.map((skill, i) => {
          const Icon = skill.icon;
          return (
            <div key={i} className="skill-grid">
              <div className="skill-icon">
                <Icon size="240px" />
              </div>
              <span className="skill-name">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}
