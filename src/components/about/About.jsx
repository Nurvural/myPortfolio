import React from 'react'
import "./About.css"
import Image from "../../assets/img8.jpg"
// <img src={Image} alt="" className='about_img'/>
function About(){
  return (
    <>
    <section className='about container section' id='about'>
      <h2 className='section_title'>About Me</h2>
           <div className='about_container grid'>
           <img src={Image} alt="" className='about_img'/>
              <div className="about_data grid">
                <div className="about_info">
                  <p className='about_description'> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Et aut excepturi velit ipsam atque incidunt necessitatibus, neque, numquam, 
                  optio dolor asperiores deserunt in nesciunt similique non facilis voluptates cumque suscipit.
                  lo
                  </p>
                  <a href="" className='btn'> CV</a>
                </div>
              </div>
           </div>
    </section>
    </> 
  )
}

export default About