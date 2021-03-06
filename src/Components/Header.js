import axios from 'axios';
import "./Header.css";
import React, { useEffect, useState } from 'react'

const Header = () => {
  const [headers, setHeaders] = useState([]);
  const [socials, setSocials] = useState([]);
  const fetchData = async() => {
    const response = await axios.get("http://localhost:3010/main");
    setHeaders(response.data);
  }
  const fetchSocial= async() => {
    const response = await axios.get("http://localhost:3010/social");
    console.log(response.data.url)
    setSocials(response.data);
  }
  useEffect(() => {
    fetchData();
    fetchSocial();
  }, [])
  return (
  <div>
      
      <header id="home">
        <nav id="nav-wrap">
           <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
             Show navigation
           </a>
           <a className="mobile-btn" href="#home" title="Hide navigation">
             Hide navigation
           </a>

           <ul id="nav" className="nav">
             <li className="current">
               <a className="smoothscroll" href="#home">
                 Home
               </a>
             </li>
             <li>
               <a className="smoothscroll" href="#about">
                 About
               </a>
             </li>
             <li>
               <a className="smoothscroll" href="#resume">
                 Resume
               </a>
             </li>
             <li>
               <a className="smoothscroll" href="#portfolio">
                 Works
               </a>
             </li>
             <li>
               <a className="smoothscroll" href="#testimonials">
                 Testimonials
               </a>
             </li>
             <li>
               <a className="smoothscroll" href="#contact">
                 Contact
               </a>
             </li>
           </ul>
         </nav>

         <div className="row banner">
          <div className="banner-text">
            {headers.map((header) => (
              <div>
                <h1 className="responsive-headline">I'm {header.name}.</h1>
                <h3>
                  I'm a {header.city} based <span>{header.occupation}</span>. {header.description}.
                </h3>
              </div>
            ))}
            <hr />
             <ul  className="social">
              {socials.map((social) =>(
                  <li key={social.name}>
                    <a href={social.url}>
                      <i className={social.className}></i>
                    </a>
                  </li>
              ))}
              </ul>
            </div>
         </div>

         <p className="scrolldown">
           <a className="smoothscroll" href="#about">
             <i className="icon-down-circle"></i>
           </a>
         </p>
     </header>
      
     </div>
  )
}

export default Header
