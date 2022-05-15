import React from 'react'
import profileImage from "../../assets/profile/profile.jpg"

function About() {

  return (
    <section className="my-5" >
      <h1 id="about" className='"content is-medium'>Full Stack Developer and Solutions Architect</h1>
      <img src={profileImage} className="my-pic" style={{ width: "20%" }} alt="cover" />
      <div className="my-2">
        <p className="content">
            Hello my name is Courtez Cannady. I am a Full Stack Developer with Experience in 
            systems engineering and design patterns. After serving in the U.S. Marine Corps I
            went on to earn a bachelors degree in I.T. Management, AWS Certifications such as 
            Certified Solutions Architect and Certified Cloud Practitioner and also hold the
            ITIL v4 Foundation. Currently I work as a Sr. Systems Engineer primarily in the realm
            of model based engineering. I am hoping to move into a Solutions Architect/Software 
            engineering role. I am passionate about learning new technologies and applying them where
            I can.
        </p>
      </div>
    </section>
  )
}

export default About;