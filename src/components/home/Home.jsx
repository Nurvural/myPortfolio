import React from 'react'
import "./Home.css"
import Me from "../../assets/img0.png"
function Home (){
  return (
  <>
  <section className='home container' id='home'>
    <div className='intro'>
    <img src={Me} alt="" className='home_img'/>
       <h1 className='home_name' style={{fontSize:'50px'}}>
         Nur Vural
       </h1>
       <span className='home_education' style={{fontSize: '20px'}}> I'am a Software Developer</span>
    </div>

<div className='home_socials'>
   <a href="" className='home_social-link' target='_blank'><i className="fab fa-instagram"></i></a>
   <a href="" className='home_social-link' target='_blank'><i className="fab fa-linkedin"></i></a>
   <a href="" className='home_social-link' target='_blank'><i className="fab fa-twitter"></i></a>
</div>



  </section>
  </>
  )
}

export default Home