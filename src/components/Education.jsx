import React from 'react';
import './../styles/Education.css';

function Education({ education, onChange, onAdd, onDelete }) {
  return (
    <div className="education">
      <h2>Education</h2>
      {education.map((edu, index) => (
        <div key={index} className="education-entry">
          <form>
            <input
              type="text"
              name="school"
              placeholder="e.g., University of California, Berkeley"
              value={edu.school}
              onChange={(e) => onChange(e, index)}
            />
            <input
              type="text"
              name="degree"
              placeholder="e.g., Bachelor of Science in Computer Science"
              value={edu.degree}
              onChange={(e) => onChange(e, index)}
            />
            <input
              type="text"
              name="graduationDate"
              placeholder="e.g., May 2025"
              value={edu.graduationDate}
              onChange={(e) => onChange(e, index)}
            />
          </form>
          <button onClick={() => onDelete(index)}>Delete</button>
        </div>
      ))}
      <button onClick={onAdd}>Add Education</button>
    </div>
  );
}

export default Education;