import { NavLink } from "react-router-dom"

import "./nav.css"

function Navbar(){
    return(
        <>
        
        <div className="Nav-Bar">

            <NavLink to="/dashboard/general"><button className="navBtn">General</button></NavLink>
            <NavLink to="/dashboard/about"><button className="navBtn">About</button></NavLink>
            <NavLink to="/dashboard/experience"><button className="navBtn">Experience</button></NavLink>
            <NavLink to="/dashboard/skills"><button className="navBtn">Skills</button></NavLink>
            <NavLink to="/dashboard/projects"><button className="navBtn">Project</button></NavLink>
            <NavLink to="/dashboard/education"><button className="navBtn">Education</button></NavLink>
            <button
            className="print"
          onClick={()=>window.print()}
          >Print</button>
        </div>
        </>
    )
}

export default Navbar