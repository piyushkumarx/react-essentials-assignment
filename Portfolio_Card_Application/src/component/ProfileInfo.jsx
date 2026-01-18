import React from "react";
import "./ProfileInfo.css"


function ProfileInfo(info){
    return (

        <div className="info-box">
            <div className="profile-Top">
                <div>
                    <img src= {info.ProfileImg} alt="" />
                </div>
                <div className="profile-Name">
                    <h1>TuteDude</h1>
                    <h2>Product Designer & Frontend Engineer</h2>
                </div>
            </div>

        <div className="profile-Bio">
            <p>I design and build calm, focused product experiences for fast-moving teams. Currently exploring Al-assisted interfaces, design systems, and high-performance Ul engineering.</p>
        </div>

        </div>
    
    
    )
}



export default ProfileInfo;