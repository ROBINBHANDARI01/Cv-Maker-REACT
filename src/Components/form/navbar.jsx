import { NavLink } from "react-router-dom"
import "./nav.css"
import HomeNav from "../home/homeNav"
function Navbar(){
    return(
        <>
        <HomeNav/>
        <div className="Nav-Bar">

            <NavLink to="/navigation/general"><button className="navBtn">General</button></NavLink>
            <NavLink to="/navigation/about"><button className="navBtn">About</button></NavLink>
            <NavLink to="/navigation/experience"><button className="navBtn">Experience</button></NavLink>
            <NavLink to="/navigation/skills"><button className="navBtn">Skills</button></NavLink>
            <NavLink to="/navigation/projects"><button className="navBtn">Project</button></NavLink>
            <NavLink to="/navigation/education"><button className="navBtn">Education</button></NavLink>
            <button
            className="print"
          onClick={()=>window.print()}
          >Print</button>
        </div>
        </>
    )
}

export default Navbar