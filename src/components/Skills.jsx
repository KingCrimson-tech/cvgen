import React from 'react';
import './../styles/Skills.css';

function Skills({ skills, currentSkill, onSkillChange, onAdd, onDelete }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onAdd();
    }
  };

  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="skills-form">
        <input
          type="text"
          placeholder="Add a skill and press Enter"
          value={currentSkill}
          onChange={onSkillChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={onAdd}>Add Skill</button>
      </div>
      <div className="skills-list">
        {skills.map((s, index) => (
          <span key={index} className="skill-tag">
            {s}
            <button onClick={() => onDelete(index)}>x</button>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skills;