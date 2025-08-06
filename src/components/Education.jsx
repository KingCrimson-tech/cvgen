import React from 'react';
import './../styles/Education.css';

function Education({ education, onChange, onAdd }) {
  return (
    <div className="education">
      <h2>Education</h2>
      {education.map((edu, index) => (
        <form key={index}>
          <input
            type="text"
            name="school"
            placeholder="School"
            value={edu.school}
            onChange={(e) => onChange(e, index)}
          />
          <input
            type="text"
            name="degree"
            placeholder="Degree"
            value={edu.degree}
            onChange={(e) => onChange(e, index)}
          />
          <input
            type="text"
            name="graduationDate"
            placeholder="Graduation Date"
            value={edu.graduationDate}
            onChange={(e) => onChange(e, index)}
          />
        </form>
      ))}
      <button onClick={onAdd}>Add Education</button>
    </div>
  );
}

export default Education;