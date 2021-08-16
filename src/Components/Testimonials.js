import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const fetchData = async () => {
    const response = await axios.get("http://localhost:3010/testimonials");
    setTestimonials(response.data);
  }
  useEffect(() => {
    fetchData();
  }, [])
  return (
    <div>
      <section id="testimonials">
         <div className="text-container">
           <div className="row">
             <div className="two columns header-col">
               <h1>
                 <span>Client Testimonials</span>
               </h1>
             </div>

             <div className="ten columns flex-container">
              <ul className="slides">
                {testimonials.map((testimonial) => (
                  <li key={testimonial.user}>
                    <blockquote>
                      <p>{testimonial.text}</p>
                      <cite>{testimonial.user}</cite>
                    </blockquote>
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

export default Testimonials
