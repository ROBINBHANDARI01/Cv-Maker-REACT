import { useResume } from '../../context/ResumeContext'
import './experience.css'


function ExperienceForm() {
    const { resume, addExperience, updateExperience } = useResume();

    return (
        <>
            {
                resume.experience.map((exp, index) => (
                    <div key={index} className="experience-box">

                        <h2>Company Name: </h2>
                        <input
                            type="text"
                            placeholder="Enter Company Name"
                            value={exp.companyName}
                            onChange={(e) => updateExperience(index, "companyName", e.target.value)}
                        />

                        <h2>Role :</h2>
                        <input
                            placeholder="Role"
                            value={exp.role}
                            onChange={(e) => updateExperience(index, "role", e.target.value)}
                        />

                        <div className="date">
                            <div>
                                <h2>Start date </h2>
                                <input
                                    type="month"
                                    placeholder="Enter Company Name"
                                    value={exp.start}
                                    onChange={(e) => updateExperience(index, "start", e.target.value)}
                                />
                            </div>

                            <div>
                                <h2>End Date</h2>
                                <input
                                    type="month"
                                    placeholder="Enter Company Name"
                                    value={exp.end}
                                    onChange={(e) => updateExperience(index, "end", e.target.value)}
                                />
                            </div>
                        </div>

                        <h2>Job Description</h2>
                        <input
                            type='text'
                            value={exp.description}
                            onChange={(e) => updateExperience(index,"description", e.target.value)}
                        />
                        

                    </div>
                ))

            }
            < button
                className="add-exp"
                onClick={addExperience}
            > Add New Experience</button >
        </>
    );

}

export default ExperienceForm