import { useResume } from "../../context/ResumeContext"

function Projects() {
    const { resume, updateBullet , updateSection,addProject, checkingData} = useResume();
    return (
        <>
            {
                resume.projects.map((proj, index) => (
                    <div
                        key={index}
                        className="projectUnit">
                        <h2>Project Name</h2>

                        <input
                            placeholder="Project Name"
                            value={proj.projectName}
                            onChange={(e) => updateSection(index, "projectName", e.target.value,"projects")}
                        />

                        <input
                            placeholder="Project Description"
                            value={proj.projectDescription}
                            onChange={(e) => updateSection(index, "projectDescription", e.target.value, "projects")}
                        />
                        {proj.additionalDetails.map((details,dindex)=>(
                             <input 
                             key={dindex}
                            placeholder="Add detail"
                            value={details}
                            onChange={(e) => updateBullet(index, dindex, e.target.value, "projects","additionalDetails")}
                        />
                    
                        ))}
                       <button
                       onClick={checkingData}
                       >Check data</button>
                    <button 
                    onClick={addProject}
                    >Add Project</button>
                    </div>

                    
                ))
            }
        </>
    )

}

export default Projects