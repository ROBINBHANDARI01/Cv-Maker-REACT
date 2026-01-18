import { useState, useEffect } from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import About from './Components/resume-preview/about';
import General_info from './Components/resume-preview/general-Info';
import Experience from './Components/resume-preview/experience';
import Skills from './Components/resume-preview/skills';
import Education from './Components/resume-preview/education';
import Additional from './Components/resume-preview/additional';


import GeneralForm from '../src/Components/form/generalForm';
import AboutForm from './Components/form/aboutForm';
import ExperienceForm from './Components/form/experienceForm';
import SkillsForm from './Components/form/skills'
import './Style/App.css';

function App() {



  // 1️⃣ Preview state (default resume)
  const [resume, setResume] = useState({
    general: {
      candidateName: "Robin Singh Bhandari",
      role: "FRONTEND DEVELOPER | REACT DEVELOPER | ASPIRING DEVOPS ENGINEER",
      address: "Sarai Faridabad , Haryana , India",
      mobile: "+91 7417629458",
      email: "robinbhandari202@gmail.com",
      contact: "LinkedIn: linkedin.com/in/robin-bhandari-02120428a | GitHub: github.com/ROBINBHANDARI01"
    },
    about: {
      aboutYou: `Entry-level Frontend Developer pursuing Full Stack Development...`
    },

    experience: [{

      experienceTitle: "Weather Forecast Web Application | HTML, CSS, JavaScript",
      aboutExp: "Developed a responsive weather application..."

    }],
    skills: { skill: "Frontend Technologies" },
    education: { educationType: "Bachelor In Computer Applications", educationDuration: "2022 - 2025", educationSource: "Graphic Era Hill University" },
    addition: { additionalDetails: "Strong understanding of frontend fundamentals..." }
  });



  //Navigation functions 

  function gen(){
    return(
      <>
    <h2><u>General Info</u></h2>
        <GeneralForm
          data={inputs.general}
          setData={(newData) => setInputs(prev => ({ ...prev, general: newData }))}
        />
        </>
    )
  }

  // 2️⃣ Inputs state (starts empty OR restored from localStorage)
  const savedInputs = JSON.parse(localStorage.getItem("resumeInputs")) || {
    general: { candidateName: "", role: "", address: "", mobile: "", email: "", contact: "" },
    about: { aboutYou: "" },
    experience: { experienceTitle: "", aboutExp: "" },
    skills: { skill: "" },
    education: { educationType: "", educationDuration: "", educationSource: "" },
    addition: { additionalDetails: "" }
  };

  const [inputs, setInputs] = useState(savedInputs);

  // 3️⃣ Save inputs to localStorage on every change
  useEffect(() => {
    localStorage.setItem("resumeInputs", JSON.stringify(inputs));
  }, [inputs]);

  return (
    <>
     <div className='Navbar'>
        <button 
        className='nav-btn'
        onClick={gen}
        >General info</button>
         <button className='nav-btn'>Additional Info</button>
        <button className='nav-btn'>Experience</button>
        <button className='nav-btn'>Skills</button>
        <button className='nav-btn'>About</button>
        <button className='nav-btn'>Education</button>
       </div>
    <div className='Main'>
     

      {/* Form Section */}
      <div className='form-section'>

        

        <AboutForm
          data={inputs.about}
          setData={(newData) => setInputs(prev => ({ ...prev, about: newData }))}
        />


        <div className='skl'>
        <u><h2>Experience</h2></u>
        <ExperienceForm
          data={inputs.experience}
          setData={(newData) => setInputs(prev => ({ ...prev, experience: newData }))}
        />
        </div>
        
        <div className='skl'>
        <u><h2>Add Your Skills</h2></u>
        <SkillsForm />
</div>


        <button onClick={() => {
          // Reset inputs to empty
          if (window.confirm("Are you sure you want to reset the form? All progress will be lost!")) {
            const emptyInputs = {
              general: { candidateName: "", role: "", address: "", mobile: "", email: "", contact: "" },
              about: { aboutYou: "" },
              experience: { experienceTitle: "", aboutExp: "" },
              skills: { skill: "" },
              education: { educationType: "", educationDuration: "", educationSource: "" },
              addition: { additionalDetails: "" }
            };
            setInputs(emptyInputs);

            // Remove from localStorage
            localStorage.removeItem("resumeInputs");
          }
        }}
          style={{
            marginTop: "20px",
            padding: "8px 16px",
            cursor: "pointer",
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
            borderRadius: "5px"
          }}
        >
          Reset Form
        </button>

      </div>

      {/* Resume Preview Section */}
      <div className='resume-section'>
        <h1> CV Preview</h1>
        <div className='resume'>
          <General_info
            candidateName={inputs.general.candidateName || resume.general.candidateName}
            role={inputs.general.role || resume.general.role}
            address={inputs.general.address || resume.general.address}
            mobile={inputs.general.mobile || resume.general.mobile}
            email={inputs.general.email || resume.general.email}
            contact={inputs.general.contact || resume.general.contact}
          />

          <About aboutYou={inputs.about.aboutYou || resume.about.aboutYou} />
          <Experience experienceTitle={inputs.experience.experienceTitle || resume.experience.experienceTitle} aboutExp={inputs.experience.aboutExp || resume.experience.aboutExp} />
          <Skills skill={inputs.skills.skill || resume.skills.skill} />
          <Education
            educationType={inputs.education.educationType || resume.education.educationType}
            educationDuration={inputs.education.educationDuration || resume.education.educationDuration}
            educationSource={inputs.education.educationSource || resume.education.educationSource}
          />
          <Additional additionalDetails={inputs.addition.additionalDetails || resume.addition.additionalDetails} />
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
