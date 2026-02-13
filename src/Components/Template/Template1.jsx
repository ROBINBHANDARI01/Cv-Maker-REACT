import { useResume } from "../../context/ResumeContext";
import "./Template1.css";
function Template1() {
  const { resume, formatMonthYear, log } = useResume();
  return (
    <div className="border">
      {log()}

      <div className="general-info">
        <h1>
          {resume.general.firstName} {resume.general.lastName}
        </h1>
        <p className="Job-title">{resume.general.role}</p>
        <hr></hr>

        <div className="User-details">
          <p>
            {resume.general.address} {<b>|</b>} {resume.general.mobile}{" "}
            {<b>|</b>} {resume.general.email}
          </p>
          <p>{resume.general.contact}</p>
        </div>
        <hr></hr>
        <div className="about">
          <h2>Professional Summary</h2>
          <hr></hr>
          <p>{resume.about.aboutYou}</p>
        </div>
      </div>
      <div className="Experience">
        <h2>Experience</h2>
        <hr></hr>

        {resume.experience.map((exp, index) => {
          return (
            <div key={index} className="Exp-box">
              <div className="dateFormat">
                <h3>{exp.companyName}</h3>
                <p>{exp.role}</p>
              <p>{exp.description}</p>

              
              </div>

              <div>
                  <p>
                  {formatMonthYear(exp.start)} -{" "}
                  {exp.end ? formatMonthYear(exp.end) : "Present"}
                </p>
              </div>
              
            </div>
          );
        })}
      </div>
      <h2>Skills</h2>
      <hr></hr>
      {resume.skills.map((skl, index) => (
        <div key={index} className="Skill-container">
          <h3>{skl.skillType}</h3>
          <ul>
            {skl.skillsList.map((name, indx) => (
              <div key={indx}>
                <li>{name}</li>
              </div>
            ))}
          </ul>
        </div>
      ))}

      <h2>Projects</h2>
      <hr></hr>

      {resume.projects.map((proj, index) => (
        <div className="project" key={index}>
          <h3>{proj.projectName}</h3>
          <p>{proj.projectDescription}</p>
          <ul>
            {proj.additionalDetails.map((stack, pointIndex) => (
              <div key={pointIndex}>
                <li>{stack}</li>
              </div>
            ))}
          </ul>
        </div>
      ))}

      <h2>Education</h2>
      <hr></hr>
      {resume.education.map((edu, index) => (
        <div key={index} className="education-container">
          <div className="dateFormat">
            <h3>{edu.educationPlace}</h3>
            <p>{edu.educationTitle}</p>
          </div>

          <p>
            {formatMonthYear(edu.educationStart)} -{" "}
            {edu.educationEnd ? formatMonthYear(edu.educationEnd) : "Present"}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Template1;
