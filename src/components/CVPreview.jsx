import React from 'react';
import './../styles/CVPreview.css';

function CVPreview({ generalInfo, education, experience, skills }) {
  return (
    <div className="cv-preview">
      <div className="general-info-preview">
        <h2>{generalInfo.name}</h2>
        <p>{generalInfo.email}</p>
        <p>{generalInfo.phone}</p>
      </div>
      <div className="education-preview">
        <h3>Education</h3>
        {education.map((edu, index) => (
          <div key={index}>
            <p>
              <strong>{edu.school}</strong>
            </p>
            <p>
              {edu.degree} - {edu.graduationDate}
            </p>
          </div>
        ))}
      </div>
      <div className="experience-preview">
        <h3>Experience</h3>
        {experience.map((exp, index) => (
          <div key={index}>
            <p>
              <strong>{exp.company}</strong>
            </p>
            <p>
              {exp.position} ({exp.startDate} - {exp.endDate})
            </p>
            <ul>
              {exp.points &&
                exp.points
                  .split('\n')
                  .map((point, i) => <li key={i}>{point}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="skills-preview">
        <h3>Skills</h3>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CVPreview;
