import { useResume } from "../../context/ResumeContext";
import "./experience.css";
function Education() {
  const { resume, dispatch } = useResume();

  return (
    <>
      {resume.education.map((edu, index) => (
        <div key={index} className="education-box">
          <h2>Education: </h2>

          <label htmlFor="Course">
            <h4>Institution Name</h4>
          </label>
          <input
            name="Course"
            type="text"
            placeholder="Institution name"
            value={edu.educationPlace}
            onChange={(e) =>
              dispatch({
                type: "update_Array_Item",
                section: "education",
                index,
                field: "educationPlace",
                value: e.target.value,
              })
            }
          ></input>

          <label htmlFor="degree">
            <h4>Degree</h4>
          </label>
          <input
            name="degree"
            type="text"
            placeholder="Course"
            value={edu.educationTitle}
            onChange={(e) =>
              dispatch({
                type: "update_Array_Item",
                section: "education",
                index,
                field: "educationTitle",
                value: e.target.value,
              })
            }
          ></input>

          <label htmlFor="start">
            <h4>Start Date</h4>
          </label>
          <input
            name="start"
            type="month"
            value={edu.educationStart}
            onChange={(e) =>
              dispatch({
                type: "update_Array_Item",
                section: "education",
                index,
                field: "educationStart",
                value: e.target.value,
              })
            }
          ></input>

          <label htmlFor="end">
            <h4>End Date</h4>
          </label>
          <input
            name="end"
            type="month"
            value={edu.educationEnd}
            onChange={(e) =>
              dispatch({
                type: "update_Array_Item",
                section: "education",
                index,
                field: "educationEnd",
                value: e.target.value,
              })
            }
          ></input>

          <button
            className="rem-exp"
            onClick={() =>
              dispatch({
                type: "remove_Item",
                section: "education",
                index,
              })
            }
          >
            Remove Education
          </button>

          <button
            className="add-exp"
            onClick={() =>
              dispatch({
                type: "add_Item",
                section: "education",
                newItem: {
                  educationPlace: "",
                  educationTitle: "",
                  educationStart: "",
                  educationEnd: "",
                },
              })
            }
          >
            Add New Education
          </button>
        </div>
      ))}
    </>
  );
}

export default Education;
