import { useResume } from "../../context/ResumeContext";
import "./experience.css";

function ExperienceForm() {
  const { resume, addExperience, updateSection, removeFieldItem } = useResume();

  return (
    <>
    <h2>Experience </h2>
      {resume.experience.map((exp, index) => (
        <div key={index} className="experience-box">
        
          <label for="comp"><h4>Company Name: </h4></label>
          <input
          name="comp"
            type="text"
            placeholder="Enter Company Name"
            value={exp.companyName}
            onChange={(e) =>
              updateSection(index, "companyName", e.target.value, "experience")
            }
          />

    
           <label for="role"><h4>Job Title</h4></label>
          <input
          name="role"
            placeholder="Role"
            value={exp.role}
            onChange={(e) =>
              updateSection(index, "role", e.target.value, "experience")
            }
          />



          <div className="date">
            <div>

              <label for="start"><h4>Start Date</h4></label>

              <input
              name="start"
                type="month"
                placeholder="Enter Company Name"
                value={exp.start}
                onChange={(e) =>
                  updateSection(index, "start", e.target.value, "experience")
                }
              />
            </div>

            <div>

              <lable for="end"><h4>End Date</h4></lable>
              <input
              name="end"
                type="month"
                placeholder="Enter Company Name"
                value={exp.end}
                onChange={(e) =>
                  updateSection(index, "end", e.target.value, "experience")
                }
              />
            </div>
          </div>


          <lable for="description"><h4>Description / Responsibilities</h4></lable>
          <input
          name="description"
            type="text"
            value={exp.description}
            onChange={(e) =>
              updateSection(index, "description", e.target.value, "experience")
            }
          />

          <button
            className="rem-exp"
            onClick={() =>
              removeFieldItem({
                field: "experience",
                index: index,
              })
            }
          >
            Remove Experience
          </button>
        </div>
      ))}
      <button className="add-exp" onClick={addExperience}>

        Add New Experience
      </button>
    </>
  );
}

export default ExperienceForm;
