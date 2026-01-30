import { useResume } from "../../context/ResumeContext";
import './experience.css'
function SkillsForm() {

    const { resume, addSkills, addBullet, updateBullet, removeFieldItem, updateSection } = useResume();

    return (
        <>
            {resume.skills.map((skl, index) => (

                <div
                    key={index}
                    className="skills-div">
                    <h3>Skill Title:- </h3>
                    <input
                        placeholder="Front Technologies"
                        value={skl.skillType}
                        onChange={(e) => updateSection(index, "skillType", e.target.value, "skills")}
                    />

                    <h3>Skill Name:- </h3>
                    {skl.skillsList.map((point, indexPoint) => (
                        <div className="bullet"
                            
                        >
                            <input
                            key={indexPoint}
                                placeholder="HTML5, CSS3, JavaScript (ES6+), React.js, Responsive Design, Flexbox, CSS Grid"
                                value={point}
                                onChange={(e) => updateBullet(index, indexPoint, e.target.value,"skills","skillsList")}
                            />
                            <button onClick={() => addBullet(index)}> Add Bullet Points</button>

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
            )

            )

            }



        </>
    );
}

export default SkillsForm;