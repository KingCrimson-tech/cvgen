import React from 'react';
import './../styles/Experience.css';

function Experience({ experience, onChange, onAdd, onDelete }) {
  return (
    <div className="experience">
      <h2>Experience</h2>
      {experience.map((exp, index) => (
        <div key={index} className="experience-entry">
          <form>
            <input
              type="text"
              name="company"
              placeholder="e.g., Google"
              value={exp.company}
              onChange={(e) => onChange(e, index)}
            />
            <input
              type="text"
              name="position"
              placeholder="e.g., Software Engineer"
              value={exp.position}
              onChange={(e) => onChange(e, index)}
            />
            <input
              type="text"
              name="startDate"
              placeholder="e.g., June 2022"
              value={exp.startDate}
              onChange={(e) => onChange(e, index)}
            />
            <input
              type="text"
              name="endDate"
              placeholder="e.g., Present"
              value={exp.endDate}
              onChange={(e) => onChange(e, index)}
            />
            <textarea
              name="points"
              placeholder="e.g., Developed a new feature that increased user engagement by 10%"
              value={exp.points}
              onChange={(e) => onChange(e, index)}
            />
          </form>
          <button onClick={() => onDelete(index)}>Delete</button>
        </div>
      ))}
      <button onClick={onAdd}>Add Experience</button>
    </div>
  );
}

export default Experience;