import '../../Style/General.css'
import {useResume} from "../../context/ResumeContext"
function GeneralForm(){
    const {resume, dispatch} = useResume();

    return (
        
        <div className='General-container'>
        
            <h2>General Info Section: </h2>
            <label htmlFor ="firstName"></label><h4>First name: </h4> 
            <input
                type="text"
                name='firstName'
                value={resume.general.firstName}
                onChange={(e) => dispatch({

                    type:"update_Normal_Field",

                    payload:{
                        section:"general",
                        field:"firstName",
                        value:e.target.value
                    }
                })}
                placeholder="Full Name"
            />

            <label htmlFor="lastName"><h4>Last name: </h4> </label>
            <input
                type="text"
                name='lastName'
                value={resume.general.lastName}
                onChange={(e) => dispatch({

                    type:"update_Normal_Field",

                    payload:{
                        section: "general",
                        field: "lastName",
                        value: e.target.value
                    }
                } )}
                placeholder="Full Name"
            />
           
            <label htmlFor="role"><h4>Job Title / Role</h4></label>
            <input
                type="text"
                name='role'
                value={resume.general.role}
                onChange={(e) => dispatch({
                    type:"update_Normal_Field",

                    payload:{
                        section: "general",
                        field: "role",
                        value: e.target.value
                    }
                })}
                placeholder="Role"
            />

            <label htmlFor="address"><h4>Location (City, State, Country)</h4></label>
            <input
            name='address'
                type="text"
                value={resume.general.address}
                placeholder="Enter Your Current Address"  
                onChange={(e) => dispatch({
                    type:"update_Normal_Field",

                    payload:{
                        section: "general",
                        field: "address",
                        value: e.target.value
                    }
                })}
                
            />


            <label htmlFor="mobile"><h4>Phone Number</h4></label>

            <input
            name='mobile'
            placeholder='Mobile Number'
            value={resume.general.mobile}
            onChange={(e)=>dispatch({
                type:"update_Normal_Field",

                    payload:{
                        section: "general",
                        field: "mobile",
                        value: e.target.value
                    }
            })}
            />


            <label htmlFor="email"><h4>Email Address</h4></label>

            <input
            name='email'
            type = "text"
            placeholder="Gmail"
            value={resume.general.email}
            onChange={(e)=> dispatch({
                type:"update_Normal_Field",

                    payload:{
                        section: "general",
                        field: "email",
                        value: e.target.value
                    }
            })}
            />

            <label htmlFor="contace"><h4>Contact Info</h4></label>

            <textarea
            name='contact'
            className='contact'
            value={resume.general.contact}
            placeholder='Contact Info'
            onChange={(e)=> dispatch({
                type:"update_Normal_Field",

                    payload:{
                        section: "general",
                        field: "contact",
                        value: e.target.value
                    }
            })}
            />
            </div>
    );
}

export default GeneralForm;