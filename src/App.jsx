import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/form/navbar";
import Template1 from "./Components/Template/Template1";
import GeneralForm from './Components/form/generalForm'
import AboutForm from './Components/form/aboutForm'
import ExperienceForm from "./Components/form/experienceForm";
import SkillsForm from "./Components/form/skillsForm";
import './Style/App.css'

function App(){
  return(
  
    <div className='Main-Container'>
      <Navbar/>
        <section>
        <div className="Form-Section">
         <Routes>
            <Route path="/general" element ={<GeneralForm/>} />
            <Route path="/about" element ={<AboutForm/>} />
            <Route path="/experience" element ={<ExperienceForm/>} />
            <Route path="/skills" element ={<SkillsForm/>} />
         </Routes>
        </div>

        <div className="Resume-Section">
          <Template1></Template1>
        </div>
        </section>
    </div>

  )
}

export default App;
