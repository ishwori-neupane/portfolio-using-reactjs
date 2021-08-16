import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Resume = () => {
  // var className = "bar-expand " + skills.name.toLowerCase();
  const [educations, setEducation] = useState([]);
  const [works, setWorks] = useState([]);
  const [skills, setSkills] = useState([]);

  const fetchEducation = async() => {
    const response = await axios.get("http://localhost:3010/education");
    setEducation(response.data);
  }

  const fetchWork = async() => {
    const response = await axios.get("http://localhost:3010/work");
    setWorks(response.data);
  }

const fetchSkills = async() => {
    const response = await axios.get("http://localhost:3010/skills");
    setSkills(response.data);
  }
  useEffect(() => {
    fetchEducation();
    fetchSkills();
    fetchWork();
  }, [])

  return (
    <div>
       <section id="resume">
         <div className="row education">
           <div className="three columns header-col">
             <h1>
               <span>Education</span>
             </h1>
           </div>

           <div className="nine columns main-col">
             <div className="row item">
              <div className="twelve columns">
                {educations.map((education) => (
                  <div key={education.school}>
                    <h3>{education.school}</h3>
                    <p className="info">
                      {education.degree} <span>&bull;</span>
                      <em className="date">{education.graduated}</em>
                    </p>
                    <p>{education.description}</p>
                  </div>
                ))}
              
              </div>
             </div>
           </div>
         </div>

         <div className="row work">
           <div className="three columns header-col">
             <h1>
               <span>Work</span>
             </h1>
           </div>
          <div className="nine columns main-col">
            {works.map((work) => (
              <div key={work.company}>
                <h3>{work.company}</h3>
                <p className="info">
                  {work.title}
                  <span>&bull;</span> <em className="date">{work.years}</em>
                </p>
                <p>{work.description}</p>
              </div>
            ))}
              
          </div>
         </div>

         <div className="row skill">
           <div className="three columns header-col">
             <h1>
               <span>Skills</span>
             </h1>
           </div>

           <div className="nine columns main-col">
             <p>You can see my skill details below.</p>

             <div className="bars">
              <ul className="skills">
                {skills.map((skill) => (
                  <li key={skill.name}>
                <span style={{ width: skill.level }} className={`bar-expand  + ${skill.name}`}></span>
                <em>{skill.name}</em>
               </li>
                ))}
                
               </ul>
             </div>
           </div>
         </div>
       </section>
    </div>
  )
}

export default Resume
