import { act, createContext, useContext, useReducer } from "react";


const ResumeContext = createContext();
export function ResumeProvider({ children }) {

    const initialState={
        general: {
            firstName: "Robin Singh",
            lastName:"Bhandari",
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
                companyName: "xyz Company",
                role: "Xyz",
                start: "",
                end: "",
                description: "The description about your job."
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

        education:[
            {
                educationPlace:"",
                educationTitle:"",
                educationStart:"",
                educationEnd:""
            }
        ],

    }

    function resumeReducer(state, action){
        switch(action.type){

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

    const [resume, dispatch] = useReducer(resumeReducer,initialState);

    

    return (
        <ResumeContext.Provider value={{ resume, dispatch}}>
            {children}
        </ResumeContext.Provider>
    );


}
export function useResume() {
    return useContext(ResumeContext)

}