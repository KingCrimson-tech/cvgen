import { useState, useRef } from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import CVPreview from './components/CVPreview';
import './styles/App.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [education, setEducation] = useState([
    { school: '', degree: '', graduationDate: '' },
  ]);
  const [experience, setExperience] = useState([
    { company: '', position: '', startDate: '', endDate: '', points: '' },
  ]);
  const [skills, setSkills] = useState([]);
  const [currentSkill, setCurrentSkill] = useState('');

  const cvPreviewRef = useRef();

  //Stackoverflow goes brrr
  const handleDownload = () => {
    const input = cvPreviewRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = imgWidth / imgHeight;
      const pdfImageWidth = pdfWidth;
      const pdfImageHeight = pdfImageWidth / ratio;

      let heightLeft = pdfImageHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, pdfImageWidth, pdfImageHeight);
      heightLeft -= pdfHeight;

      while (heightLeft > 0) {
        position = heightLeft - pdfImageHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, pdfImageWidth, pdfImageHeight);
        heightLeft -= pdfHeight;
      }
      pdf.save('cv.pdf');
    });
  };

  const handleGeneralInfoChange = (e) => {
    const { name, value } = e.target;
    setGeneralInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleEducationChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...education];
    list[index][name] = value;
    setEducation(list);
  };

  const handleAddEducation = () => {
    setEducation([
      ...education,
      { school: '', degree: '', graduationDate: '' },
    ]);
  };

  const handleExperienceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...experience];
    list[index][name] = value;
    setExperience(list);
  };

  const handleAddExperience = () => {
    setExperience([
      ...experience,
      { company: '', position: '', startDate: '', endDate: '', points: '' },
    ]);
  };

  const handleAddSkill = () => {
    if (currentSkill.trim() !== '') {
      setSkills([...skills, currentSkill]);
      setCurrentSkill('');
    }
  };

  return (
    <div className="App">
      <div className="cv-form">
        <h1>CVify</h1>
        <GeneralInfo
          generalInfo={generalInfo}
          onChange={handleGeneralInfoChange}
        />
        <Education
          education={education}
          onChange={handleEducationChange}
          onAdd={handleAddEducation}
        />
        <Experience
          experience={experience}
          onChange={handleExperienceChange}
          onAdd={handleAddExperience}
        />
        <Skills
          skills={skills}
          currentSkill={currentSkill}
          onSkillChange={(e) => setCurrentSkill(e.target.value)}
          onAdd={handleAddSkill}
        />
        <button onClick={handleDownload}>Download CV as PDF</button>
      </div>
      <div className="cv-preview" ref={cvPreviewRef}>
        <CVPreview
          generalInfo={generalInfo}
          education={education}
          experience={experience}
          skills={skills}
        />
      </div>
    </div>
  );
}

export default App;