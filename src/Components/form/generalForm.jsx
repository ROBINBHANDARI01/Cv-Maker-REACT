import './General.css'
function GeneralForm({ data, setData }) {
    return (
        <div>
            
            <input
                type="text"
                value={data.candidateName}
                onChange={(e) => setData({ ...data, candidateName: e.target.value })}
                placeholder="Full Name"
            />

            <input
                type="text"
                value={data.role}
                onChange={(e) => setData({ ...data, role: e.target.value })}
                placeholder="Role"
            />

            <input
                type="text"
                value={data.address}
                onChange={(e) => setData({ ...data, address: e.target.value })}
                placeholder="Enter Your Current Address"
            />

            <input
            type='number'
            placeholder='Mobile Number'
            value={data.mobile}
            onChange={(e)=>setData({...data,mobile:e.target.value})}
            />

            <textarea
            value={data.contact}
            placeholder='Contact Info'
            onChange={(e)=> setData({...data,contact:e.target.value})}
            />
            </div>
    );
}

export default GeneralForm;