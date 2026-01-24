import '../../Style/General.css'
import {useResume} from "../../context/ResumeContext"
function GeneralForm(){
    const {resume, updateGeneral} = useResume();

    return (
        <div className='General-container'>
            <h2>General Info Section: </h2>
            <input
                type="text"
                value={resume.general.candidateName}
                onChange={(e) => updateGeneral("candidateName", e.target.value )}
                placeholder="Full Name"
            />

            <input
                type="text"
                value={resume.general.role}
                onChange={(e) => updateGeneral("role",e.target.value )}
                placeholder="Role"
            />

            <input
                type="text"
                value={resume.general.address}
                placeholder="Enter Your Current Address"  
                onChange={(e) => updateGeneral("address",e.target.value )}
                
            />

            <input
            placeholder='Mobile Number'
            value={resume.general.mobile}
            onChange={(e)=>updateGeneral("mobile",e.target.value)}
            />

            <input
            type = "text"
            placeholder="Gmail"
            value={resume.general.email}
            onChange={(e)=> updateGeneral("email",e.target.value)}
            />

            <textarea
            className='contact'
            value={resume.general.contact}
            placeholder='Contact Info'
            onChange={(e)=> updateGeneral("contact",e.target.value)}
            />
            </div>
    );
}

export default GeneralForm;