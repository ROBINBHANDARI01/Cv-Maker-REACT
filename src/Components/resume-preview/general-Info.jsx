function General_info({candidateName , role,address,mobile,email,contact}){
    return(
        <div className="general-info">
            <div className="candidate-name">
                <h1 style={{fontSize:'45px'}}>{candidateName}</h1>
                <p className="about">
                   {role}
                </p>

            </div>
            <hr/>
            <div className="address">
                <p>{address} | {mobile} | {email}</p>
                <p>{contact}</p>
            </div>
        <hr/>
        </div>
    );
}

export default General_info;