import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Footer = () => {
  const [socials, setSocials] = useState([]);
  const fetchSocial= async() => {
    const response = await axios.get("http://localhost:3010/social");
    console.log(response.data.url)
    setSocials(response.data);
  }
  useEffect(() => {
    fetchSocial();
  }, [])
  return (
    <div>
      <footer>
         <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
            {socials.map((network) => (
                <li key={network.name}>
                  <a href={network.url}>
                    <i className={network.className}></i>
                  </a>
                </li>
            ))}
            </ul>

             <ul>
               <li>Modified with love by the Clever Programmer team <span role="img">♥️</span></li>
             </ul>

             <ul className="copyright">
               <li>
                 &copy; All credit goes to Tim Baker - Copyright 2017 Tim Baker
               </li>
               <li>
                 Design by{" "}
                 <a title="Styleshout" href="http://www.styleshout.com/">
                   Styleshout
                 </a>
               </li>
             </ul>
           </div>
           <div id="go-top">
             <a className="smoothscroll" title="Back to Top" href="#home">
               <i className="icon-up-open"></i>
             </a>
           </div>
         </div>
       </footer>
    </div>
  )
}

export default Footer
