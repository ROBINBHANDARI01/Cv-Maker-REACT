import { NavLink } from "react-router-dom"
import "./nav.css"
function Navbar(){
    return(
        <div className="Nav-Bar">
            <NavLink to="/general"><p className="navBtn">General</p></NavLink>
            <NavLink to="/about"><p className="navBtn">About</p></NavLink>
            <NavLink to="/experience"><p className="navBtn">Experience</p></NavLink>
            <NavLink to="/skills"><p className="navBtn">Skills</p></NavLink>
            <NavLink to="/projects"><p className="navBtn">Projects</p></NavLink>
            <button
            className="print"
          onClick={()=>window.print()}
          >Print</button>
        </div>
    )
}

export default Navbar