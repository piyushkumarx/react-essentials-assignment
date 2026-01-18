import React from "react";
import "./Skills.css"

function Skills({skills}){
    return(
        <div className="skills-Box">
            <h3>Skills</h3>
            
            <ul>
                {skills.map((skill, index) => (
          <li key={index} className="skill">
            {skill}
          </li>
        ))}
            </ul>

        </div>



    )
}


export default Skills;