function Experience({experienceTitle , aboutExp}){
    return(
        <div className="experience-div">
            <h2>Experience</h2>
            <hr/>
            <h3 className="exp-title">{experienceTitle}</h3>
            <p>{aboutExp}</p>
        </div>
    );
}

export default Experience;