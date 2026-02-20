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
                    };}
                    
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

    const addProject = () => {
        setResume(prev => ({
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

    //Universal funciton to add bulletpoints 
    const addUniBullet = (sectionKey, index, listKey) => {
  setResume(prev => {
    const section = [...prev[sectionKey]];

    section[index] = {
      ...section[index],
      [listKey]: [
        ...(section[index][listKey] || []),
        ""
      ]
    };

    return {
      ...prev,
      [sectionKey]: section
    };
  });
};

    //Universal function to update states of bullet point inputs 

    const updateBullet = (itemIndex, bulletIndex, value, section, field) => {
        setResume(prev => {
            const sectionArray = [...prev[section]];
            const item = { ...sectionArray[itemIndex] };
            const bulletList = [...item[field]];

            bulletList[bulletIndex] = value;
            item[field] = bulletList;
            sectionArray[itemIndex] = item;

            return {
                ...prev,
                [section]: sectionArray
            };
        });
    };


    //-----Education-------//

    //Function to add education section 
     const addEducation = () => [
        setResume(prev => ({
            ...prev,
            education: [
                ...prev.education,
                {
                    educationPlace:"",
                    educationTitle:"",
                    educationStart:"",
                    educationEnd:""
                }
            ]
        }))
    ]

    //Debuggig function

    const log = ()=>{
        console.log("Entire component rerendred")
    }