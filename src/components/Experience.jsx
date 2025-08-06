import React from 'react';
import './../styles/Experience.css';

function Experience({ experience, onChange, onAdd }) {
  return (
    <div className="experience">
      <h2>Experience</h2>
      {experience.map((exp, index) => (
        <form key={index}>
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={exp.company}
            onChange={(e) => onChange(e, index)}
          />
          <input
            type="text"
            name="position"
            placeholder="Position"
            value={exp.position}
            onChange={(e) => onChange(e, index)}
          />
          <input
            type="text"
            name="startDate"
            placeholder="Start Date"
            value={exp.startDate}
            onChange={(e) => onChange(e, index)}
          />
          <input
            type="text"
            name="endDate"
            placeholder="End Date"
            value={exp.endDate}
            onChange={(e) => onChange(e, index)}
          />
          <textarea
            name="points"
            placeholder="Key achievements (one per line)"
            value={exp.points}
            onChange={(e) => onChange(e, index)}
          />
        </form>
      ))}
      <button onClick={onAdd}>Add Experience</button>
    </div>
  );
}

export default Experience;