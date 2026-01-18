import React from "react";
import "./Toggle.css"


export default function Toggle(props){
    return(
        <div className="toggle-Box" onClick={props.changetheme}>
         
        <div className="toggle-Icon"><i className={props.isDark ?"lni lni-moon-half-right-5":"lni lni-sun-1"}></i></div>

           <span className="toggle-Text">Toggle theme</span>
        
        </div>
    )

}
