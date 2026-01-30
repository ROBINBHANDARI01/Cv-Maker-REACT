import { useResume } from "../../context/ResumeContext";
import './experience.css'
function AboutForm(){
    const {resume, updateNormal} = useResume()
    return(
        <div className="About-Container">
            <h2>Professional Summary: </h2>
           <textarea
           placeholder="Professional Summary "
            value={resume.about.aboutYou}
            onChange={(e)=> updateNormal("aboutYou",e.target.value, "about")}
            />
        </div>
    );}
export default AboutForm; 