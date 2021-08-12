import axios from 'axios';
import React, { useEffect, useState } from 'react'

const About = () => {
  const [mains, setMain] = useState([]);
  const fetchData = async () => {
    const response = await axios.get("http://localhost:3010/main");
    setMain(response.data);
    console.log(response.data.name)
  }
useEffect(() => {
  fetchData();
}, [])
  return (
    
    <div>
      {mains.map((main) => (
        <section key={main.name} id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src="https://scontent.fktm3-1.fna.fbcdn.net/v/t1.6435-9/72649862_564224424326054_895375504394158080_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=GUV4lHa_kGcAX_4Yzz1&_nc_ht=scontent.fktm3-1.fna&oh=626f710393e5e7960a1bf38512c872c8&oe=612738C9"
              alt="Tim Baker Profile Pic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{main.bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{main.name}</span>
                  <br />
                  <span>
                    {main.street}
                    <br />
                    {main.city} {main.state}, {main.zip}
                  </span>
                  <br />
                  <span>{main.phone}</span>
                  <br />
                  <span>{main.email}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href={main.resumeDownload} className="button">
                    <i className="fa fa-download"></i>Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      )
        
       )} 
       
    
    </div>
  )
}

export default About
