import '../../Style/General.css'
import {useResume} from "../../context/ResumeContext"
function GeneralForm(){
    const {resume, updateNormal} = useResume();

    return (
        <div className='General-container'>
            <h2>General Info Section: </h2>
            <input
                type="text"
                value={resume.general.candidateName}
                onChange={(e) => updateNormal("candidateName", e.target.value, "general" )}
                placeholder="Full Name"
            />

            <input
                type="text"
                value={resume.general.role}
                onChange={(e) => updateNormal("role",e.target.value, "general" )}
                placeholder="Role"
            />

            <input
                type="text"
                value={resume.general.address}
                placeholder="Enter Your Current Address"  
                onChange={(e) => updateNormal("address",e.target.value, "general" )}
                
            />

            <input
            placeholder='Mobile Number'
            value={resume.general.mobile}
            onChange={(e)=>updateNormal("mobile",e.target.value, "general")}
            />

            <input
            type = "text"
            placeholder="Gmail"
            value={resume.general.email}
            onChange={(e)=> updateNormal("email",e.target.value, "general")}
            />

            <textarea
            className='contact'
            value={resume.general.contact}
            placeholder='Contact Info'
            onChange={(e)=> updateNormal("contact",e.target.value, "general")}
            />
            </div>
    );
}

export default GeneralForm;