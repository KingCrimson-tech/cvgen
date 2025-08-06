import { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import CVPreview from './components/CVPreview';
import './styles/App.css';

function App() {
  const [generalInfo, setGeneralInfo] = useState({});
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  return (
    <div className="App">
      <div className="cv-form">
        <GeneralInfo setGeneralInfo={setGeneralInfo} />
        <Education setEducation={setEducation} />
        <Experience setExperience={setExperience} />
      </div>
      <div className="cv-preview">
        <CVPreview
          generalInfo={generalInfo}
          education={education}
          experience={experience}
        />
      </div>
    </div>
  );
}

export default App;
