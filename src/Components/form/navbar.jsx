import { NavLink } from "react-router-dom"
import "./nav.css"
function Navbar(){
    return(
        <div className="Nav-Bar">
            <NavLink to="/general"><button className="navBtn">General</button></NavLink>
            <NavLink to="/about"><button className="navBtn">About</button></NavLink>
            <NavLink to="/experience"><button className="navBtn">Experience</button></NavLink>
            <NavLink to="/skills"><button className="navBtn">Skills</button></NavLink>
            <NavLink to="/projects"><button className="navBtn">Project</button></NavLink>
            <button
            className="print"
          onClick={()=>window.print()}
          >Print</button>
        </div>
    )
}

export default Navbar