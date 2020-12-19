//this is About Page
import React from "react";
import Coreteam from "./Coreteam";
import arraylist from "./Arraydata";
import arraylist1 from "./Arraydata1";

const About = () => {
  return (
    <>

      {/* <About/> */}

      <div className="upper_div">

        {/* Our Team arraymap */}
        <h1 className="hedding"> Our Team</h1>
        <p className="team_content">We at Parva are going to build the biggest Indian media-tech company which caters to empowering community entrepreneurs.Team Parva is a cacophony of diverse humans with vibrant personalities, who are based all across the globe</p>
      </div>

      <div className="wrapper-grid">  {arraylist.map((value) => {
        return (
          <Coreteam
            key={value.id}
            img={value.imgsrc}
            Name={value.name}
            About={value.about}
          // Icon={value.icon}
          // Href={value.href}
          // Target={value.target}
          // Rel={value.rel}
          />
        );
      })
      }</div>

      <hr/>
      {/* Our Advisor array map */}
      <h1 className="hedding upper_div"> Our Advisor</h1>
      <div className="wrapper-grid">  {arraylist1.map((value) => {
        return (
          <Coreteam
            key={value.id}
            img={value.imgsrc}
            Name={value.name}
            About={value.about}
          // Icon={value.icon}
          // Href={value.href}
          // Target={value.target}
          // Rel={value.rel}
          />
        );
      })
      }</div>

    </>
  );
}
export default About;