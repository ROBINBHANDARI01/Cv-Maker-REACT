import { useState } from "react";
import './experience.css'
function SkillsForm(){

    const [skills,setSkills] = useState([])

    function addSkill(){
        setSkills(prev => [...prev,
            { 
            skillType:"",
            skillName:""
            }
        ])
    }

    

    return(
        <>
        {skills.map((skl,index)=>(

        <div
        key={index}
        className="skills-div">
           <h3>Skill Title:- </h3>
            <input
            placeholder="Front Technologies"

            />

            <h3>Skill Name:- </h3>
            <input
            placeholder="HTML5, CSS3, JavaScript (ES6+), React.js, Responsive Design, Flexbox, CSS Grid"
            />
           
        </div>
        
        ))
        
}
 <button
            className="add-exp"
            onClick={addSkill}
            >Add more skill</button>
        </>
    );
}

export default SkillsForm;