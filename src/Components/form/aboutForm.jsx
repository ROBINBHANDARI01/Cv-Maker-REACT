import { useResume } from "../../context/ResumeContext";
import Navbar from "./navbar";
import "./experience.css";
function AboutForm() {
  const { resume, dispatch } = useResume();
  return (
    <div className="About-Container">
      <div>
        <Navbar></Navbar>
      </div>
      <h2>Professional Summary: </h2>

      <label for="about">
        <h4>Professional Summary / About Me</h4>
      </label>
      <textarea
        name="about"
        placeholder="Professional Summary "
        value={resume.about.aboutYou}
        onChange={(e) =>
          dispatch({
            type: "update_Normal_Field",

            payload: {
              section: "about",
              field: "aboutYou",
              value: e.target.value,
            },
          })
        }
      />
    </div>
  );
}
export default AboutForm;
