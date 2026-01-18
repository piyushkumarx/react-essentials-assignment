import "./Footer.css";
import React from "react";

function Footer(props) {
  return (

    
    <div className="footer-Line">
      <div className="dark-Mode cursor" onClick={props.changetheme}>



        <span className="light-Moon">
          <i
            className={`fa-regular ${
              props.isDark ? "fa-sun" : "fa-moon"
            } fa-lg`}
            style={{ color: props.isDark ? "#ffffff" : "#1e2229" }}
          ></i>
        </span>

        <span className="dark-Text">{props.mode}</span>
      </div>

      <div className="left-Right ">
        <span className="cursor">
          <i onClick={props.backword}
            className="fa-solid fa-angle-right fa-flip-horizontal fa-lg"
            style={{ color: props.isDark ? "#ffffff" : "#000000"  }}
          ></i>
        </span>
        <span className="cursor">
          <i onClick={props.forward}
            className="fa-solid fa-angle-right fa-lg"
            style={{ color: props.isDark ? "#ffffff" : "#000000"  }}
          ></i>
        </span>
      </div>

      <div>
        <span className="open-Page">
          {props.currentPage} / {props.totalPages}
        </span>
      </div>

      <div className="like-Box">
        <span className="like-Icon cursor">
          <i
            onClick={props.clickLike}
            className={
              props.isliked
                ? "fa-solid fa-heart fa-lg"
                : "fa-regular fa-heart fa-lg"
            }
            style={{ color: props.isliked ? "#ff0000" : props.isDark? "#ffffff" : "#000000" }}
          ></i>
        </span>
        <span className="like-Count">{props.likes}</span>
      </div>

      <div className="contact-Box cursor" onClick={()=>alert("Thanks for Contact")}>
        <span className="contact-Icon">
          <i
            className="fa-regular fa-envelope fa-lg"
            style={{ color: "#D3DFFB" }}
          ></i>
        </span>
        <span className="contact-Text">Contact</span>
      </div>
    </div>
  );
}

export default Footer;


