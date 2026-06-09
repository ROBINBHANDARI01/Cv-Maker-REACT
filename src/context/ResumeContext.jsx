import { act, createContext, useContext, useReducer } from "react";


const ResumeContext = createContext();

function getSaveState(initialState){
    try{
        const saved = localStorage.getItem('resume_draft');
        return saved ? JSON.parse(saved) : initialState;
    }catch{
        return initialState;
    }
}
export function ResumeProvider({ children }) {

    const initialState={
        templateId: 1,
        general: {
            firstName: "Robin Singh",
            lastName:"Bhandari",
            role: "FRONTEND DEVELOPER | REACT DEVELOPER | ASPIRING DEVOPS ENGINEER",
            address: "Sarai Faridabad , Haryana , India",
            mobile: "+91 7417629458",
            email: "robinbhandari202@gmail.com",
            github: "github.com/ROBINBHANDARI01",
            linkedIn:"linkedin.com/in/robin-bhandari-02120428a"
        },

        about: {
            aboutYou: "Entry-level Frontend Developer pursuing Full Stack Development with hands-on experience in building responsive web applications using HTML, CSS, JavaScript, and React.Skilled in REST API integration,component- based architecture, and modern UI development.Actively learning backend technologies and MERN stack."
        },

        experience: [
            {
                companyName: "Isro",
                role: "Satellite Data Processing",
                start: "2020/02",
                end: "",
                description: " Developing algorithms and software to decode, analyze, and manage the vast amounts of telemetry data and imagery beamed back from space. Just kidding this is juts a dummy placeholder i wish though."
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
                projectName: "CV Maker Web Application",
                projectDescription: "This is the first project in which i have used a restAPI",
                additionalDetails: ["React, Vite, Context API, React Router"],
                liveUrl: "cv-maker-react-vert.vercel.app",
                githubUrl: "https://github.com/ROBINBHANDARI01/Cv-Maker-REACT",
            }
        ],

        education:[
            {
                educationPlace:"Graphic Era Hill University",
                educationTitle:"Bachlor's in Computer Application",
                educationStart:"2022/04",
                educationEnd:"2025/04"
            }
        ],

    }

    function resumeReducer(state, action){
        switch(action.type){

            //----- Template 
            case "set_Template":
                return{
                    ...state,
                    templateId: action.payload
                }

            //---- Update simple field

            case "update_Normal_Field":
                return{
                    ...state, 
                    [action.payload.section]: {
                ...state[action.payload.section],
                [action.payload.field]: action.payload.value
            },
                }

            //---- Update objects inside array

            case "update_Array_Item":
                return {
                    ...state,
                    [action.section]: state[action.section].map((item,i)=>
                        i === action.index ? {...item, [action.field]: action.value} : item
                    )
                }

            //---- Update nested array (skillList, additionalDetails)
            case "update_Nested_Array":
                return{
                ...state,
                [action.section]: state[action.section].map((item,i)=>
                    i === action.index ? {
                        ...item,
                        [action.field]: item[action.field].map((val,j)=>
                        j === action.subIndex ? action.value : val
                        )
                    }
                    :item
                )
            };

            //--- Adding new whole input fields 
            case "add_Item":
                return{
                    ...state,
                    [action.section]:[
                        ...state[action.section],
                        action.newItem
                    ]
                }

            //----Removing input fields
            case "remove_Item":
                return{
                    ...state,
                    [action.section]: state[action.section].filter(
                        (_, index)=> index !== action.index
                    )

                };

            //---- Adding bullet points 
            case "add_Bullet":
                return{
                    ...state,
                    [action.section]: state[action.section].map((item,i)=>
                    i === action.index ? {
                        ...item,
                        [action.field]: [
                            ...item[action.field],
                            ""
                        ]
                    }
                    : item
                    )
                }

            //---- Removing bullet points
            case "remove_Bullet":
                return{
                    ...state,
                    [action.section]: state[action.section].map((item,i)=>
                    i === action.index ? {
                        ...item,
                        [action.field]: item[action.field].filter((_,j) => j !== action.subIndex)
                    }
                    :item
                    )
                }

            default :
               return state;

        }
    }

    const [resume, dispatch] = useReducer(resumeReducer,getSaveState(initialState));

    

    return (
        <ResumeContext.Provider value={{ resume, dispatch}}>
            {children}
        </ResumeContext.Provider>
    );


}
export function useResume() {
    return useContext(ResumeContext)

}