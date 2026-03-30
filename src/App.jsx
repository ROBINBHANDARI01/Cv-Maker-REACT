import { Route, Routes } from "react-router-dom";

import Homepage from "./Components/home/homepage";
import HomeNav from "./Components/home/homeNav";
import Navigation from "./Components/navigation/navigation";


import GeneralForm from './Components/form/generalForm'
import AboutForm from './Components/form/aboutForm'
import ExperienceForm from "./Components/form/experienceForm";
import SkillsForm from "./Components/form/skillsForm";
import Education from "./Components/form/education";
import './Style/App.css'

import Projects from "./Components/form/projects";
import Template1 from "./Components/Template/Template1";


function App(){
  return(
  

    <div className='Main-Container'>

      <nav>
        <HomeNav/>
      </nav>
       
         <Routes>
            <Route path="/" element={<Homepage/>}></Route>          
            <Route path="/navigation" element ={<Navigation></Navigation>}></Route>
            <Route path="/homenav" element ={<Homepage></Homepage>}></Route>
            <Route path="/general" element ={<GeneralForm/>} />
            <Route path="/about" element ={<AboutForm/>} />
            <Route path="/experience" element ={<ExperienceForm/>} />
            <Route path="/skills" element ={<SkillsForm/>} />
            <Route path="/projects" element ={<Projects/>} />
            <Route path="/education" element={<Education/>}/>
         </Routes>
        
        <div>
          
        </div>
    </div>

  )
}

export default App;
