function Education({educationType,educationDuration,educationSource}){
    return(
        <div className="education-div">
            <h2>Education</h2>
            <hr/>
                <h3>{educationType}</h3>
            <h3>{educationDuration}</h3>
            <p>{educationSource}</p>
        </div>
    );
}

export default Education;