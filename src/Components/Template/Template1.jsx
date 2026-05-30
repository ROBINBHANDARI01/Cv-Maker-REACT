import { useResume } from "../../context/ResumeContext";
import "./Template1.css";
function Template1() {
  const { resume } = useResume();
  return (
    <div className=" border p-5">


      <div className="text-center">
        <h1 className="font-bold text-3xl">
          {resume.general.firstName} {resume.general.lastName}
        </h1>
        <p className="text-[10px]">{resume.general.role}</p>
        

        <div className="User-details">
          <p className="font-light text-[10px]">
            {resume.general.address} {<b>|</b>} {resume.general.mobile}{" "}
            {<b>|</b>} {resume.general.email}
          </p>
          <p className="font-light text-[10px]">{resume.general.contact}</p>
        </div>
        </div>
        <div className="">
          <h2 className="font-bold">Professional Summary</h2>
          <hr className="opacity-30"></hr>
          <p className="font-light text-[11px]">{resume.about.aboutYou}</p>
        </div>

        <h2 className="font-bold">Projects</h2>
      <hr className="opacity-30"></hr>

      {resume.projects.map((proj, index) => (
        <div  key={index}>
          <h3 className="font-bold text-sm mb-1">{proj.projectName}</h3>
          <p className="font-light text-[11px]">{proj.projectDescription}</p>
          <ul className="font-light text-[11px]">
            {proj.additionalDetails.map((stack, pointIndex) => (
              <div key={pointIndex}>
                <li>{stack}</li>
              </div>
            ))}
          </ul>
        </div>
      ))}


      <div className="Experience">
        <h2 className="font-bold">Experience</h2>
        <hr className="opacity-30"></hr>

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
                  {exp.start} -{" "}
                  {exp.end ? exp.end : "Present"}
                </p>
              </div>
              
            </div>
          );
        })}
      </div>
      <h2 className="font-bold">Skills</h2>
      <hr className="opacity-30"></hr>
      {resume.skills.map((skl, index) => (
        <div key={index} className="Skill-container">
          <h3 className="font-bold">{skl.skillType}</h3>
          <ul>
            {skl.skillsList.map((name, indx) => (
              <div key={indx}>
                <li className="font-light text-[11px]">{name}</li>
              </div>
            ))}
          </ul>
        </div>
      ))}

      

      <h2 className="font-bold">Education</h2>
      <hr></hr>
      {resume.education.map((edu, index) => (
        <div key={index} className="education-container">
          <div className="dateFormat">
            <h3>{edu.educationPlace}</h3>
            <p>{edu.educationTitle}</p>
          </div>

          <p>
            {edu.educationStart} -{" "}
            {edu.educationEnd ? edu.educationEnd : "Present"}
          </p>
        </div>
      ))}
    </div>
  
  );
}

export default Template1;
