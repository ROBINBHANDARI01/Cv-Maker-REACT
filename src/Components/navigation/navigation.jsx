import Navbar from "../form/navbar"
import Template1 from "../Template/Template1";
import GeneralForm from '../form/generalForm'
import AboutForm from '../form/aboutForm'
import ExperienceForm from "../form/experienceForm";
import SkillsForm from "../form/skillsForm";
import Education from "../form/education";
import Projects from "../form/projects";
import '../../Style/App.css'


export default function Navigation(){
    return(
        <>
        <Navbar></Navbar>
        <div>
            <GeneralForm></GeneralForm>
            <AboutForm></AboutForm>
            <ExperienceForm></ExperienceForm>
            <SkillsForm></SkillsForm>
            <Education></Education>
            <Projects></Projects>
        </div>
        <Template1></Template1>
        </>
    )
}