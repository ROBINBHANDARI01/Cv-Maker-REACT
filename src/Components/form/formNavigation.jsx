import { NavLink } from "react-router-dom"
import { User, GraduationCap, Award,FileText , BriefcaseBusiness,FolderGit2 } from 'lucide-react';

import "./nav.css"

function Navbar(){
    return(
        <>
        
        <div className="flex md:flex-col p-3 md:p-8 gap-1">
            
            {/* General */}
            <NavLink to="/dashboard/general" className="navBtn p-2 flex flex-col md:flex-row items-center min-w-20 bg-amber-200 gap-2">
                <User size={20} />
                <span>Personal Info</span>
                
            </NavLink>

            {/* Summary */}
            <NavLink to="/dashboard/about" className="navBtn p-2 flex flex-col md:flex-row bg-amber-200 min-w-20 items-center gap-2">
                <FileText size={18}/>
                <span>Summary</span>
            </NavLink>

            {/* Experience */}
            <NavLink to="/dashboard/experience" className="navBtn p-2 flex flex-col md:flex-row bg-amber-200 min-w-20 items-center gap-2">
                <BriefcaseBusiness size={18}/>
                <span>Experience</span>
            </NavLink>

            {/* Skills */}
            <NavLink to="/dashboard/skills" className="navBtn p-2 flex flex-col md:flex-row bg-amber-200 min-w-20 items-center gap-2">
                <Award size={18} />
                <span>Skills</span>
            </NavLink>

            {/* Projects */}
            <NavLink to="/dashboard/projects" className="navBtn p-2 flex flex-col md:flex-row bg-amber-200 min-w-20 items-center gap-2">
                <FolderGit2 size={18} />
                <span>Project</span>
            </NavLink>

            {/* Education */}
            <NavLink to="/dashboard/education" className="navBtn p-2 flex flex-col md:flex-row bg-amber-200 items-center gap-2">
                <GraduationCap size={18} />
                <span>Education</span>
            </NavLink>

        </div>
        </>
    )
}

export default Navbar