import { useResume } from "../../context/ResumeContext";
import './experience.css'
function SkillsForm() {

    const { resume, addSkills, updateBullet, removeFieldItem, updateSection, addUniBullet} = useResume();

    return (
        <>
        <h2>Skills </h2>
        
            {resume.skills.map((skl, index) => (

                <div
                    key={index}
                    className="skills-div">
    
                    <label for="skill"><h4>Skill Category Name</h4></label>
                    <input
                        placeholder="Front Technologies"
                        value={skl.skillType}
                        onChange={(e) => updateSection(index, "skillType", e.target.value, "skills")}
                    />


                    {skl.skillsList.map((point, indexPoint) => (
                        <div className="bullet"
                            
                        >
                            <label for="skills"><h4>Skills</h4></label>
                            <input
                            name="skills"
                            key={indexPoint}
                                placeholder="HTML5, CSS3, JavaScript (ES6+), React.js, Responsive Design, Flexbox, CSS Grid"
                                value={point}
                                onChange={(e) => updateBullet(index, indexPoint, e.target.value,"skills","skillsList")}
                            />
                            <button onClick={() => addUniBullet("skills",index,"skillsList")}> Add Bullet Points</button>

                            <button
                                onClick={() => removeFieldItem({
                                    field: "skills",
                                    index: index,
                                    nestedField: "skillsList",
                                    nestedIndex: indexPoint
                                })}
                            >Remove Bullet</button>
                        </div>



                    ))}

                    <button className="rem-exp"
                    disabled={resume.skills.length === 1}
                    onClick={() =>
                        removeFieldItem({
                            field: "skills",
                            index: index
                        })
                    }
                >Remove Skill 
                    </button>

                    <button
                        className="add-exp"
                        onClick={addSkills}
                    >Add more skill</button>
                </div>
            ))}
        </>
    );
}

export default SkillsForm;