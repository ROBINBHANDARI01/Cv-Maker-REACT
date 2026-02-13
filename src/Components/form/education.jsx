import { useResume } from "../../context/ResumeContext";
import "./experience.css";
function Education() {
  const { resume, updateSection, removeFieldItem, addEducation } = useResume();

  return (
    <>
      {resume.education.map((edu, index) => (
        <div key={index} className="education-box">
          <h2>Education: </h2>

          <lable for="Course"><h4>Institution Name</h4></lable>
          <input
          name="Course"
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

          
            <label for="degree"><h4>Degree</h4></label>
            <input
            name="degree"
            type="text"
            placeholder="Course"
            value={edu.educationTitle}
            onChange={(e)=>updateSection(index,"educationTitle",e.target.value,"education")}
            ></input>

          

            <lable for="start">
              <h4>Start Date</h4>
            </lable>
          <input
          name="start"
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


            <lable for="end">
              <h4>End Date</h4>
            </lable>
          <input
          name="end"
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
