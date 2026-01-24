import { useResume } from "../../context/ResumeContext";
import './experience.css'
function AboutForm(){
    const {resume, updateAbout} = useResume()
    return(
        <div className="About-Container">
            <h2>Professional Summary: </h2>
           <textarea
           placeholder="About you"
            value={resume.about.aboutYou}
            onChange={(e)=> updateAbout("aboutYou",e.target.value)}
            />
        </div>
    );}
export default AboutForm; 