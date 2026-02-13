import '../../Style/General.css'
import {useResume} from "../../context/ResumeContext"
function GeneralForm(){
    const {resume, updateNormal} = useResume();

    return (
        
        <div className='General-container'>
        
            <h2>General Info Section: </h2>
            <lable for="firstName"><h4>First name: </h4> </lable>
            <input
                type="text"
                name='firstName'
                value={resume.general.firstName}
                onChange={(e) => updateNormal("firstName", e.target.value, "general" )}
                placeholder="Full Name"
            />

            <lable for="lastName"><h4>Last name: </h4> </lable>
            <input
                type="text"
                name='lastName'
                value={resume.general.lastName}
                onChange={(e) => updateNormal("lastName", e.target.value, "general" )}
                placeholder="Full Name"
            />
           
            <lable for="role"><h4>Job Title / Role</h4></lable>
            <input
                type="text"
                name='role'
                value={resume.general.role}
                onChange={(e) => updateNormal("role",e.target.value, "general" )}
                placeholder="Role"
            />

            <label for="address"><h4>Location (City, State, Country)</h4></label>
            <input
            name='address'
                type="text"
                value={resume.general.address}
                placeholder="Enter Your Current Address"  
                onChange={(e) => updateNormal("address",e.target.value, "general" )}
                
            />


            <lable for="mobile"><h4>Phone Number</h4></lable>

            <input
            name='mobile'
            placeholder='Mobile Number'
            value={resume.general.mobile}
            onChange={(e)=>updateNormal("mobile",e.target.value, "general")}
            />


            <lable for="email"><h4>Email Address</h4></lable>

            <input
            name='email'
            type = "text"
            placeholder="Gmail"
            value={resume.general.email}
            onChange={(e)=> updateNormal("email",e.target.value, "general")}
            />

            <lable for="contace"><h4>Contact Info</h4></lable>

            <textarea
            name='contact'
            className='contact'
            value={resume.general.contact}
            placeholder='Contact Info'
            onChange={(e)=> updateNormal("contact",e.target.value, "general")}
            />
            </div>
    );
}

export default GeneralForm;