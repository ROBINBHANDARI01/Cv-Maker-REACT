import { useResume } from "../../context/ResumeContext";
import './experience.css'
function SkillsForm() {

    const { resume, addSkills, updateSkills, addBullet, updateSkillPoint } = useResume();

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
                        onChange={(e) => updateSkills(index, "skillType", e.target.value)}
                    />

                    <h3>Skill Name:- </h3>
                    {skl.skillsList.map((point, indexPoint) => (
                        <div className="bullet"
                            key={indexPoint}
                        >
                            <input
                                placeholder="HTML5, CSS3, JavaScript (ES6+), React.js, Responsive Design, Flexbox, CSS Grid"
                                value={point}
                                onChange={(e) => updateSkillPoint(index, indexPoint, e.target.value)}
                            />
                            <button onClick={() => addBullet(index)}> Add Bullet Points</button>
                
                        </div>
                    ))}

                </div>
            ))

            }
            <button
                className="add-exp"
                onClick={addSkills}
            >Add more skill</button>
        </>
    );
}

export default SkillsForm;