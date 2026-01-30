import { createContext, useContext, useState } from "react";


const ResumeContext = createContext();

export function ResumeProvider({ children }) {

    const [resume, setResume] = useState({
        general: {
            candidateName: "Robin Singh Bhandari",
            role: "FRONTEND DEVELOPER | REACT DEVELOPER | ASPIRING DEVOPS ENGINEER",
            address: "Sarai Faridabad , Haryana , India",
            mobile: "+91 7417629458",
            email: "robinbhandari202@gmail.com",
            contact: "LinkedIn: linkedin.com/in/robin-bhandari-02120428a    |   GitHub: github.com/ROBINBHANDARI01",
        },

        about: {
            aboutYou: "Entry-level Frontend Developer pursuing Full Stack Development with hands-on experience in building responsive web applications using HTML, CSS, JavaScript, and React.Skilled in REST API integration,component- based architecture, and modern UI development.Actively learning backend technologies and MERN stack."
        },

        experience: [
            {
                companyName: "Google",
                role: "Chief Executive Officer",
                start: "",
                end: "",
                description: "I worked as the CEO of google. My job was to tell people to do their work and don't slack off."
            },
        ],

        skills: [
            {
                skillType: "Frontend Developement",
                skillsList:
                    ["HTML5, CSS3, JavaScript (ES6+), React.js, Responsive Design, Flexbox, CSS Grid"]
            }
        ],

        projects: [
            {
                projectName: "Weather Forecast Webpage",
                projectDescription: "This is the first project in which i have used a restAPI",
                additionalDetails: ["Html ,css, js ,restAPI"]
            }
        ],

    });

    //-----Removing current input field-----//

    const removeByIndex = (arr, index) => arr.filter((_, i) => i !== index);

    ///Universal removeFeildItem function 

    const removeFieldItem = ({
        field,
        index,      //index of parent item
        nestedField,
        nestedIndex     //index inside nested array 
    }) => {
        setResume(prev => ({
            ...prev,
            [field]: prev[field].map((item, i) => {
                if (i !== index) return item;

                //remove nested item

                if (nestedField !== undefined) {
                    return {
                        ...item,
                        [nestedField]: removeByIndex(
                            item[nestedField],
                            nestedIndex
                        )
                    };
                }

                //remove top-level item

                return null;
            }).filter(Boolean)
        }))
    }




    //------Universal function to update normal input like "general" and "about" 

    const updateNormal = (field, value, section) => {
        setResume(prev => ({
            ...prev, [section]: {
                ...prev[section],
                [field]: value
            },
        }))
    };

    //-----Experience-----//

    // Fucntion to convert the date to month/year format 

    const formatMonthYear = (value) => {
    if (!value) return "";

    const [year, month] = value.split("-");
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return `${months[Number(month) - 1]} ${year}`;
};


    //Function to add multiple experience forms on button click 
    const addExperience = () => [
        setResume(prev => ({
            ...prev,
            experience: [
                ...prev.experience,
                {
                    companyName: "",
                    role: "",
                    start: "",
                    end: "",
                    description: ""
                }
            ]
        }))
    ]

    //-----Skills-----//

    //Universal Function to update the section like Skill , Project 

    const updateSection = (index, field, value, section) => {
        setResume(prev => {
            const updated = [...prev[section]];
            updated[index] = { ...updated[index], [field]: value };
            return { ...prev, [section]: updated }

        })
    }

    //Function to add multiple skill input forms 

    const addSkills = () => {
        setResume(prev => ({
            ...prev,
            skills:
                [...resume.skills,
                {
                    skillType: "",
                    skillsList: [""]
                }
                ]
        }))
    }

    //Function to add multiple project input form

    const addProject=()=>{
        setResume(prev =>({
            ...prev,
            projects:
                [...resume.projects,
                {
                projectName: "",
                projectDescription: "",
                additionalDetails: [""]
            }
            ]
            
        }))
        
    }

    //Function to add bulletpoints in skills

    const addBullet = (index) => {
        setResume(prev => {
            const skills = [...prev.skills];
            skills[index] = {
                ...skills[index],
                skillsList: [
                    ...skills[index].skillsList,
                    ""
                ]
            };

            return { ...prev, skills };
        })
    }

    //Universal function states of bullet point inputs 
    
    const updateBullet=(itemIndex, bulletIndex , value , section, field)=>{
                setResume(prev => {
            const sectionArray = [...prev[section]];
            const item = {...sectionArray[itemIndex]};
            const bulletList =[...item[field]];

            bulletList[bulletIndex] = value;
            item[field] = bulletList;
            sectionArray[itemIndex] = item;

            return{
                ...prev,
                [section]: sectionArray
            };
        });
    };


    return (
        <ResumeContext.Provider value={{ resume, updateNormal,updateBullet, formatMonthYear,addExperience, addSkills, addBullet, updateSection, removeFieldItem, addProject}}>
            {children}
        </ResumeContext.Provider>
    );


}
export function useResume() {
    return useContext(ResumeContext)

}