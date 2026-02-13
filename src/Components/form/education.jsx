import { resume } from "react-dom/server";
import { useResume } from "../../context/ResumeContext";
import "./experience.css";
function Education() {
  const { resume, updateSection, removeFieldItem, addEducation } = useResume();

  return (
    <>
      {resume.education.map((edu, index) => (
        <div key={index} className="education-box">
          <h2>Education: </h2>
          <input
            type="text"
            placeholder="Institution name"
            value={edu.educationPlace}
            onChange={(e) =>
              updateSection(
                index,
                "educationPlace",
                e.target.value,
                "education",
              )
            }
          ></input>

          <input
            type="month"
            value={edu.educationStart}
            onChange={(e) =>
              updateSection(
                index,
                "educationStart",
                e.target.value,
                "education",
              )
            }
          ></input>

          <input
            type="month"
            value={edu.educationEnd}
            onChange={(e) =>
              updateSection(index, "educationEnd", e.target.value, "education")
            }
          ></input>

            <button
            className="rem-exp"
            onClick={() =>
              removeFieldItem({
                field: "education",
                index: index,
              })
            }
          >
            Remove Education
          </button>

          <button className="add-exp" onClick={addEducation}>
            Add New Education 
          </button>
        </div>
      ))}
    </>
  );
}

export default Education;
