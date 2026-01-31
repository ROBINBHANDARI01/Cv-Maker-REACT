import { useResume } from "../../context/ResumeContext";
import './Template1.css'
function Template1() {
    const { resume, formatMonthYear} = useResume();
    return (
        <div className="border">
    
            <div className="general-info">
                <h1>{resume.general.candidateName}</h1>
                <p className="Job-title">{resume.general.role}</p><hr></hr>

                <div className="User-details">
                    <p>{resume.general.address} {<b>|</b>} {resume.general.mobile} {<b>|</b>} {resume.general.email}</p>
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

                {
                    resume.experience.map((exp, index) => {
                        return (
                            <div key={index} className="Exp-box">
                                <ul><li>
                                    <h3>{exp.companyName}</h3>
                                </li>  </ul>
                                <p>{exp.role}</p>
                                <p>{formatMonthYear(exp.start)} - {exp.end ? formatMonthYear(exp.end) : "Present"}
                                </p>
                                <p>{exp.description}</p>
                            </div>

                        )

                    })

                }
            
            </div >
            <h2>Skills</h2>
            <hr></hr>
            {
                resume.skills.map((skl, index) => (
                    <div key={index} className="Skill-container">
                        <h3>{skl.skillType}</h3>
                        <ul>
                            {skl.skillsList.map((name, indx) => (
                                <div
                                    key={indx}>

                                    <li>{name}</li>
                                </div>
                            ))}

                        </ul>
                    </div>
                ))
            }

            <h2>Projects</h2>
            <hr></hr>

            {
                resume.projects.map((proj, index) => (
                    <div
                        className="project"
                        key={index}>

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
                ))
            }


        </div>
    );
}

export default Template1;