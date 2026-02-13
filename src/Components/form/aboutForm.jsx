import { useResume } from "../../context/ResumeContext";
import "./experience.css";
function AboutForm() {
  const { resume, updateNormal } = useResume();
  return (
    <div className="About-Container">
      <h2>Professional Summary: </h2>

      <label for="about"><h4>Professional Summary / About Me</h4></label>
      <textarea
        name="about"
        placeholder="Professional Summary "
        value={resume.about.aboutYou}
        onChange={(e) => updateNormal("aboutYou", e.target.value, "about")}
      />
    </div>
  );
}
export default AboutForm;
