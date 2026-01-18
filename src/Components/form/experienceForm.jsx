import { useState } from "react";
import './experience.css'
function ExperienceForm({ data, setData }) {

    const [experiences, setExperiences] = useState([])

    //Adding a new object in the "experiences" array on button click

    function addExperiences() {
        setExperiences(prev => [...prev, {
            companyName: "",
            role: "",
            start: "",
            end: "",
            description: ""
        }])

        console.log(experiences)
    }

    function takeInput(index, feild, value) {
        const updated = [...experiences];
        updated[index] = { ...updated, [feild]: value }
        setExperiences(updated)
        console.log(...experiences)
        console.log(experiences.length)
    }

    return (
        <>
            {
                experiences.map((exp, index) => (
                    <div key={index} className="experience-box">
                        
                            <h2>Company Name: </h2>
                            <input
                                type="text"
                                placeholder="Enter Company Name"
                                value={exp.companyName}
                                onChange={(e) => takeInput(index, "companyName", e.target.value)}
                            />

                        
                        <div className="date">
                            <div>
                            <h2>Start date </h2>
                            <input
                                type="date"
                                placeholder="Enter Company Name"
                                value={exp.companyName}
                                onChange={(e) => takeInput(index, "companyName", e.target.value)}
                            />
                            </div>

                            <div>
                            <h2>End Date</h2>
                            <input
                                type="date"
                                placeholder="Enter Company Name"
                                value={exp.companyName}
                                onChange={(e) => takeInput(index, "companyName", e.target.value)}
                            /></div>
                        </div>
                    </div>
                ))

            }
            < button
                className="add-exp"
                onClick={addExperiences}
            > Add New Experience</button >


        </>
    );

}

export default ExperienceForm