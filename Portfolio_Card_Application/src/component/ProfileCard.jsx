import React from "react";
import "./ProfileCard.css";
import Skills from "./Skills";
import Footer from "./Footer";
import ProfileInfo from "./ProfileInfo";
import Toggle from "./Toggle";
import { useState } from "react";

function PortfolioCard() {
  // like state
  const [likes, setLikes] = useState(128);
  const [isliked, setIsliked] = useState(false);

  //page
  const [page, setPage] = useState(1);

  //theme

  const [isdark, setDark] = useState(false);

  // skills
  const skillsArr = [
    "Design System",
    "React",
    "TypeScript",
    "Figma",
    "Prototyping",
    "Accessibility",
  ];

  //images
  const imgArr = [
    "https://i.postimg.cc/NfXVmLvc/image.jpg",
    "https://i.postimg.cc/R0pGjzxn/5fad18d0-03fe-426b-b985-8134eca8a0b6-d7491f3d.jpg",
    "https://i.postimg.cc/mDVd8Gpf/photo-2025-11-27-12-25-42.jpg",
    "https://i.postimg.cc/Jz42gxBw/3.avif",
  ];

  function movepageForward() {
    if (page < 4) {
      setPage(page + 1);
    } else alert("faild to move forward");
  }

  function movepageBackward() {
    if (page > 1) {
      setPage(page - 1);
    } else alert("faild to move backward");
  }

  function handletheme() {
    setDark((prev) => !prev);
  }

  function handlelike() {
    if (isliked) {
      setLikes(likes - 1);
      setIsliked(false);
    } else {
      setLikes(likes + 1);
      setIsliked(true);
    }
  }

  return (
    <div className={isdark ? "dark-theme" : "light-theme"}>
      <Toggle changetheme={handletheme} isDark={isdark} />

      <div className="card">
        <ProfileInfo ProfileImg={imgArr[page - 1]} />
        <Skills skills={skillsArr} />
        <Footer
          likes={likes}
          clickLike={handlelike}
          isliked={isliked}
          isDark={isdark}
          mode={isdark ? "Light" : "Dark"}
          totalPages={4}
          currentPage={page}
          backword={movepageBackward}
          forward={movepageForward}
          changetheme={handletheme}
        />
      </div>
    </div>
  );
}

export default PortfolioCard;
