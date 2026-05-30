import { useResume } from "../../context/ResumeContext";
import "./experience.css";

function ExperienceForm() {
  const { resume, dispatch } = useResume();

  return (
    <>
      <h2>Experience </h2>
      {resume.experience.map((exp, index) => (
        <div key={index} className="experience-box">
          <label htmlFor="comp">
            <h4>Company Name: </h4>
          </label>
          <input
            name="comp"
            type="text"
            placeholder="Enter Company Name"
            value={exp.companyName}
            onChange={(e) =>
              dispatch({
                type: "update_Array_Item",
                section: "experience",
                index,
                field: "companyName",
                value: e.target.value,
              })
            }
          />

          <label htmlFor="role">
            <h4>Job Title</h4>
          </label>
          <input
            name="role"
            placeholder="Role"
            value={exp.role}
            onChange={(e) =>
              dispatch({
                type: "update_Array_Item",
                section: "experience",
                index,
                field: "role",
                value: e.target.value,
              })
            }
          />

          <div className="date">
            <div>
              <label htmlFor="start">
                <h4>Start Date</h4>
              </label>

              <input
                name="start"
                type="month"
                placeholder="Enter Company Name"
                value={exp.start}
                onChange={(e) =>
                  dispatch({
                    type: "update_Array_Item",
                    section: "experience",
                    index,
                    field: "start",
                    value: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label htmlFor="end">
                <h4>End Date</h4>
              </label>
              <input
                name="end"
                type="month"
                placeholder="Enter Company Name"
                value={exp.end}
                onChange={(e) =>
                  dispatch({
                    type: "update_Array_Item",
                    section: "experience",
                    index,
                    field: "end",
                    value: e.target.value,
                  })
                }
              />
            </div>
          </div>

          <label htmlFor="description">
            <h4>Description / Responsibilities</h4>
          </label>
          <input
            name="description"
            type="text"
            value={exp.description}
            onChange={(e) =>
              dispatch({
                type: "update_Array_Item",
                section: "experience",
                index,
                field: "description",
                value: e.target.value,
              })
            }
          />

          <button
            className="rem-exp"
            onClick={() =>
              dispatch({
                type: "remove_Item",
                section: "experience",
                index,
              })
            }
          >
            Remove Experience
          </button>
        </div>
      ))}
      <button
        className="add-exp"
        onClick={() =>
          dispatch({
            type: "add_Item",
            section: "experience",
            newItem: {
              companyName: "",
              role: "",
              start: "",
              end: "",
              description: "",
            },
          })
        }
      >
        Add New Experience
      </button>
    </>
  );
}

export default ExperienceForm;
