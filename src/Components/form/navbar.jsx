import { NavLink } from "react-router-dom"
import "./nav.css"
function Navbar(){
    return(
        <div className="Nav-Bar">
            <NavLink to="/general">General</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/experience">Experience</NavLink>
            <NavLink to="/skills">Skills</NavLink>
        </div>
    )
}

export default Navbar