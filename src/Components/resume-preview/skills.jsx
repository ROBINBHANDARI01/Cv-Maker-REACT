function Skills({skill}){
    return(
        <div className="skills-div">
            <h2>Skills</h2>
            <hr/>
            <h3>{skill}</h3>
            <ul>
                <li>HTML5, CSS3, JavaScript (ES6+), React.js, Responsive Design, Flexbox, CSS Grid</li>
                <li>Backend (Learning / Beginner)</li>
                <li>Node.js, Express.js, REST APIs</li>
                <li><h3>Database</h3></li>
                <li>MongoDB, MySQL</li>
                <li><h3>Tools & Platforms</h3></li>
                <li>Git,GitHub,VsCode</li>
            </ul>

        </div>
    );
}
export default Skills;