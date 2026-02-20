import { useResume } from "../../context/ResumeContext";
import './experience.css'
function SkillsForm() {

    const { resume, dispatch} = useResume();

    return (
        <>
        <h2>Skills </h2>
        
            {resume.skills.map((skl, index) => (

                <div
                    key={index}
                    className="skills-div">
    
                    <label htmlFor="skill"><h4>Skill Category Name</h4></label>
                    <input
                        placeholder="Front Technologies"
                        value={skl.skillType}
                        onChange={(e) => 
                            dispatch({
                            type: "update_Array_Item",
                            section:"skills",
                            index,
                            field: "skillType",
                            value: e.target.value,
                        })}
                    />


                    {skl.skillsList.map((point, indexPoint) => (
                        <div className="bullet"
                        key={indexPoint}
                            
                        >
                            <label htmlFor="skills"><h4>Skills</h4></label>
                            <input
                            name="skills"
                            key={indexPoint}
                                placeholder="HTML5, CSS3, JavaScript (ES6+), React.js, Responsive Design, Flexbox, CSS Grid"
                                value={point}
                                onChange={(e) => dispatch({
                                    type : "update_Nested_Array",
                                    section: "skills",
                                    field: "skillsList",
                                    index,
                                    subIndex: indexPoint,
                                    value : e.target.value,
                                })}
                            />
                            <button onClick={() => dispatch({
                                type: "add_Bullet",
                                section:"skills",
                                index,
                                field:"skillsList"
                            })}> Add Bullet Points</button>

                            <button
                                onClick={() => dispatch({
                                    type: "remove_Bullet",
                                    section: "skills",
                                    index,
                                    subIndex : indexPoint,
                                    field:"skillsList"

                                })}
                            >Remove Bullet</button>
                        </div>



                    ))}

                    <button className="rem-exp"
                    disabled={resume.skills.length === 1}
                    onClick={() =>
                        dispatch({
                            type : "remove_Item",
                            section: "skills",
                            index
                        })
                    }
                >Remove Skill 
                    </button>

                    <button
                        className="add-exp"
                        onClick={()=>
                            dispatch({
                                type: "add_Item",
                                section : "skills",
                                newItem: {
                                     skillType: "",
                                    skillsList:[""]
                                },
                            })
                        }
                    >Add more skill</button>
                </div>
            ))}
        </>
    );
}

export default SkillsForm;