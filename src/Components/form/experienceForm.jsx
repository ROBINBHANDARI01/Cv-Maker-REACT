import { useResume } from '../../context/ResumeContext'
import './experience.css'


function ExperienceForm() {
    const { resume, addExperience, updateSection, removeFieldItem } = useResume();

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
                            onChange={(e) => updateSection(index, "companyName", e.target.value, "experience")}
                        />

                        <h2>Role :</h2>
                        <input
                            placeholder="Role"
                            value={exp.role}
                            onChange={(e) => updateSection(index, "role", e.target.value, "experience")}
                        />

                        <div className="date">
                            <div>
                                <h2>Start date </h2>
                                <input
                                    type="month"
                                    placeholder="Enter Company Name"
                                    value={exp.start}
                                    onChange={(e) => updateSection(index, "start", e.target.value, "experience")}
                                />
                            </div>

                            <div>
                                <h2>End Date</h2>
                                <input
                                    type="month"
                                    placeholder="Enter Company Name"
                                    value={exp.end}
                                    onChange={(e) => updateSection(index, "end", e.target.value, "experience")}
                                />
                            </div>
                        </div>

                        <h2>Job Description</h2>
                        <input
                            type='text'
                            value={exp.description}
                            onChange={(e) => updateSection(index, "description", e.target.value, "experience")}
                        />



                        <button className='rem-exp'
                            onClick={() =>
                                removeFieldItem({
                                    field: "experience",
                                    index: index
                                })
                            }
                        >
                            Remove Experience
                        </button>
                       
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