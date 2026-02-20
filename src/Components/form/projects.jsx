import { useResume } from "../../context/ResumeContext";
import "./experience.css";
function Projects() {
  const {resume,dispatch} = useResume();
  return (
    <>
    <h2>Projects </h2>
      {resume.projects.map((proj, index) => (
        <div key={index} className="projectUnit">
          
          <label
          htmlFor="projname"
          ><h4>Project Title</h4></label>

          <input
          name="projname"
            placeholder="Project Name"
            value={proj.projectName}
            onChange={(e) =>
              dispatch({
                type: "update_Array_Item",
                section: "projects",
                field: "projectName",
                index,
                value: e.target.value
              })
            }
          />

            <label htmlFor="descrip"><h4>Project Description</h4></label>
          <input
          name="descrip"
            placeholder="Project Description"
            value={proj.projectDescription}
            onChange={(e) =>
              dispatch({
                type: "update_Array_Item",
                section: "projects",
                field: "projectDescription",
                index,
                value: e.target.value
              })
            }
          />
           <label htmlFor="detail"><h4>Technologies Used</h4></label>
          {proj.additionalDetails.map((details, dindex) => (
            <div 
            key={dindex}>

             
              <input
                placeholder="Add detail"
                value={details}
                onChange={(e) =>
                  dispatch({
                  type: "update_Nested_Array",
                  section:"projects",
                  index,
                  subIndex: dindex,
                  value: e.target.value,
                  field: "additionalDetails"

                })
                }
              />
              <button
                onClick={() =>
                  dispatch({
                    type: "add_Bullet",
                    section: "projects",
                    index,
                    field: "additionalDetails"
                  })
                }
              >
                Add bulletpoint
              </button>

              <button
                onClick={() =>
                  dispatch({
                  type: "remove_Bullet",
                  section:"projects",
                  index,
                  field:"additionalDetails",
                  subIndex: dindex 
                  })
                }
              >
                Remove Bullet
              </button>
            </div>
          ))}

          <button
          className="add-exp"
          onClick={()=>
            dispatch({
              type:"add_Item",
              section:"projects",
              newItem:{
                
                projectName: "",
                projectDescription: "",
                additionalDetails: [""]
            
              }
            })
          }
          >Add Project</button>

          <button
            className="rem-exp"
            disabled={resume.projects.length === 1}
            onClick={() =>
              dispatch({
                type: "remove_Item",
                section:"projects",
                index
              })
            }
          >
            Remove Project
          </button>
        </div>
      ))}
    </>
  );
}

export default Projects;
