import { useResume } from "../../context/ResumeContext";
import "./experience.css";
function Projects() {
  const {
    resume,
    updateBullet,
    updateSection,
    addProject,
    addUniBullet,
    removeFieldItem,
  } = useResume();
  return (
    <>
    <h2>Projects </h2>
      {resume.projects.map((proj, index) => (
        <div key={index} className="projectUnit">
          
          <lable
          for="projname"
          ><h4>Project Title</h4></lable>

          <input
          name="projname"
            placeholder="Project Name"
            value={proj.projectName}
            onChange={(e) =>
              updateSection(index, "projectName", e.target.value, "projects")
            }
          />

            <lable for="descrip"><h4>Project Description</h4></lable>
          <input
          name="descrip"
            placeholder="Project Description"
            value={proj.projectDescription}
            onChange={(e) =>
              updateSection(
                index,
                "projectDescription",
                e.target.value,
                "projects",
              )
            }
          />
           <lable for="detail"><h4>Technologies Used</h4></lable>
          {proj.additionalDetails.map((details, dindex) => (
            <>

             
              <input
                key={dindex}
                placeholder="Add detail"
                value={details}
                onChange={(e) =>
                  updateBullet(
                    index,
                    dindex,
                    e.target.value,
                    "projects",
                    "additionalDetails",
                  )
                }
              />
              <button
                onClick={() =>
                  addUniBullet("projects", index, "additionalDetails")
                }
              >
                Add bulletpoint
              </button>

              <button
                onClick={() =>
                  removeFieldItem({
                    field: "projects",
                    index: index,
                    nestedField: "additionalDetails",
                    nestedIndex: dindex,
                  })
                }
              >
                Remove Bullet
              </button>
            </>
          ))}

          <button
          className="add-exp"
          onClick={addProject}>Add Project</button>

          <button
            className="rem-exp"
            disabled={resume.projects.length === 1}
            onClick={() =>
              removeFieldItem({
                field: "projects",
                index: index,
              })
            }
          >
            Remove Skill
          </button>
        </div>
      ))}
    </>
  );
}

export default Projects;
