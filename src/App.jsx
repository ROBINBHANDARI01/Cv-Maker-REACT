import {BrowserRouter,Link } from "react-router-dom";
import Template1 from "./Components/Template/Template1";
import GeneralForm from './Components/form/generalForm'
import AboutForm from './Components/form/aboutForm'
import ExperienceForm from "./Components/form/experienceForm";
import SkillsForm from "./Components/form/skillsForm";
import './Style/App.css'

function App(){
  return(
    <BrowserRouter>
    <div className='Main-Container'>
        <div className="Nav">
          
            <Link to="/">Home</Link> | {" "}
            <Link to="/GeneralForm">General Info</Link> | {" "}
            <Link to="/AboutForm">About</Link> | {" "}
            <Link to="/ExperienceForm">Experience</Link>
          
        </div>
        <section>
        <div className="Form-Section">
          <div className="From-Container">
          <GeneralForm></GeneralForm>
          <AboutForm></AboutForm>
          <ExperienceForm></ExperienceForm>
          <SkillsForm></SkillsForm>
          </div>
        </div>

        <div className="Resume-Section">
          <Template1></Template1>
        </div>
        </section>
    </div>
    </BrowserRouter>
  )
}

export default App;
